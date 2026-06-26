import type { KidId, LearningCard, Lesson } from '../types/content';
import { getSupabase, isSupabaseConfigured } from './supabase';

export interface CloudTask {
  label: string;
  hint?: string;
  example?: string;
  answer?: string;
}

export interface CloudHomeworkRow {
  id: string;
  task_date: string;
  kid: KidId;
  subject: string;
  title: string;
  image_url: string | null;
  tasks: CloudTask[];
  created_at?: string;
}

const BUCKET = 'homework';

function formatDate(iso: string): string {
  const d = new Date(iso + (iso.includes('T') ? '' : 'T12:00:00'));
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function cloudRowToLesson(row: CloudHomeworkRow): Lesson {
  const lessonId = `cloud-${row.id}`;
  const dateLabel = formatDate(row.task_date);
  const peekId = `${lessonId}-peek`;

  const checklist = row.tasks.length > 0
    ? row.tasks.map((t, i) => ({
        id: `${lessonId}-t${i}`,
        label: t.label,
        hint: t.hint,
        example: t.example,
        ...(t.answer ? { peekLink: { cardId: peekId, label: 'Parent answer →' } } : {}),
      }))
    : [
        {
          id: `${lessonId}-t0`,
          label: 'Look at the photo and do the work',
          hint: 'Read the page on the TV — tap the image to zoom. Write answers in your book.',
        },
      ];

  const cards: LearningCard[] = [
    {
      id: `${lessonId}-0`,
      lessonId,
      title: row.title,
      subtitle: dateLabel,
      imageUrl: row.image_url ?? undefined,
      englishContent: `Homework for **${dateLabel}**.\n\nTry each task on paper first. Use hints. Peek only if stuck.`,
      promptText: 'Ready to start?',
      interactionType: 'tap-reveal',
      revealAnswer: 'Tick each task when done on paper!',
    },
    {
      id: `${lessonId}-1`,
      lessonId,
      title: row.title,
      subtitle: dateLabel,
      imageUrl: row.image_url ?? undefined,
      englishContent: 'Work through each item. Write answers in your notebook or book.',
      promptText: 'Tick when each task is done.',
      interactionType: 'checklist',
      checklist,
    },
  ];

  const answerBlock = row.tasks
    .filter((t) => t.answer)
    .map((t) => `${t.label}: ${t.answer}`)
    .join('\n');

  if (answerBlock) {
    cards.push({
      id: peekId,
      lessonId,
      title: 'Peek — answers',
      subtitle: 'Parent / stuck only',
      englishContent: 'Compare with what you wrote — do not copy.',
      promptText: 'Tap to see answers.',
      interactionType: 'tap-reveal',
      revealAnswer: answerBlock,
    });
  }

  return {
    id: lessonId,
    title: `${row.title} · ${dateLabel}`,
    subtitle: row.subject,
    kid: row.kid,
    subject: 'homework',
    chapter: 'Cloud',
    hasTelugu: false,
    icon: '📝',
    cards,
  };
}

export async function fetchCloudHomework(): Promise<Lesson[]> {
  if (!isSupabaseConfigured) return [];
  const sb = getSupabase();
  if (!sb) return [];

  const { data, error } = await sb
    .from('homework')
    .select('*')
    .order('task_date', { ascending: false });

  if (error || !data) {
    console.warn('[homework] fetch failed', error?.message);
    return [];
  }

  return (data as CloudHomeworkRow[]).map(cloudRowToLesson);
}

export interface UploadHomeworkInput {
  taskDate: string;
  kid: KidId;
  subject: string;
  title: string;
  imageFile?: File;
  tasks: CloudTask[];
}

export async function uploadHomework(input: UploadHomeworkInput): Promise<{ ok: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { ok: false, error: 'Cloud not connected. Add Supabase keys on Vercel — see docs/SUPABASE-SETUP.md' };
  }
  if (!input.imageFile) {
    return { ok: false, error: 'Please choose a photo to upload.' };
  }
  const sb = getSupabase();
  if (!sb) return { ok: false, error: 'Supabase client unavailable' };

  let imageUrl: string | null = null;

  if (input.imageFile) {
    const ext = input.imageFile.name.split('.').pop() ?? 'jpg';
    const path = `${input.taskDate}/${Date.now()}.${ext}`;
    const { error: upErr } = await sb.storage.from(BUCKET).upload(path, input.imageFile, {
      upsert: false,
      contentType: input.imageFile.type,
    });
    if (upErr) return { ok: false, error: upErr.message };
    const { data: pub } = sb.storage.from(BUCKET).getPublicUrl(path);
    imageUrl = pub.publicUrl;
  }

  const { error } = await sb.from('homework').insert({
    task_date: input.taskDate,
    kid: input.kid,
    subject: input.subject,
    title: input.title,
    image_url: imageUrl,
    tasks: input.tasks,
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

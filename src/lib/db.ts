import type { Lesson, LearningCard } from '../types/content';
import type {
  ChildRow,
  SubjectRow,
  SyllabusItemRow,
  LessonRow,
  HomeworkRow,
  HomeworkTask,
  BoardType,
} from '../types/db';
import { getSupabase } from './supabase';

function sb() {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');
  return client;
}

export async function fetchChildren(): Promise<ChildRow[]> {
  const { data, error } = await sb()
    .from('children')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []) as ChildRow[];
}

export async function createChild(input: {
  name: string;
  grade: string;
  board: BoardType;
}): Promise<ChildRow> {
  const { data: { user } } = await sb().auth.getUser();
  if (!user) throw new Error('Not signed in');

  const { data, error } = await sb()
    .from('children')
    .insert({
      owner: user.id,
      name: input.name.trim(),
      grade: input.grade,
      board: input.board,
    })
    .select()
    .single();
  if (error) throw error;
  return data as ChildRow;
}

export async function fetchSubjects(childId: string): Promise<SubjectRow[]> {
  const { data, error } = await sb()
    .from('subjects')
    .select('*')
    .eq('child_id', childId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []) as SubjectRow[];
}

export async function createSubject(input: {
  childId: string;
  name: string;
  icon?: string;
}): Promise<SubjectRow> {
  const { data, error } = await sb()
    .from('subjects')
    .insert({
      child_id: input.childId,
      name: input.name.trim(),
      icon: input.icon ?? '📖',
    })
    .select()
    .single();
  if (error) throw error;
  return data as SubjectRow;
}

export async function fetchSyllabusItems(subjectId: string): Promise<SyllabusItemRow[]> {
  const { data, error } = await sb()
    .from('syllabus_items')
    .select('*')
    .eq('subject_id', subjectId)
    .order('ord', { ascending: true });
  if (error) throw error;
  return (data ?? []) as SyllabusItemRow[];
}

export async function createSyllabusItem(input: {
  subjectId: string;
  title: string;
  rawText?: string;
  sourceImageUrl?: string;
  ord?: number;
}): Promise<SyllabusItemRow> {
  const { data, error } = await sb()
    .from('syllabus_items')
    .insert({
      subject_id: input.subjectId,
      title: input.title.trim(),
      raw_text: input.rawText ?? null,
      source_image_url: input.sourceImageUrl ?? null,
      ord: input.ord ?? 0,
    })
    .select()
    .single();
  if (error) throw error;
  return data as SyllabusItemRow;
}

export async function fetchLessons(): Promise<LessonRow[]> {
  const { data, error } = await sb()
    .from('lessons')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as LessonRow[];
}

export async function createLesson(input: {
  childId: string;
  subjectId?: string;
  source: 'index' | 'homework' | 'demo';
  title: string;
  subtitle?: string;
  icon?: string;
  hasTelugu?: boolean;
  cards: LearningCard[];
}): Promise<LessonRow> {
  const { data, error } = await sb()
    .from('lessons')
    .insert({
      child_id: input.childId,
      subject_id: input.subjectId ?? null,
      source: input.source,
      title: input.title,
      subtitle: input.subtitle ?? null,
      icon: input.icon ?? null,
      has_telugu: input.hasTelugu ?? false,
      cards: input.cards,
    })
    .select()
    .single();
  if (error) throw error;
  return data as LessonRow;
}

export function lessonRowToLesson(row: LessonRow, subjectSlug: string): Lesson {
  const cards = (row.cards as LearningCard[]).map((c) => ({
    ...c,
    lessonId: row.id,
  }));
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle ?? undefined,
    kid: row.child_id,
    childId: row.child_id,
    subject: subjectSlug,
    hasTelugu: row.has_telugu,
    icon: row.icon ?? undefined,
    cards,
  };
}

export async function fetchHomework(): Promise<HomeworkRow[]> {
  const { data, error } = await sb()
    .from('homework')
    .select('*')
    .order('task_date', { ascending: false });
  if (error) throw error;
  return (data ?? []) as HomeworkRow[];
}

export async function uploadHomeworkImage(
  userId: string,
  file: File,
  taskDate: string
): Promise<string> {
  const ext = file.name.split('.').pop() ?? 'jpg';
  const path = `${userId}/${taskDate}/${Date.now()}.${ext}`;
  const { error } = await sb().storage.from('homework').upload(path, file, {
    upsert: false,
    contentType: file.type,
  });
  if (error) throw error;
  const { data } = sb().storage.from('homework').getPublicUrl(path);
  return data.publicUrl;
}

export async function createHomework(input: {
  childId: string;
  subjectId?: string;
  taskDate: string;
  title: string;
  imageUrl?: string;
  rawText?: string;
  tasks: HomeworkTask[];
  lessonId?: string;
}): Promise<HomeworkRow> {
  const { data, error } = await sb()
    .from('homework')
    .insert({
      child_id: input.childId,
      subject_id: input.subjectId ?? null,
      task_date: input.taskDate,
      title: input.title,
      image_url: input.imageUrl ?? null,
      raw_text: input.rawText ?? null,
      tasks: input.tasks,
      lesson_id: input.lessonId ?? null,
    })
    .select()
    .single();
  if (error) throw error;
  return data as HomeworkRow;
}

export async function submitFeedback(message: string, context: Record<string, unknown> = {}) {
  const { data: { user } } = await sb().auth.getUser();
  if (!user) throw new Error('Not signed in');
  const { error } = await sb().from('feedback').insert({
    owner: user.id,
    message: message.trim(),
    context,
  });
  if (error) throw error;
}

import type { AskPageContext } from './askContext';

export async function callTutor(payload: {
  mode: 'homework' | 'index' | 'chat';
  grade: string;
  board: string;
  subject?: string;
  text?: string;
  imageUrl?: string;
  syllabusItems?: string[];
  pageContext?: AskPageContext;
}): Promise<{ cards: LearningCard[]; tasks?: HomeworkTask[]; message?: string }> {
  const { data, error } = await sb().functions.invoke('tutor', { body: payload });
  if (error) throw error;
  if (data?.error) throw new Error(data.error);
  return data as { cards: LearningCard[]; tasks?: HomeworkTask[]; message?: string };
}

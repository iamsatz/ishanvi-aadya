import { useEffect, useRef, useState } from 'react';
import {
  uploadHomeworkImage,
  createHomework,
  createLesson,
  callTutor,
} from '../lib/db';
import { isSupabaseConfigured } from '../lib/supabase';
import { useStore, selectActiveChild } from '../state/store';

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export function ParentUpload({ open, onClose, onSaved }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const activeKid = useStore((s) => s.activeKid);
  const subjects = useStore((s) => s.subjects);
  const child = useStore(selectActiveChild);
  const session = useStore((s) => s.session);
  const refreshLessons = useStore((s) => s.refreshLessons);
  const kids = useStore((s) => s.kids);

  const childSubjects = subjects.filter((s) => s.child_id === activeKid);
  const homeworkSubject = childSubjects.find((s) => s.name.toLowerCase().includes('homework')) ?? childSubjects[0];

  const [taskDate, setTaskDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [subjectId, setSubjectId] = useState(homeworkSubject?.id ?? '');
  const [title, setTitle] = useState('');
  const [rawText, setRawText] = useState('');
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [status, setStatus] = useState<'idle' | 'saving' | 'error' | 'done'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const kidName = kids.find((k) => k.id === activeKid)?.name ?? 'Child';

  useEffect(() => {
    if (open && homeworkSubject) setSubjectId(homeworkSubject.id);
  }, [open, homeworkSubject]);

  if (!open) return null;

  function onPickFile(file: File | undefined) {
    setImageFile(file);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(file ? URL.createObjectURL(file) : undefined);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!imageFile && !rawText.trim()) {
      setErrorMsg('Add a homework photo or type the homework text.');
      setStatus('error');
      return;
    }
    if (!child || !session?.user) {
      setErrorMsg('Sign in and add a child first.');
      setStatus('error');
      return;
    }

    setStatus('saving');
    setErrorMsg('');

    try {
      let imageUrl: string | undefined;
      if (imageFile) {
        imageUrl = await uploadHomeworkImage(session.user.id, imageFile, taskDate);
      }

      const subject = childSubjects.find((s) => s.id === subjectId);
      const hwTitle = title.trim() || `${subject?.name ?? 'Homework'} · ${taskDate}`;

      const tutorResult = await callTutor({
        mode: 'homework',
        grade: child.grade,
        board: child.board,
        subject: subject?.name,
        text: rawText.trim() || undefined,
        imageUrl,
      });

      const lessonId = crypto.randomUUID();
      const cards = tutorResult.cards.map((c, i) => ({
        ...c,
        id: c.id || `${lessonId}-c${i}`,
        lessonId,
        imageUrl: c.imageUrl ?? imageUrl,
      }));

      const tasks = tutorResult.tasks ?? [];
      if (tasks.length > 0) {
        cards.push({
          id: `${lessonId}-answers`,
          lessonId,
          imageUrl: undefined,
          title: 'Answers & Explanations',
          subtitle: 'Parent unlocks with PIN',
          englishContent: 'Here are the answers with simple explanations. Try every question on your own first!',
          promptText: 'Answer key',
          interactionType: 'answers',
          answers: tasks.map((t) => ({
            question: t.label,
            answer: t.answer ?? '—',
            explanation: t.explanation ?? t.hint,
          })),
        });
      }

      const lessonRow = await createLesson({
        childId: activeKid,
        subjectId: subjectId || undefined,
        source: 'homework',
        title: hwTitle,
        subtitle: taskDate,
        icon: subject?.icon ?? '✏️',
        hasTelugu: cards.some((c) => Boolean(c.teluguContent)),
        cards,
      });

      await createHomework({
        childId: activeKid,
        subjectId: subjectId || undefined,
        taskDate,
        title: hwTitle,
        imageUrl,
        rawText: rawText.trim() || undefined,
        tasks: tutorResult.tasks ?? [],
        lessonId: lessonRow.id,
      });

      await refreshLessons();
      setStatus('done');
      onSaved();
      setTimeout(() => {
        onClose();
        setStatus('idle');
        onPickFile(undefined);
        setTitle('');
        setRawText('');
      }, 1000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Upload failed');
    }
  }

  return (
    <div className="parent-upload" role="dialog" aria-modal="true" aria-label="Add homework">
      <form className="parent-upload__panel parent-upload__panel--simple" onSubmit={handleSave}>
        <header className="parent-upload__head">
          <h2>Add homework</h2>
          <button type="button" className="parent-upload__close" onClick={onClose} aria-label="Close">✕</button>
        </header>

        <p className="parent-upload__lead">
          Photo or text for <strong>{kidName}</strong>. AI builds step-by-step help — not just answers.
        </p>

        {!isSupabaseConfigured && (
          <p className="parent-upload__warn">
            Cloud not connected. Add Supabase keys (see docs/SUPABASE-SETUP.md).
          </p>
        )}

        <div className="parent-upload__grid parent-upload__grid--compact">
          <label className="parent-upload__field">
            <span>Subject</span>
            <select value={subjectId} onChange={(e) => setSubjectId(e.target.value)}>
              {childSubjects.map((s) => (
                <option key={s.id} value={s.id}>{s.icon} {s.name}</option>
              ))}
            </select>
          </label>
          <label className="parent-upload__field">
            <span>Date</span>
            <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required />
          </label>
          <label className="parent-upload__field parent-upload__full">
            <span>Title (optional)</span>
            <input type="text" placeholder="e.g. Oxford pg 105" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="parent-upload__field parent-upload__full">
            <span>Or type homework text</span>
            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Paste or type the homework question…"
              rows={3}
            />
          </label>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="parent-upload__file-hidden"
          onChange={(e) => onPickFile(e.target.files?.[0])}
        />

        <button type="button" className="parent-upload__browse btn btn--accent" onClick={() => fileRef.current?.click()}>
          📷 Photo of homework page
        </button>

        {previewUrl && (
          <figure className="parent-upload__preview">
            <img src={previewUrl} alt="Selected homework" />
            <figcaption>{imageFile?.name}</figcaption>
          </figure>
        )}

        <p className="parent-upload__ai-note">👩 Parent, check AI output before your child uses it.</p>

        {status === 'error' && <p className="parent-upload__error">{errorMsg}</p>}
        {status === 'done' && <p className="parent-upload__success">Homework help ready for {kidName}!</p>}

        <div className="parent-upload__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button
            type="submit"
            className="btn btn--accent"
            disabled={status === 'saving' || !isSupabaseConfigured}
          >
            {status === 'saving' ? 'AI is building help…' : 'Create homework help'}
          </button>
        </div>
      </form>
    </div>
  );
}

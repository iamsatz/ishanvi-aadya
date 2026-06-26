import { useEffect, useState } from 'react';
import { useStore } from '../state/store';
import { createSyllabusItem, callTutor, createLesson } from '../lib/db';
import { selectActiveChild } from '../state/store';

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export function SubjectIndexEditor({ open, onClose, onSaved }: Props) {
  const activeKid = useStore((s) => s.activeKid);
  const subjects = useStore((s) => s.subjects);
  const child = useStore(selectActiveChild);
  const refreshLessons = useStore((s) => s.refreshLessons);

  const childSubjects = subjects.filter((s) => s.child_id === activeKid);
  const [subjectId, setSubjectId] = useState(childSubjects[0]?.id ?? '');
  const [title, setTitle] = useState('');
  const [rawText, setRawText] = useState('');
  const [status, setStatus] = useState<'idle' | 'generating' | 'error' | 'done'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (open && childSubjects[0]) setSubjectId(childSubjects[0].id);
  }, [open, childSubjects]);

  if (!open) return null;

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!subjectId || !child) return;
    if (!rawText.trim() && !title.trim()) {
      setError('Add a subject topic title or paste/type the index text.');
      setStatus('error');
      return;
    }

    setStatus('generating');
    setError('');

    try {
      const subject = childSubjects.find((s) => s.id === subjectId);
      const itemTitle = title.trim() || 'Subject index';
      await createSyllabusItem({
        subjectId,
        title: itemTitle,
        rawText: rawText.trim() || undefined,
      });

      const result = await callTutor({
        mode: 'index',
        grade: child.grade,
        board: child.board,
        subject: subject?.name,
        text: rawText.trim() || itemTitle,
        syllabusItems: rawText.trim().split('\n').filter(Boolean),
      });

      const lessonId = crypto.randomUUID();
      const cards = result.cards.map((c, i) => ({
        ...c,
        id: c.id || `${lessonId}-c${i}`,
        lessonId,
      }));

      await createLesson({
        childId: activeKid,
        subjectId,
        source: 'index',
        title: itemTitle,
        subtitle: subject?.name,
        icon: subject?.icon ?? '📖',
        hasTelugu: cards.some((c) => Boolean(c.teluguContent)),
        cards,
      });

      await refreshLessons();
      setStatus('done');
      onSaved();
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setTitle('');
        setRawText('');
      }, 800);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Could not generate lessons');
    }
  }

  return (
    <div className="index-editor" role="dialog" aria-modal="true" aria-label="Add subject index">
      <form className="index-editor__panel" onSubmit={handleGenerate}>
        <header className="index-editor__head">
          <h2>Add subject index</h2>
          <button type="button" className="index-editor__close" onClick={onClose} aria-label="Close">✕</button>
        </header>

        <p className="index-editor__lead">
          Type or paste the table of contents for a subject. AI will build interactive lessons from it.
        </p>

        <label className="index-editor__field">
          <span>Subject</span>
          <select value={subjectId} onChange={(e) => setSubjectId(e.target.value)} required>
            {childSubjects.map((s) => (
              <option key={s.id} value={s.id}>{s.icon} {s.name}</option>
            ))}
          </select>
        </label>

        <label className="index-editor__field">
          <span>Topic / unit name</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Number Systems — Chapter 1"
          />
        </label>

        <label className="index-editor__field">
          <span>Index lines (one topic per line)</span>
          <textarea
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder={'1. Place value\n2. Standard form\n3. Indian vs International commas'}
            rows={6}
          />
        </label>

        {status === 'error' && <p className="index-editor__error">{error}</p>}
        {status === 'done' && <p className="index-editor__success">Lessons created!</p>}

        <div className="index-editor__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn--accent" disabled={status === 'generating'}>
            {status === 'generating' ? 'Generating…' : 'Build lessons'}
          </button>
        </div>
      </form>
    </div>
  );
}

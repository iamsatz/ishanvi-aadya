import { useState } from 'react';
import type { KidId } from '../types/content';
import { uploadHomework, type CloudTask } from '../lib/homeworkCloud';
import { isSupabaseConfigured } from '../lib/supabase';

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

const emptyTask = (): CloudTask => ({ label: '', hint: '', answer: '' });

export function ParentUpload({ open, onClose, onSaved }: Props) {
  const [taskDate, setTaskDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [kid, setKid] = useState<KidId>('ishanvi');
  const [subject, setSubject] = useState('english');
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [tasks, setTasks] = useState<CloudTask[]>([emptyTask(), emptyTask()]);
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!open) return null;

  function updateTask(i: number, patch: Partial<CloudTask>) {
    setTasks((prev) => prev.map((t, j) => (j === i ? { ...t, ...patch } : t)));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus('saving');
    setErrorMsg('');
    const filtered = tasks.filter((t) => t.label.trim());
    const result = await uploadHomework({
      taskDate,
      kid,
      subject,
      title: title.trim() || `${subject} · ${taskDate}`,
      imageFile,
      tasks: filtered,
    });
    if (result.ok) {
      setStatus('idle');
      onSaved();
      onClose();
    } else {
      setStatus('error');
      setErrorMsg(result.error ?? 'Upload failed');
    }
  }

  return (
    <div className="parent-upload" role="dialog" aria-modal="true" aria-label="Upload homework">
      <form className="parent-upload__panel" onSubmit={handleSave}>
        <header className="parent-upload__head">
          <h2>Upload homework</h2>
          <button type="button" className="parent-upload__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        {!isSupabaseConfigured && (
          <p className="parent-upload__warn">
            Cloud not connected yet. Add Supabase keys to <code>.env</code> (see <code>.env.example</code>).
          </p>
        )}

        <div className="parent-upload__grid">
          <label>
            Date
            <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required />
          </label>
          <label>
            Kid
            <select value={kid} onChange={(e) => setKid(e.target.value as KidId)}>
              <option value="ishanvi">Ishanvi</option>
              <option value="aadya">Aadya</option>
            </select>
          </label>
          <label>
            Subject
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="english">English</option>
              <option value="science">Science</option>
              <option value="maths">Maths</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="parent-upload__full">
            Title
            <input
              type="text"
              placeholder="e.g. Oxford pg 105"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="parent-upload__full">
            Photo (book page / sheet)
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => setImageFile(e.target.files?.[0])}
            />
          </label>
        </div>

        <fieldset className="parent-upload__tasks">
          <legend>Tasks</legend>
          {tasks.map((t, i) => (
            <div key={i} className="parent-upload__task">
              <input
                placeholder="Task label"
                value={t.label}
                onChange={(e) => updateTask(i, { label: e.target.value })}
              />
              <input
                placeholder="Hint for kid"
                value={t.hint ?? ''}
                onChange={(e) => updateTask(i, { hint: e.target.value })}
              />
              <input
                placeholder="Answer (parent/peek only)"
                value={t.answer ?? ''}
                onChange={(e) => updateTask(i, { answer: e.target.value })}
              />
            </div>
          ))}
          <button type="button" className="btn btn--ghost" onClick={() => setTasks((p) => [...p, emptyTask()])}>
            + Add task
          </button>
        </fieldset>

        {status === 'error' && <p className="parent-upload__error">{errorMsg}</p>}

        <div className="parent-upload__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn--accent" disabled={status === 'saving' || !isSupabaseConfigured}>
            {status === 'saving' ? 'Saving…' : 'Save to cloud'}
          </button>
        </div>
      </form>
    </div>
  );
}

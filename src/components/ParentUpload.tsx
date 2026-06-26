import { useRef, useState } from 'react';
import type { KidId } from '../types/content';
import { uploadHomework } from '../lib/homeworkCloud';
import { isSupabaseConfigured } from '../lib/supabase';

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export function ParentUpload({ open, onClose, onSaved }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [taskDate, setTaskDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [kid, setKid] = useState<KidId>('ishanvi');
  const [subject, setSubject] = useState('english');
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [status, setStatus] = useState<'idle' | 'saving' | 'error' | 'done'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!open) return null;

  function onPickFile(file: File | undefined) {
    setImageFile(file);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(file ? URL.createObjectURL(file) : undefined);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!imageFile) {
      setErrorMsg('Please choose a photo first.');
      setStatus('error');
      return;
    }
    setStatus('saving');
    setErrorMsg('');
    const result = await uploadHomework({
      taskDate,
      kid,
      subject,
      title: title.trim() || `Homework · ${taskDate}`,
      imageFile,
      tasks: [],
    });
    if (result.ok) {
      setStatus('done');
      onSaved();
      setTimeout(() => {
        onClose();
        setStatus('idle');
        onPickFile(undefined);
        setTitle('');
      }, 800);
    } else {
      setStatus('error');
      setErrorMsg(result.error ?? 'Upload failed');
    }
  }

  return (
    <div className="parent-upload" role="dialog" aria-modal="true" aria-label="Upload homework photo">
      <form className="parent-upload__panel parent-upload__panel--simple" onSubmit={handleSave}>
        <header className="parent-upload__head">
          <h2>Upload homework photo</h2>
          <button type="button" className="parent-upload__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <p className="parent-upload__lead">
          Browse a photo on your phone. It appears on the TV browser under <strong>This Weekend</strong>.
        </p>

        {!isSupabaseConfigured && (
          <p className="parent-upload__warn">
            Cloud not connected. Add Supabase keys to Vercel (see <code>docs/SUPABASE-SETUP.md</code>).
          </p>
        )}

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="parent-upload__file-hidden"
          onChange={(e) => onPickFile(e.target.files?.[0])}
        />

        <button
          type="button"
          className="parent-upload__browse btn btn--accent"
          onClick={() => fileRef.current?.click()}
        >
          📷 Browse photos
        </button>

        {previewUrl && (
          <figure className="parent-upload__preview">
            <img src={previewUrl} alt="Selected homework" />
            <figcaption>{imageFile?.name}</figcaption>
          </figure>
        )}

        <div className="parent-upload__grid parent-upload__grid--compact">
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
            Title (optional)
            <input
              type="text"
              placeholder="e.g. Oxford pg 105"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>

        {status === 'error' && <p className="parent-upload__error">{errorMsg}</p>}
        {status === 'done' && <p className="parent-upload__success">Uploaded — open TV browser to see it!</p>}

        <div className="parent-upload__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn--accent"
            disabled={status === 'saving' || !isSupabaseConfigured || !imageFile}
          >
            {status === 'saving' ? 'Uploading…' : 'Send to TV'}
          </button>
        </div>
      </form>
    </div>
  );
}

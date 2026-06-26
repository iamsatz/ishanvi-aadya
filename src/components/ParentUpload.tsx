import { useEffect, useRef, useState } from 'react';
import type { KidId } from '../types/content';
import {
  defaultHomeworkTitle,
  SUBJECT_OPTIONS,
  uploadHomework,
} from '../lib/homeworkCloud';
import { isSupabaseConfigured } from '../lib/supabase';
import { useStore } from '../state/store';
import { kidById } from '../data/kids';

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export function ParentUpload({ open, onClose, onSaved }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const activeKid = useStore((s) => s.activeKid);
  const [taskDate, setTaskDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [kid, setKid] = useState<KidId>(activeKid);
  const [subject, setSubject] = useState('english');
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [status, setStatus] = useState<'idle' | 'saving' | 'error' | 'done'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (open) setKid(activeKid);
  }, [open, activeKid]);

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
      title: title.trim() || defaultHomeworkTitle(subject, taskDate),
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
          Choose who and what subject, then pick the page photo. It appears on the TV under{' '}
          <strong>This Weekend</strong> for that child.
        </p>

        {!isSupabaseConfigured && (
          <p className="parent-upload__warn">
            Cloud not connected. Add Supabase keys to Vercel (see <code>docs/SUPABASE-SETUP.md</code>).
          </p>
        )}

        <div className="parent-upload__grid parent-upload__grid--compact">
          <label className="parent-upload__field">
            <span className="parent-upload__field-q">Who is this for?</span>
            <select value={kid} onChange={(e) => setKid(e.target.value as KidId)}>
              <option value="ishanvi">{kidById.ishanvi.name} · {kidById.ishanvi.grade}</option>
              <option value="aadya">{kidById.aadya.name} · {kidById.aadya.grade}</option>
            </select>
          </label>
          <label className="parent-upload__field">
            <span className="parent-upload__field-q">Which subject?</span>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              {SUBJECT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.icon} {opt.label}
                </option>
              ))}
            </select>
          </label>
          <label className="parent-upload__field">
            <span className="parent-upload__field-q">When is this homework?</span>
            <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required />
          </label>
          <label className="parent-upload__field parent-upload__full">
            <span className="parent-upload__field-q">Page name (optional)</span>
            <input
              type="text"
              placeholder="e.g. Oxford pg 105"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <small className="parent-upload__hint">
              If empty: {defaultHomeworkTitle(subject, taskDate)}
            </small>
          </label>
        </div>

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
          📷 Browse homework photo
        </button>

        {previewUrl && (
          <figure className="parent-upload__preview">
            <img src={previewUrl} alt="Selected homework" />
            <figcaption>{imageFile?.name}</figcaption>
          </figure>
        )}

        {status === 'error' && <p className="parent-upload__error">{errorMsg}</p>}
        {status === 'done' && (
          <p className="parent-upload__success">
            Uploaded for {kidById[kid].name} — open TV browser to see it!
          </p>
        )}

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

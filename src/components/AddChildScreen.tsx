import { useState } from 'react';
import { BOARD_OPTIONS, GRADE_OPTIONS, type BoardType } from '../types/db';
import { useStore } from '../state/store';

interface Props {
  open: boolean;
  onClose?: () => void;
}

export function AddChildScreen({ open, onClose }: Props) {
  const addChild = useStore((s) => s.addChild);
  const enableDemoContent = useStore((s) => s.enableDemoContent);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('Grade 4');
  const [board, setBoard] = useState<BoardType>('cbse');
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');
  const [error, setError] = useState('');

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setStatus('saving');
    setError('');
    try {
      await addChild({ name: name.trim(), grade, board });
      setName('');
      onClose?.();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Could not add child');
    }
  }

  async function loadDemo() {
    setStatus('saving');
    try {
      await enableDemoContent();
      onClose?.();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Could not load demo');
    } finally {
      setStatus('idle');
    }
  }

  return (
    <div className="onboarding" role="dialog" aria-modal="true" aria-label="Add your child">
      <div className="onboarding__panel">
        <h2>Welcome! Add your child</h2>
        <p className="onboarding__lead">
          Tell us grade and board so lessons match their school. You can add homework photos or subject index pages next.
        </p>

        <form className="onboarding__form" onSubmit={handleSubmit}>
          <label className="onboarding__field">
            <span>Child&apos;s name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Riya"
              required
              autoFocus
            />
          </label>

          <label className="onboarding__field">
            <span>Grade</span>
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
              {GRADE_OPTIONS.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </label>

          <label className="onboarding__field">
            <span>Board / methodology</span>
            <select value={board} onChange={(e) => setBoard(e.target.value as BoardType)}>
              {BOARD_OPTIONS.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
          </label>

          {status === 'error' && <p className="onboarding__error">{error}</p>}

          <div className="onboarding__actions">
            <button type="submit" className="btn btn--accent" disabled={status === 'saving'}>
              {status === 'saving' ? 'Saving…' : 'Add child'}
            </button>
          </div>
        </form>

        <div className="onboarding__demo">
          <p>Or explore with built-in demo content (Ishanvi &amp; Aadya sample lessons):</p>
          <button type="button" className="btn btn--ghost" onClick={loadDemo} disabled={status === 'saving'}>
            Load demo content
          </button>
        </div>

        <p className="onboarding__consent">
          By continuing you agree that your child&apos;s name and homework photos are stored securely for this beta.
        </p>
      </div>
    </div>
  );
}

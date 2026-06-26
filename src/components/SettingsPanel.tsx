import { useEffect, useState } from 'react';
import { getParentPin, setParentPin, isValidPin } from '../lib/pin';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SettingsPanel({ open, onClose }: Props) {
  const [forgot, setForgot] = useState(false);
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  function reset() {
    setCurrent(''); setNext(''); setConfirm(''); setForgot(false);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!forgot && current !== getParentPin()) {
      setError('Current PIN is wrong.');
      setStatus('error');
      return;
    }
    if (!isValidPin(next)) {
      setError('New PIN must be exactly 4 digits.');
      setStatus('error');
      return;
    }
    if (next !== confirm) {
      setError('New PIN and confirm do not match.');
      setStatus('error');
      return;
    }
    setParentPin(next);
    setStatus('saved');
    reset();
    setTimeout(() => { setStatus('idle'); onClose(); }, 900);
  }

  function digits(v: string) {
    return v.replace(/\D/g, '').slice(0, 4);
  }

  return (
    <div className="settings-panel" role="dialog" aria-modal="true" aria-label="Settings">
      <form className="settings-panel__inner" onSubmit={handleSave}>
        <header className="settings-panel__head">
          <h2>⚙️ Parent settings</h2>
          <button type="button" onClick={onClose} aria-label="Close">✕</button>
        </header>

        <h3 className="settings-panel__section">Change Parent PIN</h3>
        <p className="settings-panel__hint">
          The PIN unlocks answers and parent tools. Keep it secret from your child.
        </p>

        {!forgot && (
          <label className="settings-panel__field">
            <span>Current PIN</span>
            <input
              type="password" inputMode="numeric" autoComplete="off"
              value={current} onChange={(e) => setCurrent(digits(e.target.value))}
              placeholder="••••"
            />
          </label>
        )}

        <label className="settings-panel__field">
          <span>New PIN</span>
          <input
            type="password" inputMode="numeric" autoComplete="off"
            value={next} onChange={(e) => setNext(digits(e.target.value))}
            placeholder="4 digits"
          />
        </label>

        <label className="settings-panel__field">
          <span>Confirm new PIN</span>
          <input
            type="password" inputMode="numeric" autoComplete="off"
            value={confirm} onChange={(e) => setConfirm(digits(e.target.value))}
            placeholder="4 digits"
          />
        </label>

        {!forgot ? (
          <button type="button" className="settings-panel__forgot" onClick={() => setForgot(true)}>
            Forgot current PIN?
          </button>
        ) : (
          <p className="settings-panel__forgot-note">
            You&apos;re signed in with your email, so you can set a new PIN without the old one.
          </p>
        )}

        {status === 'error' && <p className="settings-panel__error">{error}</p>}
        {status === 'saved' && <p className="settings-panel__saved">PIN updated ✓</p>}

        <div className="settings-panel__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn--accent">Save PIN</button>
        </div>
      </form>
    </div>
  );
}

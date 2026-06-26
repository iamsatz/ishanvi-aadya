import { useState } from 'react';
import { submitFeedback } from '../lib/db';
import { useStore } from '../state/store';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function FeedbackPanel({ open, onClose }: Props) {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const activeLessonId = useStore((s) => s.activeLessonId);
  const activeKid = useStore((s) => s.activeKid);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus('sending');
    try {
      await submitFeedback(message, { activeKid, activeLessonId });
      setStatus('sent');
      setMessage('');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 1200);
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="feedback-panel" role="dialog" aria-modal="true" aria-label="Send feedback">
      <form className="feedback-panel__inner" onSubmit={handleSubmit}>
        <header className="feedback-panel__head">
          <h2>Beta feedback</h2>
          <button type="button" onClick={onClose} aria-label="Close">✕</button>
        </header>
        <p>Tell us what worked, what confused your child, or what to improve.</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your feedback…"
          rows={5}
          required
          autoFocus
        />
        {status === 'sent' && <p className="feedback-panel__thanks">Thank you!</p>}
        {status === 'error' && <p className="feedback-panel__error">Could not send. Try again.</p>}
        <div className="feedback-panel__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn--accent" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}

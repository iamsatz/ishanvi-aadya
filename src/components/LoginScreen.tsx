import { useState } from 'react';
import { signInWithMagicLink } from '../lib/auth';
import { isSupabaseConfigured } from '../lib/supabase';
import { APP_NAME } from '../config/app';

interface Props {
  onSent: () => void;
}

export function LoginScreen({ onSent }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;

    setStatus('sending');
    setError('');

    const result = await signInWithMagicLink(trimmed);
    if (result.ok) {
      setStatus('sent');
      onSent();
    } else {
      setStatus('error');
      setError(result.error ?? 'Could not send link');
    }
  }

  return (
    <div className="auth-screen">
      <div className="auth-screen__card">
        <h1 className="auth-screen__title">{APP_NAME}</h1>
        <p className="auth-screen__lead">
          Sign in with your email. Works on phone and TV.
        </p>

        {!isSupabaseConfigured && (
          <p className="auth-screen__warn">
            Supabase not configured. Add keys to <code>.env</code> (see docs/SUPABASE-SETUP.md).
          </p>
        )}

        {status === 'sent' ? (
          <div className="auth-screen__sent">
            <p>Check your email for the magic link.</p>
            <p className="auth-screen__hint">On TV: open the link on your phone first, then use the same account on TV.</p>
          </div>
        ) : (
          <form className="auth-screen__form" onSubmit={handleSubmit}>
            <label className="auth-screen__field">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
                autoFocus
              />
            </label>
            {status === 'error' && <p className="auth-screen__error">{error}</p>}
            <button
              type="submit"
              className="btn btn--accent auth-screen__submit"
              disabled={status === 'sending' || !isSupabaseConfigured}
            >
              {status === 'sending' ? 'Sending…' : 'Send magic link'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

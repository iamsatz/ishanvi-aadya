import { useState } from 'react';
import { getParentPin } from '../lib/pin';

interface Props {
  open: boolean;
  title?: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export function PinGate({ open, title = 'Parent PIN', onSuccess, onCancel }: Props) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pin === getParentPin()) {
      setPin('');
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setPin('');
    }
  }

  return (
    <div className="pin-gate" role="dialog" aria-modal="true" aria-label={title}>
      <form className="pin-gate__panel" onSubmit={submit}>
        <h2 className="pin-gate__title">{title}</h2>
        <p className="pin-gate__sub">Enter 4-digit PIN</p>
        <input
          type="password"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={4}
          className="pin-gate__input"
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
          autoComplete="off"
          autoFocus
        />
        {error && <p className="pin-gate__error">Wrong PIN — try again</p>}
        <div className="pin-gate__actions">
          <button type="button" className="btn btn--ghost" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn--accent" disabled={pin.length < 4}>
            Unlock
          </button>
        </div>
      </form>
    </div>
  );
}

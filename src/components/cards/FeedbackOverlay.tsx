import { useEffect, useRef } from 'react';
import { burstConfetti } from '../../lib/confetti';

interface Props {
  kind: 'correct' | 'incorrect' | null;
  hint?: string;
  onDone?: () => void;
}

export function FeedbackOverlay({ kind, hint, onDone }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!kind) return;
    if (kind === 'correct' && ref.current) burstConfetti(ref.current);
    const t = window.setTimeout(() => onDone?.(), 900);
    return () => window.clearTimeout(t);
  }, [kind, onDone]);

  if (!kind) return null;
  return (
    <div className="feedback" ref={ref} aria-live="polite">
      <div className="feedback__badge">
        {kind === 'correct' ? '✅ Great!' : `❌ Try again${hint ? ` — ${hint}` : ''}`}
      </div>
    </div>
  );
}

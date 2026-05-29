import { useEffect, useRef, useState } from 'react';

interface Props {
  word: string;
  en: string;
  te: string;
}

/**
 * Inline vocabulary tooltip.
 * - Desktop: shows on hover/focus
 * - Mobile: tap to toggle (uses click)
 * - Always shows English + Telugu meaning side by side.
 */
export function WordTip({ word, en, te }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Close when clicking outside (mobile tap-to-show)
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <span
      ref={ref}
      className="word-tip"
      tabIndex={0}
      role="button"
      aria-label={`${word}: ${en}`}
      data-open={open}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen((o) => !o);
        } else if (e.key === 'Escape') {
          setOpen(false);
        }
      }}
    >
      {word}
      <span className="word-tip__bubble" role="tooltip">
        <span className="word-tip__head">{word}</span>
        <span className="word-tip__en">{en}</span>
        <span className="word-tip__te" lang="te">{te}</span>
      </span>
    </span>
  );
}

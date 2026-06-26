import { useEffect } from 'react';

interface Options {
  onNext: () => void;
  onBack: () => void;
  onRemoteBack?: () => void;
  tvMode?: boolean;
  enabled?: boolean;
}

function isRemoteBack(key: string): boolean {
  return key === 'Escape' || key === 'Backspace' || key === 'BrowserBack';
}

/** Wires keyboard nav: arrows for back/next (desktop) or spatial nav (TV). */
export function useKeyboardNav({
  onNext,
  onBack,
  onRemoteBack,
  tvMode = false,
  enabled = true,
}: Options) {
  useEffect(() => {
    if (!enabled) return;
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return;
      if (document.querySelector('.lightbox')) return;

      if (tvMode) {
        if (isRemoteBack(e.key)) {
          e.preventDefault();
          (onRemoteBack ?? onBack)();
          return;
        }
        // Spatial nav runs first; if it couldn't move focus, fall back to card prev/next.
        if (e.defaultPrevented) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); onNext(); }
        if (e.key === 'ArrowLeft')  { e.preventDefault(); onBack(); }
        return;
      }

      if (e.key === 'ArrowRight') { e.preventDefault(); onNext(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); onBack(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onNext, onBack, onRemoteBack, tvMode, enabled]);
}

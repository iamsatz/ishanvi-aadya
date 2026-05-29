import { useEffect } from 'react';

interface Options {
  onNext: () => void;
  onBack: () => void;
  enabled?: boolean;
}

/** Wires ← / → arrow keys to back/next handlers. Ignores when typing in inputs. */
export function useKeyboardNav({ onNext, onBack, enabled = true }: Options) {
  useEffect(() => {
    if (!enabled) return;
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); onNext(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); onBack(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onNext, onBack, enabled]);
}

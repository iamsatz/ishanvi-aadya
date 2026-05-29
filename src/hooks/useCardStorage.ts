import { useCallback, useEffect, useState } from 'react';

/** Per-card persisted state (reflect text, checklist ticks, etc). */
export function useCardStorage<T>(cardId: string, suffix: string, initial: T) {
  const key = `card:${cardId}:${suffix}`;
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
  }, [key, value]);

  const reset = useCallback(() => setValue(initial), [initial]);
  return [value, setValue, reset] as const;
}

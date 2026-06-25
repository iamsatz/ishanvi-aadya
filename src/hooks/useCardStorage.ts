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

  const reset = useCallback(() => {
    setValue(initial);
    try { localStorage.removeItem(key); } catch { /* ignore */ }
  }, [initial, key]);
  return [value, setValue, reset] as const;
}

/** Remove all persisted per-card keys (reflect, checklist, etc.). */
export function clearCardStorage(cardId: string) {
  const prefix = `card:${cardId}:`;
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k?.startsWith(prefix)) localStorage.removeItem(k);
    }
  } catch { /* ignore */ }
}

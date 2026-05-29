import { useEffect } from 'react';
import type { LearningCard } from '../../types/content';
import { useCardStorage } from '../../hooks/useCardStorage';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

export function ChecklistCard({ card, onComplete }: Props) {
  const items = card.checklist ?? [];
  const [checked, setChecked] = useCardStorage<string[]>(card.id, 'checklist', []);

  // First tick counts the card as "done" so the kid keeps moving.
  useEffect(() => {
    if (checked.length === 1) onComplete(true);
  }, [checked.length, onComplete]);

  function toggle(id: string) {
    setChecked(checked.includes(id) ? checked.filter((c) => c !== id) : [...checked, id]);
  }

  const allDone = items.length > 0 && checked.length === items.length;

  return (
    <div className="checklist">
      {items.map((it) => {
        const isChecked = checked.includes(it.id);
        return (
          <button
            key={it.id}
            className="check-item"
            data-checked={isChecked}
            onClick={() => toggle(it.id)}
            aria-pressed={isChecked}
          >
            <span className="check-box" aria-hidden>{isChecked ? '✓' : ''}</span>
            <span className="check-item__content">
              <span className="check-item__label">{it.label}</span>
              {it.what && (
                <span className="check-item__what">{it.what}</span>
              )}
              {it.why && (
                <span className="check-item__why">💡 {it.why}</span>
              )}
            </span>
          </button>
        );
      })}
      <div className="check-progress">
        {allDone ? '🎉 All done — amazing!' : `${checked.length} of ${items.length} done`}
      </div>
    </div>
  );
}

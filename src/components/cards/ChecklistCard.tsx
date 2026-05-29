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
  const allDone = items.length > 0 && checked.length === items.length;

  // First tick counts the card as "done" so progress moves.
  useEffect(() => {
    if (checked.length === 1) onComplete(true);
  }, [checked.length, onComplete]);

  function toggle(id: string) {
    setChecked(checked.includes(id) ? checked.filter((c) => c !== id) : [...checked, id]);
  }

  // Only show the Task Guide if at least one item has extra info.
  const hasGuide = items.some((it) => it.what || it.why || it.example || it.challenge);

  return (
    <div className="checklist">
      {/* ── Task Guide (collapsed by default, shown FIRST) ── */}
      {hasGuide && (
        <details className="task-guide">
          <summary>
            <span className="task-guide__pill" aria-hidden>📋</span>
            <span>Task Guide — what to do, examples &amp; why it helps</span>
          </summary>
          <div className="task-guide__body">
            {items.map((it) => (it.what || it.why || it.example || it.challenge) ? (
              <div key={it.id} className="task-guide__row">
                <span className="task-guide__name">{it.label}</span>
                {it.what && <span className="task-guide__what">{it.what}</span>}
                {it.example && (
                  <span className="task-guide__example">
                    <strong>Example:</strong> {it.example}
                  </span>
                )}
                {it.challenge && (
                  <span className="task-guide__challenge">
                    <strong>🌟 Challenge:</strong> {it.challenge}
                  </span>
                )}
                {it.why && <span className="task-guide__why">💡 {it.why}</span>}
              </div>
            ) : null)}
          </div>
        </details>
      )}

      {/* ── Checklist ── */}
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
            <span className="check-item__label">{it.label}</span>
          </button>
        );
      })}

      <div className="check-progress">
        {allDone ? '🎉 All done — amazing!' : `${checked.length} of ${items.length} done`}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import type { LearningCard } from '../../types/content';
import { useCardStorage } from '../../hooks/useCardStorage';
import { useStore } from '../../state/store';
import { ListenButton } from '../ListenButton';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

export function ChecklistCard({ card, onComplete }: Props) {
  const items = card.checklist ?? [];
  const [checked, setChecked] = useCardStorage<string[]>(card.id, 'checklist', []);
  const [showExamples, setShowExamples] = useState<Set<string>>(new Set());
  const jumpToCard = useStore((s) => s.jumpToCard);
  const parentMode = useStore((s) => s.parentMode);
  const allDone = items.length > 0 && checked.length === items.length;

  useEffect(() => {
    if (checked.length === 1) onComplete(true);
  }, [checked.length, onComplete]);

  function toggle(id: string) {
    setChecked(checked.includes(id) ? checked.filter((c) => c !== id) : [...checked, id]);
  }

  function toggleExample(id: string) {
    setShowExamples((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const hasGuide = items.some((it) => it.what || it.why || it.challenge);

  return (
    <div className="checklist">
      {hasGuide && (
        <details className="task-guide">
          <summary>
            <span className="task-guide__pill" aria-hidden>📋</span>
            <span>Task Guide — what to do &amp; why it helps</span>
          </summary>
          <div className="task-guide__body">
            {items.map((it) => (it.what || it.why || it.challenge) ? (
              <div key={it.id} className="task-guide__row">
                <span className="task-guide__name">{it.label}</span>
                {it.what && <span className="task-guide__what">{it.what}</span>}
                {it.challenge && (
                  <span className="task-guide__challenge">
                    <strong>Challenge:</strong> {it.challenge}
                  </span>
                )}
                {it.why && <span className="task-guide__why">💡 {it.why}</span>}
              </div>
            ) : null)}
          </div>
        </details>
      )}

      {items.map((it) => {
        const isChecked = checked.includes(it.id);
        const exampleVisible = parentMode || showExamples.has(it.id);
        return (
          <div key={it.id} className="check-item-wrap">
            <button
              type="button"
              className="check-item"
              data-checked={isChecked}
              onClick={() => toggle(it.id)}
              aria-pressed={isChecked}
            >
              <span className="check-box" aria-hidden>{isChecked ? '✓' : ''}</span>
              <span className="check-item__body">
                <span className="check-item__label">{it.label}</span>
                {it.hint && (
                  <span className="check-item__hint">💡 {it.hint}</span>
                )}
                {it.what && !it.hint && <span className="check-item__what">{it.what}</span>}
                {it.example && exampleVisible && (
                  <span className="check-item__example">Example: {it.example}</span>
                )}
              </span>
            </button>
            {it.hint && (
              <div className="check-item__listen">
                <ListenButton text={it.hint} label="Listen" />
              </div>
            )}
            {it.example && !parentMode && (
              <button
                type="button"
                className="check-item__example-toggle"
                onClick={() => toggleExample(it.id)}
              >
                {showExamples.has(it.id) ? 'Hide example' : 'See an example →'}
              </button>
            )}
            {it.peekLink && (
              <button
                type="button"
                className="check-item__learn"
                onClick={() => jumpToCard(card.lessonId, it.peekLink!.cardId)}
              >
                {it.peekLink.label ?? 'Stuck? Peek here →'}
              </button>
            )}
            {it.learnLink && (
              <button
                type="button"
                className="check-item__learn"
                onClick={() => jumpToCard(it.learnLink!.lessonId, it.learnLink!.cardId)}
              >
                {it.learnLink.label ?? 'Learn it here →'}
              </button>
            )}
          </div>
        );
      })}

      <div className="check-progress">
        {allDone ? '🎉 All done — amazing!' : `${checked.length} of ${items.length} done`}
      </div>
    </div>
  );
}

import { useEffect } from 'react';
import type { LearningCard } from '../../types/content';
import { useCardStorage } from '../../hooks/useCardStorage';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

export function VocabGridCard({ card, onComplete }: Props) {
  const items = card.vocab ?? [];
  const [revealed, setRevealed] = useCardStorage<string[]>(card.id, 'vocab-revealed', []);
  const allRevealed = items.length > 0 && revealed.length === items.length;

  useEffect(() => {
    if (revealed.length >= 3) onComplete(true);
  }, [revealed.length, onComplete]);

  function toggle(id: string) {
    if (revealed.includes(id)) return;
    setRevealed([...revealed, id]);
  }

  return (
    <div className="vocab-grid">
      {items.map((item) => {
        const isOpen = revealed.includes(item.id);
        return (
          <button
            key={item.id}
            type="button"
            className={`vocab-grid__card${isOpen ? ' vocab-grid__card--open' : ''}`}
            onClick={() => toggle(item.id)}
            aria-pressed={isOpen}
            aria-label={isOpen ? `${item.word}: ${item.definition}` : `Tap to reveal ${item.word}`}
          >
            <span className="vocab-grid__inner">
              <span className="vocab-grid__front">
                <span className="vocab-grid__word">{item.word}</span>
                <span className="vocab-grid__hint">Tap ✨</span>
              </span>
              <span className="vocab-grid__back">
                <span className="vocab-grid__def">{item.definition}</span>
                {item.definitionTe && (
                  <span className="vocab-grid__def-te" lang="te">{item.definitionTe}</span>
                )}
              </span>
            </span>
          </button>
        );
      })}
      <p className="vocab-grid__progress">
        {allRevealed
          ? '🎉 All 12 words learned!'
          : `${revealed.length} of ${items.length} revealed — flip them all!`}
      </p>
    </div>
  );
}

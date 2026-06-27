import { useMemo, useState } from 'react';
import type { LearningCard } from '../../types/content';
import { shuffleChoices } from '../../lib/shuffleChoices';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

type Status = 'idle' | 'correct' | 'incorrect';

export function ChoiceCards({ card, onComplete }: Props) {
  const choices = useMemo(
    () => shuffleChoices(card.choices ?? [], card.id),
    [card.choices, card.id]
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const isDeck = card.cardStyle === 'deck';

  function handlePick(choiceId: string, isCorrect: boolean) {
    if (status === 'correct') return;
    setSelectedId(choiceId);
    setStatus(isCorrect ? 'correct' : 'incorrect');
    onComplete(isCorrect);
    if (!isCorrect) window.setTimeout(() => setStatus('idle'), 450);
  }

  return (
    <div>
      <div
        className={isDeck ? 'choices choices--deck' : 'choices'}
        role="group"
        aria-label="Choices"
      >
        {choices.map((c) => {
          const isSel = selectedId === c.id;
          const cls =
            (isDeck ? 'deck-card' : 'choice') +
            (isSel && status === 'correct'   ? ' choice--correct deck-card--correct'   : '') +
            (isSel && status === 'incorrect' ? ' choice--incorrect deck-card--incorrect' : '') +
            (isSel ? ' deck-card--flipped' : '');
          return (
            <button
              key={c.id}
              className={cls}
              onClick={() => handlePick(c.id, c.isCorrect)}
              disabled={status === 'correct'}
              aria-label={c.label}
            >
              {isDeck ? (
                <>
                  <span className="deck-card__back" aria-hidden>🃏</span>
                  <span className="deck-card__face">
                    <span className="choice__icon" aria-hidden>
                      {isSel && status === 'correct'   ? '✓'
                       : isSel && status === 'incorrect' ? '✕'
                       : ''}
                    </span>
                    <span className="choice__text">{c.label}</span>
                  </span>
                  <span className="deck-card__hint">{c.label}</span>
                </>
              ) : (
                <>
                  <span className="choice__icon" aria-hidden>
                    {isSel && status === 'correct'   ? '✓'
                     : isSel && status === 'incorrect' ? '✕'
                     : ''}
                  </span>
                  <span className="choice__text">{c.label}</span>
                </>
              )}
            </button>
          );
        })}
      </div>
      {status === 'incorrect' && card.hint && (
        <p className="card__hint" role="status">💡 Hint: {card.hint}</p>
      )}
    </div>
  );
}

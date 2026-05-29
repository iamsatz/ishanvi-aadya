import { useState } from 'react';
import type { LearningCard } from '../../types/content';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

type Status = 'idle' | 'correct' | 'incorrect';

export function ChoiceCards({ card, onComplete }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  function handlePick(choiceId: string, isCorrect: boolean) {
    if (status === 'correct') return;
    setSelectedId(choiceId);
    setStatus(isCorrect ? 'correct' : 'incorrect');
    onComplete(isCorrect);
    if (!isCorrect) window.setTimeout(() => setStatus('idle'), 450);
  }

  return (
    <div>
      <div className="choices" role="group" aria-label="Choices">
        {card.choices?.map((c) => {
          const isSel = selectedId === c.id;
          const cls =
            'choice' +
            (isSel && status === 'correct'   ? ' choice--correct'   : '') +
            (isSel && status === 'incorrect' ? ' choice--incorrect' : '');
          return (
            <button
              key={c.id}
              className={cls}
              onClick={() => handlePick(c.id, c.isCorrect)}
              disabled={status === 'correct'}
              aria-label={c.label}
            >
              <span className="choice__icon" aria-hidden>
                {isSel && status === 'correct'   ? '✓'
                 : isSel && status === 'incorrect' ? '✕'
                 : ''}
              </span>
              <span className="choice__text">{c.label}</span>
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

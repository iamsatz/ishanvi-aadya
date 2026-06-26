import { useState } from 'react';
import type { LearningCard } from '../../types/content';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

export function TapRevealCard({ card, onComplete }: Props) {
  const [revealed, setRevealed] = useState(false);
  const isDeck = card.cardStyle === 'deck';

  function handleTap() {
    if (revealed) return;
    setRevealed(true);
    onComplete(true);
  }

  if (isDeck) {
    return (
      <button
        className={`deck-flip${revealed ? ' deck-flip--open' : ''}`}
        onClick={handleTap}
        aria-pressed={revealed}
        aria-label={revealed ? 'Answer revealed' : 'Tap card to flip'}
      >
        <span className="deck-flip__inner">
          <span className="deck-flip__back">
            <span className="deck-flip__emoji" aria-hidden>📖</span>
            Tap to see answer
          </span>
          <span className="deck-flip__face">{card.revealAnswer}</span>
        </span>
      </button>
    );
  }

  return (
    <button
      className="tap-reveal"
      onClick={handleTap}
      aria-pressed={revealed}
      aria-label={revealed ? 'Answer revealed' : 'Tap to reveal answer'}
    >
      {revealed
        ? <span className="tap-reveal__answer">{card.revealAnswer}</span>
        : 'Tap to see answer ✨'}
    </button>
  );
}

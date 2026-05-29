import { useState } from 'react';
import type { LearningCard } from '../../types/content';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

export function TapRevealCard({ card, onComplete }: Props) {
  const [revealed, setRevealed] = useState(false);

  function handleTap() {
    if (revealed) return;
    setRevealed(true);
    onComplete(true);
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
        : 'Tap to reveal ✨'}
    </button>
  );
}

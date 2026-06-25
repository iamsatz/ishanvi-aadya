import { useEffect, useRef, useState } from 'react';
import type { CommaDropGame } from '../../types/content';
import { formatIndian } from './util';

interface Props {
  game: CommaDropGame;
  onComplete: (correct: boolean) => void;
}

export function CommaDrop({ game, onComplete }: Props) {
  const digits = game.digits.replace(/\D/g, '');
  const len = digits.length;

  // Correct gaps: counting digits to the right of the gap, comma where count is 3, 5, 7...
  const correctGaps = new Set<number>();
  for (let i = 0; i < len - 1; i++) {
    const rightCount = len - 1 - i;
    if (rightCount >= 3 && (rightCount - 3) % 2 === 0) correctGaps.add(i);
  }

  const [filled, setFilled] = useState<Set<number>>(new Set());
  const [wrongGap, setWrongGap] = useState<number | null>(null);
  const won = useRef(false);

  const done = filled.size === correctGaps.size && [...correctGaps].every((g) => filled.has(g));

  useEffect(() => {
    if (done && !won.current) { won.current = true; onComplete(true); }
  }, [done, onComplete]);

  function tapGap(i: number) {
    if (filled.has(i)) return;
    if (correctGaps.has(i)) {
      setFilled((prev) => new Set(prev).add(i));
    } else {
      setWrongGap(i);
      onComplete(false);
      window.setTimeout(() => setWrongGap(null), 400);
    }
  }

  return (
    <div className="game game--commadrop">
      <div className="game-number" role="group" aria-label="Place the commas">
        {digits.split('').map((d, i) => (
          <span className="game-number__unit" key={i}>
            <span className="game-number__digit">{d}</span>
            {i < len - 1 && (
              <button
                type="button"
                className="game-gap"
                data-filled={filled.has(i)}
                data-wrong={wrongGap === i}
                onClick={() => tapGap(i)}
                aria-label={`Gap after digit ${i + 1}`}
              >
                {filled.has(i) ? ',' : ''}
              </button>
            )}
          </span>
        ))}
      </div>

      <p className="game-status">
        {done
          ? `🎉 Perfect: ${formatIndian(digits)}`
          : 'Tap the gaps where a comma belongs (start from the right!).'}
      </p>
    </div>
  );
}

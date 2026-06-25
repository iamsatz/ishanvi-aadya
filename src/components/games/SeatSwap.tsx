import { useEffect, useRef, useState } from 'react';
import type { SeatSwapGame } from '../../types/content';
import { SEATS, FAMILY_VAR, formatIndian } from './util';

interface Props {
  game: SeatSwapGame;
  onComplete: (correct: boolean) => void;
}

export function SeatSwap({ game, onComplete }: Props) {
  const digit = game.digit;
  const target = game.targetSeat;
  const seats = SEATS.filter((s) => s.index <= Math.max(target, 5));
  const [seat, setSeat] = useState(0);
  const won = useRef(false);

  const value = Number(digit) * Math.pow(10, seat);
  const current = SEATS[seat];
  const atTarget = seat === target;

  useEffect(() => {
    if (atTarget && !won.current) {
      won.current = true;
      onComplete(true);
    }
  }, [atTarget, onComplete]);

  return (
    <div className="game game--seatswap">
      <div className="game-readout">
        <span className="game-readout__digit" style={{ background: FAMILY_VAR[current.family] }}>
          {digit}
        </span>
        <span className="game-readout__text">
          <strong>{digit}</strong> in the <strong>{current.place}</strong> seat
          <span className="game-readout__value">= {formatIndian(value)}</span>
        </span>
      </div>

      <div className="game-seats" role="group" aria-label="Place value seats">
        {[...seats].reverse().map((s) => {
          const here = s.index === seat;
          const isTarget = s.index === target;
          return (
            <button
              key={s.index}
              type="button"
              className="game-seat"
              data-here={here}
              data-target={isTarget}
              style={{ '--seat-color': FAMILY_VAR[s.family] } as React.CSSProperties}
              onClick={() => setSeat(s.index)}
              aria-pressed={here}
            >
              <span className="game-seat__chip">{here ? digit : ''}</span>
              <span className="game-seat__place">{s.place}</span>
              <span className="game-seat__family">{s.family}</span>
            </button>
          );
        })}
      </div>

      <p className="game-status">
        {atTarget
          ? `Yes! Same ${digit}, but in ${current.place} it is worth ${formatIndian(value)}.`
          : `Tap the ${SEATS[target].place} seat to move the ${digit} there.`}
      </p>
    </div>
  );
}

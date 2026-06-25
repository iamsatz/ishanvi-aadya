import { useEffect, useRef, useState } from 'react';
import type { PodiumGame } from '../../types/content';
import { formatIndian, seededShuffle } from './util';

interface Props {
  game: PodiumGame;
  onComplete: (correct: boolean) => void;
}

export function Podium({ game, onComplete }: Props) {
  const ordered = [...game.items].sort((a, b) => a.value - b.value); // ascending
  const chips = ordered.map((it, i) => ({ id: i, ...it }));
  const seed = game.items.map((i) => i.value).join('-');
  const shuffled = useRef(seededShuffle(chips, seed)).current;

  const [step, setStep] = useState(0);
  const [placedIds, setPlacedIds] = useState<Set<number>>(new Set());
  const [wrong, setWrong] = useState<number | null>(null);
  const won = useRef(false);

  const done = step >= ordered.length;

  useEffect(() => {
    if (done && !won.current) { won.current = true; onComplete(true); }
  }, [done, onComplete]);

  function pick(chip: { id: number; label: string; value: number }) {
    if (placedIds.has(chip.id)) return;
    if (chip.value === ordered[step].value) {
      setPlacedIds((prev) => new Set(prev).add(chip.id));
      setStep((s) => s + 1);
    } else {
      setWrong(chip.id);
      onComplete(false);
      window.setTimeout(() => setWrong(null), 400);
    }
  }

  return (
    <div className="game game--podium">
      <div className="game-podium__slots">
        {ordered.map((it, i) => (
          <div className="game-podium__slot" key={i} data-filled={i < step}>
            <span className="game-podium__rank">{i === 0 ? 'Smallest' : i === ordered.length - 1 ? 'Greatest' : `#${i + 1}`}</span>
            <span className="game-podium__val">
              {i < step ? `${it.label} (${formatIndian(it.value)})` : '—'}
            </span>
          </div>
        ))}
      </div>

      {done ? (
        <p className="game-status">🎉 Ordered smallest to greatest — no calculator needed!</p>
      ) : (
        <>
          <div className="game-tray">
            {shuffled.map((c) => {
              const placed = placedIds.has(c.id);
              return (
                <button
                  key={c.id}
                  type="button"
                  className="game-chip"
                  data-wrong={wrong === c.id}
                  data-placed={placed}
                  disabled={placed}
                  onClick={() => pick(c)}
                >
                  {c.label}
                  <small>{formatIndian(c.value)}</small>
                </button>
              );
            })}
          </div>
          <p className="game-status">Tap them from SMALLEST to greatest. Compare the lakhs first!</p>
        </>
      )}
    </div>
  );
}

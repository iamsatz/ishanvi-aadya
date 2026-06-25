import { useEffect, useRef, useState } from 'react';
import type { NumberBuilderGame } from '../../types/content';
import { seededShuffle } from './util';

interface Props {
  game: NumberBuilderGame;
  onComplete: (correct: boolean) => void;
}

export function NumberBuilder({ game, onComplete }: Props) {
  const pieces = game.pieces;
  const shuffled = useRef(
    seededShuffle(pieces.map((p, i) => ({ id: i, value: p })), game.result)
  ).current;

  const [step, setStep] = useState(0); // how many placed in order
  const [placedIds, setPlacedIds] = useState<Set<number>>(new Set());
  const [wrong, setWrong] = useState<number | null>(null);
  const won = useRef(false);

  const done = step >= pieces.length;

  useEffect(() => {
    if (done && !won.current) { won.current = true; onComplete(true); }
  }, [done, onComplete]);

  function pick(piece: { id: number; value: string }) {
    if (placedIds.has(piece.id)) return;
    if (piece.value === pieces[step]) {
      setPlacedIds((prev) => new Set(prev).add(piece.id));
      setStep((s) => s + 1);
    } else {
      setWrong(piece.id);
      onComplete(false);
      window.setTimeout(() => setWrong(null), 400);
    }
  }

  return (
    <div className="game game--builder">
      <div className="game-build-strip" aria-label="Building the number">
        {pieces.slice(0, step).map((p, i) => (
          <span className="game-build-piece" key={i}>
            {p}{i < step - 1 ? ' +' : ''}
          </span>
        ))}
        {!done && <span className="game-build-slot">+ ?</span>}
      </div>

      {done ? (
        <p className="game-status">🎉 Built it: <strong>{game.result}</strong></p>
      ) : (
        <>
          <div className="game-build-tray">
            {shuffled.map((p) => {
              const placed = placedIds.has(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  className="game-chip"
                  data-wrong={wrong === p.id}
                  data-placed={placed}
                  disabled={placed}
                  onClick={() => pick(p)}
                >
                  {p.value}
                </button>
              );
            })}
          </div>
          <p className="game-status">Tap the pieces from the BIGGEST place value to the smallest.</p>
        </>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import type { NeighboursGame } from '../../types/content';
import { formatIndian, seededShuffle } from './util';

interface Props {
  game: NeighboursGame;
  onComplete: (correct: boolean) => void;
}

export function Neighbours({ game, onComplete }: Props) {
  const center = Number(game.center.replace(/\D/g, ''));
  const pred = center - 1;
  const succ = center + 1;

  const predOpts = useRef(seededShuffle([pred, center - 2, center], `p${center}`)).current;
  const succOpts = useRef(seededShuffle([succ, center + 2, center], `s${center}`)).current;

  const [predOk, setPredOk] = useState(false);
  const [succOk, setSuccOk] = useState(false);
  const [wrong, setWrong] = useState<string | null>(null);
  const won = useRef(false);

  const done = predOk && succOk;

  useEffect(() => {
    if (done && !won.current) { won.current = true; onComplete(true); }
  }, [done, onComplete]);

  function tap(kind: 'pred' | 'succ', val: number) {
    const correct = kind === 'pred' ? pred : succ;
    if (val === correct) {
      if (kind === 'pred') setPredOk(true); else setSuccOk(true);
    } else {
      setWrong(`${kind}-${val}`);
      onComplete(false);
      window.setTimeout(() => setWrong(null), 400);
    }
  }

  return (
    <div className="game game--neighbours">
      <div className="game-neigh__center">
        <span className="game-neigh__label">Our number</span>
        <span className="game-neigh__num">{formatIndian(center)}</span>
      </div>

      <div className="game-neigh__row">
        <p className="game-neigh__ask">Predecessor (just before, −1){predOk ? ' ✓' : ''}</p>
        <div className="game-neigh__opts">
          {predOpts.map((v) => (
            <button
              key={`p${v}`}
              type="button"
              className="game-chip"
              data-correct={predOk && v === pred}
              data-wrong={wrong === `pred-${v}`}
              disabled={predOk}
              onClick={() => tap('pred', v)}
            >
              {formatIndian(v)}
            </button>
          ))}
        </div>
      </div>

      <div className="game-neigh__row">
        <p className="game-neigh__ask">Successor (just after, +1){succOk ? ' ✓' : ''}</p>
        <div className="game-neigh__opts">
          {succOpts.map((v) => (
            <button
              key={`s${v}`}
              type="button"
              className="game-chip"
              data-correct={succOk && v === succ}
              data-wrong={wrong === `succ-${v}`}
              disabled={succOk}
              onClick={() => tap('succ', v)}
            >
              {formatIndian(v)}
            </button>
          ))}
        </div>
      </div>

      <p className="game-status">
        {done ? '🎉 You found both neighbours!' : 'Tap the correct neighbour in each row.'}
      </p>
    </div>
  );
}

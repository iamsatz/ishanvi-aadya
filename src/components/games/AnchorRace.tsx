import { useEffect, useRef, useState } from 'react';
import type { AnchorRaceGame } from '../../types/content';
import { seededShuffle } from './util';

interface Props {
  game: AnchorRaceGame;
  onComplete: (correct: boolean) => void;
}

export function AnchorRace({ game, onComplete }: Props) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState<string | null>(null);
  const won = useRef(false);

  const total = game.rounds.length;
  const finished = round >= total;
  const r = game.rounds[Math.min(round, total - 1)];

  const options = useRef<Record<number, string[]>>({});
  if (!options.current[round] && !finished) {
    options.current[round] = seededShuffle([r.name, ...r.distractors], r.number);
  }

  useEffect(() => {
    if (finished && !won.current) { won.current = true; onComplete(true); }
  }, [finished, onComplete]);

  function pick(name: string) {
    if (name === r.name) {
      setScore((s) => s + 1);
      setRound((x) => x + 1);
    } else {
      setWrong(name);
      onComplete(false);
      window.setTimeout(() => setWrong(null), 400);
    }
  }

  if (finished) {
    return (
      <div className="game game--anchor">
        <p className="game-status">🎉 News anchor! You read {score}/{total} correctly.</p>
      </div>
    );
  }

  return (
    <div className="game game--anchor">
      <div className="game-anchor__head">
        <span className="game-anchor__round">Number {round + 1} of {total}</span>
        <span className="game-anchor__number">{r.number}</span>
      </div>
      <div className="game-anchor__options">
        {options.current[round].map((name) => (
          <button
            key={name}
            type="button"
            className="game-anchor__opt"
            data-wrong={wrong === name}
            onClick={() => pick(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="game-status">Read it like a news anchor — tap the matching name.</p>
    </div>
  );
}

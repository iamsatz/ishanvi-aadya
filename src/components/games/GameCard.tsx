import type { ReactNode } from 'react';
import type { LearningCard } from '../../types/content';
import { SeatSwap } from './SeatSwap';
import { FamilySort } from './FamilySort';
import { CommaDrop } from './CommaDrop';
import { AnchorRace } from './AnchorRace';
import { NumberBuilder } from './NumberBuilder';
import { Podium } from './Podium';
import { Neighbours } from './Neighbours';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

export function GameCard({ card, onComplete }: Props) {
  const game = card.game;
  if (!game) return null;

  const wrap = (node: ReactNode) =>
    card.cardStyle === 'deck'
      ? <div className="game-deck">{node}</div>
      : node;

  switch (game.kind) {
    case 'seat-swap':      return wrap(<SeatSwap      game={game} onComplete={onComplete} />);
    case 'family-sort':    return wrap(<FamilySort    game={game} onComplete={onComplete} />);
    case 'comma-drop':     return wrap(<CommaDrop     game={game} onComplete={onComplete} />);
    case 'anchor-race':    return wrap(<AnchorRace    game={game} onComplete={onComplete} />);
    case 'number-builder': return wrap(<NumberBuilder game={game} onComplete={onComplete} />);
    case 'podium':         return wrap(<Podium        game={game} onComplete={onComplete} />);
    case 'neighbours':     return wrap(<Neighbours    game={game} onComplete={onComplete} />);
  }
}

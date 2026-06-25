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

  switch (game.kind) {
    case 'seat-swap':      return <SeatSwap      game={game} onComplete={onComplete} />;
    case 'family-sort':    return <FamilySort    game={game} onComplete={onComplete} />;
    case 'comma-drop':     return <CommaDrop     game={game} onComplete={onComplete} />;
    case 'anchor-race':    return <AnchorRace    game={game} onComplete={onComplete} />;
    case 'number-builder': return <NumberBuilder game={game} onComplete={onComplete} />;
    case 'podium':         return <Podium        game={game} onComplete={onComplete} />;
    case 'neighbours':     return <Neighbours    game={game} onComplete={onComplete} />;
  }
}

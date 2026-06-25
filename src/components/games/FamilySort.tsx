import { useEffect, useRef, useState } from 'react';
import type { FamilySortGame } from '../../types/content';
import { indianGroups, FAMILY_VAR, seededShuffle } from './util';

interface Props {
  game: FamilySortGame;
  onComplete: (correct: boolean) => void;
}

const FAMILY_ORDER = ['Crores', 'Lakhs', 'Thousands', 'Ones'] as const;
type Family = (typeof FAMILY_ORDER)[number];

export function FamilySort({ game, onComplete }: Props) {
  // Groups left-to-right; map each to its family by position from the right.
  const groups = indianGroups(game.digits);
  const familiesForGroups: Family[] = groups.map((_, i) => {
    const fromRight = groups.length - 1 - i; // 0 = ones, 1 = thousands...
    return (['Ones', 'Thousands', 'Lakhs', 'Crores'][fromRight] ?? 'Crores') as Family;
  });

  const chips = groups.map((g, i) => ({ id: `${i}-${g}`, value: g, family: familiesForGroups[i] }));
  const shuffled = useRef(seededShuffle(chips, game.digits)).current;

  const houses = FAMILY_ORDER.filter((f) => familiesForGroups.includes(f));
  const [placed, setPlaced] = useState<Record<string, string>>({}); // chipId -> family
  const [selected, setSelected] = useState<string | null>(null);
  const [wrongHouse, setWrongHouse] = useState<Family | null>(null);
  const won = useRef(false);

  const allPlaced = shuffled.every((c) => placed[c.id]);

  useEffect(() => {
    if (allPlaced && !won.current) { won.current = true; onComplete(true); }
  }, [allPlaced, onComplete]);

  function tapHouse(family: Family) {
    if (!selected) return;
    const chip = shuffled.find((c) => c.id === selected);
    if (!chip) return;
    if (chip.family === family) {
      setPlaced((p) => ({ ...p, [chip.id]: family }));
      setSelected(null);
    } else {
      setWrongHouse(family);
      onComplete(false);
      window.setTimeout(() => setWrongHouse(null), 400);
    }
  }

  return (
    <div className="game game--familysort">
      <div className="game-tray" role="group" aria-label="Number groups">
        {shuffled.map((c) => {
          const isPlaced = !!placed[c.id];
          return (
            <button
              key={c.id}
              type="button"
              className="game-chip"
              data-selected={selected === c.id}
              data-placed={isPlaced}
              disabled={isPlaced}
              onClick={() => setSelected(c.id)}
            >
              {c.value}
            </button>
          );
        })}
      </div>

      <div className="game-houses">
        {houses.map((f) => {
          const here = shuffled.filter((c) => placed[c.id] === f);
          return (
            <button
              key={f}
              type="button"
              className="game-house"
              data-wrong={wrongHouse === f}
              style={{ '--seat-color': FAMILY_VAR[f] } as React.CSSProperties}
              onClick={() => tapHouse(f)}
            >
              <span className="game-house__name">{f}</span>
              <span className="game-house__slot">
                {here.length ? here.map((c) => c.value).join(' ') : 'tap to place'}
              </span>
            </button>
          );
        })}
      </div>

      <p className="game-status">
        {allPlaced
          ? '🎉 Every group is in its family!'
          : selected
            ? 'Now tap the family house it belongs to.'
            : 'Tap a group, then tap its family house.'}
      </p>
    </div>
  );
}

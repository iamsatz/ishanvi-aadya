import { useEffect, useMemo, useState } from 'react';
import type { LearningCard, Pair } from '../../types/content';

interface Props {
  card: LearningCard;
  onComplete: (correct: boolean) => void;
}

type Side = 'left' | 'right';

/** Stable shuffle per card id so order doesn't jump on re-render. */
function shuffled<T>(arr: T[], seed: string): T[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return [...arr].sort(() => {
    h = (h * 9301 + 49297) % 233280;
    return h / 233280 - 0.5;
  });
}

/**
 * Right column dedupes by value so categorization (many-to-1) works:
 * 5 waste items, 2 unique bins → right column shows 2 chips.
 * 1:1 pairings (Hanuman/gods) → right shows all uniques (= same count).
 * Matching compares by `right` VALUE, not pair id.
 */
export function MatchPairsCard({ card, onComplete }: Props) {
  const pairs: Pair[] = card.pairs ?? [];

  const leftItems = useMemo(() => shuffled(pairs, card.id + 'L'), [pairs, card.id]);
  const rightUnique = useMemo(() => {
    const seen = new Set<string>();
    const out: { id: string; right: string }[] = [];
    for (const p of pairs) {
      if (!seen.has(p.right)) { seen.add(p.right); out.push({ id: p.right, right: p.right }); }
    }
    return shuffled(out, card.id + 'R');
  }, [pairs, card.id]);

  const [selected, setSelected] = useState<{ side: Side; key: string } | null>(null);
  const [matchedLeftIds, setMatchedLeftIds] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<{ side: Side; key: string } | null>(null);

  const total = pairs.length;
  const done = matchedLeftIds.size;

  useEffect(() => {
    if (done > 0 && done === total) onComplete(true);
  }, [done, total, onComplete]);

  function pick(side: Side, key: string) {
    // For left side, key === pair.id; for right side, key === right.value.
    if (side === 'left' && matchedLeftIds.has(key)) return;

    if (!selected) { setSelected({ side, key }); return; }
    if (selected.side === side) { setSelected({ side, key }); return; }

    // Resolve which is left vs right
    const leftKey  = selected.side === 'left'  ? selected.key : key;
    const rightVal = selected.side === 'right' ? selected.key : key;
    const leftPair = pairs.find((p) => p.id === leftKey);
    const isMatch = leftPair?.right === rightVal;

    if (isMatch && leftPair) {
      const next = new Set(matchedLeftIds); next.add(leftPair.id);
      setMatchedLeftIds(next);
      setSelected(null);
    } else {
      setWrong({ side, key });
      onComplete(false);
      window.setTimeout(() => { setWrong(null); setSelected(null); }, 400);
    }
  }

  return (
    <div>
      <div className="pairs">
        <div className="pairs__col">
          {leftItems.map((p) => {
            const isMatched = matchedLeftIds.has(p.id);
            const isSel = selected?.side === 'left' && selected.key === p.id;
            const isWrong = wrong?.side === 'left' && wrong.key === p.id;
            return (
              <button
                key={'L' + p.id}
                className="pair-chip"
                data-selected={isSel}
                data-matched={isMatched}
                data-wrong={isWrong}
                onClick={() => pick('left', p.id)}
              >
                {p.left}
              </button>
            );
          })}
        </div>
        <div className="pairs__col">
          {rightUnique.map((r) => {
            const isSel = selected?.side === 'right' && selected.key === r.right;
            const isWrong = wrong?.side === 'right' && wrong.key === r.right;
            return (
              <button
                key={'R' + r.id}
                className="pair-chip"
                data-selected={isSel}
                data-wrong={isWrong}
                onClick={() => pick('right', r.right)}
              >
                {r.right}
              </button>
            );
          })}
        </div>
      </div>
      <p className="pairs__status">
        {done === total
          ? '🎉 All matched!'
          : `Matched ${done} of ${total} — tap one on the left, then one on the right.`}
      </p>
    </div>
  );
}

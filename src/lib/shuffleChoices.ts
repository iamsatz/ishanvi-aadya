import type { Choice } from '../types/content';

/** Simple deterministic hash from a string seed. */
function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Fisher–Yates shuffle with a seeded PRNG — stable order per question id. */
function seededShuffle<T>(items: T[], seed: string): T[] {
  const out = [...items];
  let state = hashSeed(seed);
  for (let i = out.length - 1; i > 0; i--) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const j = state % (i + 1);
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/** Return choices in a shuffled order keyed by question/card id. */
export function shuffleChoices<T extends Pick<Choice, 'id'>>(choices: T[], seed: string): T[] {
  if (choices.length <= 1) return choices;
  return seededShuffle(choices, seed);
}

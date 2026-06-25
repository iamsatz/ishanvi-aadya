/* Shared helpers for Number Families games. */

/** Format an integer (number or digit string) with Indian-system commas. */
export function formatIndian(n: number | string): string {
  const s = typeof n === 'number' ? Math.trunc(n).toString() : n.replace(/\D/g, '');
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const withCommas = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return `${withCommas},${last3}`;
}

export interface Seat {
  index: number;     // 0 = ones, increasing left
  place: string;     // ones, tens, hundreds, thousands...
  family: 'Ones' | 'Thousands' | 'Lakhs' | 'Crores';
}

/** Seats from ones (0) up to crores (7). */
export const SEATS: Seat[] = [
  { index: 0, place: 'Ones',          family: 'Ones' },
  { index: 1, place: 'Tens',          family: 'Ones' },
  { index: 2, place: 'Hundreds',      family: 'Ones' },
  { index: 3, place: 'Thousands',     family: 'Thousands' },
  { index: 4, place: 'Ten Thousands', family: 'Thousands' },
  { index: 5, place: 'Lakhs',         family: 'Lakhs' },
  { index: 6, place: 'Ten Lakhs',     family: 'Lakhs' },
  { index: 7, place: 'Crores',        family: 'Crores' },
];

export const FAMILY_VAR: Record<Seat['family'], string> = {
  Ones: 'var(--c-ones)',
  Thousands: 'var(--c-thousands)',
  Lakhs: 'var(--c-lakhs)',
  Crores: 'var(--c-crores)',
};

/** Split a comma-less digit string into Indian period groups, left-to-right. */
export function indianGroups(digits: string): string[] {
  return formatIndian(digits).split(',');
}

/** Stable shuffle keyed by a seed so order doesn't jump on re-render. */
export function seededShuffle<T>(arr: T[], seed: string): T[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    h = (h * 9301 + 49297) % 233280;
    const j = Math.floor((h / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

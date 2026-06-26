import { useEffect } from 'react';

const FOCUSABLE =
  'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isTvMode(): boolean {
  return document.querySelector('.app[data-tv="true"]') !== null;
}

function isTypingTarget(el: Element | null): boolean {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || (el as HTMLElement).isContentEditable;
}

function visibleFocusables(root: ParentNode): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => {
    if (el.offsetParent === null && el.tagName !== 'BODY') return false;
    const style = window.getComputedStyle(el);
    return style.visibility !== 'hidden' && style.display !== 'none';
  });
}

function center(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function nearestInDirection(
  current: HTMLElement,
  candidates: HTMLElement[],
  dir: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
): HTMLElement | null {
  const cur = center(current);
  let best: HTMLElement | null = null;
  let bestDist = Infinity;

  for (const el of candidates) {
    if (el === current) continue;
    const c = center(el);
    const dx = c.x - cur.x;
    const dy = c.y - cur.y;

    let ok = false;
    if (dir === 'ArrowRight') ok = dx > 0 && Math.abs(dy) < Math.abs(dx) * 2;
    if (dir === 'ArrowLeft') ok = dx < 0 && Math.abs(dy) < Math.abs(dx) * 2;
    if (dir === 'ArrowDown') ok = dy > 0 && Math.abs(dx) < Math.abs(dy) * 2;
    if (dir === 'ArrowUp') ok = dy < 0 && Math.abs(dx) < Math.abs(dy) * 2;
    if (!ok) continue;

    const dist = dx * dx + dy * dy;
    if (dist < bestDist) {
      bestDist = dist;
      best = el;
    }
  }

  return best;
}

function scrollableAncestor(el: HTMLElement | null): HTMLElement | null {
  let node = el?.parentElement ?? null;
  while (node) {
    const { overflowY } = window.getComputedStyle(node);
    const canScroll =
      (overflowY === 'auto' || overflowY === 'scroll') &&
      node.scrollHeight > node.clientHeight + 8;
    if (canScroll) return node;
    node = node.parentElement;
  }
  return null;
}

function tryScrollVertical(key: string, active: HTMLElement | null): boolean {
  if (key !== 'ArrowUp' && key !== 'ArrowDown') return false;

  const candidates = [
    scrollableAncestor(active),
    document.querySelector<HTMLElement>('.lightbox__scroll'),
    document.querySelector<HTMLElement>('.card__story'),
    document.querySelector<HTMLElement>('.card__play'),
    document.querySelector<HTMLElement>('.main'),
  ].filter(Boolean) as HTMLElement[];

  const scrollEl = candidates.find((el) => el.scrollHeight > el.clientHeight + 8);
  if (!scrollEl) return false;

  const delta = key === 'ArrowDown' ? 120 : -120;
  const atTop = scrollEl.scrollTop <= 0;
  const atBottom =
    scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 8;

  if (key === 'ArrowDown' && atBottom) return false;
  if (key === 'ArrowUp' && atTop) return false;

  scrollEl.scrollBy({ top: delta, behavior: 'smooth' });
  return true;
}

/** Geometric D-pad focus movement for TV remote mode. */
export function useSpatialNav(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const handler = (e: KeyboardEvent) => {
      if (!isTvMode()) return;
      if (document.querySelector('.lightbox')) return;
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

      const active = document.activeElement as HTMLElement | null;
      if (isTypingTarget(active)) return;

      if (tryScrollVertical(e.key, active)) {
        e.preventDefault();
        return;
      }

      const root = document.querySelector('.app') ?? document.body;
      const focusables = visibleFocusables(root);
      if (focusables.length === 0) return;

      const current = active && focusables.includes(active) ? active : focusables[0];
      const next = nearestInDirection(
        current,
        focusables,
        e.key as 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
      );

      if (next) {
        e.preventDefault();
        next.focus({ preventScroll: false });
        next.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [enabled]);
}

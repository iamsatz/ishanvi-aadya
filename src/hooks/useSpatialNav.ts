import { useEffect } from 'react';

const FOCUSABLE =
  'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
    if (el.offsetParent === null && el.tagName !== 'BODY' && el.tagName !== 'SUMMARY') {
      const inOpenDetails = el.closest('details[open]');
      if (!inOpenDetails) return false;
    }
    const style = window.getComputedStyle(el);
    if (style.visibility === 'hidden' || style.display === 'none') return false;
    if (el.closest('[aria-hidden="true"]')) return false;
    return true;
  });
}

/** Modal overlays that should trap D-pad focus while open (checked in priority order). */
const MODAL_SELECTORS = [
  '.lightbox',
  '.ask-teacher',
  '.settings-panel',
  '.feedback-panel',
  '.index-editor',
  '.parent-upload',
  '.pin-gate',
  '.onboarding',
];

function navRoot(): ParentNode {
  for (const sel of MODAL_SELECTORS) {
    const modal = document.querySelector(sel);
    if (modal) return modal;
  }

  const menuPanel = document.querySelector('.nav-dd__panel');
  const menuOpen = document.querySelector('.nav-dd__trigger[aria-expanded="true"]');
  if (menuOpen && menuPanel) return menuPanel;

  return document.querySelector('.app') ?? document.body;
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

  const delta = key === 'ArrowDown' ? 220 : -220;
  const scrollEl =
    (active?.closest('.lightbox__scroll') as HTMLElement | null) ??
    scrollableAncestor(active) ??
    document.querySelector<HTMLElement>('.main');

  if (!scrollEl || scrollEl.scrollHeight <= scrollEl.clientHeight + 12) return false;

  const atTop = scrollEl.scrollTop <= 0;
  const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 12;

  if (key === 'ArrowDown' && atBottom) return false;
  if (key === 'ArrowUp' && atTop) return false;

  scrollEl.scrollTop += delta;
  return true;
}

function focusWithScroll(el: HTMLElement) {
  el.focus({ preventScroll: true });
  el.scrollIntoView({ block: 'center', inline: 'nearest' });
}

/** Geometric D-pad focus movement for TV remote mode. */
export function useSpatialNav(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const handler = (e: KeyboardEvent) => {
      if (!isTvMode()) return;
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

      const active = document.activeElement as HTMLElement | null;
      if (isTypingTarget(active)) return;

      const root = navRoot();
      const focusables = visibleFocusables(root);
      if (focusables.length === 0) return;

      const current =
        active && focusables.includes(active) ? active : focusables[0];
      const next = nearestInDirection(
        current,
        focusables,
        e.key as 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
      );

      if (next) {
        e.preventDefault();
        focusWithScroll(next);
        return;
      }

      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if (tryScrollVertical(e.key, active)) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [enabled]);
}

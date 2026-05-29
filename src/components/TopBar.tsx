import { useStore, selectActiveLesson } from '../state/store';
import { useProgress } from '../hooks/useProgress';

export function TopBar() {
  const openDrawer = useStore((s) => s.openDrawer);
  const lesson     = useStore(selectActiveLesson);
  const idx        = useStore((s) => s.activeIndex);
  const back       = useStore((s) => s.back);
  const next       = useStore((s) => s.next);
  const total      = lesson?.cards.length ?? 0;

  const atFirst = idx === 0;
  const atLast  = idx >= total - 1;

  return (
    <header className="topbar" role="banner">
      {/* Hamburger — hidden on desktop via CSS */}
      <button
        className="topbar__hamburger"
        onClick={openDrawer}
        aria-label="Open lessons menu"
      >
        ☰
      </button>

      {/* Title + card counter */}
      <div className="topbar__title">
        {lesson?.icon ?? '📖'} {lesson?.title ?? 'Learning'}
        <small>Card {Math.min(idx + 1, total)} of {total}</small>
      </div>

      {/* Top-level compact nav arrows — always visible, no scrolling required */}
      <nav className="topbar__nav" aria-label="Quick card navigation">
        <button
          className="topbar__arrow"
          onClick={back}
          disabled={atFirst}
          aria-label="Previous card"
          title="Previous card (←)"
        >
          ‹
        </button>
        <button
          className="topbar__arrow"
          onClick={next}
          disabled={atLast}
          aria-label="Next card"
          title="Next card (→)"
        >
          ›
        </button>
      </nav>
    </header>
  );
}

export function ProgressSlim() {
  const lessonId = useStore((s) => s.activeLessonId);
  const { percent } = useProgress(lessonId);
  return (
    <div
      className="progress-slim"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Lesson progress"
    >
      <div className="progress-slim__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}

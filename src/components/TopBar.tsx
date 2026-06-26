import { useStore, selectActiveLesson } from '../state/store';
import { useProgress } from '../hooks/useProgress';
import { NavDropdown } from './NavDropdown';

export function TopBar() {
  const lesson = useStore(selectActiveLesson);
  const idx = useStore((s) => s.activeIndex);
  const back = useStore((s) => s.back);
  const next = useStore((s) => s.next);
  const tvMode = useStore((s) => s.tvMode);
  const toggleTvMode = useStore((s) => s.toggleTvMode);
  const total = lesson?.cards.length ?? 0;
  const lessonId = useStore((s) => s.activeLessonId);
  const { percent } = useProgress(lessonId);

  const atFirst = idx === 0;
  const atLast = idx >= total - 1;

  return (
    <header className="topbar" role="banner">
      <NavDropdown />

      <div className="topbar__meta">
        <span className="topbar__step">
          Step {Math.min(idx + 1, total)}/{total}
        </span>
        <span className="topbar__pct">{percent}%</span>
      </div>

      <nav className="topbar__nav" aria-label="Quick card navigation">
        <button
          type="button"
          className={`topbar__pill topbar__pill--tv${tvMode ? ' topbar__pill--on' : ''}`}
          onClick={toggleTvMode}
          aria-pressed={tvMode}
          title="TV remote mode"
        >
          TV
        </button>
        <button
          type="button"
          className="topbar__arrow"
          onClick={back}
          disabled={atFirst}
          aria-label="Previous card"
          title="Previous (←)"
        >
          ‹
        </button>
        <button
          type="button"
          className="topbar__arrow"
          onClick={next}
          disabled={atLast}
          aria-label="Next card"
          title="Next (→)"
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

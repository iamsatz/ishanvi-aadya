import { useStore, selectActiveLesson } from '../state/store';
import { useProgress } from '../hooks/useProgress';

export function TopBar() {
  const openDrawer = useStore((s) => s.openDrawer);
  const lesson = useStore(selectActiveLesson);
  const idx = useStore((s) => s.activeIndex);
  const total = lesson?.cards.length ?? 0;

  return (
    <header className="topbar" role="banner">
      <button
        className="topbar__hamburger"
        onClick={openDrawer}
        aria-label="Open lessons menu"
      >
        ☰
      </button>
      <div className="topbar__title">
        {lesson?.icon ?? '📖'} {lesson?.title ?? 'Learning'}
        <small>Card {Math.min(idx + 1, total)} of {total}</small>
      </div>
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

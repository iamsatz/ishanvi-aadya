import { useStore, selectActiveLesson } from '../state/store';

export function NavControls() {
  const back = useStore((s) => s.back);
  const next = useStore((s) => s.next);
  const idx = useStore((s) => s.activeIndex);
  const lesson = useStore(selectActiveLesson);
  const total = lesson?.cards.length ?? 0;

  return (
    <nav className="nav" aria-label="Card navigation">
      <button
        className="btn btn--ghost"
        onClick={back}
        disabled={idx === 0}
        aria-label="Previous card"
      >
        ← Back
      </button>
      <button
        className="btn"
        onClick={next}
        disabled={idx >= total - 1}
        aria-label="Next card"
      >
        Next →
      </button>
    </nav>
  );
}

import { useEffect } from 'react';
import { useStore } from '../state/store';
import { useProgress } from '../hooks/useProgress';
import { UploadButton } from './UploadButton';
import type { Lesson, Section } from '../types/content';

function LessonRow({ lesson, active, onSelect }: {
  lesson: Lesson; active: boolean; onSelect: () => void;
}) {
  const { percent, done, total } = useProgress(lesson.id);
  return (
    <li>
      <button className="lesson-item" aria-current={active} onClick={onSelect}>
        <span className="lesson-item__icon" aria-hidden>{lesson.icon ?? '📖'}</span>
        <span>
          <span className="lesson-item__title">{lesson.title}</span>
          <span className="lesson-item__meta">
            {done}/{total} cards · {percent}%
            {lesson.hasTelugu ? ' · తెలుగు' : ''}
          </span>
        </span>
      </button>
    </li>
  );
}

const SECTIONS: { id: Section; label: string }[] = [
  { id: 'stories',  label: '📚 Stories' },
  { id: 'projects', label: '📝 Projects' },
];

export function Drawer() {
  const isOpen = useStore((s) => s.drawerOpen);
  const close = useStore((s) => s.closeDrawer);
  const lessons = useStore((s) => s.lessons);
  const activeId = useStore((s) => s.activeLessonId);
  const setActive = useStore((s) => s.setActiveLesson);
  const activeSection = useStore((s) => s.activeSection);
  const setSection = useStore((s) => s.setActiveSection);

  // ESC closes
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  const visibleLessons = lessons.filter((l) => l.section === activeSection);

  return (
    <>
      <div
        className="drawer-backdrop"
        data-open={isOpen}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <aside
        className="drawer"
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Lessons"
      >
        <div className="drawer__header">
          <h2 className="drawer__title">Learning</h2>
          <button className="drawer__close" onClick={close} aria-label="Close menu">✕</button>
        </div>

        <div className="drawer__tabs" role="tablist">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className="tab"
              role="tab"
              aria-pressed={activeSection === s.id}
              onClick={() => setSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <ul className="drawer__list">
          {visibleLessons.map((l) => (
            <LessonRow
              key={l.id}
              lesson={l}
              active={l.id === activeId}
              onSelect={() => setActive(l.id)}
            />
          ))}
          {visibleLessons.length === 0 && (
            <li style={{ color: 'var(--c-ink-soft)', textAlign: 'center' }}>
              No lessons here yet — add some below!
            </li>
          )}
        </ul>

        <div className="drawer__footer">
          <UploadButton />
        </div>
      </aside>
    </>
  );
}

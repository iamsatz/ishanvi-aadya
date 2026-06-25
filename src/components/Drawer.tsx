import { useEffect } from 'react';
import { useStore } from '../state/store';
import { useProgress } from '../hooks/useProgress';
import { UploadButton } from './UploadButton';
import { kids, kidById } from '../data/kids';
import type { Lesson } from '../types/content';

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

export function Drawer() {
  const isOpen = useStore((s) => s.drawerOpen);
  const close = useStore((s) => s.closeDrawer);
  const lessons = useStore((s) => s.lessons);
  const activeId = useStore((s) => s.activeLessonId);
  const setActive = useStore((s) => s.setActiveLesson);
  const activeKid = useStore((s) => s.activeKid);
  const setKid = useStore((s) => s.setActiveKid);

  const kid = kidById[activeKid];

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

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
          <div>
            <h2 className="drawer__title">{kid.name}</h2>
            <p className="drawer__kid-meta">{kid.grade} · {kid.board}</p>
          </div>
          <button className="drawer__close" onClick={close} aria-label="Close menu">✕</button>
        </div>

        <div className="drawer__tabs" role="tablist">
          {kids.map((k) => (
            <button
              key={k.id}
              className="tab"
              role="tab"
              aria-pressed={activeKid === k.id}
              onClick={() => setKid(k.id)}
            >
              {k.name}
            </button>
          ))}
        </div>

        <ul className="drawer__list">
          {kid.subjects.map((subject) => {
            const subjectLessons = lessons.filter(
              (l) => l.kid === activeKid && l.subject === subject.id
            );
            return (
              <li key={subject.id} className="drawer__subject-group">
                <h3 className="drawer__subject">
                  {subject.icon} {subject.label}
                </h3>
                {subjectLessons.length > 0 ? (
                  <ul className="drawer__subject-lessons">
                    {subjectLessons.map((l) => (
                      <LessonRow
                        key={l.id}
                        lesson={l}
                        active={l.id === activeId}
                        onSelect={() => setActive(l.id)}
                      />
                    ))}
                  </ul>
                ) : (
                  <p className="subject-empty">Coming soon</p>
                )}
              </li>
            );
          })}
        </ul>

        <div className="drawer__footer">
          <UploadButton />
        </div>
      </aside>
    </>
  );
}

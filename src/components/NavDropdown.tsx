import { useEffect, useRef, useState } from 'react';
import { useStore } from '../state/store';
import { kids, kidById } from '../data/kids';
import { useProgress } from '../hooks/useProgress';
import { MascotAvatar } from './MascotAvatar';
import type { KidId, Lesson } from '../types/content';

function LessonLink({ lesson, active, onSelect }: {
  lesson: Lesson; active: boolean; onSelect: () => void;
}) {
  const { percent } = useProgress(lesson.id);
  return (
    <button
      type="button"
      className="nav-dd__lesson"
      aria-current={active}
      onClick={onSelect}
    >
      <span className="nav-dd__lesson-icon">{lesson.icon ?? '📖'}</span>
      <span className="nav-dd__lesson-text">
        <span className="nav-dd__lesson-title">{lesson.title}</span>
        <span className="nav-dd__lesson-meta">{percent}% done</span>
      </span>
    </button>
  );
}

export function NavDropdown() {
  const [open, setOpen] = useState(false);
  const [browseKid, setBrowseKid] = useState<KidId>('ishanvi');
  const panelRef = useRef<HTMLDivElement>(null);

  const lessons = useStore((s) => s.lessons);
  const activeLessonId = useStore((s) => s.activeLessonId);
  const activeKid = useStore((s) => s.activeKid);
  const setActiveLesson = useStore((s) => s.setActiveLesson);
  const setActiveKid = useStore((s) => s.setActiveKid);

  const activeLesson = lessons.find((l) => l.id === activeLessonId);
  const kid = kidById[activeKid] ?? kidById.ishanvi;
  const subjectDef = kid.subjects.find((s) => s.id === activeLesson?.subject);

  useEffect(() => {
    if (!open) setBrowseKid(activeKid);
  }, [open, activeKid]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  function pickLesson(lessonId: string) {
    setActiveLesson(lessonId);
    setOpen(false);
  }

  const browseKidDef = kidById[browseKid] ?? kidById.ishanvi;

  return (
    <div className="nav-dd" ref={panelRef}>
      <button
        type="button"
        className="nav-dd__trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-dd__path">
          <span className="nav-dd__kid">{kid.name}</span>
          {subjectDef && (
            <>
              <span className="nav-dd__sep">›</span>
              <span className="nav-dd__subject">{subjectDef.label}</span>
            </>
          )}
          {activeLesson && (
            <>
              <span className="nav-dd__sep">›</span>
              <span className="nav-dd__lesson-name">{activeLesson.title}</span>
            </>
          )}
        </span>
        <span className="nav-dd__chev" aria-hidden>{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <div className="nav-dd__panel" role="menu">
          <div className="nav-dd__kids" role="tablist">
            {kids.map((k) => (
              <button
                key={k.id}
                type="button"
                role="tab"
                className="nav-dd__kid-tab"
                aria-pressed={browseKid === k.id}
                onClick={() => setBrowseKid(k.id)}
              >
                <span className="nav-dd__kid-mascot">
                  <MascotAvatar
                    avatar={k.mascot.avatar}
                    emoji={k.mascot.emoji}
                    compact
                  />
                </span>
                {k.name}
                <small>{k.grade}</small>
              </button>
            ))}
          </div>

          <p className="nav-dd__board">{browseKidDef.grade} · {browseKidDef.board}</p>

          <div className="nav-dd__sections">
            {browseKidDef.subjects.map((subject) => {
              const subjectLessons = lessons.filter(
                (l) => l.kid === browseKid && l.subject === subject.id
              );
              return (
                <section key={subject.id} className="nav-dd__section">
                  <h3 className="nav-dd__section-title">
                    {subject.icon} {subject.label}
                  </h3>
                  {subjectLessons.length > 0 ? (
                    subjectLessons.map((l) => (
                      <LessonLink
                        key={l.id}
                        lesson={l}
                        active={l.id === activeLessonId}
                        onSelect={() => {
                          setActiveKid(browseKid);
                          pickLesson(l.id);
                        }}
                      />
                    ))
                  ) : (
                    <p className="nav-dd__empty">Coming soon</p>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

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
  const triggerRef = useRef<HTMLButtonElement>(null);

  const lessons = useStore((s) => s.lessons);
  const activeLessonId = useStore((s) => s.activeLessonId);
  const activeKid = useStore((s) => s.activeKid);
  const tvMode = useStore((s) => s.tvMode);
  const setActiveLesson = useStore((s) => s.setActiveLesson);
  const setActiveKid = useStore((s) => s.setActiveKid);
  const requestPin = useStore((s) => s.requestPin);

  const activeLesson = lessons.find((l) => l.id === activeLessonId);
  const kid = kidById[activeKid] ?? kidById.ishanvi;
  const subjectDef = kid.subjects.find((s) => s.id === activeLesson?.subject);

  useEffect(() => {
    if (!open) setBrowseKid(activeKid);
  }, [open, activeKid]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('nav-dd-close', close);
    return () => window.removeEventListener('nav-dd-close', close);
  }, []);

  useEffect(() => {
    if (!open || !tvMode) return;
    const first = panelRef.current?.querySelector<HTMLElement>(
      'button:not([disabled]), a[href]'
    );
    first?.focus({ preventScroll: true });
  }, [open, tvMode, browseKid]);

  useEffect(() => {
    if (open) return;
    if (tvMode) triggerRef.current?.focus({ preventScroll: true });
  }, [open, tvMode]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (panelRef.current && target && !panelRef.current.contains(target)) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    // Defer so the opening pointer event doesn't instantly dismiss the panel.
    const id = window.setTimeout(() => {
      window.addEventListener('pointerdown', onPointerDown);
    }, 0);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(id);
      window.removeEventListener('pointerdown', onPointerDown);
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
        ref={triggerRef}
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
                <section
                  key={subject.id}
                  className={
                    'nav-dd__section' +
                    (subject.id === 'homework' ? ' nav-dd__section--weekend' : '')
                  }
                >
                  <h3 className="nav-dd__section-title">
                    {subject.icon} {subject.label}
                    {subject.id === 'homework' && (
                      <span className="nav-dd__section-badge">Start here</span>
                    )}
                  </h3>
                  {subject.id === 'homework' && !tvMode && (
                    <button
                      type="button"
                      className="nav-dd__upload"
                      onClick={() => {
                        setOpen(false);
                        requestPin('upload');
                      }}
                    >
                      <span className="nav-dd__upload-icon" aria-hidden>📷</span>
                      <span>
                        <strong>Upload homework photo</strong>
                        <small>Phone → appears on TV browser</small>
                      </span>
                    </button>
                  )}
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

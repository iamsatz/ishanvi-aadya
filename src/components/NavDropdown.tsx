import { useEffect, useRef, useState } from 'react';
import { useStore } from '../state/store';
import { useProgress } from '../hooks/useProgress';
import { MascotAvatar } from './MascotAvatar';
import { signOut } from '../lib/auth';
import { lessonMatchesSubject } from '../lib/subjectMatch';
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
  const [browseKid, setBrowseKid] = useState<KidId>('');
  const menuRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const lessons = useStore((s) => s.lessons);
  const kids = useStore((s) => s.kids);
  const activeLessonId = useStore((s) => s.activeLessonId);
  const activeKid = useStore((s) => s.activeKid);
  const tvMode = useStore((s) => s.tvMode);
  const setActiveLesson = useStore((s) => s.setActiveLesson);
  const setActiveKid = useStore((s) => s.setActiveKid);
  const requestPin = useStore((s) => s.requestPin);
  const openOnboarding = useStore((s) => s.openOnboarding);
  const openFeedback = useStore((s) => s.openFeedback);
  const setSession = useStore((s) => s.setSession);

  const activeLesson = lessons.find((l) => l.id === activeLessonId);
  const kid = kids.find((k) => k.id === activeKid) ?? kids[0];
  const subjectDef = kid?.subjects.find((s) => {
    if (!activeLesson) return false;
    return lessonMatchesSubject(activeLesson, s.id, s.label);
  });

  useEffect(() => {
    if (!open && activeKid) setBrowseKid(activeKid);
  }, [open, activeKid]);

  useEffect(() => {
    if (browseKid) return;
    if (activeKid) setBrowseKid(activeKid);
    else if (kids[0]) setBrowseKid(kids[0].id);
  }, [browseKid, activeKid, kids]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('nav-dd-close', close);
    return () => window.removeEventListener('nav-dd-close', close);
  }, []);

  useEffect(() => {
    if (!open || !tvMode) return;
    const first = panelRef.current?.querySelector<HTMLElement>('button:not([disabled]), a[href]');
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
      if (menuRef.current && target && !menuRef.current.contains(target)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const id = window.setTimeout(() => window.addEventListener('pointerdown', onPointerDown), 0);
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

  const browseKidDef = kids.find((k) => k.id === browseKid) ?? kid;

  async function handleSignOut() {
    await signOut();
    setSession(null);
    setOpen(false);
  }

  if (!kid) return null;

  return (
    <div className="nav-dd" ref={menuRef}>
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

      {open && browseKidDef && (
        <div className="nav-dd__panel" role="menu" ref={panelRef}>
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
                  <MascotAvatar avatar={k.mascot.avatar} emoji={k.mascot.emoji} compact />
                </span>
                {k.name}
                <small>{k.grade}</small>
              </button>
            ))}
            <button type="button" className="nav-dd__kid-tab nav-dd__kid-tab--add" onClick={() => { setOpen(false); openOnboarding(); }}>
              + Add child
            </button>
          </div>

          <p className="nav-dd__board">{browseKidDef.grade} · {browseKidDef.board}</p>

          <div className="nav-dd__sections">
            {browseKidDef.subjects.map((subject) => {
              const subjectLessons = lessons.filter(
                (l) => l.kid === browseKid && lessonMatchesSubject(l, subject.id, subject.label)
              );
              const isHomework = subject.label.toLowerCase().includes('homework');
              return (
                <section
                  key={subject.id}
                  className={'nav-dd__section' + (isHomework ? ' nav-dd__section--weekend' : '')}
                >
                  <h3 className="nav-dd__section-title">
                    {subject.icon} {subject.label}
                    {isHomework && <span className="nav-dd__section-badge">Start here</span>}
                  </h3>
                  {!tvMode && isHomework && (
                    <>
                      <button
                        type="button"
                        className="nav-dd__upload"
                        onClick={() => { setOpen(false); requestPin('upload'); }}
                      >
                        <span className="nav-dd__upload-icon" aria-hidden>📷</span>
                        <span>
                          <strong>Add homework</strong>
                          <small>Photo or text → AI help</small>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="nav-dd__upload"
                        onClick={() => { setOpen(false); requestPin('index'); }}
                      >
                        <span className="nav-dd__upload-icon" aria-hidden>📑</span>
                        <span>
                          <strong>Add subject index</strong>
                          <small>Syllabus → AI lessons</small>
                        </span>
                      </button>
                    </>
                  )}
                  {subjectLessons.length > 0 ? (
                    subjectLessons.map((l) => (
                      <LessonLink
                        key={l.id}
                        lesson={l}
                        active={l.id === activeLessonId}
                        onSelect={() => { setActiveKid(browseKid); pickLesson(l.id); }}
                      />
                    ))
                  ) : (
                    <p className="nav-dd__empty">No lessons yet — add homework or index above</p>
                  )}
                </section>
              );
            })}
          </div>

          <div className="nav-dd__footer">
            <button type="button" className="nav-dd__footer-btn" onClick={() => { setOpen(false); openFeedback(); }}>
              💬 Beta feedback
            </button>
            <button type="button" className="nav-dd__footer-btn" onClick={() => { setOpen(false); requestPin('settings'); }}>
              ⚙️ Settings
            </button>
            <button type="button" className="nav-dd__footer-btn" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

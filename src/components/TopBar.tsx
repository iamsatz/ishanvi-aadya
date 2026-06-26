import { useState } from 'react';
import { useStore, selectActiveLesson } from '../state/store';
import { useProgress } from '../hooks/useProgress';
import { NavDropdown } from './NavDropdown';
import { PinGate } from './PinGate';
import { ParentUpload } from './ParentUpload';
import { fetchCloudHomework } from '../lib/homeworkCloud';

export function TopBar() {
  const lesson = useStore(selectActiveLesson);
  const idx = useStore((s) => s.activeIndex);
  const back = useStore((s) => s.back);
  const next = useStore((s) => s.next);
  const tvMode = useStore((s) => s.tvMode);
  const toggleTvMode = useStore((s) => s.toggleTvMode);
  const parentMode = useStore((s) => s.parentMode);
  const setParentMode = useStore((s) => s.setParentMode);
  const refreshCloud = useStore((s) => s.mergeCloudLessons);
  const total = lesson?.cards.length ?? 0;
  const lessonId = useStore((s) => s.activeLessonId);
  const { percent } = useProgress(lessonId);

  const [pinOpen, setPinOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [pinPurpose, setPinPurpose] = useState<'parent' | 'upload'>('parent');

  const atFirst = idx === 0;
  const atLast = idx >= total - 1;

  function openPin(purpose: 'parent' | 'upload') {
    setPinPurpose(purpose);
    setPinOpen(true);
  }

  async function onPinSuccess() {
    setPinOpen(false);
    if (pinPurpose === 'parent') {
      setParentMode(true);
    } else {
      setUploadOpen(true);
    }
  }

  async function onUploadSaved() {
    const cloud = await fetchCloudHomework();
    refreshCloud(cloud);
  }

  return (
    <>
      <header className="topbar" role="banner">
        <NavDropdown />

        <div className="topbar__meta">
          <span className="topbar__step">
            Step {Math.min(idx + 1, total)}/{total}
          </span>
          <span className="topbar__pct">{percent}%</span>
        </div>

        <nav className="topbar__nav" aria-label="Quick card navigation">
          {parentMode ? (
            <button
              type="button"
              className="topbar__pill topbar__pill--parent topbar__pill--on"
              onClick={() => setParentMode(false)}
              aria-pressed
            >
              Parent ✓
            </button>
          ) : (
            <button
              type="button"
              className="topbar__pill topbar__pill--parent"
              onClick={() => openPin('parent')}
              title="Parent mode — answers & tips"
            >
              Parent
            </button>
          )}
          <button
            type="button"
            className="topbar__pill topbar__pill--upload"
            onClick={() => openPin('upload')}
            title="Upload homework"
          >
            Upload
          </button>
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

      <PinGate
        open={pinOpen}
        title={pinPurpose === 'upload' ? 'Parent PIN — Upload' : 'Parent PIN'}
        onSuccess={onPinSuccess}
        onCancel={() => setPinOpen(false)}
      />

      <ParentUpload
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onSaved={onUploadSaved}
      />
    </>
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

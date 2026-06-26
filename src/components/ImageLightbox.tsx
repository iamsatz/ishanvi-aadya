import { useEffect, useRef, useState } from 'react';

const ZOOM_STEPS = [1, 1.25, 1.5, 2, 2.5, 3, 4];
const SCROLL_STEP = 120;

interface Props {
  src: string;
  alt: string;
  open: boolean;
  tvMode?: boolean;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, open, tvMode = false, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [zoomIndex, setZoomIndex] = useState(2);

  const zoom = ZOOM_STEPS[zoomIndex] ?? 1;

  useEffect(() => {
    if (!open) return;
    setZoomIndex(tvMode ? 2 : 1);
    closeRef.current?.focus({ preventScroll: true });
  }, [open, src, tvMode]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      const scrollEl = scrollRef.current;
      if (e.key === 'ArrowDown' && scrollEl) {
        e.preventDefault();
        scrollEl.scrollBy({ top: SCROLL_STEP, behavior: 'smooth' });
        return;
      }
      if (e.key === 'ArrowUp' && scrollEl) {
        e.preventDefault();
        scrollEl.scrollBy({ top: -SCROLL_STEP, behavior: 'smooth' });
        return;
      }
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setZoomIndex((i) => Math.min(i + 1, ZOOM_STEPS.length - 1));
        return;
      }
      if (e.key === '-') {
        e.preventDefault();
        setZoomIndex((i) => Math.max(i - 1, 0));
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  function zoomIn() {
    setZoomIndex((i) => Math.min(i + 1, ZOOM_STEPS.length - 1));
  }

  function zoomOut() {
    setZoomIndex((i) => Math.max(i - 1, 0));
  }

  function resetZoom() {
    setZoomIndex(tvMode ? 2 : 1);
    scrollRef.current?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Zoomed image">
      <div className="lightbox__toolbar">
        <button
          type="button"
          ref={closeRef}
          className="lightbox__tool lightbox__tool--close"
          onClick={onClose}
          aria-label="Close zoom"
        >
          ✕ Close
        </button>
        <button type="button" className="lightbox__tool" onClick={zoomOut} disabled={zoomIndex === 0}>
          − Zoom out
        </button>
        <span className="lightbox__zoom-pct" aria-live="polite">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          className="lightbox__tool lightbox__tool--accent"
          onClick={zoomIn}
          disabled={zoomIndex >= ZOOM_STEPS.length - 1}
        >
          + Zoom in
        </button>
        <button type="button" className="lightbox__tool" onClick={resetZoom}>
          Reset
        </button>
      </div>
      <div className="lightbox__scroll" ref={scrollRef} tabIndex={0}>
        <img
          src={src}
          alt={alt}
          className="lightbox__img"
          style={{ width: `${zoom * 100}%`, maxWidth: 'none' }}
          draggable={false}
        />
      </div>
      <p className="lightbox__hint">
        {tvMode
          ? 'Remote: ▲▼ scroll · +/− zoom · ✕ close'
          : 'Scroll to read · use toolbar to zoom'}
      </p>
    </div>
  );
}

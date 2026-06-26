import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Zoomed image">
      <button
        type="button"
        ref={closeRef}
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close zoom"
      >
        ✕ Close
      </button>
      <div className="lightbox__scroll">
        <img src={src} alt={alt} className="lightbox__img" />
      </div>
      <p className="lightbox__hint">Remote: Back or ✕ to close · Scroll to read the page</p>
    </div>
  );
}

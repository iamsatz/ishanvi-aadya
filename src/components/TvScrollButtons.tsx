import type { RefObject } from 'react';

interface Props {
  targetRef: RefObject<HTMLElement | null>;
  label?: string;
}

const STEP = 180;

export function TvScrollButtons({ targetRef, label = 'Scroll' }: Props) {
  function scroll(delta: number) {
    targetRef.current?.scrollBy({ top: delta, behavior: 'smooth' });
  }

  return (
    <div className="tv-scroll" role="group" aria-label={label}>
      <button type="button" className="tv-scroll__btn" onClick={() => scroll(-STEP)}>
        ▲ Scroll up
      </button>
      <button type="button" className="tv-scroll__btn" onClick={() => scroll(STEP)}>
        ▼ Scroll down
      </button>
    </div>
  );
}

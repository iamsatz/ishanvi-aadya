interface Props {
  label?: string;
}

const STEP = 220;

function scrollPage(delta: number) {
  const candidates = [
    document.querySelector<HTMLElement>('.main'),
    document.querySelector<HTMLElement>('.card__body'),
    document.documentElement,
  ].filter(Boolean) as HTMLElement[];

  for (const el of candidates) {
    if (el.scrollHeight > el.clientHeight + 12) {
      el.scrollTop += delta;
      return;
    }
  }
}

export function TvScrollButtons({ label = 'Scroll page' }: Props) {
  return (
    <div className="tv-scroll tv-scroll--page" role="group" aria-label={label}>
      <button type="button" className="tv-scroll__btn" onClick={() => scrollPage(-STEP)}>
        ▲ Scroll up
      </button>
      <button type="button" className="tv-scroll__btn" onClick={() => scrollPage(STEP)}>
        ▼ Scroll down
      </button>
    </div>
  );
}

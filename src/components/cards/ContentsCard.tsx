import { useStore } from '../../state/store';
import type { LearningCard, Lesson } from '../../types/content';

interface Props {
  card: LearningCard;
  lesson: Lesson;
  onComplete: (correct: boolean) => void;
}

export function ContentsCard({ card, lesson, onComplete }: Props) {
  const jumpToCard = useStore((s) => s.jumpToCard);
  const completed = useStore((s) => s.completed[lesson.id] ?? []);

  const entries = lesson.cards.filter((c) => c.id !== card.id && c.interactionType !== 'contents');

  function goTo(target: LearningCard) {
    jumpToCard(lesson.id, target.id);
    onComplete(true);
  }

  return (
    <div className="contents-card">
      <p className="contents-card__lead">Tap a topic to jump there:</p>
      <ul className="contents-card__list">
        {entries.map((entry, i) => {
          const done = completed.includes(entry.id);
          return (
            <li key={entry.id}>
              <button
                type="button"
                className="contents-card__row"
                data-done={done || undefined}
                onClick={() => goTo(entry)}
              >
                <span className="contents-card__num">{i + 1}</span>
                <span className="contents-card__text">
                  <span className="contents-card__title">{entry.title}</span>
                  {entry.subtitle && (
                    <span className="contents-card__sub">{entry.subtitle}</span>
                  )}
                  {entry.sheetTag && (
                    <span className="contents-card__tag">{entry.sheetTag}</span>
                  )}
                </span>
                <span className="contents-card__check" aria-hidden>{done ? '✓' : '→'}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

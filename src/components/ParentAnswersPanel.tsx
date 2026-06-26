import type { LearningCard, Lesson } from '../types/content';
import { getParentAnswers } from '../lib/parentAnswers';

interface Props {
  card: LearningCard;
  lesson: Lesson;
}

export function ParentAnswersPanel({ card, lesson }: Props) {
  const lines = getParentAnswers(card, lesson);
  if (lines.length === 0) return null;

  return (
    <div className="parent-answers">
      <h3 className="parent-answers__title">Answers (parent only)</h3>
      <ul className="parent-answers__list">
        {lines.map((line, i) => (
          <li key={i}>
            <strong>{line.label}</strong>
            <pre className="parent-answers__text">{line.text}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}

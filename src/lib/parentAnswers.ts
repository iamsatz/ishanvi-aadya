import type { LearningCard, Lesson } from '../types/content';

export interface ParentAnswerLine {
  label: string;
  text: string;
}

/** Collect answer text for parent view on the current card. */
export function getParentAnswers(card: LearningCard, lesson: Lesson): ParentAnswerLine[] {
  const lines: ParentAnswerLine[] = [];

  if (card.revealAnswer) {
    lines.push({ label: 'This card', text: card.revealAnswer });
  }

  if (card.checklist) {
    for (const item of card.checklist) {
      if (item.example) {
        lines.push({ label: `${item.label} (example)`, text: item.example });
      }
      if (item.peekLink) {
        const peek = lesson.cards.find((c) => c.id === item.peekLink!.cardId);
        if (peek?.revealAnswer) {
          lines.push({ label: `${item.label} (answer)`, text: peek.revealAnswer });
        }
      }
    }
  }

  return lines;
}

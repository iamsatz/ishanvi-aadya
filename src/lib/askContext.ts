import type { LearningCard, Lesson } from '../types/content';

export interface AskPageContext {
  lessonTitle: string;
  lessonSubtitle?: string;
  cardId: string;
  cardTitle: string;
  cardSubtitle?: string;
  englishContent?: string;
  promptText?: string;
  interactionType?: string;
  hint?: string;
  glossaryWords?: string[];
}

export function buildAskPageContext(
  lesson: Lesson | undefined,
  card: LearningCard | undefined
): AskPageContext | undefined {
  if (!lesson || !card) return undefined;
  return {
    lessonTitle: lesson.title,
    lessonSubtitle: lesson.subtitle,
    cardId: card.id,
    cardTitle: card.title,
    cardSubtitle: card.subtitle,
    englishContent: card.englishContent?.slice(0, 2000),
    promptText: card.promptText,
    interactionType: card.interactionType,
    hint: card.hint,
    glossaryWords: card.glossary?.map((g) => g.word),
  };
}

export function contextLabel(ctx: AskPageContext | undefined): string {
  if (!ctx) return 'Your lesson';
  return ctx.cardTitle || ctx.lessonTitle;
}

export function presetsForPage(ctx: AskPageContext | undefined): string[] {
  if (!ctx) {
    return ['Help me understand this', 'Give me a hint', 'Explain in simpler words'];
  }
  const presets: string[] = [];
  if (ctx.interactionType === 'checklist') {
    presets.push('I am stuck — give me a hint, not the answer');
  }
  if (ctx.glossaryWords?.length) {
    presets.push(`What does "${ctx.glossaryWords[0]}" mean here?`);
  }
  if (ctx.interactionType === 'choice-cards' || ctx.interactionType === 'reflect') {
    presets.push('Help me think — do not give the final answer yet');
  }
  presets.push('Explain this page in simpler words');
  presets.push('Why does this matter?');
  return presets.slice(0, 4);
}

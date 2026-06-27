import type { Choice, ContentBlock, LearningCard, QuizQuestion } from '../types/content';

const LESSON_MATHS = 'aadya-maths';
const LESSON_EVS = 'aadya-evs';

export interface AadyaChapterDef {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  hook: string;
  hookTe: string;
  teach: ContentBlock[];
  telugu: string;
  parentTip: string;
  parentTipTe: string;
  parentQ: string;
  parentQTe: string;
  quiz: Omit<QuizQuestion, 'id'>;
  tryPrompt: string;
  tryType: 'choice-cards' | 'match-pairs' | 'tap-reveal' | 'reflect';
  choices?: Choice[];
  pairs?: { left: string; right: string }[];
  revealAnswer?: string;
  reflectHint?: string;
}

function quizId(chId: string) {
  return `${chId}-q`;
}

export function buildAadyaChapterCards(
  lessonId: typeof LESSON_MATHS | typeof LESSON_EVS,
  ch: AadyaChapterDef,
): LearningCard[] {
  const openId = `${ch.id}-open`;
  const learnId = `${ch.id}-learn`;

  const opener: LearningCard = {
    id: openId,
    lessonId,
    title: ch.title,
    subtitle: `Chapter ${ch.num} · Chiku hops in`,
    sheetTag: `Ch ${ch.num}`,
    englishContent: '',
    contentBlocks: [
      { type: 'topic', icon: '🐰', title: 'Chiku says', body: ch.hook },
      ...ch.teach.slice(0, 1),
    ],
    teluguContent: ch.hookTe,
    parentSuggestion: {
      tip: ch.parentTip,
      tipTe: ch.parentTipTe,
      questions: [ch.parentQ],
      questionsTe: [ch.parentQTe],
    },
    promptText: 'What do you want to explore on this page?',
    interactionType: 'reflect',
    hint: 'Say one thing you already know about this topic.',
  };

  const learn: LearningCard = {
    id: learnId,
    lessonId,
    title: ch.title,
    subtitle: `Chapter ${ch.num} · Learn the idea`,
    sheetTag: `Ch ${ch.num}`,
    englishContent: '',
    contentBlocks: ch.teach,
    teluguContent: ch.telugu,
    parentSuggestion: {
      tip: ch.parentTip,
      tipTe: ch.parentTipTe,
      questions: [ch.parentQ],
      questionsTe: [ch.parentQTe],
    },
    quiz: [{ ...ch.quiz, id: quizId(ch.id) }],
    promptText: ch.tryPrompt,
    interactionType: ch.tryType,
    choices: ch.choices,
    pairs: ch.pairs?.map((p, i) => ({ id: `${ch.id}-p${i}`, left: p.left, right: p.right })),
    revealAnswer: ch.revealAnswer,
    hint: ch.reflectHint ?? ch.quiz.hint,
  };

  return [opener, learn];
}

export function buildContentsCard(
  lessonId: string,
  title: string,
  intro: string,
  introTe: string,
): LearningCard {
  return {
    id: `${lessonId}-contents`,
    lessonId,
    title,
    subtitle: 'Tap a chapter to jump',
    englishContent: intro,
    teluguContent: introTe,
    promptText: 'Pick a chapter to start.',
    interactionType: 'contents',
  };
}

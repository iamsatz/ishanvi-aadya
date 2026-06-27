/* ============================================================
   AADYA — Grade 2 lesson builders (Chiku-led, concept-first)
   Each chapter becomes a rich 6-card flow:
     1 Opener   2 Teach A   3 Teach B
     4 Worked example   5 Quick Check   6 Make your own
   Visuals are emoji + text inside `topic` content blocks.
   ============================================================ */

import type {
  Choice,
  ContentBlock,
  GlossaryEntry,
  LearningCard,
  QuizQuestion,
} from '../types/content';

/** A reveal step on a teach/example card (think first, then tap). */
export interface Reveal {
  prompt: string;
  answer: string;
  hint?: string;
}

export interface AadyaChapterDef {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  /** Tooltips shared across every card in the chapter. */
  glossary?: GlossaryEntry[];

  // 1 — Opener
  hook: string;
  hookTe: string;
  openerHint?: string;

  // 2 — Teach A
  teachA: ContentBlock[];
  teachATe: string;
  revealA: Reveal;

  // 3 — Teach B
  teachB: ContentBlock[];
  teachBTe: string;
  revealB: Reveal;

  // 4 — Worked example (step-by-step real-life story)
  example: {
    steps: ContentBlock[];
    story: string;
    storyTe: string;
    answer: string;
    hint?: string;
  };

  // 5 — Quick Check (inline quiz + a try-it interaction)
  quiz: Omit<QuizQuestion, 'id'>[];
  checkTe?: string;
  tryPrompt: string;
  tryType: 'choice-cards' | 'match-pairs';
  choices?: Choice[];
  pairs?: { left: string; right: string }[];
  tryHint?: string;

  // 6 — Make your own (child invents their own example)
  makeBlocks: ContentBlock[];
  makePrompt: string;
  makePromptTe: string;
  makeHint: string;

  // Parent coaching (adult-only)
  parentTip: string;
  parentTipTe: string;
  parentQ: string;
  parentQTe: string;
}

function parent(ch: AadyaChapterDef) {
  return {
    tip: ch.parentTip,
    tipTe: ch.parentTipTe,
    questions: [ch.parentQ],
    questionsTe: [ch.parentQTe],
  };
}

export function openerCard(lessonId: string, ch: AadyaChapterDef): LearningCard {
  return {
    id: `${ch.id}-open`,
    lessonId,
    title: ch.title,
    subtitle: `Chapter ${ch.num} · Chiku hops in`,
    sheetTag: `Ch ${ch.num}`,
    englishContent: '',
    contentBlocks: [{ type: 'topic', icon: '🐰', title: 'Chiku says', body: ch.hook }],
    teluguContent: ch.hookTe,
    glossary: ch.glossary,
    parentSuggestion: parent(ch),
    promptText: 'What do you already know about this? Say one thing.',
    interactionType: 'reflect',
    hint: ch.openerHint ?? 'Even a tiny idea counts — say it out loud or draw it!',
  };
}

export function teachCard(
  lessonId: string,
  ch: AadyaChapterDef,
  key: 'A' | 'B',
  blocks: ContentBlock[],
  te: string,
  reveal: Reveal,
): LearningCard {
  return {
    id: `${ch.id}-teach${key}`,
    lessonId,
    title: ch.title,
    subtitle: `Chapter ${ch.num} · Learn the idea`,
    sheetTag: `Ch ${ch.num}`,
    englishContent: '',
    contentBlocks: blocks,
    teluguContent: te,
    glossary: ch.glossary,
    parentSuggestion: parent(ch),
    promptText: reveal.prompt,
    interactionType: 'tap-reveal',
    revealAnswer: reveal.answer,
    hint: reveal.hint,
  };
}

export function workedExampleCard(lessonId: string, ch: AadyaChapterDef): LearningCard {
  return {
    id: `${ch.id}-example`,
    lessonId,
    title: ch.title,
    subtitle: `Chapter ${ch.num} · Real-life example`,
    sheetTag: `Ch ${ch.num}`,
    englishContent: '',
    contentBlocks: ch.example.steps,
    teluguContent: ch.example.storyTe,
    glossary: ch.glossary,
    parentSuggestion: parent(ch),
    promptText: ch.example.story,
    interactionType: 'tap-reveal',
    revealAnswer: ch.example.answer,
    hint: ch.example.hint ?? 'Work it out on paper first, then tap to check.',
  };
}

export function quickCheckCard(lessonId: string, ch: AadyaChapterDef): LearningCard {
  return {
    id: `${ch.id}-check`,
    lessonId,
    title: ch.title,
    subtitle: `Chapter ${ch.num} · Quick Check`,
    sheetTag: `Ch ${ch.num}`,
    englishContent: '',
    teluguContent: ch.checkTe ?? ch.teachATe,
    glossary: ch.glossary,
    quiz: ch.quiz.map((q, i) => ({ ...q, id: `${ch.id}-q${i}` })),
    parentSuggestion: parent(ch),
    promptText: ch.tryPrompt,
    interactionType: ch.tryType,
    choices: ch.choices,
    pairs: ch.pairs?.map((p, i) => ({ id: `${ch.id}-p${i}`, left: p.left, right: p.right })),
    hint: ch.tryHint,
  };
}

export function makeYourOwnCard(lessonId: string, ch: AadyaChapterDef): LearningCard {
  return {
    id: `${ch.id}-make`,
    lessonId,
    title: ch.title,
    subtitle: `Chapter ${ch.num} · Make your own`,
    sheetTag: `Ch ${ch.num}`,
    englishContent: '',
    contentBlocks: ch.makeBlocks,
    teluguContent: ch.makePromptTe,
    glossary: ch.glossary,
    parentSuggestion: parent(ch),
    promptText: ch.makePrompt,
    interactionType: 'reflect',
    hint: ch.makeHint,
  };
}

/** Build the full 6-card flow for one chapter. */
export function buildAadyaChapterCards(lessonId: string, ch: AadyaChapterDef): LearningCard[] {
  return [
    openerCard(lessonId, ch),
    teachCard(lessonId, ch, 'A', ch.teachA, ch.teachATe, ch.revealA),
    teachCard(lessonId, ch, 'B', ch.teachB, ch.teachBTe, ch.revealB),
    workedExampleCard(lessonId, ch),
    quickCheckCard(lessonId, ch),
    makeYourOwnCard(lessonId, ch),
  ];
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

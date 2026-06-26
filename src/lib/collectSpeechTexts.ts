import type { LearningCard, Lesson } from '../types/content';
import { fixtureLessons } from '../data/fixtures';
import { numberFamilies } from '../data/numberFamilies';
import { skillSheet } from '../data/skillSheet';
import { weekendHomeworkLessons } from '../data/weekendHomework';

const TELUGU_RE = /[\u0C00-\u0C7F]/;

export function detectSpeechLang(text: string): 'te-IN' | 'en-IN' {
  return TELUGU_RE.test(text) ? 'te-IN' : 'en-IN';
}

function collectFromCard(card: LearningCard, out: Map<string, string>) {
  if (card.hint?.trim()) out.set(card.hint.trim(), detectSpeechLang(card.hint));
  for (const item of card.checklist ?? []) {
    if (item.hint?.trim()) out.set(item.hint.trim(), detectSpeechLang(item.hint));
  }
}

function collectFromLesson(lesson: Lesson, out: Map<string, string>) {
  for (const card of lesson.cards) collectFromCard(card, out);
}

/** All static hint strings used by Listen buttons (build-time TTS source). */
export function collectSpeechTexts(): { text: string; lang: 'te-IN' | 'en-IN' }[] {
  const map = new Map<string, 'te-IN' | 'en-IN'>();

  for (const lesson of fixtureLessons) collectFromLesson(lesson, map);
  for (const lesson of weekendHomeworkLessons) collectFromLesson(lesson, map);
  collectFromLesson(numberFamilies, map);
  collectFromLesson(skillSheet, map);

  return Array.from(map.entries()).map(([text, lang]) => ({ text, lang }));
}

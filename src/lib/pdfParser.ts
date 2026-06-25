/* ============================================================
   PDF PARSER — STUB / PLUG-IN POINT
   ------------------------------------------------------------
   Real implementation goes here. Suggested approach:

   1. Add `pdfjs-dist` as a dependency.
   2. For each File:
      - Load the PDF with pdfjs.getDocument()
      - For each page, extract text via page.getTextContent()
      - Render a thumbnail to canvas → toDataURL()
   3. Generate `LearningCard`s from extracted text using either:
      - simple template rules (this file), or
      - an LLM call you proxy through your own service.

   For now this stub creates a minimal English-only Lesson with
   one tap-reveal card per imagined page, so the upload UI works
   without a real parser wired up.
   ============================================================ */

import type { Lesson, LearningCard } from '../types/content';

const uid = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

export async function parsePdfFile(file: File): Promise<Lesson> {
  const id = uid('pdf');
  const title = file.name.replace(/\.pdf$/i, '');

  // 🔌 Replace with real page extraction (pdfjs-dist).
  const cards: LearningCard[] = Array.from({ length: 3 }, (_, i) => ({
    id: uid('card'),
    lessonId: id,
    title: `Page ${i + 1}`,
    englishContent: `(Page ${i + 1} of "${title}" — replace with parsed text)`,
    promptText: 'Tap to reveal what we learned here.',
    interactionType: 'tap-reveal',
    revealAnswer: '✨ Talk about this page together!',
  }));

  return {
    id,
    title,
    kid: 'ishanvi',
    subject: 'stories',
    hasTelugu: false,
    icon: '📄',
    cards,
  };
}

export async function parseImageFile(file: File): Promise<Lesson> {
  const id = uid('img');
  return {
    id,
    title: file.name,
    kid: 'ishanvi',
    subject: 'stories',
    hasTelugu: false,
    icon: '🖼️',
    cards: [
      {
        id: uid('card'),
        lessonId: id,
        title: file.name,
        englishContent: 'Look at the picture! What do you see?',
        promptText: 'Tap to reveal a thought.',
        interactionType: 'tap-reveal',
        revealAnswer: '✨ Talk about it together!',
      },
    ],
  };
}

/* ============================================================
   CONTENT MODEL
   Generic shape so adding more books/projects later requires
   only data changes — no component changes.
   ============================================================ */

export type Section = 'stories' | 'projects';

export type InteractionType =
  | 'tap-reveal'    // tap to flip and reveal an answer
  | 'choice-cards'  // multiple choice, one correct
  | 'match-pairs'   // match left items to right items
  | 'reflect'       // free-text response, no right answer
  | 'checklist';    // tick items as you do them (great for projects)

export interface Choice {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface Pair {
  id: string;
  left: string;
  right: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
}

/** A vocabulary tooltip: highlight `word` in englishContent on hover. */
export interface GlossaryEntry {
  /** Word/phrase to find in englishContent (case-insensitive, whole-word). */
  word: string;
  /** Simple English meaning. */
  en: string;
  /** Telugu meaning (always provided — even on English-only lessons). */
  te: string;
}

/** Structured tip for the adult helping the child. */
export interface ParentSuggestion {
  /** Short tip — what the lesson is about, why it matters. */
  tip?: string;
  /** Suggested questions the parent can ask the child. */
  questions?: string[];
}

/** A single knowledge-test question shown inline on a card. */
export interface QuizQuestion {
  id: string;
  question: string;
  choices: Choice[];
  hint?: string;
}

export interface LearningCard {
  id: string;
  lessonId: string;

  /** Big heading shown at the top of the card. */
  title: string;
  /** Optional small subtitle (author, "Book 1", etc). */
  subtitle?: string;

  /** Main English content — paragraphs separated by \n\n, line breaks by \n. */
  englishContent: string;
  /** Optional Telugu translation — shown inside a collapsed accordion. */
  teluguContent?: string;

  /** Vocabulary tooltips (rendered inline in englishContent). */
  glossary?: GlossaryEntry[];

  /** Tip + questions for the parent helping the child. */
  parentSuggestion?: ParentSuggestion;

  /** Legacy free-text parent hint (kept for backward compat). */
  parentHint?: string;

  /** Optional inline knowledge-check questions, rendered before the main interaction. */
  quiz?: QuizQuestion[];

  /** The interactive question/instruction. */
  promptText: string;
  interactionType: InteractionType;

  // Interaction payloads (only the one matching `interactionType` is used).
  choices?: Choice[];
  pairs?: Pair[];
  checklist?: ChecklistItem[];
  revealAnswer?: string;

  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle?: string;
  section: Section;
  /** Whether this lesson includes Telugu translations on its cards. */
  hasTelugu: boolean;
  /** Optional emoji or short icon to show in the lesson list. */
  icon?: string;
  cards: LearningCard[];
}

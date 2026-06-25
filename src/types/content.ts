/* ============================================================
   CONTENT MODEL
   Generic shape so adding more books/projects later requires
   only data changes — no component changes.
   ============================================================ */

export type KidId = 'ishanvi' | 'aadya';

/** Subject id within a kid's curriculum (e.g. maths, stories). */
export interface SubjectDef {
  id: string;
  label: string;
  icon: string;
}

export interface Kid {
  id: KidId;
  name: string;
  grade: string;
  board: string;
  subjects: SubjectDef[];
}

export type InteractionType =
  | 'tap-reveal'    // tap to flip and reveal an answer
  | 'choice-cards'  // multiple choice, one correct
  | 'match-pairs'   // match left items to right items
  | 'reflect'       // free-text response, no right answer
  | 'checklist'     // tick items as you do them (great for projects)
  | 'game';         // an interactive mini-game (see GameConfig)

/* ============================================================
   GAMES — touch-first mini-games (pointer/tap based, no native DnD)
   Each game calls onComplete(true) when solved.
   ============================================================ */

/** Seat Swap — move one digit across period seats; watch its value change. */
export interface SeatSwapGame {
  kind: 'seat-swap';
  /** The single digit the child moves (e.g. '6'). */
  digit: string;
  /** Seat the child must land the digit on to win (0 = ones, up to 7 = crores). */
  targetSeat: number;
}

/** Family Sort — drop loose digits into the correct period houses. */
export interface FamilySortGame {
  kind: 'family-sort';
  /** Number to sort, no commas (e.g. '5623407'). */
  digits: string;
}

/** Comma Drop — tap the correct gaps to place Indian-system commas. */
export interface CommaDropGame {
  kind: 'comma-drop';
  /** Number without commas (e.g. '8012693'). */
  digits: string;
}

/** Anchor Race — match a number to its spoken name. */
export interface AnchorRaceGame {
  kind: 'anchor-race';
  rounds: { number: string; name: string; distractors: string[] }[];
}

/** Number Builder — tap expanded-form pieces in order to build the number. */
export interface NumberBuilderGame {
  kind: 'number-builder';
  /** Expanded pieces in CORRECT order (largest first), e.g. ['50,00,000','6,00,000',...]. */
  pieces: string[];
  /** The final standard-form result shown on success. */
  result: string;
}

/** Podium — order items from smallest to greatest. */
export interface PodiumGame {
  kind: 'podium';
  /** Items with numeric value; correct order is ascending by value. */
  items: { label: string; value: number }[];
}

/** Neighbours — tap the successor (+1) and predecessor (-1). */
export interface NeighboursGame {
  kind: 'neighbours';
  /** The centre number as a plain integer string (e.g. '2489321'). */
  center: string;
}

export type GameConfig =
  | SeatSwapGame
  | FamilySortGame
  | CommaDropGame
  | AnchorRaceGame
  | NumberBuilderGame
  | PodiumGame
  | NeighboursGame;

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
  /** Short title shown in bold — emoji + action name. */
  label: string;
  /** One sentence: what Ishanvi actually does for this task. */
  what?: string;
  /** One sentence: why this task is helpful specifically for a Grade 4 child. */
  why?: string;
  /** A worked example from the source (shown in a tinted box). */
  example?: string;
  /** A "try this" challenge that stretches the task further. */
  challenge?: string;
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
  /** Used when interactionType === 'game'. */
  game?: GameConfig;

  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle?: string;
  kid: KidId;
  /** Subject id — must match a subject in src/data/kids.ts for that kid. */
  subject: string;
  /** Optional chapter name for future grouping (data-only, no nav change yet). */
  chapter?: string;
  /** Whether this lesson includes Telugu translations on its cards. */
  hasTelugu: boolean;
  /** Optional emoji or short icon to show in the lesson list. */
  icon?: string;
  cards: LearningCard[];
}

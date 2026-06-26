import type { LearningCard } from './content';

export type BoardType =
  | 'state_lms'
  | 'cbse'
  | 'icse'
  | 'cambridge'
  | 'ib'
  | 'ib_cambridge'
  | 'other';

export interface ChildRow {
  id: string;
  owner: string;
  name: string;
  grade: string;
  board: BoardType;
  is_demo: boolean;
  created_at: string;
}

export interface SubjectRow {
  id: string;
  child_id: string;
  name: string;
  icon: string;
  created_at: string;
}

export interface SyllabusItemRow {
  id: string;
  subject_id: string;
  title: string;
  ord: number;
  raw_text: string | null;
  source_image_url: string | null;
  created_at: string;
}

export interface LessonRow {
  id: string;
  child_id: string;
  subject_id: string | null;
  source: 'index' | 'homework' | 'demo';
  title: string;
  subtitle: string | null;
  icon: string | null;
  has_telugu: boolean;
  cards: LearningCard[];
  created_at: string;
}

export interface HomeworkTask {
  label: string;
  hint?: string;
  example?: string;
  answer?: string;
  /** Short kid-friendly reason the answer is correct (shown on the Answers page). */
  explanation?: string;
}

export interface HomeworkRow {
  id: string;
  child_id: string;
  subject_id: string | null;
  task_date: string;
  title: string;
  image_url: string | null;
  raw_text: string | null;
  tasks: HomeworkTask[];
  lesson_id: string | null;
  created_at: string;
}

export interface FeedbackRow {
  id: string;
  owner: string;
  message: string;
  context: Record<string, unknown>;
  created_at: string;
}

export const BOARD_OPTIONS: { id: BoardType; label: string }[] = [
  { id: 'state_lms', label: 'State LMS / Board' },
  { id: 'cbse', label: 'CBSE' },
  { id: 'icse', label: 'ICSE' },
  { id: 'cambridge', label: 'Cambridge' },
  { id: 'ib', label: 'IB' },
  { id: 'ib_cambridge', label: 'IB + Cambridge' },
  { id: 'other', label: 'Other' },
];

export const GRADE_OPTIONS = [
  'Nursery', 'LKG', 'UKG',
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
];

export function boardLabel(board: BoardType): string {
  return BOARD_OPTIONS.find((b) => b.id === board)?.label ?? board;
}

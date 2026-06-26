import type { Kid } from '../types/content';

export const kids: Kid[] = [
  {
    id: 'ishanvi',
    name: 'Ishanvi',
    grade: 'Grade 4',
    board: 'IB',
    mascot: { name: 'Satish', avatar: 'satish-guru', role: 'Wise guru guide' },
    subjects: [
      { id: 'homework', label: 'This Weekend', icon: '✏️' },
      { id: 'maths',    label: 'Maths',        icon: '🧮' },
      { id: 'stories',  label: 'Summer Stories', icon: '📚' },
      { id: 'projects', label: 'Summer Projects', icon: '📝' },
    ],
  },
  {
    id: 'aadya',
    name: 'Aadya',
    grade: 'Grade 2',
    board: 'CBSE · Cambridge',
    mascot: { name: 'Chiku', avatar: 'emoji', emoji: '🐰', role: 'Bunny buddy' },
    subjects: [
      { id: 'maths',   label: 'Maths',   icon: '🧮' },
      { id: 'english', label: 'English', icon: '📖' },
      { id: 'evs',     label: 'EVS',     icon: '🌍' },
    ],
  },
];

export const kidById = Object.fromEntries(kids.map((k) => [k.id, k])) as Record<
  Kid['id'],
  Kid
>;

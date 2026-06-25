import type { Kid } from '../types/content';

export const kids: Kid[] = [
  {
    id: 'ishanvi',
    name: 'Ishanvi',
    grade: 'Grade 4',
    board: 'IB',
    subjects: [
      { id: 'stories',  label: 'Stories',  icon: '📚' },
      { id: 'projects', label: 'Projects', icon: '📝' },
      { id: 'maths',    label: 'Maths',    icon: '🧮' },
    ],
  },
  {
    id: 'aadya',
    name: 'Aadya',
    grade: 'Grade 2',
    board: 'CBSE · Cambridge',
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

import type { SubjectDef } from '../types/content';

/** Default subjects when a parent adds a child. */
export function defaultSubjectsForGrade(grade: string): SubjectDef[] {
  const g = grade.toLowerCase();
  const isEarly = g.includes('nursery') || g.includes('lkg') || g.includes('ukg') || g.includes('grade 1') || g.includes('grade 2');
  if (isEarly) {
    return [
      { id: 'homework', label: 'Homework', icon: '✏️' },
      { id: 'maths', label: 'Maths', icon: '🧮' },
      { id: 'english', label: 'English', icon: '📖' },
      { id: 'evs', label: 'EVS', icon: '🌍' },
    ];
  }
  return [
    { id: 'homework', label: 'Homework', icon: '✏️' },
    { id: 'maths', label: 'Maths · Learn', icon: '🧮' },
    { id: 'english', label: 'English', icon: '📗' },
    { id: 'science', label: 'Science', icon: '🔬' },
    { id: 'stories', label: 'Stories', icon: '📚' },
    { id: 'projects', label: 'Projects', icon: '📝' },
  ];
}

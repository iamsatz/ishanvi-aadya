import type { Lesson } from '../types/content';

/** Match demo slug subjects (homework, maths) to DB subject rows by label. */
export function lessonMatchesSubject(
  lesson: Lesson,
  subjectId: string,
  subjectLabel: string
): boolean {
  if (lesson.subject === subjectId) return true;
  const label = subjectLabel.toLowerCase();
  const slug = lesson.subject.toLowerCase();
  const pairs: [string, string][] = [
    ['homework', 'homework'],
    ['maths', 'maths'],
    ['english', 'english'],
    ['science', 'science'],
    ['stories', 'stories'],
    ['projects', 'project'],
    ['evs', 'evs'],
  ];
  return pairs.some(([s, fragment]) => slug === s && label.includes(fragment));
}

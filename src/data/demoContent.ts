import type { Lesson } from '../types/content';
import type { ChildRow } from '../types/db';
import { fixtureLessons } from './fixtures';

/** Map legacy fixture kid slugs to demo child UUIDs from DB. */
export function demoLessonsForChildren(children: ChildRow[]): Lesson[] {
  const ishanvi = children.find((c) => c.is_demo && c.name.toLowerCase().includes('ishanvi'));
  const aadya = children.find((c) => c.is_demo && c.name.toLowerCase().includes('aadya'));

  const mapKid = (legacy: string): string => {
    if (legacy === 'ishanvi' && ishanvi) return ishanvi.id;
    if (legacy === 'aadya' && aadya) return aadya.id;
    return legacy;
  };

  return fixtureLessons.map((lesson) => ({
    ...lesson,
    id: `demo-${lesson.id}`,
    kid: mapKid(lesson.kid as string),
    childId: mapKid(lesson.kid as string),
    cards: lesson.cards.map((c) => ({
      ...c,
      lessonId: `demo-${lesson.id}`,
    })),
  }));
}

import { useStore } from '../state/store';

/** Returns completion stats for a given lesson. */
export function useProgress(lessonId: string) {
  const lesson = useStore((s) => s.lessons.find((l) => l.id === lessonId));
  const completedIds = useStore((s) => s.completed[lessonId] ?? []);
  const total = lesson?.cards.length ?? 0;
  const done = completedIds.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return { total, done, percent, isComplete: total > 0 && done >= total };
}

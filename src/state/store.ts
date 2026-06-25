/* ============================================================
   GLOBAL STORE — zustand + localStorage persistence
   Tracks: active kid/lesson/card, completion, drawer open.
   ============================================================ */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Lesson, LearningCard, KidId } from '../types/content';
import { fixtureLessons } from '../data/fixtures';

interface AppState {
  lessons: Lesson[];
  activeKid: KidId;
  activeLessonId: string;
  activeIndex: number;
  /** Map<lessonId, cardId[]> of completed cards. */
  completed: Record<string, string[]>;
  drawerOpen: boolean;

  setActiveKid: (kid: KidId) => void;
  setActiveLesson: (lessonId: string) => void;
  setActiveIndex: (index: number) => void;
  next: () => void;
  back: () => void;
  markCardCompleted: (lessonId: string, cardId: string) => void;
  unmarkCardCompleted: (lessonId: string, cardId: string) => void;
  addLesson: (lesson: Lesson) => void;
  resetProgress: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const firstLessonId = fixtureLessons[0]?.id ?? '';

function firstLessonForKid(lessons: Lesson[], kid: KidId): Lesson | undefined {
  return lessons.find((l) => l.kid === kid);
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      lessons: fixtureLessons,
      activeKid: 'ishanvi',
      activeLessonId: firstLessonId,
      activeIndex: 0,
      completed: {},
      drawerOpen: false,

      setActiveKid: (kid) => {
        const first = firstLessonForKid(get().lessons, kid);
        set({
          activeKid: kid,
          activeLessonId: first?.id ?? get().activeLessonId,
          activeIndex: 0,
        });
      },

      setActiveLesson: (lessonId) => {
        const lesson = get().lessons.find((l) => l.id === lessonId);
        set({
          activeLessonId: lessonId,
          activeKid: lesson?.kid ?? get().activeKid,
          activeIndex: 0,
          drawerOpen: false,
        });
      },

      setActiveIndex: (index) => set({ activeIndex: index }),

      next: () => {
        const { lessons, activeLessonId, activeIndex } = get();
        const lesson = lessons.find((l) => l.id === activeLessonId);
        if (!lesson) return;
        const last = lesson.cards.length - 1;
        set({ activeIndex: Math.min(activeIndex + 1, last) });
      },

      back: () => set({ activeIndex: Math.max(get().activeIndex - 1, 0) }),

      markCardCompleted: (lessonId, cardId) => {
        const prev = get().completed[lessonId] ?? [];
        if (prev.includes(cardId)) return;
        set({ completed: { ...get().completed, [lessonId]: [...prev, cardId] } });
      },

      unmarkCardCompleted: (lessonId, cardId) => {
        const prev = get().completed[lessonId] ?? [];
        if (!prev.includes(cardId)) return;
        set({
          completed: {
            ...get().completed,
            [lessonId]: prev.filter((id) => id !== cardId),
          },
        });
      },

      addLesson: (lesson) => set({ lessons: [...get().lessons, lesson] }),

      resetProgress: () => set({ completed: {}, activeIndex: 0 }),

      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),
    }),
    {
      name: 'ishanvi-aadya-progress',
      version: 2,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        activeKid: s.activeKid,
        activeLessonId: s.activeLessonId,
        activeIndex: s.activeIndex,
        completed: s.completed,
      }),
      migrate: (persisted) => {
        const state = persisted as Record<string, unknown>;
        if (state.activeKid) return persisted as unknown as AppState;
        return { ...state, activeKid: 'ishanvi' } as unknown as AppState;
      },
    }
  )
);

export const selectActiveLesson = (s: AppState): Lesson | undefined =>
  s.lessons.find((l) => l.id === s.activeLessonId);

export const selectActiveCard = (s: AppState): LearningCard | undefined =>
  selectActiveLesson(s)?.cards[s.activeIndex];

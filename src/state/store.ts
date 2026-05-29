/* ============================================================
   GLOBAL STORE — zustand + localStorage persistence
   Tracks: active section/lesson/card, completion, drawer open.
   ============================================================ */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Lesson, LearningCard, Section } from '../types/content';
import { fixtureLessons } from '../data/fixtures';

interface AppState {
  lessons: Lesson[];
  activeSection: Section;
  activeLessonId: string;
  activeIndex: number;
  /** Map<lessonId, cardId[]> of completed cards. */
  completed: Record<string, string[]>;
  drawerOpen: boolean;

  setActiveSection: (s: Section) => void;
  setActiveLesson: (lessonId: string) => void;
  setActiveIndex: (index: number) => void;
  next: () => void;
  back: () => void;
  markCardCompleted: (lessonId: string, cardId: string) => void;
  addLesson: (lesson: Lesson) => void;
  resetProgress: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const firstLessonId = fixtureLessons[0]?.id ?? '';

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      lessons: fixtureLessons,
      activeSection: 'stories',
      activeLessonId: firstLessonId,
      activeIndex: 0,
      completed: {},
      drawerOpen: false,

      setActiveSection: (s) => {
        const firstInSection = get().lessons.find((l) => l.section === s);
        set({
          activeSection: s,
          activeLessonId: firstInSection?.id ?? get().activeLessonId,
          activeIndex: 0,
        });
      },

      setActiveLesson: (lessonId) => {
        const lesson = get().lessons.find((l) => l.id === lessonId);
        set({
          activeLessonId: lessonId,
          activeSection: lesson?.section ?? get().activeSection,
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

      addLesson: (lesson) => set({ lessons: [...get().lessons, lesson] }),

      resetProgress: () => set({ completed: {}, activeIndex: 0 }),

      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),
    }),
    {
      name: 'ishanvi-aadya-progress',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        activeSection: s.activeSection,
        activeLessonId: s.activeLessonId,
        activeIndex: s.activeIndex,
        completed: s.completed,
      }),
    }
  )
);

export const selectActiveLesson = (s: AppState): Lesson | undefined =>
  s.lessons.find((l) => l.id === s.activeLessonId);

export const selectActiveCard = (s: AppState): LearningCard | undefined =>
  selectActiveLesson(s)?.cards[s.activeIndex];

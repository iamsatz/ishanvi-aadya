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
  tvMode: boolean;
  parentMode: boolean;
  pinGateOpen: boolean;
  pinPurpose: 'parent' | 'upload';
  uploadOpen: boolean;

  setActiveKid: (kid: KidId) => void;
  setActiveLesson: (lessonId: string) => void;
  setActiveIndex: (index: number) => void;
  jumpToCard: (lessonId: string, cardId: string) => void;
  next: () => void;
  back: () => void;
  markCardCompleted: (lessonId: string, cardId: string) => void;
  unmarkCardCompleted: (lessonId: string, cardId: string) => void;
  addLesson: (lesson: Lesson) => void;
  mergeCloudLessons: (cloudLessons: Lesson[]) => void;
  resetProgress: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  setTvMode: (on: boolean) => void;
  toggleTvMode: () => void;
  setParentMode: (on: boolean) => void;
  requestPin: (purpose: 'parent' | 'upload') => void;
  closePinGate: () => void;
  openUploadModal: () => void;
  closeUploadModal: () => void;
}

const firstLessonId = fixtureLessons[0]?.id ?? '';

function isKidId(value: unknown): value is KidId {
  return value === 'ishanvi' || value === 'aadya';
}

function lessonById(lessonId: string): Lesson | undefined {
  return fixtureLessons.find((l) => l.id === lessonId);
}

function firstLessonForKid(kid: KidId): Lesson | undefined {
  return fixtureLessons.find((l) => l.kid === kid);
}

function cardIndex(lesson: Lesson | undefined, cardId: string): number {
  if (!lesson) return 0;
  const idx = lesson.cards.findIndex((c) => c.id === cardId);
  return idx >= 0 ? idx : 0;
}

/** Repair persisted nav state so a bad localStorage value cannot blank the app. */
function sanitizeNavState(partial: {
  activeKid?: unknown;
  activeLessonId?: unknown;
  activeIndex?: unknown;
  completed?: unknown;
}): Pick<AppState, 'activeKid' | 'activeLessonId' | 'activeIndex' | 'completed' | 'tvMode'> {
  const activeKid = isKidId(partial.activeKid) ? partial.activeKid : 'ishanvi';

  let activeLessonId =
    typeof partial.activeLessonId === 'string' ? partial.activeLessonId : firstLessonId;
  if (!lessonById(activeLessonId)) {
    activeLessonId = firstLessonForKid(activeKid)?.id ?? firstLessonId;
  }

  const lesson = lessonById(activeLessonId);
  const maxIndex = Math.max(0, (lesson?.cards.length ?? 1) - 1);
  const rawIndex = typeof partial.activeIndex === 'number' ? partial.activeIndex : 0;
  const activeIndex = Math.min(Math.max(0, rawIndex), maxIndex);

  const completed =
    partial.completed && typeof partial.completed === 'object' && !Array.isArray(partial.completed)
      ? (partial.completed as Record<string, string[]>)
      : {};

  return { activeKid, activeLessonId, activeIndex, completed, tvMode: false };
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
      tvMode: false,
      parentMode: false,
      pinGateOpen: false,
      pinPurpose: 'parent' as 'parent' | 'upload',
      uploadOpen: false,

      setActiveKid: (kid) => {
        const first = firstLessonForKid(kid);
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

      jumpToCard: (lessonId, cardId) => {
        const lesson = lessonById(lessonId) ?? get().lessons.find((l) => l.id === lessonId);
        if (!lesson) return;
        set({
          activeLessonId: lessonId,
          activeKid: lesson.kid,
          activeIndex: cardIndex(lesson, cardId),
          drawerOpen: false,
        });
      },

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

      mergeCloudLessons: (cloudLessons) => {
        set({ lessons: [...cloudLessons, ...fixtureLessons] });
      },

      resetProgress: () => set({ completed: {}, activeIndex: 0 }),

      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),

      setTvMode: (on) => set({ tvMode: on }),
      toggleTvMode: () => set({ tvMode: !get().tvMode }),
      setParentMode: (on) => set({ parentMode: on }),
      requestPin: (purpose) => set({ pinGateOpen: true, pinPurpose: purpose }),
      closePinGate: () => set({ pinGateOpen: false }),
      openUploadModal: () => set({ uploadOpen: true, pinGateOpen: false }),
      closeUploadModal: () => set({ uploadOpen: false }),
    }),
    {
      name: 'ishanvi-aadya-progress',
      version: 5,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        activeKid: s.activeKid,
        activeLessonId: s.activeLessonId,
        activeIndex: s.activeIndex,
        completed: s.completed,
      }),
      merge: (persisted, current) => ({
        ...current,
        ...sanitizeNavState((persisted ?? {}) as Record<string, unknown>),
        lessons: fixtureLessons,
      }),
      migrate: (persisted, version) => {
        const state = (persisted ?? {}) as Record<string, unknown>;
        if (version < 3 && !state.activeKid) {
          return { ...state, activeKid: 'ishanvi' };
        }
        if (version < 4 && state.tvMode === undefined) {
          return { ...state, tvMode: false };
        }
        if (version < 5) {
          const { tvMode: _removed, ...rest } = state;
          return rest;
        }
        return state;
      },
    }
  )
);

export const selectActiveLesson = (s: AppState): Lesson | undefined =>
  s.lessons.find((l) => l.id === s.activeLessonId);

export const selectActiveCard = (s: AppState): LearningCard | undefined =>
  selectActiveLesson(s)?.cards[s.activeIndex];

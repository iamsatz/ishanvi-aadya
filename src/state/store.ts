import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Session } from '@supabase/supabase-js';
import type { Lesson, LearningCard, KidId } from '../types/content';
import type { ChildRow, SubjectRow } from '../types/db';
import type { Kid } from '../types/content';
import { kidsFromChildren, devPreviewKids } from '../data/kids';
import { demoLessonsForChildren } from '../data/demoContent';
import { fixtureLessons } from '../data/fixtures';
import {
  fetchChildren,
  fetchSubjects,
  fetchLessons,
  createChild,
  createSubject,
  lessonRowToLesson,
} from '../lib/db';
import { defaultSubjectsForGrade } from '../data/defaultSubjects';

interface AppState {
  authReady: boolean;
  session: Session | null;
  children: ChildRow[];
  subjects: SubjectRow[];
  kids: Kid[];
  lessons: Lesson[];
  activeKid: KidId;
  activeLessonId: string;
  activeIndex: number;
  completed: Record<string, string[]>;
  tvMode: boolean;
  devPreview: boolean;
  parentMode: boolean;
  pinGateOpen: boolean;
  pinPurpose: 'parent' | 'upload' | 'index' | 'feedback' | 'settings';
  uploadOpen: boolean;
  indexEditorOpen: boolean;
  feedbackOpen: boolean;
  askOpen: boolean;
  settingsOpen: boolean;
  onboardingOpen: boolean;
  showLogin: boolean;

  setAuthReady: (v: boolean) => void;
  setSession: (s: Session | null) => void;
  setShowLogin: (v: boolean) => void;
  loadUserData: () => Promise<void>;
  addChild: (input: { name: string; grade: string; board: import('../types/db').BoardType }) => Promise<void>;
  enableDemoContent: () => Promise<void>;
  setActiveKid: (kid: KidId) => void;
  setActiveLesson: (lessonId: string) => void;
  setActiveIndex: (index: number) => void;
  jumpToCard: (lessonId: string, cardId: string) => void;
  next: () => void;
  back: () => void;
  markCardCompleted: (lessonId: string, cardId: string) => void;
  unmarkCardCompleted: (lessonId: string, cardId: string) => void;
  refreshLessons: () => Promise<void>;
  enterDevPreview: () => void;
  setTvMode: (on: boolean) => void;
  toggleTvMode: () => void;
  setParentMode: (on: boolean) => void;
  requestPin: (purpose: AppState['pinPurpose']) => void;
  closePinGate: () => void;
  openUploadModal: () => void;
  closeUploadModal: () => void;
  openIndexEditor: () => void;
  closeIndexEditor: () => void;
  openFeedback: () => void;
  closeFeedback: () => void;
  openAsk: () => void;
  closeAsk: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  openOnboarding: () => void;
  closeOnboarding: () => void;
}

function lessonById(lessons: Lesson[], lessonId: string): Lesson | undefined {
  return lessons.find((l) => l.id === lessonId);
}

function firstLessonForKid(lessons: Lesson[], kid: KidId): Lesson | undefined {
  return lessons.find((l) => l.kid === kid);
}

function cardIndex(lesson: Lesson | undefined, cardId: string): number {
  if (!lesson) return 0;
  const idx = lesson.cards.findIndex((c) => c.id === cardId);
  return idx >= 0 ? idx : 0;
}

function sanitizeNavState(
  partial: Record<string, unknown>,
  lessons: Lesson[]
): Pick<AppState, 'activeKid' | 'activeLessonId' | 'activeIndex' | 'completed'> {
  const activeKid = typeof partial.activeKid === 'string' ? partial.activeKid : '';
  let activeLessonId = typeof partial.activeLessonId === 'string' ? partial.activeLessonId : '';
  if (!lessonById(lessons, activeLessonId)) {
    activeLessonId = firstLessonForKid(lessons, activeKid)?.id ?? lessons[0]?.id ?? '';
  }
  const lesson = lessonById(lessons, activeLessonId);
  const maxIndex = Math.max(0, (lesson?.cards.length ?? 1) - 1);
  const rawIndex = typeof partial.activeIndex === 'number' ? partial.activeIndex : 0;
  const activeIndex = Math.min(Math.max(0, rawIndex), maxIndex);
  const completed =
    partial.completed && typeof partial.completed === 'object' && !Array.isArray(partial.completed)
      ? (partial.completed as Record<string, string[]>)
      : {};
  return { activeKid, activeLessonId, activeIndex, completed };
}

async function buildLessonsFromDb(children: ChildRow[], subjects: SubjectRow[]): Promise<Lesson[]> {
  const rows = await fetchLessons();
  const subjectMap = Object.fromEntries(subjects.map((s) => [s.id, s]));
  const dbLessons = rows.map((row) => {
    const sub = row.subject_id ? subjectMap[row.subject_id] : undefined;
    const subjectSlug = sub ? sub.id : 'homework';
    return lessonRowToLesson(row, subjectSlug);
  });
  const demo = demoLessonsForChildren(children);
  return [...dbLessons, ...demo];
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      authReady: false,
      session: null,
      children: [],
      subjects: [],
      kids: [],
      lessons: [],
      activeKid: '',
      activeLessonId: '',
      activeIndex: 0,
      completed: {},
      tvMode: false,
      devPreview: false,
      parentMode: false,
      pinGateOpen: false,
      pinPurpose: 'parent',
      uploadOpen: false,
      indexEditorOpen: false,
      feedbackOpen: false,
      askOpen: false,
      settingsOpen: false,
      onboardingOpen: false,
      showLogin: true,

      setAuthReady: (v) => set({ authReady: v }),
      setSession: (session) => set({ session, showLogin: !session }),
      setShowLogin: (v) => set({ showLogin: v }),

      loadUserData: async () => {
        try {
          let children = await fetchChildren();
          if (children.length === 0) {
            set({ onboardingOpen: true, children: [], subjects: [], kids: [], lessons: [] });
            return;
          }
          const allSubjects: SubjectRow[] = [];
          for (const c of children) {
            const subs = await fetchSubjects(c.id);
            if (subs.length === 0) {
              for (const def of defaultSubjectsForGrade(c.grade)) {
                const created = await createSubject({
                  childId: c.id,
                  name: def.label,
                  icon: def.icon,
                });
                allSubjects.push(created);
              }
            } else {
              allSubjects.push(...subs);
            }
          }
          const subjectsByChild: Record<string, SubjectRow[]> = {};
          for (const s of allSubjects) {
            (subjectsByChild[s.child_id] ??= []).push(s);
          }
          const kids = kidsFromChildren(children, subjectsByChild);
          const lessons = await buildLessonsFromDb(children, allSubjects);
          const firstKid = children[0]?.id ?? '';
          const firstLesson = firstLessonForKid(lessons, firstKid)?.id ?? lessons[0]?.id ?? '';
          const prev = get();
          const nav = sanitizeNavState(
            { activeKid: prev.activeKid || firstKid, activeLessonId: prev.activeLessonId || firstLesson, activeIndex: prev.activeIndex, completed: prev.completed },
            lessons
          );
          set({
            children,
            subjects: allSubjects,
            kids,
            lessons,
            activeKid: nav.activeKid || firstKid,
            activeLessonId: nav.activeLessonId || firstLesson,
            activeIndex: nav.activeIndex,
            onboardingOpen: false,
          });
        } catch (e) {
          console.error('[store] loadUserData failed', e);
        }
      },

      addChild: async (input) => {
        const child = await createChild(input);
        for (const def of defaultSubjectsForGrade(input.grade)) {
          await createSubject({ childId: child.id, name: def.label, icon: def.icon });
        }
        await get().loadUserData();
        set({ activeKid: child.id, onboardingOpen: false });
      },

      enableDemoContent: async () => {
        const { getSupabase } = await import('../lib/supabase');
        const sb = getSupabase();
        if (!sb) throw new Error('Supabase not configured');
        const existing = await fetchChildren();
        const demos = existing.filter((c) => c.is_demo);
        const { data: { user } } = await sb.auth.getUser();
        if (!user) throw new Error('Not signed in');

        const wants = [
          { name: 'Ishanvi (Demo)', grade: 'Grade 4', board: 'ib' as import('../types/db').BoardType },
          { name: 'Aadya (Demo)', grade: 'Grade 2', board: 'cbse' as import('../types/db').BoardType },
        ];
        const toInsert = wants
          .filter((w) => !demos.some((d) => d.name.toLowerCase().includes(w.name.split(' ')[0]!.toLowerCase())))
          .map((w) => ({ owner: user.id, ...w, is_demo: true }));

        if (toInsert.length > 0) {
          await sb.from('children').insert(toInsert);
        }
        await get().loadUserData();
      },

      setActiveKid: (kid) => {
        const first = firstLessonForKid(get().lessons, kid);
        set({ activeKid: kid, activeLessonId: first?.id ?? get().activeLessonId, activeIndex: 0 });
      },

      setActiveLesson: (lessonId) => {
        const lesson = get().lessons.find((l) => l.id === lessonId);
        set({
          activeLessonId: lessonId,
          activeKid: lesson?.kid ?? get().activeKid,
          activeIndex: 0,
        });
      },

      setActiveIndex: (index) => set({ activeIndex: index }),

      jumpToCard: (lessonId, cardId) => {
        const lesson = lessonById(get().lessons, lessonId);
        if (!lesson) return;
        set({
          activeLessonId: lessonId,
          activeKid: lesson.kid,
          activeIndex: cardIndex(lesson, cardId),
        });
      },

      next: () => {
        const { lessons, activeLessonId, activeIndex } = get();
        const lesson = lessons.find((l) => l.id === activeLessonId);
        if (!lesson) return;
        set({ activeIndex: Math.min(activeIndex + 1, lesson.cards.length - 1) });
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
        set({ completed: { ...get().completed, [lessonId]: prev.filter((id) => id !== cardId) } });
      },

      refreshLessons: async () => {
        const { children, subjects } = get();
        const lessons = await buildLessonsFromDb(children, subjects);
        set({ lessons });
      },

      enterDevPreview: () => {
        const kids = devPreviewKids();
        const lessons = fixtureLessons;
        const first = lessons.find((l) => l.kid === 'ishanvi') ?? lessons[0];
        set({
          authReady: true,
          devPreview: true,
          showLogin: false,
          onboardingOpen: false,
          kids,
          lessons,
          activeKid: 'ishanvi',
          activeLessonId: first?.id ?? '',
          activeIndex: 0,
        });
      },

      setTvMode: (on) => set({ tvMode: on }),
      toggleTvMode: () => set({ tvMode: !get().tvMode }),
      setParentMode: (on) => set({ parentMode: on }),
      requestPin: (purpose) => set({ pinGateOpen: true, pinPurpose: purpose }),
      closePinGate: () => set({ pinGateOpen: false }),
      openUploadModal: () => set({ uploadOpen: true, pinGateOpen: false }),
      closeUploadModal: () => set({ uploadOpen: false }),
      openIndexEditor: () => set({ indexEditorOpen: true, pinGateOpen: false }),
      closeIndexEditor: () => set({ indexEditorOpen: false }),
      openFeedback: () => set({ feedbackOpen: true }),
      closeFeedback: () => set({ feedbackOpen: false }),
      openAsk: () => set({ askOpen: true }),
      closeAsk: () => set({ askOpen: false }),
      openSettings: () => set({ settingsOpen: true }),
      closeSettings: () => set({ settingsOpen: false }),
      openOnboarding: () => set({ onboardingOpen: true }),
      closeOnboarding: () => set({ onboardingOpen: false }),
    }),
    {
      name: 'ishanvi-aadya-progress-v6',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        activeKid: s.activeKid,
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

export const selectActiveChild = (s: AppState): ChildRow | undefined =>
  s.children.find((c) => c.id === s.activeKid);

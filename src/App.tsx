import { useEffect, useRef } from 'react';
import { AppShell } from './components/AppShell';
import { TopBar, ProgressSlim } from './components/TopBar';
import { CardViewer } from './components/CardViewer';
import { NavControls } from './components/NavControls';
import { LoginScreen } from './components/LoginScreen';
import { AddChildScreen } from './components/AddChildScreen';
import { useStore } from './state/store';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { useSpatialNav } from './hooks/useSpatialNav';
import { HomeworkUploadHost } from './components/HomeworkUploadHost';
import { detectTvEnvironment } from './lib/detectTv';
import { onAuthStateChange, getSession } from './lib/auth';
import { isSupabaseConfigured } from './lib/supabase';

/** Close the top-most overlay (modal/lightbox/menu) if one is open; otherwise go to the previous card. */
function handleRemoteBack() {
  const state = useStore.getState();

  if (state.settingsOpen) { state.closeSettings(); return; }
  if (state.askOpen) { state.closeAsk(); return; }
  if (state.feedbackOpen) { state.closeFeedback(); return; }
  if (state.indexEditorOpen) { state.closeIndexEditor(); return; }
  if (state.uploadOpen) { state.closeUploadModal(); return; }
  if (state.pinGateOpen) { state.closePinGate(); return; }
  if (document.querySelector('.lightbox')) {
    window.dispatchEvent(new CustomEvent('lightbox-close'));
    return;
  }
  if (document.querySelector('.nav-dd__trigger[aria-expanded="true"]')) {
    window.dispatchEvent(new CustomEvent('nav-dd-close'));
    return;
  }
  state.back();
}

export default function App() {
  const authReady = useStore((s) => s.authReady);
  const session = useStore((s) => s.session);
  const showLogin = useStore((s) => s.showLogin);
  const onboardingOpen = useStore((s) => s.onboardingOpen);
  const devPreview = useStore((s) => s.devPreview);
  const lessons = useStore((s) => s.lessons);
  const setAuthReady = useStore((s) => s.setAuthReady);
  const setSession = useStore((s) => s.setSession);
  const loadUserData = useStore((s) => s.loadUserData);
  const enterDevPreview = useStore((s) => s.enterDevPreview);
  const next = useStore((s) => s.next);
  const back = useStore((s) => s.back);
  const activeKid = useStore((s) => s.activeKid);
  const tvMode = useStore((s) => s.tvMode);
  const setTvMode = useStore((s) => s.setTvMode);
  const menuFocusedRef = useRef(false);

  // DEV-only offline preview: open with ?dev to skip the Supabase login gate.
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    if (new URLSearchParams(window.location.search).has('dev')) {
      enterDevPreview();
    }
  }, [enterDevPreview]);

  useEffect(() => {
    if (useStore.getState().devPreview) return;
    if (!isSupabaseConfigured) {
      setAuthReady(true);
      return;
    }

    let cancelled = false;

    (async () => {
      const existing = await getSession();
      if (!cancelled) {
        setSession(existing);
        setAuthReady(true);
        if (existing) await loadUserData();
      }
    })();

    const unsub = onAuthStateChange(async (s) => {
      setSession(s);
      if (s) await loadUserData();
    });

    return () => {
      cancelled = true;
      unsub();
    };
  }, [setAuthReady, setSession, loadUserData]);

  useEffect(() => {
    const enableTvIfNeeded = () => {
      if (detectTvEnvironment()) setTvMode(true);
    };
    enableTvIfNeeded();
    window.addEventListener('android-tv-ready', enableTvIfNeeded);
    const poll = window.setInterval(enableTvIfNeeded, 400);
    const stop = window.setTimeout(() => window.clearInterval(poll), 4000);
    return () => {
      window.removeEventListener('android-tv-ready', enableTvIfNeeded);
      window.clearInterval(poll);
      window.clearTimeout(stop);
    };
  }, [setTvMode]);

  // Forward Android hardware Back (from MainActivity) into the same context-aware handler.
  useEffect(() => {
    const onAndroidBack = () => handleRemoteBack();
    window.addEventListener('android-back', onAndroidBack);
    return () => window.removeEventListener('android-back', onAndroidBack);
  }, []);

  // On TV launch, put focus on the menu (not a random control) so the remote has a clear start.
  useEffect(() => {
    if (!tvMode || menuFocusedRef.current) return;
    const trigger = document.querySelector<HTMLElement>('.nav-dd__trigger');
    if (trigger) {
      trigger.focus({ preventScroll: true });
      menuFocusedRef.current = true;
    }
  }, [tvMode, lessons.length]);

  useSpatialNav(tvMode);

  useKeyboardNav({
    onNext: next,
    onBack: back,
    onRemoteBack: handleRemoteBack,
    tvMode,
  });

  if (!authReady) {
    return (
      <div className="auth-screen">
        <div className="auth-screen__card">
          <p>Loading…</p>
        </div>
      </div>
    );
  }

  if (!devPreview && (showLogin || !session)) {
    return <LoginScreen onSent={() => {}} />;
  }

  if (!devPreview && onboardingOpen && lessons.length === 0) {
    return <AddChildScreen open onClose={() => {}} />;
  }

  return (
    <>
      <AppShell
        activeKid={activeKid}
        tvMode={tvMode}
        topbar={<TopBar />}
        progress={<ProgressSlim />}
        nav={<NavControls />}
      >
        {lessons.length > 0 ? (
          <CardViewer />
        ) : (
          <div className="empty-state">
            <p>Add homework or a subject index from the menu to get started.</p>
          </div>
        )}
        <HomeworkUploadHost />
      </AppShell>
      {!devPreview && <AddChildScreen open={onboardingOpen && lessons.length > 0} />}
    </>
  );
}

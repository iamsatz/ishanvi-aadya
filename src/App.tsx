import { useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { TopBar, ProgressSlim } from './components/TopBar';
import { CardViewer } from './components/CardViewer';
import { NavControls } from './components/NavControls';
import { useStore } from './state/store';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { useSpatialNav } from './hooks/useSpatialNav';
import { fetchCloudHomework } from './lib/homeworkCloud';
import { HomeworkUploadHost } from './components/HomeworkUploadHost';
import { detectTvEnvironment } from './lib/detectTv';

export default function App() {
  const next = useStore((s) => s.next);
  const back = useStore((s) => s.back);
  const activeKid = useStore((s) => s.activeKid);
  const tvMode = useStore((s) => s.tvMode);
  const setTvMode = useStore((s) => s.setTvMode);
  const drawerOpen = useStore((s) => s.drawerOpen);
  const closeDrawer = useStore((s) => s.closeDrawer);
  const mergeCloudLessons = useStore((s) => s.mergeCloudLessons);

  useEffect(() => {
    const enableTvIfNeeded = () => {
      if (detectTvEnvironment()) setTvMode(true);
    };

    enableTvIfNeeded();
    window.addEventListener('android-tv-ready', enableTvIfNeeded);

    // Native TV flag may arrive slightly after WebView loads
    const poll = window.setInterval(enableTvIfNeeded, 400);
    const stop = window.setTimeout(() => window.clearInterval(poll), 4000);

    return () => {
      window.removeEventListener('android-tv-ready', enableTvIfNeeded);
      window.clearInterval(poll);
      window.clearTimeout(stop);
    };
  }, [setTvMode]);

  useEffect(() => {
    fetchCloudHomework().then(mergeCloudLessons).catch(() => {});
  }, [mergeCloudLessons]);

  useSpatialNav(tvMode);

  useKeyboardNav({
    onNext: next,
    onBack: back,
    onRemoteBack: () => {
      window.dispatchEvent(new CustomEvent('nav-dd-close'));
      if (drawerOpen) closeDrawer();
      else back();
    },
    tvMode,
  });

  return (
    <AppShell
      activeKid={activeKid}
      tvMode={tvMode}
      topbar={<TopBar />}
      progress={<ProgressSlim />}
      nav={<NavControls />}
    >
      <CardViewer />
      <HomeworkUploadHost />
    </AppShell>
  );
}

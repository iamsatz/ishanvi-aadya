import { useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { TopBar, ProgressSlim } from './components/TopBar';
import { CardViewer } from './components/CardViewer';
import { NavControls } from './components/NavControls';
import { useStore } from './state/store';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { useSpatialNav } from './hooks/useSpatialNav';

export default function App() {
  const next = useStore((s) => s.next);
  const back = useStore((s) => s.back);
  const activeKid = useStore((s) => s.activeKid);
  const tvMode = useStore((s) => s.tvMode);
  const setTvMode = useStore((s) => s.setTvMode);
  const drawerOpen = useStore((s) => s.drawerOpen);
  const closeDrawer = useStore((s) => s.closeDrawer);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // TV mode is session-only via ?tv=1 — never restore from localStorage (breaks arrow nav).
    setTvMode(params.get('tv') === '1');
  }, [setTvMode]);

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
    </AppShell>
  );
}

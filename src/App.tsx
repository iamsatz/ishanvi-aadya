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
  const navDropdownOpen = useStore((s) => s.navDropdownOpen);
  const closeDrawer = useStore((s) => s.closeDrawer);
  const setNavDropdownOpen = useStore((s) => s.setNavDropdownOpen);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('tv') === '1') setTvMode(true);
  }, [setTvMode]);

  useSpatialNav(tvMode);

  useKeyboardNav({
    onNext: next,
    onBack: back,
    onRemoteBack: () => {
      if (navDropdownOpen) setNavDropdownOpen(false);
      else if (drawerOpen) closeDrawer();
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

import { AppShell } from './components/AppShell';
import { TopBar, ProgressSlim } from './components/TopBar';
import { CardViewer } from './components/CardViewer';
import { NavControls } from './components/NavControls';
import { useStore } from './state/store';
import { useKeyboardNav } from './hooks/useKeyboardNav';

export default function App() {
  const next = useStore((s) => s.next);
  const back = useStore((s) => s.back);
  const activeKid = useStore((s) => s.activeKid);
  useKeyboardNav({ onNext: next, onBack: back });

  return (
    <AppShell
      activeKid={activeKid}
      topbar={<TopBar />}
      progress={<ProgressSlim />}
      nav={<NavControls />}
    >
      <CardViewer />
    </AppShell>
  );
}

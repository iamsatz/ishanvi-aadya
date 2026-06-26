import type { ReactNode } from 'react';
import type { KidId } from '../types/content';
import { useStore } from '../state/store';

interface Props {
  topbar: ReactNode;
  progress: ReactNode;
  nav: ReactNode;
  children: ReactNode;
  activeKid?: KidId;
  tvMode?: boolean;
}

function themeKidId(activeKid: KidId, kids: { id: KidId; name: string }[]): string {
  const k = kids.find((c) => c.id === activeKid);
  const n = k?.name.toLowerCase() ?? '';
  if (n.includes('ishanvi')) return 'ishanvi';
  if (n.includes('aadya')) return 'aadya';
  return 'default';
}

export function AppShell({ topbar, progress, nav, children, activeKid = '', tvMode = false }: Props) {
  const kids = useStore((s) => s.kids);
  const theme = themeKidId(activeKid, kids);

  return (
    <div className="app" data-kid={theme} data-tv={tvMode ? 'true' : undefined}>
      {topbar}
      {progress}
      <main className="main" id="main">{children}</main>
      {nav}
    </div>
  );
}

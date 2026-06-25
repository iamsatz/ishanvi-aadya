import type { ReactNode } from 'react';
import type { KidId } from '../types/content';

interface Props {
  topbar: ReactNode;
  progress: ReactNode;
  nav: ReactNode;
  children: ReactNode;
  activeKid?: KidId;
  tvMode?: boolean;
}

export function AppShell({ topbar, progress, nav, children, activeKid = 'ishanvi', tvMode = false }: Props) {
  return (
    <div className="app" data-kid={activeKid} data-tv={tvMode ? 'true' : undefined}>
      {topbar}
      {progress}
      <main className="main" id="main">{children}</main>
      {nav}
    </div>
  );
}

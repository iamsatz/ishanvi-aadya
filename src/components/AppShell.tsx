import type { ReactNode } from 'react';
import type { KidId } from '../types/content';

interface Props {
  topbar: ReactNode;
  progress: ReactNode;
  nav: ReactNode;
  children: ReactNode;
  activeKid?: KidId;
}

export function AppShell({ topbar, progress, nav, children, activeKid = 'ishanvi' }: Props) {
  return (
    <div className="app" data-kid={activeKid}>
      {topbar}
      {progress}
      <main className="main" id="main">{children}</main>
      {nav}
    </div>
  );
}

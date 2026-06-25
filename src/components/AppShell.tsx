import type { ReactNode } from 'react';

interface Props {
  topbar: ReactNode;
  progress: ReactNode;
  nav: ReactNode;
  children: ReactNode;
}

export function AppShell({ topbar, progress, nav, children }: Props) {
  return (
    <div className="app">
      {topbar}
      {progress}
      <main className="main" id="main">{children}</main>
      {nav}
    </div>
  );
}

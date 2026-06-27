import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './styles/tokens.css';
import './styles/global.css';
import './styles/tv.css';

// Replace stale cached app (old login UI) as soon as a new build is available.
registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

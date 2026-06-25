import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('App error:', error, info);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('ishanvi-aadya-progress');
    } catch {
      /* ignore */
    }
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="app-error">
          <h1>Something went wrong</h1>
          <p>The app could not load. Tap below to reset and try again.</p>
          <button type="button" className="btn" onClick={this.handleReset}>
            Reset app
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  /** Reset the boundary when this changes (e.g. card id). */
  resetKey: string;
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Wraps a single card's interaction so one broken card shows a friendly
 * skip message instead of white-screening the whole app. Resets when the
 * active card changes.
 */
export class CardErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`[CardErrorBoundary] card "${this.props.resetKey}" crashed:`, error, info);
  }

  componentDidUpdate(prev: Props) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="card-fault" role="alert">
          <p className="card-fault__emoji" aria-hidden>🐢</p>
          <p className="card-fault__msg">
            This page had a little hiccup. Tap <strong>Next →</strong> to keep going.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-red-500 p-8 flex flex-col gap-4 overflow-auto font-mono">
          <h1 className="text-2xl font-bold text-white">Something went wrong.</h1>
          <div className="border border-red-900 bg-red-950/50 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{this.state.error?.toString()}</h2>
            <details className="whitespace-pre-wrap text-sm text-gray-400">
              {this.state.errorInfo?.componentStack}
            </details>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-white text-black rounded font-bold mt-4"
          >
            Reload App
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

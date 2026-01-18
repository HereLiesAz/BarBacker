import { Component, ErrorInfo, ReactNode } from 'react';
import { runDiagnostics, formatReport } from '../utils/debug';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  diagnosticReport: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null, diagnosticReport: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null, diagnosticReport: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const report = runDiagnostics();
    this.setState({ errorInfo, diagnosticReport: formatReport(report) });
    console.error("Uncaught error:", error, errorInfo);
  }

  handleCopy = () => {
    const { error, errorInfo, diagnosticReport } = this.state;
    const text = `ERROR:\n${error?.toString()}\n\nSTACK:\n${errorInfo?.componentStack}\n\nDIAGNOSTICS:\n${diagnosticReport}`;
    navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard'));
  };

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

          {this.state.diagnosticReport && (
            <div className="border border-blue-900 bg-blue-950/20 p-4 rounded">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Auto-Diagnostics</h3>
              <pre className="whitespace-pre-wrap text-xs text-blue-200">
                {this.state.diagnosticReport}
              </pre>
            </div>
          )}

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-black rounded font-bold hover:bg-gray-200"
            >
              Reload App
            </button>
            <button
              onClick={this.handleCopy}
              className="px-6 py-3 border border-white text-white rounded font-bold hover:bg-white/10"
            >
              Copy Debug Info
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

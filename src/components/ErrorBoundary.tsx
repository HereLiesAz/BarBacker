// Import necessary React types for Error Boundaries.
import { Component, ErrorInfo, ReactNode } from 'react';
// Import debug utilities.
import { runDiagnostics, formatReport } from '../utils/debug';

// Define Props interface (expects children).
interface Props {
  children: ReactNode;
}

// Define State interface for the error boundary.
interface State {
  // Boolean to flag if an error was caught.
  hasError: boolean;
  // The Error object itself.
  error: Error | null;
  // React error info (stack trace).
  errorInfo: ErrorInfo | null;
  // The formatted diagnostic report string.
  diagnosticReport: string | null;
}

// ErrorBoundary class component.
// React requires Class Components for error boundaries (componentDidCatch).
class ErrorBoundary extends Component<Props, State> {
  // Initialize state.
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null, diagnosticReport: null };
  }

  // Lifecycle method called during the render phase when an error occurs.
  // Updates state to show fallback UI.
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null, diagnosticReport: null };
  }

  // Lifecycle method called after the error is caught.
  // Used for logging and side effects (like running diagnostics).
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Run system diagnostics immediately upon crash.
    const report = runDiagnostics();
    // Update state with the report.
    this.setState({ errorInfo, diagnosticReport: formatReport(report) });
    // Log to console.
    console.error("Uncaught error:", error, errorInfo);
  }

  // Handler to copy debug info to clipboard for reporting.
  handleCopy = () => {
    const { error, errorInfo, diagnosticReport } = this.state;
    // Construct the full text payload.
    const text = `ERROR:\n${error?.toString()}\n\nSTACK:\n${errorInfo?.componentStack}\n\nDIAGNOSTICS:\n${diagnosticReport}`;
    // Use Clipboard API.
    navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard'));
  };

  render() {
    // If an error exists, render the error UI.
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-red-500 p-8 flex flex-col gap-4 overflow-auto font-mono">
          <h1 className="text-2xl font-bold text-white">Something went wrong.</h1>

          {/* Error Message Section */}
          <div className="border border-red-900 bg-red-950/50 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{this.state.error?.toString()}</h2>
            <details className="whitespace-pre-wrap text-sm text-gray-400">
              {this.state.errorInfo?.componentStack}
            </details>
          </div>

          {/* Diagnostic Report Section */}
          {this.state.diagnosticReport && (
            <div className="border border-blue-900 bg-blue-950/20 p-4 rounded">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Auto-Diagnostics</h3>
              <pre className="whitespace-pre-wrap text-xs text-blue-200">
                {this.state.diagnosticReport}
              </pre>
            </div>
          )}

          {/* Help / Tips Section */}
          <div className="bg-yellow-900/20 border border-yellow-900/50 p-4 rounded text-yellow-200 text-sm">
            <p className="font-bold mb-1">Stuck in a crash loop?</p>
            <p>Try clearing your local data:</p>
            <ul className="list-disc list-inside mt-1 opacity-80">
                <li><strong>Android App:</strong> Long press App Icon → App Info → Storage → Clear Data</li>
                <li><strong>Browser:</strong> Settings → Site Settings → Clear Data</li>
            </ul>
          </div>

          {/* Action Buttons */}
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

    // Normal render: just show children.
    return this.props.children;
  }
}

export default ErrorBoundary;

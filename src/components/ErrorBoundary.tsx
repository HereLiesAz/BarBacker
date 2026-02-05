import { Component, ErrorInfo, ReactNode } from 'react';
import { runDiagnostics, formatReport } from '../utils/debug';

/** Props for the ErrorBoundary wrapper. */
interface Props {
  children: ReactNode;
}

/** State for the ErrorBoundary. */
interface State {
  /** Whether an error has been caught. */
  hasError: boolean;
  /** The caught error object. */
  error: Error | null;
  /** Stack trace information. */
  errorInfo: ErrorInfo | null;
  /** Generated diagnostic report string for debugging. */
  diagnosticReport: string | null;
}

/**
 * ErrorBoundary Component.
 *
 * A Class Component (React requirement for error boundaries) that catches JavaScript errors
 * anywhere in the child component tree, logs them, and displays a fallback UI instead of
 * crashing the entire app.
 *
 * Includes integrated diagnostics to help users report issues.
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Initialize default state
    this.state = { hasError: false, error: null, errorInfo: null, diagnosticReport: null };
  }

  /**
   * Lifecycle method to update state when an error is thrown.
   * This is called during the "render phase" so side-effects are not permitted here.
   */
  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, errorInfo: null, diagnosticReport: null };
  }

  /**
   * Lifecycle method triggered after an error is caught.
   * Used here to run diagnostics and log to console.
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Generate a diagnostic report (env checks, storage checks) immediately upon crash
    const report = runDiagnostics();
    // Update state with detailed info
    this.setState({ errorInfo, diagnosticReport: formatReport(report) });
    // Log to console for devs
    console.error("Uncaught error:", error, errorInfo);
  }

  /**
   * Copies the full error details and diagnostic report to the clipboard.
   * Allows users to easily share the crash info.
   */
  handleCopy = () => {
    const { error, errorInfo, diagnosticReport } = this.state;
    const text = `ERROR:\n${error?.toString()}\n\nSTACK:\n${errorInfo?.componentStack}\n\nDIAGNOSTICS:\n${diagnosticReport}`;
    navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard'));
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
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

          {/* Diagnostics Panel Section */}
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

          {/* Action Buttons Section */}
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

    // If no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;

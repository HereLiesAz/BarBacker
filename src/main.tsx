// Import the React library for building user interfaces.
import React from 'react';
// Import ReactDOM to render the React application into the DOM.
import ReactDOM from 'react-dom/client';
// Import the main App component which serves as the root of the component tree.
import App from './App';
// Import global CSS styles.
import './index.css';
// Import the ErrorBoundary component to catch runtime errors in the component tree.
import ErrorBoundary from './components/ErrorBoundary';

// Attempt to find the DOM element with the ID 'root', which is the mount point for the React app.
const rootElement = document.getElementById('root');

// Check if the root element exists before attempting to render.
if (rootElement) {
  // Create a React root for the provided DOM element using the createRoot API (React 18+).
  ReactDOM.createRoot(rootElement).render(
    // Wrap the app in StrictMode to highlight potential problems in the application.
    // This activates additional checks and warnings for descendants.
    <React.StrictMode>
      {/*
        Wrap the entire application in the ErrorBoundary component.
        This ensures that any JavaScript error thrown during the rendering of the App component
        or its children is caught, logged, and a fallback UI is displayed instead of crashing the page.
      */}
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  // If the root element is not found, log an error to the console.
  // This usually indicates an issue with index.html.
  console.error('Failed to find the root element');
}

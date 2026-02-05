// Import the 'StrictMode' component from React to enable additional checks and warnings during development.
import { StrictMode } from 'react'
// Import 'createRoot' from 'react-dom/client' to create the React root for rendering the application.
import { createRoot } from 'react-dom/client'
// Import 'HashRouter' from 'react-router-dom' to handle routing using the URL hash (e.g., #/path), which is suitable for static hosting like GitHub Pages.
import { HashRouter } from 'react-router-dom'
// Import the main 'App' component which contains the core application logic and UI.
import App from './App.tsx'
// Import the 'ErrorBoundary' component to catch and handle runtime errors in the component tree.
import ErrorBoundary from './components/ErrorBoundary'
// Import the global CSS styles.
import './index.css'

// Find the HTML element with the ID 'root' and create a React root for it. This is where the React app will be mounted.
createRoot(document.getElementById('root')!).render(
  // Wrap the application in 'StrictMode' to highlight potential problems in an application. It activates additional checks and warnings for its descendants.
  <StrictMode>
    {/* Wrap the application in 'ErrorBoundary' to catch JavaScript errors anywhere in the child component tree, log those errors, and display a fallback UI. */}
    <ErrorBoundary>
      {/* Wrap the application in 'HashRouter' to enable client-side routing using the hash portion of the URL. */}
      <HashRouter>
        {/* Render the main 'App' component. */}
        <App />
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>,
)

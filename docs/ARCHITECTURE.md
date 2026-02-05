# Architecture Overview

**BarBacker** is a client-side Single Page Application (SPA) built with React, hosted on GitHub Pages, and wrapped as a native Android application using Capacitor. It relies on Firebase for real-time data synchronization, authentication, and messaging.

## Technology Stack

*   **Frontend Framework**: [React](https://react.dev/) (v19)
    *   Used for building the user interface.
    *   Utilizes Hooks (`useState`, `useEffect`, `useRef`) for state management.
*   **Build Tool**: [Vite](https://vitejs.dev/)
    *   Provides fast development server and optimized production builds.
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
    *   Ensures type safety and code maintainability.
*   **UI Library**: [Material Web](https://github.com/material-components/material-web)
    *   Google's official Web Components implementation of Material Design 3.
    *   Provides accessible and performant UI elements (buttons, dialogs, lists).
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
    *   Utility-first CSS framework for layout and spacing.
*   **Mobile Runtime**: [Capacitor](https://capacitorjs.com/)
    *   Wraps the web application in a native Android WebView.
    *   Provides access to native APIs (Push Notifications, Geolocation, Camera).

## Backend Services (Firebase)

BarBacker is a serverless application relying on [Firebase](https://firebase.google.com/):

1.  **Authentication**:
    *   Manages user identity via Email/Password and Google Sign-In.
    *   Persists user sessions across reloads.
2.  **Firestore (Database)**:
    *   NoSQL document database.
    *   Stores `bars`, `users`, `requests`, and `notices`.
    *   Uses real-time listeners (`onSnapshot`) to sync data instantly between devices.
3.  **Cloud Messaging (FCM)**:
    *   Sends push notifications to Android devices when requests are made.
    *   Web users receive in-app alerts via audio and visual cues.

## Data Flow

1.  **User Action**: A bartender taps a button (e.g., "ICE").
2.  **Firestore Write**: The app writes a new document to the `requests` collection.
3.  **Real-time Sync**: Firestore pushes this new document to all connected devices (Barbacks) subscribed to the `requests` collection.
4.  **UI Update**: The React state updates, rendering the new request card.
5.  **Notification**:
    *   **In-App**: The `useNag` hook detects the pending request and plays an alert sound.
    *   **Push**: If configured, an FCM message is sent to native devices or an `ntfy` request is sent for iOS.

## Key Design Decisions

*   **Optimistic UI**: The app assumes network success for some actions but relies primarily on the Firestore `onSnapshot` stream to drive the UI. This ensures the UI always reflects the *server* state, preventing desync.
*   **Role-Based Access**: The UI adapts based on the user's role (Bartender vs. Barback), hiding irrelevant controls (e.g., Barbacks claim requests, Bartenders create them).
*   **Local Persistence**: `localStorage` is used to remember the last visited Bar ID, allowing for quick re-entry on reload.
*   **Performance**:
    *   Audio objects are reused (`useRef`) to prevent memory leaks.
    *   Firestore queries are limited (e.g., `limit(100)`) to prevent fetching excessive historical data.

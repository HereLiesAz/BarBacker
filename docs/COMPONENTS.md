# Component Guide

The application is structured as a tree of React components.

## Core Components

### `App.tsx`
The root component. It handles:
*   Authentication state monitoring.
*   Routing (handling `?bar=` query param).
*   Global subscriptions (Firestore listeners for User, Bar, Requests).
*   Main layout rendering (Navbar, Dashboard, Footer).
*   Conditional rendering based on state (Auth -> Bar Selection -> Role Selection -> Dashboard).

### `main.tsx`
The entry point. It wraps `App` in:
*   `StrictMode`: For React best practices.
*   `ErrorBoundary`: For catching crash loops.
*   `HashRouter`: For routing (using hash to support static host navigation).

## UI Components (`src/components/`)

*   **`BarSearch.tsx`**:
    *   Handles searching for bars via OpenStreetMap API and Firestore.
    *   Allows creating new temporary bars.
    *   Uses a debounced search input.

*   **`BarManager.tsx`**:
    *   A dialog for managing the bar's configuration (hiding buttons).
    *   Only accessible to authorized roles (logic in App.tsx).

*   **`RoleSelector.tsx`**:
    *   Forces the user to select a role (Bartender, Barback, etc.) and display name upon joining a bar.

*   **`NotificationSettings.tsx`**:
    *   Allows users to toggle which request types trigger alerts.
    *   Displays the `ntfy` subscription link for iOS.

*   **`InputDialog.tsx`**:
    *   A generic dialog for text input (searching brands, adding wells).
    *   Supports "Create New" flow.

*   **`WhoIsOnDialog.tsx`**:
    *   Displays a list of currently active and off-clock users.

*   **`SortableButton.tsx`**:
    *   A wrapper component using `@dnd-kit` to make buttons draggable for reordering.

*   **`ErrorBoundary.tsx`**:
    *   Catches React render errors.
    *   Displays a "Something went wrong" screen with diagnostic info.
    *   Provides a "Copy Debug Info" button for reporting issues.

## Material Web Integration

We use **Material Web** (Google's WC implementation) for all leaf UI elements.
*   `md-filled-button`
*   `md-outlined-button`
*   `md-text-button`
*   `md-filled-text-field`
*   `md-icon`
*   `md-dialog`
*   `md-list`, `md-list-item`
*   `md-circular-progress`
*   `md-switch`
*   `md-checkbox`
*   `md-radio`

These are custom elements. React interacts with them by setting props (attributes) and handling standard events (though sometimes needing refs for complex events).

## State Management

*   **Local UI State**: Handled by `useState` (e.g., dialog open/close, search text).
*   **Shared Data**: Handled by **Firestore Subscriptions**. We do *not* use a global state store like Redux. The Firestore `onSnapshot` listeners in `App.tsx` act as the single source of truth, updating local state variables (`requests`, `users`) whenever the backend changes.

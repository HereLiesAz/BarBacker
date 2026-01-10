# BarBacker

BarBacker is a Progressive Web App (PWA) designed to streamline communication between bartenders and barbacks. It allows bartenders to quickly request items (ice, glassware, garnishes) and barbacks to claim and fulfill those requests.

## Features

*   **Quick Requests**: One-tap requests for common items.
*   **Customizable**: Dynamic button configurations based on bar needs.
*   **Role-Based**: Distinct roles for Bartenders, Barbacks, Managers, etc.
*   **Real-time**: Instant updates using Firebase Firestore.
*   **PWA**: Installable on mobile devices for a native-like experience.
*   **Geolocation**: Find bars using OpenStreetMap integration.

## Architecture

The application is built using:

*   **Frontend**: React, TypeScript, Vite, Tailwind CSS
*   **UI Components**: Material Web (Web Components)
*   **Backend**: Firebase (Authentication, Firestore, Cloud Messaging)
*   **State Management**: React State & Context + Firestore listeners

### Directory Structure

*   `src/components`: Reusable UI components (`BarSearch`, `RoleSelector`).
*   `src/types.ts`: TypeScript interfaces and types.
*   `src/constants.ts`: Application constants (Roles, Default Buttons).
*   `src/firebase.ts`: Firebase configuration and helpers.
*   `src/App.tsx`: Main application logic.

## Setup

1.  **Clone the repository**.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Variables**:
    Create a `.env` file in the root directory with your Firebase configuration:
    ```
    VITE_FIREBASE_API_KEY=...
    VITE_FIREBASE_AUTH_DOMAIN=...
    VITE_FIREBASE_PROJECT_ID=...
    VITE_FIREBASE_STORAGE_BUCKET=...
    VITE_FIREBASE_MESSAGING_SENDER_ID=...
    VITE_FIREBASE_APP_ID=...
    VITE_FIREBASE_VAPID_KEY=...
    ```
4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Testing

Run unit and integration tests:

```bash
npm test
```

## Deployment

Build the application:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

# BarBacker Architecture

## Overview
BarBacker is a Progressive Web App (PWA) built with **React** and **Vite**, using **Firebase** for backend services (Auth, Firestore) and **Capacitor** for native mobile wrappers (Android, iOS).

## Frontend (src/)
- **Framework**: React 18+ with TypeScript.
- **Build Tool**: Vite.
- **Styling**: Tailwind CSS + Material Web Components (Web Components).
- **State Management**: React Context + Local State (for UI), Firestore (for shared data).
- **Routing**: React Router DOM.

## Backend (Firebase)
- **Authentication**: Firebase Auth (Anonymous + potentially others).
- **Database**: Cloud Firestore.
  - Real-time listeners (Snapshot listeners) are used for instant updates.
- **Hosting**: GitHub Pages (frontend), Firebase Hosting (optional).

## Mobile (android/, ios/)
- **Capacitor**: Bridges the web app to native code.
- **Plugins**: Used for Geolocation, Camera, Haptics, Push Notifications.
- **Sync**: `npx cap sync` copies the web build (`dist`) to the native platform projects.

## Key Components
- **App.tsx**: Main entry point, handles global state (User, Bar, Notices) and Routing.
- **BarSearch**: Geolocation-based search using OpenStreetMap + Firestore.
- **BarManager**: Admin interface for managing the bar (Requests, Menu).
- **Hooks**: Custom hooks like `useNag` (audio alerts) and `useLatestRelease` (updates).

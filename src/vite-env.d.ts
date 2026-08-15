/// <reference types="vite/client" />
/// <reference path="./declarations.d.ts" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string
  readonly VITE_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_FIREBASE_PROJECT_ID: string
  readonly VITE_FIREBASE_STORAGE_BUCKET: string
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string
  readonly VITE_FIREBASE_APP_ID: string
  readonly VITE_FIREBASE_VAPID_KEY: string
  readonly VITE_GOD_MODE_EMAIL: string
  // Base URL the outbound iCal feed (functions/src/calendar/icalFeed.ts)
  // is actually reachable at — e.g. a Firebase Hosting site with the
  // /ical/** rewrite in firebase.json, or the icalFeed function's own
  // Cloud Run URL. window.location.origin is NOT a safe default: the
  // web client and the Cloud Functions deploy are two separate hosts
  // (GitHub Pages + Cloud Functions/Cloud Run) unless this is set.
  readonly VITE_ICAL_FEED_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

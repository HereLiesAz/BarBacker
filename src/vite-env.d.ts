/// <reference types="vite/client" />
/// <reference path="./declarations.d.ts" />

/**
 * Interface definition for Vite environment variables.
 * These match the variables defined in .env files and used in src/firebase.ts.
 */
interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string
  readonly VITE_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_FIREBASE_PROJECT_ID: string
  readonly VITE_FIREBASE_STORAGE_BUCKET: string
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string
  readonly VITE_FIREBASE_APP_ID: string
  readonly VITE_FIREBASE_VAPID_KEY: string
}

/**
 * Extends the global ImportMeta interface to include our specific env variables.
 */
interface ImportMeta {
  readonly env: ImportMetaEnv
}

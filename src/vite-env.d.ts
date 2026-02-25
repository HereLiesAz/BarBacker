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
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

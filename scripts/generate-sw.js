// Import File System module for file operations.
import fs from 'fs';
// Import Path module for handling file paths.
import path from 'path';
// Import 'fileURLToPath' to replicate __filename behavior in ES Modules.
import { fileURLToPath } from 'url';
// Import 'dotenv' to load environment variables from .env file.
import dotenv from 'dotenv';

// Load environment variables.
dotenv.config();

// Determine current directory.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to retrieve a required env var, failing the build
// (not silently substituting a placeholder) if it's missing.
// Previously this fell back to strings like 'YOUR_API_KEY' — tsc,
// vite build, and the deploy workflow all succeeded either way, so a
// missing/rotated/renamed VITE_FIREBASE_* secret produced a shipped
// firebase-messaging-sw.js that called
// firebase.initializeApp({apiKey: "YOUR_API_KEY", ...}) with no build
// signal at all. Background push silently doesn't work for anyone
// until someone notices. Mirrors generate-google-services.js's
// already-fail-closed pattern for the same class of secret.
const getEnv = (key) => {
  const val = process.env[key];
  if (!val) {
    console.error(`Error: Environment variable ${key} is missing.`);
    process.exit(1);
  }
  return val;
};

// Define the content of the Service Worker.
// We use a template string to inject environment variables at build time.
const swContent = `
// Import Firebase scripts from CDN (using compat libraries for Service Worker).
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase with injected configuration.
const firebaseConfig = {
  apiKey: "${getEnv('VITE_FIREBASE_API_KEY')}",
  authDomain: "${getEnv('VITE_FIREBASE_AUTH_DOMAIN')}",
  projectId: "${getEnv('VITE_FIREBASE_PROJECT_ID')}",
  storageBucket: "${getEnv('VITE_FIREBASE_STORAGE_BUCKET')}",
  messagingSenderId: "${getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID')}",
  appId: "${getEnv('VITE_FIREBASE_APP_ID')}"
};

firebase.initializeApp(firebaseConfig);

// Retrieve the messaging instance.
const messaging = firebase.messaging();

// Handle background messages.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // payload.notification is absent on data-only messages — guard
  // instead of throwing (which would drop the notification silently,
  // since a throwing handler shows nothing rather than falling back).
  const notificationTitle = payload.notification?.title || 'BarBacker Alert';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || '',
    // Relative (no leading slash) so it resolves against this
    // service worker's own scope regardless of the deploy subpath —
    // the file it previously pointed at ('/pwa-192x192.png', origin-
    // root-absolute) never existed in public/ at all; the real icons
    // are named 'icon-<size>.png'.
    icon: 'icon-192x192.png',
    vibrate: [200, 100, 200, 100, 200, 100, 200], // Custom vibration pattern.
    tag: 'request-alert', // Tag to replace existing notifications (prevent stacking).
    renotify: true // Vibrate/Alert again even if replacing.
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
`;

// Define output path (public folder).
const publicDir = path.join(__dirname, '../public');
// Ensure directory exists.
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

// Write the generated file.
fs.writeFileSync(path.join(publicDir, 'firebase-messaging-sw.js'), swContent);
console.log('Generated firebase-messaging-sw.js with environment variables');

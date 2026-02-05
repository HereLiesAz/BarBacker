import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env file into process.env.
// This is necessary because this script runs in the Node.js build environment,
// not the browser environment where Vite normally injects variables.
dotenv.config();

// Determine __dirname for ES modules (Node.js ESM doesn't provide it by default).
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Helper to retrieve environment variables or provide a fallback.
 * Ensures the Service Worker generation doesn't break if a variable is missing during dev.
 */
const getEnv = (key, fallback) => process.env[key] || fallback;

/**
 * The template content for the Service Worker.
 * We inject environment variables directly into the string literal.
 * This is crucial because Service Workers run in a separate worker context
 * and do not have access to 'process.env' or the window object.
 */
const swContent = `
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase with injected configuration values.
const firebaseConfig = {
  apiKey: "${getEnv('VITE_FIREBASE_API_KEY', 'YOUR_API_KEY')}",
  authDomain: "${getEnv('VITE_FIREBASE_AUTH_DOMAIN', 'YOUR_AUTH_DOMAIN')}",
  projectId: "${getEnv('VITE_FIREBASE_PROJECT_ID', 'YOUR_PROJECT_ID')}",
  storageBucket: "${getEnv('VITE_FIREBASE_STORAGE_BUCKET', 'YOUR_STORAGE_BUCKET')}",
  messagingSenderId: "${getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID', 'YOUR_MESSAGING_SENDER_ID')}",
  appId: "${getEnv('VITE_FIREBASE_APP_ID', 'YOUR_APP_ID')}"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages (when app is closed or backgrounded).
// This handler allows us to customize the system notification display.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Extract title and body from the payload.
  const notificationTitle = payload.notification.title;

  // Configure notification options.
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/pwa-192x192.png', // Path to the app icon.
    vibrate: [200, 100, 200, 100, 200, 100, 200], // Distinctive vibration pattern.
    tag: 'request-alert', // Tag replaces existing notifications to prevent stacking.
    renotify: true // Force sound/vibration even if replacing an existing tag.
  };

  // Display the notification using the Service Worker Registration API.
  self.registration.showNotification(notificationTitle, notificationOptions);
});
`;

// Determine the output directory (public folder).
const publicDir = path.join(__dirname, '../public');

// Ensure the 'public' directory exists.
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

// Write the generated file to the public directory so it's served by Vite.
fs.writeFileSync(path.join(publicDir, 'firebase-messaging-sw.js'), swContent);
console.log('Generated firebase-messaging-sw.js with environment variables');

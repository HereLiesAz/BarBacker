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

// Helper function to safely get env vars or fallback.
const getEnv = (key, fallback) => process.env[key] || fallback;

// Define the content of the Service Worker.
// We use a template string to inject environment variables at build time.
const swContent = `
// Import Firebase scripts from CDN (using compat libraries for Service Worker).
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase with injected configuration.
const firebaseConfig = {
  apiKey: "${getEnv('VITE_FIREBASE_API_KEY', 'YOUR_API_KEY')}",
  authDomain: "${getEnv('VITE_FIREBASE_AUTH_DOMAIN', 'YOUR_AUTH_DOMAIN')}",
  projectId: "${getEnv('VITE_FIREBASE_PROJECT_ID', 'YOUR_PROJECT_ID')}",
  storageBucket: "${getEnv('VITE_FIREBASE_STORAGE_BUCKET', 'YOUR_STORAGE_BUCKET')}",
  messagingSenderId: "${getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID', 'YOUR_MESSAGING_SENDER_ID')}",
  appId: "${getEnv('VITE_FIREBASE_APP_ID', 'YOUR_APP_ID')}"
};

firebase.initializeApp(firebaseConfig);

// Retrieve the messaging instance.
const messaging = firebase.messaging();

// Handle background messages.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification display.
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/pwa-192x192.png', // Path to PWA icon.
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

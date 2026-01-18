import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to handle undefined env vars
const getEnv = (key, fallback) => process.env[key] || fallback;

const swContent = `
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

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

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/pwa-192x192.png',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: 'request-alert',
    renotify: true
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
`;

// Write to public folder
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'firebase-messaging-sw.js'), swContent);
console.log('Generated firebase-messaging-sw.js with environment variables');

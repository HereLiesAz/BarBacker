
// Import Firebase scripts from CDN (using compat libraries for Service Worker).
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase with injected configuration.
const firebaseConfig = {
  apiKey: "AIzaSyCfkeRu4DVuSBBBa9bc0rrhtu-gCixFqIo",
  authDomain: "barbacker-6c683.firebaseapp.com",
  projectId: "barbacker-6c683",
  storageBucket: "barbacker-6c683.firebasestorage.app",
  messagingSenderId: "869145643734",
  appId: "1:869145643734:web:d902468d6942df6bc81777"
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

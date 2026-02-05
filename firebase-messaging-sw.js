
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

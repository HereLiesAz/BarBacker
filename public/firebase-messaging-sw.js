
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCfkeRu4DVuSBBBa9bc0rrhtu-gCixFqIo",
  authDomain: "barbacker-6c683",
  projectId: "869145643734",
  storageBucket: "1:869145643734:web:d902468d6942df6bc81777",
  messagingSenderId: "barbacker-6c683.firebasestorage.app",
  appId: "barbacker-6c683.firebaseapp.com"
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

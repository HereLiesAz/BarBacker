import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider, 
  OAuthProvider 
} from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

/**
 * Firebase Configuration Object.
 * Loaded from Vite environment variables (.env).
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

/** Initialize the Firebase App instance. */
const app = initializeApp(firebaseConfig);

/** Export the Firestore database instance. */
export const db = getFirestore(app);

/** Export the Firebase Auth instance. */
export const auth = getAuth(app);

/** Export the Firebase Messaging instance (for Push Notifications). */
export const messaging = getMessaging(app);

// --- Auth Providers ---

/** Google Authentication Provider configuration. */
export const googleProvider = new GoogleAuthProvider();
// Force account selection prompt on login
googleProvider.setCustomParameters({ prompt: 'select_account' });

/** Apple Authentication Provider configuration. */
export const appleProvider = new OAuthProvider('apple.com');

/**
 * Requests permission from the browser to send web push notifications.
 * If granted, retrieves the FCM token.
 *
 * @returns {Promise<string | null>} The FCM registration token, or null if denied/failed.
 */
export const requestNotificationPermission = async () => {
  try {
    // Request browser permission
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // Get the token using the VAPID key
      const token = await getToken(messaging, { 
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY 
      });
      return token;
    }
  } catch (error) {
    console.error("Notification permission denied", error);
  }
  return null;
};

/**
 * Sets up a listener for foreground push messages.
 *
 * @returns {Promise<any>} Resolves with the message payload when received.
 */
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

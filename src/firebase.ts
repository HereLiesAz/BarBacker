// Import the 'initializeApp' function from the Firebase SDK to initialize the Firebase app instance.
import { initializeApp } from "firebase/app";
// Import 'getFirestore' to access the Cloud Firestore database service.
import { getFirestore } from "firebase/firestore";
// Import authentication-related functions from the Firebase Auth SDK.
// 'getAuth' retrieves the authentication service.
// 'GoogleAuthProvider' is used for Google Sign-In.
// 'OAuthProvider' is used for generic OAuth providers (e.g., Apple).
import { 
  getAuth, 
  GoogleAuthProvider, 
  OAuthProvider 
} from "firebase/auth";
// Import messaging functions from the Firebase Messaging SDK (FCM) for push notifications.
// 'getMessaging' retrieves the messaging service.
// 'getToken' retrieves the FCM registration token for the current device.
// 'onMessage' allows listening for incoming messages when the app is in the foreground.
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Define the Firebase configuration object using environment variables.
// These variables are injected by Vite at build time.
const firebaseConfig = {
  // The API key for the Firebase project.
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // The authentication domain for the project (e.g., project-id.firebaseapp.com).
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // The unique identifier for the Firebase project.
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // The Cloud Storage bucket URL.
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // The sender ID for Firebase Cloud Messaging.
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // The unique application ID for the Firebase app.
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize the Firebase application with the configuration.
const app = initializeApp(firebaseConfig);

// Initialize and export the Cloud Firestore service instance.
export const db = getFirestore(app);

// Initialize and export the Firebase Authentication service instance.
export const auth = getAuth(app);

// Initialize and export the Firebase Cloud Messaging service instance.
export const messaging = getMessaging(app);

// --- Auth Providers ---

// Create a new instance of the GoogleAuthProvider for Google Sign-In.
export const googleProvider = new GoogleAuthProvider();
// Set custom parameters for the Google provider.
// 'prompt: select_account' forces the account selection screen to appear even if the user is already logged in.
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Create a new instance of the OAuthProvider for Apple Sign-In.
export const appleProvider = new OAuthProvider('apple.com');

// --- Notification Logic ---

// Define an asynchronous function to request permission for push notifications from the user.
export const requestNotificationPermission = async () => {
  try {
    // Request permission from the browser's Notification API.
    const permission = await Notification.requestPermission();

    // Check if the user granted permission.
    if (permission === 'granted') {
      // If granted, retrieve the FCM registration token.
      // The 'vapidKey' is required for web push notifications and identifies the sender.
      const token = await getToken(messaging, { 
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY 
      });
      // Return the token to be used for sending notifications to this device.
      return token;
    }
  } catch (error) {
    // Log any errors that occur during the permission request process.
    console.error("Notification permission denied", error);
  }
  // Return null if permission was denied or an error occurred.
  return null;
};

// Define a function that returns a Promise which resolves when a foreground message is received.
// This wraps the callback-based 'onMessage' function in a Promise for easier usage.
export const onMessageListener = () =>
  new Promise((resolve) => {
    // Listen for incoming messages using the 'onMessage' function.
    onMessage(messaging, (payload) => {
      // Resolve the promise with the message payload when a message arrives.
      resolve(payload);
    });
  });

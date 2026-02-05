// Import Firebase Admin SDK modules.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';

// --- Environment Configuration & Validation ---
// Define a variable for the service account.
let serviceAccount;
try {
    // Attempt to read the service account JSON from the environment variable.
    // This is the standard way to inject secrets in CI/CD environments (e.g., GitHub Actions).
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT env var is missing");

    // Debug logging (safe version, only prints first char) to verify injection.
    const firstChar = raw.trim().charAt(0);
    console.log(`Service Account starts with: '${firstChar}'`);

    serviceAccount = JSON.parse(raw);
} catch (error) {
    // Log error and exit if parsing fails.
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT. Ensure it is valid JSON.");
    console.error("Error:", error.message);
    process.exit(1);
}

// Initialize the Firebase Admin app.
initializeApp({
  credential: cert(serviceAccount)
});

// Initialize Firestore and Messaging services.
const db = getFirestore();
const messaging = getMessaging();

// Main function to check for ignored requests and send reminders ("Nags").
async function nag() {
  // Define the threshold for "ignored": 5 minutes since the last notification/creation.
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  
  // --- Step 1: Query Ignored Requests ---
  // Find requests that are 'pending' AND haven't been notified about since 'fiveMinutesAgo'.
  const snapshot = await db.collection('requests')
    .where('status', '==', 'pending')
    .where('lastNotification', '<', fiveMinutesAgo)
    .get();

  if (snapshot.empty) {
    console.log('No ignored requests found. Peace reigns.');
    return;
  }

  console.log(`Found ${snapshot.size} ignored requests. Initiating harassment.`);

  // --- Step 2: Group by Bar ---
  // We group requests by Bar ID to send a single consolidated notification per bar,
  // preventing notification spam if there are multiple pending items (e.g., 10 "Ice" requests).
  const barUpdates = {}; // Map of barId -> [requestLabels]

  snapshot.docs.forEach(doc => {
    const data = doc.data();
    if (!barUpdates[data.barId]) barUpdates[data.barId] = [];
    barUpdates[data.barId].push(data.label);
  });

  // --- Step 3: Send Notifications per Bar ---
  for (const [barId, labels] of Object.entries(barUpdates)) {
    // Fetch all user tokens associated with this bar.
    // In BarBacker, `bars/{barId}/tokens` contains documents where the ID is the User UID and the data contains the FCM token.
    const tokensSnap = await db.collection(`bars/${barId}/tokens`).get();
    const tokens = tokensSnap.docs.map(d => d.data().token).filter(t => t);

    // If no devices are registered, skip.
    if (tokens.length === 0) continue;

    // Construct the notification payload.
    const summary = labels.join(', ');
    const title = `IGNORED: ${labels.length} TASKS`;
    const body = `${summary} are still waiting. DO YOUR JOB.`;

    // Send the Multicast Push Notification to all tokens.
    // This uses FCM to reach Android and iOS devices.
    await messaging.sendEachForMulticast({
      tokens: tokens,
      notification: {
        title: title,
        body: body,
      },
      data: {
        type: 'nag_alert',
        barId: barId
      },
      // Android specific config for high priority.
      android: {
        priority: 'high',
        notification: {
          sound: 'default',
          channelId: 'urgent_alerts'
        }
      },
      // APNs (iOS) specific config.
      apns: {
        payload: {
          aps: {
            sound: 'default',
            'content-available': 1
          }
        }
      }
    });

    console.log(`Nagged bar ${barId} regarding: ${summary}`);
  }

  // --- Step 4: Update Last Notification Timestamp ---
  // Update the 'lastNotification' field on the request documents so we don't nag them again immediately.
  // We use a batch write for efficiency and atomicity.
  const batch = db.batch();
  snapshot.docs.forEach(doc => {
    batch.update(doc.ref, { lastNotification: new Date() });
  });
  await batch.commit();
}

// Execute the function.
nag().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});

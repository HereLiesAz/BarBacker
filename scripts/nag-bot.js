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

// Mirrors src/constants.ts's ROLE_NOTIFICATION_DEFAULTS. This script
// runs standalone under plain Node (no Vite/TS build step), so it
// can't import the TypeScript source directly — keep this in sync by
// hand if the defaults there change.
const ROLE_NOTIFICATION_DEFAULTS = {
  'Owner': ['manager', 'security', 'keg', 'trash', 'ice', 'glass', 'fruit', 'restock', 'mixers', 'restock_beer', 'break'],
  'Manager': ['manager', 'security', 'keg', 'trash', 'break'],
  'Bartender': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer'],
  'Barback': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer', 'break'],
  'Server': [],
  'Runner': ['ice', 'glass', 'restock', 'mixers', 'restock_beer'],
  'Security': ['security', 'manager', 'break'],
};

// Given a pending request and a bar member, decide whether this nag
// should mention it — mirrors useRequestActions.ts's immediate fanout
// so a "reminder" push doesn't reach someone who was never subscribed
// (or was explicitly excluded, e.g. off-clock) in the first place.
function shouldNagUserAbout(req, member) {
  if (member.status !== 'active' && member.status !== undefined) return false;
  // Exact resolved-id match only, matching useRequestActions.ts — a
  // substring check on the label would let free text like "BREAKAGE
  // AT WELL 3" mass-notify everyone regardless of preferences.
  if (req.buttonId === 'break') return true;
  // No resolvable button (free-text/custom request): shown to
  // everyone in-app as a safety default, so nag everyone too.
  if (!req.buttonId) return true;
  const prefs = member.notificationPreferences
    || ROLE_NOTIFICATION_DEFAULTS[member.jobTitle] || ROLE_NOTIFICATION_DEFAULTS[member.role] || [];
  return prefs.includes(req.buttonId);
}

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
  const barUpdates = {}; // Map of barId -> [{ label, buttonId }]

  snapshot.docs.forEach(doc => {
    const data = doc.data();
    if (!barUpdates[data.barId]) barUpdates[data.barId] = [];
    barUpdates[data.barId].push({ label: data.label, buttonId: data.buttonId });
  });

  // --- Step 3: Send Notifications per Bar ---
  for (const [barId, requests] of Object.entries(barUpdates)) {
    // Fetch bar members (for status/prefs filtering) and tokens
    // together — `bars/{barId}/tokens` has one doc per uid holding
    // the FCM token; `bars/{barId}/users` has the same uid holding
    // status/notificationPreferences/jobTitle.
    const [tokensSnap, usersSnap] = await Promise.all([
      db.collection(`bars/${barId}/tokens`).get(),
      db.collection(`bars/${barId}/users`).get(),
    ]);
    const membersById = new Map(usersSnap.docs.map(d => [d.id, d.data()]));

    // Group recipients by the exact subset of requests they should be
    // nagged about, so someone who only cares about ICE doesn't get
    // paged about a KEG request too, and so we send the minimum
    // number of distinct multicast calls.
    const groups = new Map(); // key (sorted buttonId/label list) -> { labels, tokens }
    for (const tokenDoc of tokensSnap.docs) {
      const token = tokenDoc.data().token;
      if (!token) continue;
      const member = membersById.get(tokenDoc.id);
      if (!member) continue; // Token orphaned from a removed member.

      const relevant = requests.filter(r => shouldNagUserAbout(r, member));
      if (relevant.length === 0) continue;

      const key = relevant.map(r => r.buttonId || r.label).sort().join('|');
      if (!groups.has(key)) groups.set(key, { labels: relevant.map(r => r.label), tokens: [] });
      groups.get(key).tokens.push(token);
    }

    if (groups.size === 0) {
      console.log(`No subscribed/active recipients for bar ${barId}; skipping.`);
      continue;
    }

    for (const { labels, tokens } of groups.values()) {
      const summary = labels.join(', ');
      const title = `IGNORED: ${labels.length} TASK${labels.length === 1 ? '' : 'S'}`;
      const body = `${summary} still waiting. DO YOUR JOB.`;

      // Send the Multicast Push Notification to this recipient group.
      // This uses FCM to reach Android and iOS devices.
      await messaging.sendEachForMulticast({
        tokens,
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

      console.log(`Nagged ${tokens.length} recipient(s) at bar ${barId} regarding: ${summary}`);
    }
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

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';

/**
 * Nag Bot
 *
 * A scheduled task (cron job) that finds requests that have been ignored/pending
 * for too long and sends aggressive push notifications ("Nags") to remind staff.
 */

// Load Service Account.
let serviceAccount;
try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT env var is missing");
    serviceAccount = JSON.parse(raw);
} catch (error) {
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT. Ensure it is valid JSON.");
    process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const messaging = getMessaging();

async function nag() {
  // Define "Ignored" as: Status is pending AND last notification was > 5 minutes ago.
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  
  // 1. Query for ignored requests.
  const snapshot = await db.collection('requests')
    .where('status', '==', 'pending')
    .where('lastNotification', '<', fiveMinutesAgo)
    .get();

  if (snapshot.empty) {
    console.log('No ignored requests found. Peace reigns.');
    return;
  }

  console.log(`Found ${snapshot.size} ignored requests. Initiating harassment.`);

  // 2. Group requests by Bar ID.
  // We want to send ONE notification per bar summarizing the backlog, not one per request.
  const barUpdates = {}; // Map of barId -> [requestLabels]

  snapshot.docs.forEach(doc => {
    const data = doc.data();
    if (!barUpdates[data.barId]) barUpdates[data.barId] = [];
    barUpdates[data.barId].push(data.label);
  });

  // 3. Process each bar.
  for (const [barId, labels] of Object.entries(barUpdates)) {
    // Get all FCM tokens for users currently clocked into this bar.
    const tokensSnap = await db.collection(`bars/${barId}/tokens`).get();
    const tokens = tokensSnap.docs.map(d => d.data().token).filter(t => t);

    if (tokens.length === 0) continue;

    const summary = labels.join(', ');
    const title = `IGNORED: ${labels.length} TASKS`;
    const body = `${summary} are still waiting. DO YOUR JOB.`;

    // Send Multicast Push.
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
      // Android Config: High Priority to break through doze mode.
      android: {
        priority: 'high',
        notification: {
          sound: 'default',
          channelId: 'urgent_alerts'
        }
      },
      // iOS Config.
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

  // 4. Update 'lastNotification' timestamp on the requests.
  // This ensures we don't nag again for another 5 minutes.
  const batch = db.batch();
  snapshot.docs.forEach(doc => {
    batch.update(doc.ref, { lastNotification: new Date() });
  });
  await batch.commit();
}

nag().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});

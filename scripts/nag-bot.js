// scripts/nag-bot.js
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';

// This secrets needs to be in your GitHub Repo Secrets as FIREBASE_SERVICE_ACCOUNT
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const messaging = getMessaging();

async function nag() {
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  
  // 1. Find requests that are ignored
  const snapshot = await db.collection('requests')
    .where('status', '==', 'pending')
    .where('lastNotification', '<', fiveMinutesAgo)
    .get();

  if (snapshot.empty) {
    console.log('No ignored requests found. Peace reigns.');
    return;
  }

  console.log(`Found ${snapshot.size} ignored requests. Initiating harassment.`);

  // 2. Group by Bar to avoid spamming the same bar 50 times for 50 ice requests
  const barUpdates = {}; // Map of barId -> [requestLabels]

  snapshot.docs.forEach(doc => {
    const data = doc.data();
    if (!barUpdates[data.barId]) barUpdates[data.barId] = [];
    barUpdates[data.barId].push(data.label);
  });

  // 3. Blast each bar
  for (const [barId, labels] of Object.entries(barUpdates)) {
    // Get all user tokens for this bar
    const tokensSnap = await db.collection(`bars/${barId}/tokens`).get();
    const tokens = tokensSnap.docs.map(d => d.data().token).filter(t => t);

    if (tokens.length === 0) continue;

    const summary = labels.join(', ');
    const title = `IGNORED: ${labels.length} TASKS`;
    const body = `${summary} are still waiting. DO YOUR JOB.`;

    // Send the Push
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
      android: {
        priority: 'high',
        notification: {
          sound: 'default',
          channelId: 'urgent_alerts'
        }
      },
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

  // 4. Update timestamps so we don't nag again for another 5 mins
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

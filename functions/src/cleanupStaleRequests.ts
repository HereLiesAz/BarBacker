import { onSchedule } from "firebase-functions/v2/scheduler";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const STALE_AFTER_MS = 12 * 60 * 60 * 1000; // 12 hours
const BATCH_SIZE = 400; // Firestore batch limit is 500; leave headroom.

// Requests never expired on their own — a page nobody claimed at 11pm
// was still 'pending', still rendered in the requester's footer, and
// still re-triggering useNag's audio/vibrate loop at 6pm the next
// day. Runs hourly and clears anything that's been sitting pending
// for 12+ hours; a shift that long without anyone claiming a request
// means it's stale, not that it's still actionable.
export const cleanupStaleRequests = onSchedule("every 60 minutes", async () => {
  const db = getFirestore();
  const cutoff = Timestamp.fromMillis(Date.now() - STALE_AFTER_MS);

  const snap = await db
    .collection("requests")
    .where("status", "==", "pending")
    .where("timestamp", "<", cutoff)
    .limit(BATCH_SIZE)
    .get();

  if (snap.empty) {
    console.log("No stale pending requests found.");
    return;
  }

  const batch = db.batch();
  snap.docs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
  console.log(`Cleared ${snap.size} stale pending request(s).`);
});

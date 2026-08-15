import { onSchedule } from "firebase-functions/v2/scheduler";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { getMessaging } from "firebase-admin/messaging";

const WINDOW_START_MIN = 10;
const WINDOW_END_MIN = 15;

// ~10-15-minutes-before shift reminders via the existing FCM/ntfy
// plumbing (see the design doc's "Notifications" section under
// Phase 4). Runs every 5 minutes; the window must be at least as wide
// as that 5-minute cadence for every shift to be guaranteed a run
// that catches it — a shift starting at minute M needs some run at
// r where r+WINDOW_START <= M < r+WINDOW_END, and with runs 5 minutes
// apart that's only guaranteed if (WINDOW_END - WINDOW_START) >= 5.
// reminderSentAt is still what prevents a double-send on the rare
// shift that two consecutive runs both catch.
export const sendShiftReminders = onSchedule("every 5 minutes", async () => {
  const db = getFirestore();
  const now = Date.now();
  const windowStart = new Date(now + WINDOW_START_MIN * 60 * 1000).toISOString();
  const windowEnd = new Date(now + WINDOW_END_MIN * 60 * 1000).toISOString();

  const eventsSnap = await db.collectionGroup("events")
    .where("type", "==", "shift")
    .where("start", ">=", windowStart)
    .where("start", "<", windowEnd)
    .get();

  for (const doc of eventsSnap.docs) {
    const barId = doc.ref.parent.parent?.id;
    const event = doc.data();
    if (!barId || event.reminderSentAt || event.deletedAt) continue;
    const assignedTo: string[] = event.assignedTo ?? [];
    if (assignedTo.length === 0) continue;

    const [usersSnap, tokensSnap] = await Promise.all([
      Promise.all(assignedTo.map((uid) => db.doc(`users/${uid}`).get())),
      db.collection(`bars/${barId}/tokens`).get(),
    ]);

    const tokens = tokensSnap.docs
      .filter((t) => assignedTo.includes(t.id))
      .map((t) => t.data().token)
      .filter((t): t is string => !!t);

    const body = `Your shift "${event.title}" starts in 15 minutes.`;

    if (tokens.length > 0) {
      await getMessaging().sendEachForMulticast({
        tokens,
        notification: { title: "Upcoming shift", body },
        data: { type: "shift_reminder", barId },
        android: { priority: "high", notification: { sound: "default", channelId: "urgent_alerts" } },
        apns: { payload: { aps: { sound: "default", "content-available": 1 } } },
      }).catch((e) => console.error("Shift reminder FCM send failed", e));
    }

    await Promise.all(usersSnap.map(async (userDoc) => {
      const topic = userDoc.data()?.ntfyTopic;
      if (!topic) return;
      try {
        await fetch(`https://ntfy.sh/${topic}`, {
          method: "POST", body,
          headers: { Title: "Upcoming shift", Priority: "default", Tags: "clock" },
        });
      } catch (e) {
        console.error(`Failed to send shift reminder ntfy to ${userDoc.id}`, e);
      }
    }));

    await doc.ref.set({ reminderSentAt: FieldValue.serverTimestamp() as Timestamp }, { merge: true });
  }
});

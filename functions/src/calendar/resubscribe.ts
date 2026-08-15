import { onSchedule } from "firebase-functions/v2/scheduler";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { randomBytes } from "node:crypto";
import { getGoogleAccessToken } from "./connection";
import { watchGoogleCalendar } from "./google";

const RESUBSCRIBE_MARGIN_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

// Google Calendar watch channels expire — Google doesn't guarantee a
// fixed TTL for events.watch channels (watchGoogleCalendar doesn't
// request a specific `expiration`, so Google applies its own default,
// which in practice can be considerably shorter than the ~30-day
// documented maximum). A weekly sweep with a margin narrower than its
// own interval can miss a channel's entire renewal window — this runs
// daily with a 3-day margin instead, so every channel gets multiple
// chances to be caught before it actually expires regardless of which
// default Google applied.
export const resubscribeCalendarWatches = onSchedule("every 24 hours", async () => {
  const db = getFirestore();
  const connectionsSnap = await db.collectionGroup("calendarConnection")
    .where("connected", "==", true).get();

  const webhookBase = process.env.CALENDAR_OAUTH_CALLBACK_BASE_URL;
  if (!webhookBase) {
    console.error("CALENDAR_OAUTH_CALLBACK_BASE_URL is not configured — skipping watch resubscription.");
    return;
  }

  for (const doc of connectionsSnap.docs) {
    const barId = doc.ref.parent.parent?.id;
    const data = doc.data();
    if (!barId || !data.calendarId) continue;
    const expiresAt = data.watchExpiresAt as number | undefined;
    if (expiresAt != null && expiresAt - Date.now() > RESUBSCRIBE_MARGIN_MS) continue;

    try {
      const accessToken = await getGoogleAccessToken(barId);
      const channelId = randomBytes(16).toString("hex");
      const watch = await watchGoogleCalendar(accessToken, data.calendarId, `${webhookBase}/calendarWebhook`, channelId);
      await doc.ref.set({
        watchChannelId: channelId, watchResourceId: watch.resourceId, watchExpiresAt: watch.expiration,
        updatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
    } catch (e) {
      console.error(`Failed to resubscribe calendar watch for bar ${barId}`, e);
    }
  }
});

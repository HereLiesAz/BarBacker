import { onSchedule } from "firebase-functions/v2/scheduler";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { createHash } from "node:crypto";
import * as ical from "node-ical";

// Polls every Manager-added external .ics URL every 15 minutes and
// upserts its events as read-only, externally-owned local events —
// see the "Inbound iCal subscription" section of the design doc.
// Events are matched by externalId (the source calendar's own UID)
// so re-polling updates in place rather than duplicating.
export const pollICalSubscriptions = onSchedule("every 15 minutes", async () => {
  const db = getFirestore();
  const barsSnap = await db.collectionGroup("icalSubscriptions").get();

  for (const subDoc of barsSnap.docs) {
    const barId = subDoc.ref.parent.parent?.id;
    const sub = subDoc.data() as { url?: string };
    if (!barId || !sub.url) continue;

    const provider = `ical:${createHash("sha256").update(sub.url).digest("hex").slice(0, 16)}`;
    const eventsRef = db.collection(`bars/${barId}/events`);

    try {
      const parsed = await ical.async.fromURL(sub.url);
      const seenIds = new Set<string>();

      for (const key of Object.keys(parsed)) {
        const component = parsed[key];
        if (!component || component.type !== "VEVENT") continue;
        const item = component as ical.VEvent;
        if (!item.start || !item.end) continue;
        const externalId = item.uid ?? key;
        seenIds.add(externalId);

        const existing = await eventsRef.where("externalId", "==", externalId)
          .where("externalProvider", "==", provider).limit(1).get();
        const payload = {
          title: item.summary ?? "(untitled)",
          description: item.description,
          start: new Date(item.start).toISOString(),
          end: new Date(item.end).toISOString(),
          type: "event",
          externalId,
          externalProvider: provider,
          lastSyncedAt: FieldValue.serverTimestamp(),
        };
        if (existing.empty) await eventsRef.add(payload);
        else await existing.docs[0].ref.set(payload, { merge: true });
      }

      // Anything previously synced from this subscription but no
      // longer present upstream gets soft-deleted, same as an
      // upstream Google cancellation.
      const previouslySynced = await eventsRef.where("externalProvider", "==", provider).get();
      for (const doc of previouslySynced.docs) {
        const externalId = doc.data().externalId as string | undefined;
        if (externalId && !seenIds.has(externalId) && !doc.data().deletedAt) {
          await doc.ref.set({ deletedAt: FieldValue.serverTimestamp() }, { merge: true });
        }
      }

      await subDoc.ref.set({ lastPolledAt: FieldValue.serverTimestamp(), lastError: null }, { merge: true });
    } catch (e) {
      console.error(`Failed to poll iCal subscription for bar ${barId}`, e);
      await subDoc.ref.set({
        lastPolledAt: FieldValue.serverTimestamp(),
        lastError: e instanceof Error ? e.message : "Unknown error",
      }, { merge: true });
    }
  }
});

// Removing a subscription removes all its events — see the design
// doc's "Removing the subscription removes all its events."
export const removeICalSubscriptionEvents = onSchedule("every 24 hours", async () => {
  // Runs daily as a cleanup backstop for subscriptions deleted since
  // the last poll — deletion itself is a plain client-side Firestore
  // delete (see firestore.rules' icalSubscriptions block), so this
  // just reconciles: any bar/{barId}/events with an ical: provider
  // whose subscription doc no longer exists gets hard-deleted.
  const db = getFirestore();
  const eventsSnap = await db.collectionGroup("events")
    .where("externalProvider", ">=", "ical:").where("externalProvider", "<", "ical;").get();

  const subsByBar = new Map<string, Set<string>>();
  for (const doc of eventsSnap.docs) {
    const barId = doc.ref.parent.parent?.id;
    if (!barId) continue;
    if (!subsByBar.has(barId)) {
      const subsSnap = await db.collection(`bars/${barId}/icalSubscriptions`).get();
      subsByBar.set(barId, new Set(subsSnap.docs.map((s) => {
        const url = s.data().url as string;
        return `ical:${createHash("sha256").update(url).digest("hex").slice(0, 16)}`;
      })));
    }
    const liveProviders = subsByBar.get(barId)!;
    const provider = doc.data().externalProvider as string;
    if (!liveProviders.has(provider)) await doc.ref.delete();
  }
});

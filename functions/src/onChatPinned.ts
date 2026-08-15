import { onDocumentWritten } from "firebase-functions/v2/firestore";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { getMessaging } from "firebase-admin/messaging";

const BACKFILL_AGE_MS = 5 * 60 * 1000;

// Fires an FCM push to every bar member when a chat message transitions
// into pinned — either created pinned (Manager+ create) or pinned via
// a later update. Regular (unpinned) chat traffic never pushes; see
// the "Notifications" section of
// docs/plans/2026-05-21-feature-set-purr-design.md. Reuses the
// 'urgent_alerts' Android channel that usePushNotifications.ts already
// creates on-device — an Android FCM notification targeting a channel
// that was never created on the device is silently dropped, and this
// is the only channel the app currently sets up.
export const onChatPinned = onDocumentWritten("bars/{barId}/chat/{messageId}", async (event) => {
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();
  if (!after) return;

  const wasPinned = before?.pinned === true;
  const isPinned = after.pinned === true;
  if (!isPinned || wasPinned) return;

  // migrateNoticesToChat backfills old notices as pinned:true with
  // pinnedAt copied from the original notice's own (old) timestamp —
  // without this check, migrating a bar with a backlog of notices
  // fires one high-priority push per notice to every device in the
  // bar the moment anyone first opens chat. A real pin always has
  // pinnedAt within moments of the write; anything older than that is
  // a backfill, not news.
  const pinnedAt = after.pinnedAt as Timestamp | undefined;
  if (pinnedAt && Date.now() - pinnedAt.toMillis() > BACKFILL_AGE_MS) return;

  const { barId } = event.params;
  const db = getFirestore();
  const tokensSnap = await db.collection(`bars/${barId}/tokens`).get();
  const tokens = tokensSnap.docs.map((d) => d.data().token).filter((t): t is string => !!t);
  if (tokens.length === 0) return;

  const body = `📌 ${after.authorName || "Someone"}: ${after.text}`;

  await getMessaging().sendEachForMulticast({
    tokens,
    notification: { title: "Pinned message", body },
    data: { type: "chat_pinned", barId },
    android: { priority: "high", notification: { sound: "default", channelId: "urgent_alerts" } },
    apns: { payload: { aps: { sound: "default", "content-available": 1 } } },
  }).catch((e) => { console.error("FCM send failed", e); });
});

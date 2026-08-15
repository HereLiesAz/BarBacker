import { onRequest } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";
import { syncFromGoogle } from "./inboundSync";

// Google's push notification carries no payload — just headers
// identifying the channel — so a ping just means "something changed,
// go fetch it," and the actual sync happens via syncFromGoogle's
// syncToken-based incremental fetch. See
// https://developers.google.com/calendar/api/guides/push.
export const calendarWebhook = onRequest(async (req, res) => {
  const channelId = req.header("X-Goog-Channel-Id");
  const resourceState = req.header("X-Goog-Resource-State");
  if (!channelId) {
    res.status(400).send("Missing X-Goog-Channel-Id.");
    return;
  }
  // 'sync' is Google's initial handshake ping when a channel is first
  // created — nothing to fetch yet.
  if (resourceState === "sync") {
    res.status(200).send("ok");
    return;
  }

  const db = getFirestore();
  const matches = await db.collectionGroup("calendarConnection")
    .where("watchChannelId", "==", channelId).limit(1).get();
  if (matches.empty) {
    res.status(200).send("ok"); // unknown/stale channel — ack anyway so Google stops retrying.
    return;
  }

  const barId = matches.docs[0].ref.parent.parent?.id;
  if (!barId) {
    res.status(200).send("ok");
    return;
  }

  try {
    await syncFromGoogle(barId);
  } catch (e) {
    console.error(`Inbound Google sync failed for bar ${barId}`, e);
  }
  res.status(200).send("ok");
});

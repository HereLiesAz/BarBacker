import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { getFirestore } from "firebase-admin/firestore";
import { getMessaging } from "firebase-admin/messaging";
import { shouldNotifyMember, BarMember, NotifiableRequest } from "./notifyEligibility";

const NTFY_CONCURRENCY = 5;

// getMessaging().sendEachForMulticast() throws SYNCHRONOUSLY (not a
// rejected promise) when given more than this many tokens — chunking
// avoids that entirely, rather than just catching it, so a bar with
// more devices than the limit still gets paged instead of silently
// losing every notification channel at once.
const FCM_BATCH_SIZE = 500;

export function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

// Runs `items` through `fn` with at most `concurrency` in flight at
// once. functions/ is a separate TS project from src/ (no shared
// build step), so this is a minimal standalone copy of the same
// worker-pool shape as src/utils/async.ts's pMap rather than a
// cross-project import.
async function withConcurrency<T>(items: T[], concurrency: number, fn: (item: T) => Promise<void>): Promise<void> {
  let index = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const current = items[index++];
      await fn(current);
    }
  });
  await Promise.all(workers);
}

type RequestDoc = {
  barId?: string;
  label?: string;
  buttonId?: string;
  requesterId?: string;
  requesterName?: string;
};

// Fires immediately on every new /requests doc — the client only
// writes the request itself now (see useRequestActions.ts); actual
// delivery (FCM + ntfy) is decided and sent here, server-side, using
// the Admin SDK. This replaces two things that used to be true:
//   1. Native push (FCM) only ever went out via nag-bot's 5-minute
//      cron — a fresh request had no instant push at all.
//   2. Every client had to be able to read every bar member's ntfy
//      topic (via the bars/{barId}/users mirror) to compute the
//      fanout itself, which is exactly what made those topics
//      readable by any bar member. The topic now only needs to be
//      readable here, via Admin SDK, which bypasses rules entirely —
//      see firestore.rules for the corresponding removal of ntfyTopic
//      from the per-bar user doc's readable/writable fields.
export const onRequestCreated = onDocumentCreated("requests/{requestId}", async (event) => {
  const snap = event.data;
  if (!snap) return;
  const request = snap.data() as RequestDoc;
  const { barId, requesterId } = request;
  if (!barId || !requesterId) return;

  const db = getFirestore();
  const [usersSnap, tokensSnap] = await Promise.all([
    db.collection(`bars/${barId}/users`).get(),
    db.collection(`bars/${barId}/tokens`).get(),
  ]);

  const members: BarMember[] = usersSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as BarMember);
  const eligible = members.filter((m) => shouldNotifyMember(request as NotifiableRequest, m, requesterId));
  if (eligible.length === 0) return;
  const eligibleIds = new Set(eligible.map((m) => m.id));

  const body = `New Request: ${request.label} (by ${request.requesterName || "a teammate"})`;

  // FCM push (Android / native).
  const tokens = tokensSnap.docs
    .filter((d) => eligibleIds.has(d.id))
    .map((d) => d.data().token)
    .filter((t): t is string => !!t);

  // Each batch's send is wrapped in its own try/catch (not a bare
  // .catch() on the call expression) specifically because
  // sendEachForMulticast throws synchronously rather than returning a
  // rejected promise when a batch is malformed — a bare .catch() on
  // the call site would never even attach, since the throw happens
  // before sendEachForMulticast returns anything to call .catch() on.
  const fcmPromise = tokens.length > 0
    ? Promise.all(chunk(tokens, FCM_BATCH_SIZE).map(async (batchTokens) => {
        try {
          await getMessaging().sendEachForMulticast({
            tokens: batchTokens,
            notification: { title: "BarBacker Alert", body },
            data: { type: "new_request", barId },
            android: { priority: "high", notification: { sound: "default", channelId: "urgent_alerts" } },
            apns: { payload: { aps: { sound: "default", "content-available": 1 } } },
          });
        } catch (e) {
          console.error("FCM send failed", e);
        }
      }))
    : Promise.resolve();

  // ntfy push (iOS / web). The topic lives on the global users/{uid}
  // doc (self-only per firestore.rules), not mirrored per-bar, so
  // it's looked up per eligible member here. The doc read and the
  // fetch are both inside the try/catch — previously the read sat
  // outside it, so one transient failure reading a single member's
  // doc threw out of withConcurrency's worker loop entirely, silently
  // abandoning whatever other members that same worker still had left
  // to notify. fetch() also doesn't reject on an HTTP error status
  // (429 rate-limited, 5xx, etc.), so a failed ntfy send used to look
  // identical to a successful one — nothing checked response.ok.
  const ntfyPromise = withConcurrency(eligible, NTFY_CONCURRENCY, async (member) => {
    try {
      const userDoc = await db.doc(`users/${member.id}`).get();
      const topic = userDoc.data()?.ntfyTopic;
      if (!topic) return;
      const response = await fetch(`https://ntfy.sh/${topic}`, {
        method: "POST",
        body,
        headers: { Title: "BarBacker Alert", Priority: "high", Tags: "bell,bar_chart" },
      });
      if (!response.ok) {
        console.error(`ntfy send to ${member.id} failed: HTTP ${response.status}`);
      }
    } catch (e) {
      console.error(`Failed to send ntfy to ${member.id}`, e);
    }
  });

  await Promise.all([fcmPromise, ntfyPromise]);
});

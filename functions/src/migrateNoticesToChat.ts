import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const BATCH_SIZE = 400;

// One-shot migration of a bar's old notices (bulletin board) into the
// new chat collection, as pinned messages — see the "Migration"
// section of docs/plans/2026-05-21-feature-set-purr-design.md. The
// client calls this once, lazily, the first time any member of a bar
// opens the chat panel (see useChat.ts); idempotency is enforced here
// via a transaction that claims bars/{barId}.chatMigratedAt, so a
// second call (e.g. two staff opening chat around the same moment)
// is a cheap no-op rather than a duplicate copy.
//
// The old notices schema never captured a role snapshot, so migrated
// messages get authorRole: '' — they just render without a role badge
// in the chat panel.
export const migrateNoticesToChat = onCall(async (request) => {
  const auth = request.auth;
  if (!auth) throw new HttpsError("unauthenticated", "Must be signed in.");

  const { barId } = (request.data ?? {}) as { barId?: string };
  if (!barId || typeof barId !== "string") {
    throw new HttpsError("invalid-argument", "barId is required.");
  }

  const barsClaims = (auth.token.bars as Record<string, string> | undefined) ?? {};
  const isAdmin = auth.token.admin === true;
  if (!isAdmin && !barsClaims[barId]) {
    throw new HttpsError("permission-denied", "Must be a member of this bar.");
  }

  const db = getFirestore();
  const barRef = db.doc(`bars/${barId}`);

  const claimed = await db.runTransaction(async (tx) => {
    const barDoc = await tx.get(barRef);
    if (!barDoc.exists) throw new HttpsError("not-found", "Bar not found.");
    if (barDoc.data()?.chatMigratedAt) return false;
    tx.set(barRef, { chatMigratedAt: FieldValue.serverTimestamp() }, { merge: true });
    return true;
  });
  if (!claimed) return { migrated: false, count: 0 };

  const noticesSnap = await db.collection(`bars/${barId}/notices`).get();
  let count = 0;
  for (let i = 0; i < noticesSnap.docs.length; i += BATCH_SIZE) {
    const batch = db.batch();
    for (const noticeDoc of noticesSnap.docs.slice(i, i + BATCH_SIZE)) {
      const notice = noticeDoc.data();
      const chatRef = db.collection(`bars/${barId}/chat`).doc();
      batch.set(chatRef, {
        text: notice.text ?? "",
        authorId: notice.authorId ?? "",
        authorName: notice.authorName ?? "",
        authorRole: "",
        timestamp: notice.timestamp ?? FieldValue.serverTimestamp(),
        pinned: true,
        pinnedBy: notice.authorId ?? "",
        pinnedAt: notice.timestamp ?? FieldValue.serverTimestamp(),
      });
      batch.delete(noticeDoc.ref);
      count++;
    }
    await batch.commit();
  }

  return { migrated: true, count };
});

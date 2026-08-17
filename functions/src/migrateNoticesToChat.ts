import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const BATCH_SIZE = 400;

// One-shot migration of a bar's old notices (bulletin board) into the
// new chat collection, as pinned messages — see the "Migration"
// section of docs/plans/2026-05-21-feature-set-purr-design.md. The
// client calls this on bar entry (see useChat.ts).
//
// chatMigratedAt is set ONLY after every batch has committed
// successfully — not claimed up front. Claiming it first (the
// previous approach) meant a mid-migration failure on a large bar
// (deadline exceeded, transient UNAVAILABLE) left the flag set with
// only some notices copied: every retry would then see the flag,
// return early, and the remaining notices would be permanently
// unreachable — firestore.rules has no match block for `notices` at
// all (default deny) and the client's notice reader was removed when
// chat replaced it, so there was no path back to them. This ordering
// trades that unrecoverable data loss for a much milder race: two
// staff opening chat in the same instant could both pass the
// up-front check and copy the same notices twice, producing duplicate
// (but still visible and manually deletable) pinned messages — a
// realistic-enough scenario to accept given how rarely two people
// open a bar's chat for the very first time in the same millisecond,
// against a failure mode that is silent and permanent.
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

  const barDoc = await barRef.get();
  if (!barDoc.exists) throw new HttpsError("not-found", "Bar not found.");
  if (barDoc.data()?.chatMigratedAt) return { migrated: false, count: 0 };

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

  await barRef.set({ chatMigratedAt: FieldValue.serverTimestamp() }, { merge: true });
  return { migrated: true, count };
});

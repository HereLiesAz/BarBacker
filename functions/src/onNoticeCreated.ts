import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const COOLDOWN_MS = 5000;

// firestore.rules' 5s notice cooldown is client-cooperative: it only
// blocks a create if the SAME write also (separately) bumped
// lastNoticeAt on the author's user doc, which nothing forces a
// hostile client to do — see the comment on that rule. This trigger
// is the authoritative backstop: it looks at the author's *actual*
// prior notices (which can't be spoofed, since they're real committed
// documents) rather than trusting any client-supplied timestamp
// field, and deletes this notice if the same author posted another
// one within the cooldown window.
export const onNoticeCreated = onDocumentCreated(
  "bars/{barId}/notices/{noticeId}",
  async (event) => {
    const snap = event.data;
    if (!snap) return;
    const notice = snap.data() as { authorId?: string; timestamp?: Timestamp };
    const { authorId, timestamp } = notice;
    if (!authorId || !timestamp) return;

    const db = getFirestore();
    const cutoff = Timestamp.fromMillis(timestamp.toMillis() - COOLDOWN_MS);

    const priorSnap = await db
      .collection(`bars/${event.params.barId}/notices`)
      .where("authorId", "==", authorId)
      .where("timestamp", ">", cutoff)
      .where("timestamp", "<", timestamp)
      .limit(1)
      .get();

    if (!priorSnap.empty) {
      console.warn(`Notice ${snap.id} from ${authorId} violates the 5s cooldown; deleting.`);
      await snap.ref.delete();
    }
  }
);

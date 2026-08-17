import { useCallback } from 'react';
import type { User } from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

interface UseRequestActionsArgs {
  user: User | null;
  barId: string | null;
  displayName: string;
  userRole: string | null;
  getButtonIdForLabel: (label: string) => string | undefined;
}

// Owns the three request mutations:
//   - submitRequest(label): writes to /requests and vibrates for
//     immediate haptic feedback. Delivery (FCM push + ntfy.sh) is
//     handled server-side by the onRequestCreated Cloud Function,
//     which fires on every new /requests doc — this used to fan out
//     ntfy.sh calls from the client itself, which required every
//     client to be able to read every bar member's ntfy topic (see
//     firestore.rules' notes on the per-bar user doc) purely so it
//     could compute who to notify. Moving it server-side closed that
//     exposure and also means a request gets an instant native push
//     instead of waiting for nag-bot's 5-minute cron.
//   - claimRequest(reqId): marks a request as claimed.
//   - cancelRequest(reqId): deletes a request the user created.
export function useRequestActions({
  user,
  barId,
  displayName,
  userRole,
  getButtonIdForLabel,
}: UseRequestActionsArgs) {
  const submitRequest = useCallback(async (label: string, photoUrl?: string) => {
    if (!user || !barId) return;
    if (navigator.vibrate) navigator.vibrate(100);

    const btnId = getButtonIdForLabel(label);

    await addDoc(collection(db, 'requests'), {
      barId,
      label,
      requesterId: user.uid,
      requesterName: displayName,
      requesterRole: userRole,
      status: 'pending',
      timestamp: serverTimestamp(),
      lastNotification: serverTimestamp(),
      // Persisted so onRequestCreated (server-side fanout) and
      // nag-bot.js can apply the same notificationPreferences
      // filtering without re-deriving it from the bar's button
      // config, which neither has access to.
      ...(btnId ? { buttonId: btnId } : {}),
      // Set by the bottle scanner's "Send Alert" action — lets the
      // request card show the scanned bottle photo instead of just
      // its recognized/typed name.
      ...(photoUrl ? { photoUrl } : {}),
    });
  }, [user, barId, displayName, userRole, getButtonIdForLabel]);

  // Firestore serializes writes to a single document, and
  // firestore.rules requires resource.data.status == 'pending' for
  // this update — so if two barbacks tap CLAIM on the same request,
  // whichever write commits first flips it to 'claimed' and the
  // second is evaluated against that new state and denied. The
  // rejection surfaces here as a thrown error so the UI can tell the
  // loser they lost the race instead of failing silently.
  const claimRequest = useCallback(async (reqId: string) => {
    try {
      await updateDoc(doc(db, 'requests', reqId), {
        status: 'claimed',
        claimedBy: user?.uid,
        claimerName: displayName,
        claimedAt: serverTimestamp(),
      });
    } catch (e) {
      console.error('Failed to claim request (likely already claimed)', e);
      throw e;
    }
  }, [user, displayName]);

  // Release a claim back to pending — the claimer got pulled away
  // mid-task, or claimed the wrong one. firestore.rules only permits
  // this transition for whoever currently holds the claim.
  const unclaimRequest = useCallback(async (reqId: string) => {
    try {
      await updateDoc(doc(db, 'requests', reqId), {
        status: 'pending',
        claimedBy: deleteField(),
        claimerName: deleteField(),
        claimedAt: deleteField(),
      });
    } catch (e) {
      console.error('Failed to unclaim request', e);
      throw e;
    }
  }, []);

  const cancelRequest = useCallback(async (reqId: string) => {
    await deleteDoc(doc(db, 'requests', reqId));
  }, []);

  return { submitRequest, claimRequest, unclaimRequest, cancelRequest };
}

import { useCallback } from 'react';
import type { User } from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { ROLE_NOTIFICATION_DEFAULTS, NTFY_DISPATCH_CONCURRENCY } from '../constants';
import { pMap } from '../utils/async';
import type { BarUser } from '../types';

interface UseRequestActionsArgs {
  user: User | null;
  barId: string | null;
  displayName: string;
  userRole: string | null;
  allUsers: BarUser[];
  getButtonIdForLabel: (label: string) => string | undefined;
}

// Owns the three request mutations:
//   - submitRequest(label): writes to /requests, vibrates, fans out
//     ntfy.sh notifications to every active member subscribed to this
//     button. BREAK requests are sent to everyone regardless of prefs.
//   - claimRequest(reqId): marks a request as claimed.
//   - cancelRequest(reqId): deletes a request the user created.
//
// ntfy fanout: the per-topic mapper catches its own errors so pMap
// never rejects and one bad topic cannot abort the rest. We await
// pMap so submitRequest only resolves once dispatch attempts are
// complete — this is what gives the inactivity timer and UI a clean
// "done" signal.
export function useRequestActions({
  user,
  barId,
  displayName,
  userRole,
  allUsers,
  getButtonIdForLabel,
}: UseRequestActionsArgs) {
  const submitRequest = useCallback(async (label: string) => {
    if (!user || !barId) return;
    if (navigator.vibrate) navigator.vibrate(100);

    await addDoc(collection(db, 'requests'), {
      barId,
      label,
      requesterId: user.uid,
      requesterName: displayName,
      requesterRole: userRole,
      status: 'pending',
      timestamp: serverTimestamp(),
      lastNotification: serverTimestamp(),
    });

    const btnId = getButtonIdForLabel(label);
    const topics = new Set<string>();

    allUsers.forEach(u => {
      const isActive = u.status === 'active' || u.status === undefined;
      if (!isActive || u.id === user.uid || !u.ntfyTopic) return;

      let prefs = u.notificationPreferences;
      if (!prefs && u.role) {
        prefs = ROLE_NOTIFICATION_DEFAULTS[u.role] || [];
      }

      // BREAK requests always fan out to everyone.
      if (label.includes('BREAK') || btnId === 'break') {
        topics.add(u.ntfyTopic);
        return;
      }

      // Free-text / unrecognized labels (custom requests, "(Ask Me)"
      // auto-submits) have no btnId to check preferences against.
      // activeRequests in App.tsx treats this the same way — shown to
      // everyone as a safety default — so mirror that here instead of
      // silently notifying nobody.
      if (!btnId) {
        topics.add(u.ntfyTopic);
        return;
      }

      if (prefs && prefs.includes(btnId)) {
        topics.add(u.ntfyTopic);
      }
    });

    await pMap(
      Array.from(topics),
      async (topic) => {
        try {
          return await fetch(`https://ntfy.sh/${topic}`, {
            method: 'POST',
            body: `New Request: ${label} (by ${displayName})`,
            headers: {
              'Title': 'BarBacker Alert',
              'Priority': 'high',
              'Tags': 'bell,bar_chart',
            },
          });
        } catch (err) {
          console.error('Failed to send ntfy', err);
          return undefined;
        }
      },
      NTFY_DISPATCH_CONCURRENCY,
    );
  }, [user, barId, displayName, userRole, allUsers, getButtonIdForLabel]);

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

  const cancelRequest = useCallback(async (reqId: string) => {
    await deleteDoc(doc(db, 'requests', reqId));
  }, []);

  return { submitRequest, claimRequest, cancelRequest };
}

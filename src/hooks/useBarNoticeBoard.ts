import { useState } from 'react';
import type { User } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../firebase';

interface UseBarNoticeBoardArgs {
  user: User | null;
  barId: string | null;
  displayName: string;
}

// Notice-board write actions plus the inline "Add Notice" dialog
// state. Read-side data (the live notices array itself) is owned by
// the bar listener — this hook only handles the form + persistence.
//
// On save: blank text is silently ignored, and on success the form
// state is cleared and the dialog closed; failures populate
// `noticeError` so the dialog can surface them.
//
// Posts are rate-limited via a `lastNoticeAt` field on the writer's
// per-bar user doc: saveNotice does a single batched write that
// creates the notice AND bumps lastNoticeAt = serverTimestamp(), and
// the matching firestore.rules block rejects creates faster than
// once every 5 seconds. The rules-side check is authoritative — this
// batch only exists so the cooldown timestamp is in place on the
// next write.
export function useBarNoticeBoard({ user, barId, displayName }: UseBarNoticeBoardArgs) {
  const [isAddingNotice, setIsAddingNotice] = useState(false);
  const [noticeText, setNoticeText] = useState('');
  const [noticeError, setNoticeError] = useState<string | null>(null);

  const saveNotice = async (text: string) => {
    if (!user || !barId || !text.trim()) return;
    try {
      const batch = writeBatch(db);
      const noticeRef = doc(collection(db, `bars/${barId}/notices`));
      batch.set(noticeRef, {
        text,
        authorId: user.uid,
        authorName: displayName,
        timestamp: serverTimestamp(),
      });
      const userRef = doc(db, `bars/${barId}/users`, user.uid);
      batch.set(userRef, { lastNoticeAt: serverTimestamp() }, { merge: true });
      await batch.commit();
      setNoticeText('');
      setIsAddingNotice(false);
    } catch (e) {
      console.error('Error saving notice:', e);
      const msg = e instanceof Error ? e.message : 'Unknown error';
      // Firestore's permission-denied error message is generic; surface
      // a friendlier hint when we suspect the cooldown rule fired.
      if (msg.toLowerCase().includes('permission')) {
        setNoticeError('Slow down — please wait a few seconds between notices.');
      } else {
        setNoticeError('Failed to save notice: ' + msg);
      }
    }
  };

  const deleteNotice = async (noticeId: string) => {
    if (!user || !barId) return;
    if (confirm('Delete this notice?')) {
      await deleteDoc(doc(db, `bars/${barId}/notices`, noticeId));
    }
  };

  return {
    isAddingNotice,
    setIsAddingNotice,
    noticeText,
    setNoticeText,
    noticeError,
    setNoticeError,
    saveNotice,
    deleteNotice,
  };
}

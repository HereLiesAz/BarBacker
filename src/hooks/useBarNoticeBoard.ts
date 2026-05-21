import { useState } from 'react';
import type { User } from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
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
export function useBarNoticeBoard({ user, barId, displayName }: UseBarNoticeBoardArgs) {
  const [isAddingNotice, setIsAddingNotice] = useState(false);
  const [noticeText, setNoticeText] = useState('');
  const [noticeError, setNoticeError] = useState<string | null>(null);

  const saveNotice = async (text: string) => {
    if (!user || !barId || !text.trim()) return;
    try {
      await addDoc(collection(db, `bars/${barId}/notices`), {
        text,
        authorId: user.uid,
        authorName: displayName,
        timestamp: serverTimestamp(),
      });
      setNoticeText('');
      setIsAddingNotice(false);
    } catch (e) {
      console.error('Error saving notice:', e);
      const msg = e instanceof Error ? e.message : 'Unknown error';
      setNoticeError('Failed to save notice: ' + msg);
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

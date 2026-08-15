import { useCallback, useEffect, useRef, useState } from 'react';
import type { User } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db, functions } from '../firebase';
import { ChatMessage } from '../types';

const PAGE_SIZE = 50;
const PINNED_LIMIT = 50;

interface UseChatArgs {
  user: User | null;
  barId: string | null;
  displayName: string;
  userRole: string | null;
  // Only the marquee (pinnedMessages) subscribes while the panel is
  // closed — the full scrollback listener is expensive-ish (up to 50
  // live docs) and only worth paying for while the panel is open.
  panelOpen: boolean;
}

function lastReadKey(barId: string) {
  return `chat_lastRead_${barId}`;
}

// Chat data + actions for a bar. Replaces the old useBarNoticeBoard
// hook — see docs/plans/2026-05-21-feature-set-purr-design.md Phase 2.
export function useChat({ user, barId, displayName, userRole, panelOpen }: UseChatArgs) {
  const [pinnedMessages, setPinnedMessages] = useState<ChatMessage[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [olderMessages, setOlderMessages] = useState<ChatMessage[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [latestMessageAt, setLatestMessageAt] = useState<number>(0);
  const [lastReadAt, setLastReadAt] = useState<number>(0);
  const migratedRef = useRef<string | null>(null);

  // One-time-per-bar migration of any leftover notices into chat.
  // Fire-and-forget: the server-side function is idempotent (guarded
  // by bars/{barId}.chatMigratedAt), so this is safe to call more
  // than once, and a failure here shouldn't block chat usage.
  useEffect(() => {
    if (!barId || !user || migratedRef.current === barId) return;
    migratedRef.current = barId;
    try {
      httpsCallable(functions, 'migrateNoticesToChat')({ barId }).catch((e) => {
        console.error('migrateNoticesToChat failed', e);
      });
    } catch (e) {
      console.error('migrateNoticesToChat failed', e);
    }
  }, [barId, user]);

  // Pinned messages — always live while in a bar, drives the marquee.
  useEffect(() => {
    if (!user || !barId) { setPinnedMessages([]); return; }
    const unsub = onSnapshot(
      query(
        collection(db, `bars/${barId}/chat`),
        where('pinned', '==', true),
        orderBy('pinnedAt', 'desc'),
        limit(PINNED_LIMIT),
      ),
      (s) => setPinnedMessages(s.docs.map((d) => ({ id: d.id, ...d.data() } as ChatMessage))),
      (err) => console.error('Pinned chat listener failed', err),
    );
    return unsub;
  }, [user, barId]);

  // Lightweight "is there something new" signal, always live, so the
  // unread badge works even while the panel (and its full listener)
  // is closed.
  useEffect(() => {
    if (!user || !barId) { setLatestMessageAt(0); return; }
    const unsub = onSnapshot(
      query(collection(db, `bars/${barId}/chat`), orderBy('timestamp', 'desc'), limit(1)),
      (s) => {
        const ts = s.docs[0]?.data()?.timestamp?.toMillis?.() ?? 0;
        setLatestMessageAt(ts);
      },
      (err) => console.error('Chat latest-message listener failed', err),
    );
    return unsub;
  }, [user, barId]);

  useEffect(() => {
    if (!barId) { setLastReadAt(0); return; }
    const stored = Number(localStorage.getItem(lastReadKey(barId)) || 0);
    setLastReadAt(stored);
  }, [barId]);

  const markRead = useCallback(() => {
    if (!barId) return;
    const now = Date.now();
    localStorage.setItem(lastReadKey(barId), String(now));
    setLastReadAt(now);
  }, [barId]);

  // Full scrollback — only while the panel is open.
  useEffect(() => {
    if (!user || !barId || !panelOpen) return;
    setOlderMessages([]);
    setHasMore(true);
    const unsub = onSnapshot(
      query(collection(db, `bars/${barId}/chat`), orderBy('timestamp', 'desc'), limit(PAGE_SIZE)),
      (s) => setMessages(s.docs.map((d) => ({ id: d.id, ...d.data() } as ChatMessage)).reverse()),
      (err) => console.error('Chat listener failed', err),
    );
    return unsub;
  }, [user, barId, panelOpen]);

  useEffect(() => {
    if (panelOpen) markRead();
  }, [panelOpen, markRead]);

  const loadMore = useCallback(async () => {
    if (!barId || loadingMore || !hasMore) return;
    const oldest = olderMessages[0] ?? messages[0];
    if (!oldest) return;
    setLoadingMore(true);
    try {
      const cursorSnap = await getDocs(
        query(collection(db, `bars/${barId}/chat`), orderBy('timestamp', 'desc'),
          where('timestamp', '<', oldest.timestamp as any), limit(PAGE_SIZE)),
      );
      if (cursorSnap.empty) { setHasMore(false); return; }
      const older = cursorSnap.docs.map((d) => ({ id: d.id, ...d.data() } as ChatMessage)).reverse();
      setOlderMessages((prev) => [...older, ...prev]);
      if (cursorSnap.docs.length < PAGE_SIZE) setHasMore(false);
    } catch (e) {
      console.error('Failed to load older chat messages', e);
    } finally {
      setLoadingMore(false);
    }
  }, [barId, hasMore, loadingMore, messages, olderMessages]);

  const sendMessage = useCallback(async (text: string, pin = false) => {
    if (!user || !barId || !text.trim()) return;
    await addDoc(collection(db, `bars/${barId}/chat`), {
      text: text.trim(),
      authorId: user.uid,
      authorName: displayName,
      authorRole: userRole ?? '',
      timestamp: serverTimestamp(),
      pinned: pin,
      ...(pin ? { pinnedBy: user.uid, pinnedAt: serverTimestamp() } : {}),
    });
  }, [user, barId, displayName, userRole]);

  const togglePin = useCallback(async (messageId: string, pin: boolean) => {
    if (!user || !barId) return;
    await updateDoc(doc(db, `bars/${barId}/chat`, messageId), pin
      ? { pinned: true, pinnedBy: user.uid, pinnedAt: serverTimestamp() }
      : { pinned: false, pinnedBy: deleteField(), pinnedAt: deleteField() });
  }, [user, barId]);

  const deleteMessage = useCallback(async (messageId: string) => {
    if (!barId) return;
    await deleteDoc(doc(db, `bars/${barId}/chat`, messageId));
  }, [barId]);

  return {
    pinnedMessages,
    messages: [...olderMessages, ...messages],
    hasMore,
    loadingMore,
    loadMore,
    hasUnread: !panelOpen && latestMessageAt > lastReadAt,
    markRead,
    sendMessage,
    togglePin,
    deleteMessage,
  };
}

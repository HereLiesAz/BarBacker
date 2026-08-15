import { useCallback, useEffect, useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import {
  addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc,
} from 'firebase/firestore';
import { db, functions } from '../firebase';
import { CalendarConnectionStatus, CalendarEvent, ICalSubscription } from '../types';

interface UseCalendarArgs {
  barId: string | null;
  isManagerPlus: boolean;
}

// Calendar data + actions (Phase 4). Local event CRUD is direct
// Firestore writes (Manager+, non-externally-owned only — enforced
// by firestore.rules); Google connect/sync and the iCal feed token
// go through callables since they touch server-only state.
export function useCalendar({ barId, isManagerPlus }: UseCalendarArgs) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [googleConnection, setGoogleConnection] = useState<CalendarConnectionStatus | null>(null);
  const [icalSubscriptions, setICalSubscriptions] = useState<ICalSubscription[]>([]);
  const [feedToken, setFeedToken] = useState<string | null>(null);

  useEffect(() => {
    if (!barId) { setEvents([]); return; }
    const unsub = onSnapshot(
      query(collection(db, `bars/${barId}/events`), orderBy('start', 'asc')),
      (s) => setEvents(
        s.docs.map((d) => ({ id: d.id, ...d.data() } as CalendarEvent)).filter((e) => !e.deletedAt),
      ),
      (err) => console.error('Calendar events listener failed', err),
    );
    return unsub;
  }, [barId]);

  useEffect(() => {
    if (!barId || !isManagerPlus) { setGoogleConnection(null); setICalSubscriptions([]); setFeedToken(null); return; }
    const unsubConn = onSnapshot(
      doc(db, `bars/${barId}/calendarConnection/google`),
      (s) => setGoogleConnection(s.exists() ? { provider: 'google', ...s.data() } as CalendarConnectionStatus : null),
      (err) => console.error('Calendar connection listener failed', err),
    );
    const unsubSubs = onSnapshot(
      collection(db, `bars/${barId}/icalSubscriptions`),
      (s) => setICalSubscriptions(s.docs.map((d) => ({ id: d.id, ...d.data() } as ICalSubscription))),
      (err) => console.error('iCal subscriptions listener failed', err),
    );
    const unsubFeed = onSnapshot(
      doc(db, `bars/${barId}/icalFeed/config`),
      (s) => setFeedToken(s.exists() ? (s.data().token ?? null) : null),
      (err) => console.error('iCal feed listener failed', err),
    );
    return () => { unsubConn(); unsubSubs(); unsubFeed(); };
  }, [barId, isManagerPlus]);

  const createEvent = useCallback(async (event: Omit<CalendarEvent, 'id'>) => {
    if (!barId) return;
    await addDoc(collection(db, `bars/${barId}/events`), event);
  }, [barId]);

  const updateEvent = useCallback(async (eventId: string, patch: Partial<CalendarEvent>) => {
    if (!barId) return;
    await updateDoc(doc(db, `bars/${barId}/events`, eventId), patch as Record<string, unknown>);
  }, [barId]);

  const deleteEvent = useCallback(async (eventId: string) => {
    if (!barId) return;
    await deleteDoc(doc(db, `bars/${barId}/events`, eventId));
  }, [barId]);

  const connectGoogle = useCallback(async () => {
    if (!barId) return;
    const result = await httpsCallable(functions, 'calendarGetAuthorizeUrl')({ barId });
    window.location.href = (result.data as { authorizeUrl: string }).authorizeUrl;
  }, [barId]);

  const listGoogleCalendars = useCallback(async () => {
    if (!barId) return [];
    const result = await httpsCallable(functions, 'calendarListCalendars')({ barId });
    return (result.data as { calendars: { id: string; summary: string; primary: boolean }[] }).calendars;
  }, [barId]);

  const selectGoogleCalendar = useCallback(async (calendarId: string) => {
    if (!barId) return;
    await httpsCallable(functions, 'calendarSelectCalendar')({ barId, calendarId });
  }, [barId]);

  const disconnectGoogle = useCallback(async () => {
    if (!barId) return;
    await httpsCallable(functions, 'calendarDisconnect')({ barId });
  }, [barId]);

  const addICalSubscription = useCallback(async (url: string, uid: string) => {
    if (!barId) return;
    await addDoc(collection(db, `bars/${barId}/icalSubscriptions`), {
      url, createdBy: uid, createdAt: serverTimestamp(),
    });
  }, [barId]);

  const removeICalSubscription = useCallback(async (subId: string) => {
    if (!barId) return;
    await deleteDoc(doc(db, `bars/${barId}/icalSubscriptions`, subId));
  }, [barId]);

  const rotateFeedToken = useCallback(async (revoke = false) => {
    if (!barId) return;
    await httpsCallable(functions, 'rotateICalFeedToken')({ barId, revoke });
  }, [barId]);

  return {
    events, googleConnection, icalSubscriptions, feedToken,
    createEvent, updateEvent, deleteEvent,
    connectGoogle, listGoogleCalendars, selectGoogleCalendar, disconnectGoogle,
    addICalSubscription, removeICalSubscription, rotateFeedToken,
  };
}

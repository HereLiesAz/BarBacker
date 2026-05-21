import { useEffect, useRef, useState } from 'react';
import type { User } from 'firebase/auth';
import {
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import { DEFAULT_BUTTONS, ROLE_NOTIFICATION_DEFAULTS } from '../constants';
import type { Bar, BarUser, ButtonConfig, Notice, Request } from '../types';

interface UseBarListenersArgs {
  user: User | null;
  barId: string | null;
  fcmToken: string | null;
  globalNtfyTopic: string | null;
  setSearchParams: (params: Record<string, string>) => void;
}

// Owns the five real-time Firestore subscriptions that drive the
// dashboard, plus the device-token auto-clock-in side effect.
//
// Subscriptions (all torn down together when user/barId changes):
//   - bars/{barId}/users/{uid}  — per-bar profile (role, status,
//     displayName, notificationPreferences, ntfyTopic)
//   - bars/{barId}              — bar config (name, buttons,
//     beerInventory, wells, hiddenButtonIds, buttonUsage,
//     customOrders)
//   - /requests where barId==barId, last 24h — top 100 by timestamp
//   - bars/{barId}/users where status in [active, pending] — Who's On
//   - bars/{barId}/notices, last 3 days — top 100
//
// Auto-clock-in (its own effect, deps [user, barId, fcmToken]):
//   - writes the device FCM token into bars/{barId}/tokens/{uid}
//   - sets the per-bar profile to status=active and bumps lastSeen
//
// The two effects are intentionally separate. Collapsing them would
// change the write semantics, since auto-clock-in must re-run when
// fcmToken arrives without unsubscribing the five listeners.
//
// `notificationPreferences`, `ntfyTopic`, and `customOrders` setters
// are returned so other parts of App.tsx (saveNotificationPreferences,
// the drag-and-drop hook) can mutate them optimistically.
export function useBarListeners({
  user,
  barId,
  fcmToken,
  globalNtfyTopic,
  setSearchParams,
}: UseBarListenersArgs) {
  // Per-bar user profile state.
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userStatus, setUserStatus] = useState<string>('active');
  const [displayName, setDisplayName] = useState<string>('');
  const [notificationPreferences, setNotificationPreferences] = useState<string[]>([]);
  const [ntfyTopic, setNtfyTopic] = useState<string | null>(null);

  // Bar config state.
  const [barName, setBarName] = useState('');
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);
  const [beerInventory, setBeerInventory] = useState<Record<string, string[]>>({});
  const [wells, setWells] = useState<string[]>([]);
  const [hiddenButtonIds, setHiddenButtonIds] = useState<string[]>([]);
  const [buttonUsage, setButtonUsage] = useState<Record<string, number>>({});
  const [customOrders, setCustomOrders] = useState<Record<string, string[]>>({});

  // Bar-scoped collections.
  const [requests, setRequests] = useState<Request[]>([]);
  const [allUsers, setAllUsers] = useState<BarUser[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);

  // Capture globalNtfyTopic by ref so changes to it don't tear down
  // and re-subscribe the 5 onSnapshot listeners. The ntfy mirror
  // logic reads it inside the per-bar user snapshot callback, which
  // fires often enough on its own to pick up new values.
  const globalNtfyTopicRef = useRef(globalNtfyTopic);
  useEffect(() => { globalNtfyTopicRef.current = globalNtfyTopic; }, [globalNtfyTopic]);

  // Time-window epoch: bump every hour so the requests/notices
  // listeners re-subscribe with a fresh "now" lower bound. Without
  // this, the 24h / 3-day windows are pinned at the moment the
  // listener was first set up, and a long-running PWA tab would
  // accumulate days/weeks of data in the listener result set.
  const [windowEpoch, setWindowEpoch] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setWindowEpoch(e => e + 1), 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!user || !barId) return;

    // Persist bar id to URL and localStorage.
    setSearchParams({ bar: barId });
    localStorage.setItem('barId', barId);

    const userRef = doc(db, `bars/${barId}/users`, user.uid);

    const unsubUser = onSnapshot(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setUserRole(data.role);
        setUserStatus(data.status || 'active');
        setDisplayName(data.displayName || 'Unknown');

        if (data.notificationPreferences) {
          setNotificationPreferences(data.notificationPreferences);
        } else if (data.role) {
          setNotificationPreferences(ROLE_NOTIFICATION_DEFAULTS[data.role] || []);
        }

        // Mirror the global ntfy topic into the per-bar user doc so
        // the fanout (which reads ntfyTopic off bar-user docs) stays
        // in sync with the account-level topic. Read via ref so the
        // listener effect doesn't tear down/re-subscribe when the
        // global topic loads.
        const gTopic = globalNtfyTopicRef.current;
        if (gTopic && data.ntfyTopic !== gTopic) {
          updateDoc(userRef, { ntfyTopic: gTopic }).catch(console.error);
          setNtfyTopic(gTopic);
        } else {
          setNtfyTopic(data.ntfyTopic || gTopic);
        }
      } else {
        // User document doesn't exist (new user).
        setUserRole(null);
      }
    });

    const unsubBar = onSnapshot(doc(db, 'bars', barId), (d) => {
      if (d.exists()) {
        const data = d.data() as Bar;
        setBarName(data.name);

        // Merge default buttons with custom bar buttons. Custom
        // entries (data.buttons) win over defaults by id.
        if (data.buttons) {
          const customMap = new Map(data.buttons.map(b => [b.id, b]));
          const combined = [...DEFAULT_BUTTONS.filter(b => !customMap.has(b.id)), ...data.buttons];
          setButtons(combined);
        } else {
          setButtons(DEFAULT_BUTTONS);
        }

        if (data.beerInventory) setBeerInventory(data.beerInventory);
        if (data.wells) setWells(data.wells);
        if (data.hiddenButtonIds) setHiddenButtonIds(data.hiddenButtonIds);
        if (data.buttonUsage) setButtonUsage(data.buttonUsage);
        if (data.customOrders) setCustomOrders(data.customOrders);
      }
    });

    // Who's On: active + pending users.
    const userQuery = query(
      collection(db, `bars/${barId}/users`),
      where('status', 'in', ['active', 'pending']),
    );
    const unsubAllUsers = onSnapshot(userQuery, (s) => {
      setAllUsers(s.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return () => {
      unsubUser();
      unsubBar();
      unsubAllUsers();
    };
  }, [user, barId, setSearchParams]);

  // Time-windowed listeners (requests + notices). Split off so they
  // can re-subscribe on the hourly windowEpoch tick without tearing
  // down the user/bar/allUsers listeners above. The "last 24h" /
  // "last 3 days" windows are recomputed at subscribe time.
  useEffect(() => {
    if (!user || !barId) return;

    const unsubReq = onSnapshot(
      query(
        collection(db, 'requests'),
        where('barId', '==', barId),
        where('timestamp', '>=', new Date(Date.now() - 24 * 60 * 60 * 1000)),
        orderBy('timestamp', 'desc'),
        limit(100),
      ),
      (s) => setRequests(s.docs.map(d => ({ id: d.id, ...d.data() } as Request))),
    );

    const unsubNotices = onSnapshot(
      query(
        collection(db, `bars/${barId}/notices`),
        where('timestamp', '>=', new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)),
        orderBy('timestamp', 'desc'),
        limit(100),
      ),
      (s) => setNotices(s.docs.map(d => ({ id: d.id, ...d.data() } as Notice))),
    );

    return () => {
      unsubReq();
      unsubNotices();
    };
  }, [user, barId, windowEpoch]);

  // Mirror globalNtfyTopic into the per-bar user doc whenever the
  // account-level topic changes. The per-bar user snapshot handler
  // above also handles this on its own update, but if the global
  // topic changes while the per-bar user doc is otherwise quiet
  // (no role change, status flip, etc.) the snapshot wouldn't fire
  // and the mirror would stay stale. This effect fills that gap
  // without re-subscribing any of the 5 listeners.
  useEffect(() => {
    if (!user || !barId || !globalNtfyTopic) return;
    const userRef = doc(db, `bars/${barId}/users`, user.uid);
    updateDoc(userRef, { ntfyTopic: globalNtfyTopic }).catch(console.error);
    setNtfyTopic(globalNtfyTopic);
  }, [user, barId, globalNtfyTopic]);

  // Auto-clock-in: separate effect, runs when fcmToken arrives.
  useEffect(() => {
    if (!user || !barId || !fcmToken) return;

    const userRef = doc(db, `bars/${barId}/users`, user.uid);
    const tokenRef = doc(db, `bars/${barId}/tokens`, user.uid);

    const autoClockIn = async () => {
      await setDoc(tokenRef, { token: fcmToken, updated: serverTimestamp() });
      await updateDoc(userRef, {
        status: 'active',
        lastSeen: serverTimestamp(),
      }).catch(() => {});
    };
    autoClockIn();
  }, [user, barId, fcmToken]);

  return {
    userRole,
    userStatus,
    displayName,
    notificationPreferences,
    setNotificationPreferences,
    ntfyTopic,
    setNtfyTopic,
    barName,
    buttons,
    beerInventory,
    setBeerInventory,
    wells,
    setWells,
    hiddenButtonIds,
    setHiddenButtonIds,
    buttonUsage,
    customOrders,
    setCustomOrders,
    requests,
    allUsers,
    notices,
  };
}

// Import React hooks for managing state and side effects.
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
// Import 'useSearchParams' to read/write URL query parameters.
import { useSearchParams } from 'react-router-dom';
// Import Firebase Auth functions still used directly (handlers below
// that touch deleteUser / updateProfile). Login/logout/google sign-in
// are handled via useAuth().
import {
  deleteUser,
  updateProfile,
} from 'firebase/auth';
// Import Firestore functions.
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
  updateDoc,
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  FieldPath,
} from 'firebase/firestore';
// Import initialized Firebase instances and helper functions.
import {
  db,
  functions,
  storage,
  requestNotificationPermission,
} from './firebase';
import { httpsCallable } from 'firebase/functions';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
// Import custom hook for fetching the latest APK release.
import { useLatestRelease } from './hooks/useLatestRelease';
import { usePwaInstallPrompt } from './hooks/usePwaInstallPrompt';
import { useGodMode } from './hooks/useGodMode';
import { useMyBars } from './hooks/useMyBars';
import { useUsageBatching } from './hooks/useUsageBatching';
import { useInactivityAutoSubmit } from './hooks/useInactivityAutoSubmit';
import { useAuth } from './hooks/useAuth';
import { usePushNotifications } from './hooks/usePushNotifications';
import { useChat } from './hooks/useChat';
import { usePOS } from './hooks/usePOS';
import { useCalendar } from './hooks/useCalendar';
import { useDragAndDrop } from './hooks/useDragAndDrop';
import { useRequestActions } from './hooks/useRequestActions';


// --- Material Web Imports ---
// These imports register the custom elements with the browser's CustomElementRegistry.
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/icon/icon.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/progress/circular-progress.js';
import '@material/web/chips/chip-set.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/radio/radio.js';
import '@material/web/dialog/dialog.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';

// Import Types and Constants.
import { Bar, BarTheme, ButtonConfig, Request, BarUser, EightySixEntry } from './types';
import { DEFAULT_BUTTONS, ROLE_NOTIFICATION_DEFAULTS, DEFAULT_BEERS, DEFAULT_SPIRITS } from './constants';
// Import Custom Hooks.
import { useNag } from './hooks/useNag';
import { useBarTheme } from './hooks/useBarTheme';
// Import UI Components.
import BarSearch from './components/BarSearch';
import RoleSelector from './components/RoleSelector';
import NotificationSettings from './components/NotificationSettings';
import BarManager from './components/BarManager';
import EightySixDialog from './components/EightySixDialog';
import BottleScanner from './components/BottleScanner';
import ThemeEditor from './components/ThemeEditor';
import InputDialog from './components/InputDialog';
import { WhoIsOnDialog } from './components/WhoIsOnDialog';
import { ChatPanel } from './components/ChatPanel';
import { POSSettings } from './components/POSSettings';
import { CalendarSettings } from './components/CalendarSettings';
import { CalendarView } from './components/CalendarView';
import { SortableButton } from './components/SortableButton';
import { MdDialog } from './components/MdDialog';
// Import dnd-kit for drag-and-drop functionality.
import {
  DndContext,
  closestCenter,
  DragOverlay,
} from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

// Helper component for listing joined bars.
const BarListItem = ({ name, onClick }: { name: string, onClick: () => void }) => {
    return (
        <md-list-item type="button" onClick={onClick}>
            <div slot="headline" className="text-white">{name}</div>
            <md-icon slot="start">store</md-icon>
            <md-icon slot="end">arrow_forward</md-icon>
        </md-list-item>
    );
};

// --- MAIN APP COMPONENT ---
function App() {
  // Auth state + actions (sign in, sign up, sign out, google).
  const {
    user,
    loading: authLoading,
    authError,
    isRegistering,
    setIsRegistering,
    signInEmail,
    signInGoogle,
    signOut,
  } = useAuth();
  
  // --- Routing & Bar State ---
  // Access URL query parameters.
  const [searchParams, setSearchParams] = useSearchParams();
  // react-router's setSearchParams is not identity-stable across the
  // URL change it itself causes (its identity depends on
  // location.search) — depending on it directly in the listener
  // effect below made that effect re-run a second time immediately
  // after mount purely because it had just called setSearchParams,
  // tearing down and re-establishing all three listeners for no
  // reason. Route calls through a ref instead so the effect only
  // depends on values that should actually trigger it.
  const setSearchParamsRef = useRef(setSearchParams);
  useEffect(() => { setSearchParamsRef.current = setSearchParams; }, [setSearchParams]);
  // Get the 'bar' param from URL or fallback to localStorage. Guarded
  // — localStorage.getItem can throw (Safari private browsing
  // historically, a storage-access-restricted iframe context) and
  // this runs unconditionally on every render of the whole app, so an
  // unguarded throw here would crash the entire component tree with
  // no error boundary above it to catch it.
  const initialBarId = searchParams.get('bar') || (() => {
    try {
      return localStorage.getItem('barId');
    } catch {
      return null;
    }
  })();
  // Store the current Bar ID.
  const [barId, setBarId] = useState<string | null>(initialBarId);
  
  // --- User Context in Bar ---
  // Store the name of the current bar.
  const [barName, setBarName] = useState('');
  // Store the user's privilege role in this bar ('Staff' | 'Manager' | 'Owner').
  const [userRole, setUserRole] = useState<string | null>(null);
  // Store the user's job title/function (e.g. 'Bartender'), used for
  // display and notification-preference defaults. Distinct from the
  // privilege role above.
  const [jobTitle, setJobTitle] = useState<string>('');
  // Store the user's status (active/off_clock/pending).
  const [userStatus, setUserStatus] = useState<string>('active');
  // Store the user's display name.
  const [displayName, setDisplayName] = useState<string>('');
  // True for the brief window between creating a brand-new bar and
  // confirming the RoleSelector — lets confirmRole know to assign
  // 'Owner' instead of 'Staff'. Reset to false the moment it's
  // consumed or the user backs out of bar selection.
  const [justCreatedBar, setJustCreatedBar] = useState(false);
  // Store the user's notification preferences (list of button IDs).
  const [notificationPreferences, setNotificationPreferences] = useState<string[]>([]);

  // --- Data State ---
  // Store the list of active requests.
  const [requests, setRequests] = useState<Request[]>([]);
  // Store the list of configured buttons.
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);

  // --- Bar Configuration State ---
  // Store inventory mapping for beers (Brand -> Types).
  const [beerInventory, setBeerInventory] = useState<Record<string, string[]>>({});
  // Store list of well names.
  const [wells, setWells] = useState<string[]>([]);
  // Store IDs of buttons that should be hidden.
  const [hiddenButtonIds, setHiddenButtonIds] = useState<string[]>([]);
  // Store usage counts for sorting.
  const [buttonUsage, setButtonUsage] = useState<Record<string, number>>({});
  // Store custom sort orders.
  const [customOrders, setCustomOrders] = useState<Record<string, string[]>>({});


  // --- UI State ---
  // Track the ID of the button currently being dragged.
  // Store the list of all users in the bar (for "Who's On" and managing).
  const [allUsers, setAllUsers] = useState<BarUser[]>([]);
  // Control the Input Dialog state (Open/Close, Type, Context).
  const [inputDialog, setInputDialog] = useState<{ type: 'brand' | 'type' | 'well' | 'custom', open: boolean, parentContext?: string, searchTerm: string }>({ type: 'brand', open: false, searchTerm: '' });
  // Control the Quantity Picker Dialog state.
  const [quantityPicker, setQuantityPicker] = useState<{ open: boolean, currentQty: number, context: string }>({ open: false, currentQty: 1, context: '' });

  // Stack to navigate through nested button menus.
  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);


  // Dialog visibility states.
  const [showOffClockDialog, setShowOffClockDialog] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [showBarManager, setShowBarManager] = useState(false);
  const [showAccountDialog, setShowAccountDialog] = useState(false);
  const [showWhoIsOn, setShowWhoIsOn] = useState(false);
  const [showNameEditDialog, setShowNameEditDialog] = useState(false);
  const [editNameValue, setEditNameValue] = useState('');
  const [editNameError, setEditNameError] = useState<string | null>(null);

  // Cap on the persisted ignoredIds list (see below) — nothing ever
  // pruned old entries as requests they referred to got resolved and
  // deleted, so this grew by one entry every time anyone tapped
  // "Ignore," unboundedly, for the lifetime of the browser profile.
  const MAX_IGNORED_IDS = 200;

  // List of request IDs the user has locally ignored/muted. Persisted
  // to localStorage — previously plain useState, so a reload (or the
  // app being killed and reopened, routine on mobile) brought back
  // every previously-dismissed nag.
  const [ignoredIds, setIgnoredIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('ignoredRequestIds');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('ignoredRequestIds', JSON.stringify(ignoredIds));
  }, [ignoredIds]);

  // Chat panel open/closed state. Data + actions come from useChat.
  const [showChatPanel, setShowChatPanel] = useState(false);

  // Control the main menu dropdown. md-menu's `onClosed` JSX prop has
  // the same React-19-custom-element bug as md-dialog's `onClose` (see
  // MdDialog) — React listens for "Closed" (capitalized) while
  // md-menu dispatches lowercase 'closed', so it never fires and
  // dismissing the menu by clicking outside it would strand menuOpen
  // at true. Bind the real event via a ref instead.
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    const handleClosed = () => setMenuOpen(false);
    el.addEventListener('closed', handleClosed);
    return () => el.removeEventListener('closed', handleClosed);
  }, []);

  // Fetch latest APK info using custom hook.
  const { downloadUrl: apkUrl, loading: apkLoading } = useLatestRelease();

  // Drag-and-drop sensors + handlers (dnd-kit). Persistence of
  // customOrders happens inside the hook on drag end.
  const { sensors, activeId, isDraggingRef, handleDragStart, handleDragOver, handleDragEnd, handleDragCancel } =
    useDragAndDrop({ barId, customOrders, setCustomOrders });

  // Memoized lookup map for button IDs. Maps both top-level and child labels to top-level button ID.
  const buttonLookupMap = useMemo(() => {
    const map = new Map<string, string>();
    // Iterate in order; first match for a label wins, preserving original behavior.
    for (const btn of buttons) {
        if (!map.has(btn.label)) map.set(btn.label, btn.id);
        if (btn.children) {
            for (const child of btn.children) {
                if (!map.has(child.label)) map.set(child.label, btn.id);
            }
        }
    }
    return map;
  }, [buttons]);

  // Memoized index map for top-level buttons. Maps label -> index in `buttons`.
  const topLevelIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    buttons.forEach((btn, index) => {
        if (!map.has(btn.label)) {
            map.set(btn.label, index);
        }
    });
    return map;
  }, [buttons]);

  // Helper: Find the Button ID given a Request Label string.
  const getButtonIdForLabel = useCallback((label: string): string | undefined => {
    // 1. Try exact match from the memoized map (O(1)).
    const exactMatch = buttonLookupMap.get(label);
    if (exactMatch) return exactMatch;

    // 2. Check for partial matches using split logic (O(Parts) instead of O(Buttons)).
    // We split by ": " and check if any prefix corresponds to a top-level button.
    const parts = label.split(': ');
    let bestIndex = -1;

    // Construct candidates: "Part0", "Part0: Part1", etc.
    let currentLabel = "";
    for (let i = 0; i < parts.length; i++) {
        currentLabel += (i > 0 ? ": " : "") + parts[i];
        const idx = topLevelIndexMap.get(currentLabel);
        if (idx !== undefined) {
            // "First match wins" logic from original loop implies finding the matching button with lowest index.
            if (bestIndex === -1 || idx < bestIndex) {
                bestIndex = idx;
            }
        }
    }

    if (bestIndex !== -1) {
        return buttons[bestIndex].id;
    }

    return undefined;
  }, [buttons, buttonLookupMap, topLevelIndexMap]);

  // Compute the list of active requests relevant to the user.
  const activeRequests = useMemo(() => {
      const ignoredSet = new Set(ignoredIds);
      const prefsSet = new Set(notificationPreferences);

      return requests.filter(r => {
          // Only show pending requests.
          if (r.status !== 'pending') return false;

          // Always show the requester's own pending requests, regardless
          // of their notification preferences — otherwise a bartender's
          // own SECURITY/MANAGER tap (not in their default prefs) never
          // appears in their own footer: no confirmation it sent, no way
          // to cancel a mis-tap.
          if (user && r.requesterId === user.uid) return true;

          const btnId = getButtonIdForLabel(r.label);

          // Special Logic: ALWAYS show BREAK requests. Exact match only
          // (not a substring check) — free text containing "BREAK" (e.g.
          // "BREAKAGE AT WELL 3") shouldn't bypass everyone's preferences.
          if (btnId === 'break') {
             return true;
          }

          // If we can't identify the button type, show it by default (safety).
          if (!btnId) return true;

          // Otherwise, check if the user has subscribed to this notification type.
          return prefsSet.has(btnId);
      }).sort((a, b) => {
          // Sort Logic: Ignored requests go to the bottom.
          const aIgnored = ignoredSet.has(a.id);
          const bIgnored = ignoredSet.has(b.id);
          if (aIgnored === bIgnored) {
              return 0;
          }
          return aIgnored ? 1 : -1;
      });
  }, [requests, getButtonIdForLabel, notificationPreferences, ignoredIds, user]);

  // Activate the Nag hook to play sounds for these requests.
  useNag(activeRequests, ignoredIds);

  // Push notification setup (Capacitor + web FCM). Returns the
  // device FCM token; the per-bar auto-clock-in effect below copies it
  // into bars/{barId}/tokens/{uid}.
  const { fcmToken, setFcmToken } = usePushNotifications();

  // PWA install prompt — capture beforeinstallprompt and expose a
  // trigger. On accept, re-request notification permission so newly
  // installed PWAs don't sit silently without push.
  const { installPrompt, promptInstall } = usePwaInstallPrompt(() => {
    if (user) {
      requestNotificationPermission().then(t => t && setFcmToken(t));
    }
  });

  // Admin / god-mode gate (custom claim on the user's ID token).
  const isGodMode = useGodMode(user);

  // Bar-level subscription tier + custom theme. Both populated from
  // the bar listener below.
  const [barSubscription, setBarSubscription] = useState<'free' | 'premium'>('free');
  const [barTheme, setBarTheme] = useState<BarTheme | undefined>(undefined);

  // Premium gating. Admins (god mode) always count as premium for
  // moderation purposes; otherwise the bar must be on the premium
  // tier.
  const isPremium = isGodMode || barSubscription === 'premium';

  // Privilege check used to gate Manager+ actions in the UI (theme
  // editing, approving pending joins). firestore.rules is the actual
  // authority — this only controls what's shown.
  const isManagerPlus = userRole === 'Owner' || userRole === 'Manager';

  // Apply the custom bar theme to the document root when premium.
  useBarTheme(barTheme, isPremium);

  // 86'd list state and dialog visibility.
  const [eightySixEntries, setEightySixEntries] = useState<EightySixEntry[]>([]);
  const [showEightySixDialog, setShowEightySixDialog] = useState(false);
  const [showBottleScanner, setShowBottleScanner] = useState(false);
  const [showThemeEditor, setShowThemeEditor] = useState(false);
  const [showPOSSettings, setShowPOSSettings] = useState(false);
  const [showCalendarSettings, setShowCalendarSettings] = useState(false);
  const [showCalendarView, setShowCalendarView] = useState(false);

  // Joined bars + their display names + the account-level ntfy topic
  // — all driven by the global users/{uid} document.
  const { myBars, barDetails, globalNtfyTopic } = useMyBars(user);

  // --- 2. Bar Logic (Listeners) ---
  useEffect(() => {
    // If no user or bar selected, clear everything the listeners
    // below would otherwise leave stale — most critically on sign-out
    // (see handleLogout) or a bar switch: without this, a second
    // person signing into the same browser session (a shared device
    // at the bar) would see the PREVIOUS user's bar name, roster,
    // beer inventory, and role/permissions still rendered until a
    // full page reload, since React state isn't reset just because
    // an effect's guard condition starts failing.
    if (!user || !barId) {
      setUserRole(null);
      setJobTitle('');
      setUserStatus('active');
      setDisplayName('');
      setNotificationPreferences([]);
      setBarName('');
      setButtons(DEFAULT_BUTTONS);
      setBeerInventory({});
      setWells([]);
      setHiddenButtonIds([]);
      setButtonUsage({});
      setCustomOrders({});
      setBarSubscription('free');
      setBarTheme(undefined);
      setAllUsers([]);
      return;
    }

    // Persist Bar ID to URL and LocalStorage.
    setSearchParamsRef.current({ bar: barId });
    localStorage.setItem('barId', barId);

    // References to Firestore documents.
    const userRef = doc(db, `bars/${barId}/users`, user.uid);

    // Listen for changes to the User's profile.
    const unsubUser = onSnapshot(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setUserRole(data.role);
        setJobTitle(data.jobTitle || data.role || '');
        setUserStatus(data.status || 'active');
        setDisplayName(data.displayName || 'Unknown');

        // Load notification preferences or set defaults.
        const defaultsKey = data.jobTitle || data.role;
        if (data.notificationPreferences) {
          setNotificationPreferences(data.notificationPreferences);
        } else if (defaultsKey) {
          // If no preferences saved, use defaults for job title (or
          // role, for docs written before jobTitle existed).
          setNotificationPreferences(ROLE_NOTIFICATION_DEFAULTS[defaultsKey] || []);
        }

      } else {
        // User document doesn't exist (new user).
        setUserRole(null);
      }
    }, (err) => console.error('User profile listener failed', err));

    // Listen for changes to the Bar configuration.
    const unsubBar = onSnapshot(doc(db, 'bars', barId), (d) => {
      if (d.exists()) {
        const data = d.data() as Bar;
        setBarName(data.name);

        // Merge default buttons with custom bar buttons.
        if (data.buttons) {
            // Deduplicate buttons by ID, preferring custom (data.buttons) over default.
            const customMap = new Map(data.buttons.map(b => [b.id, b]));
            const combined = [...DEFAULT_BUTTONS.filter(b => !customMap.has(b.id)), ...data.buttons];
            setButtons(combined);
        } else {
            setButtons(DEFAULT_BUTTONS);
        }

        // Update local state with bar data.
        if (data.beerInventory) setBeerInventory(data.beerInventory);
        if (data.wells) setWells(data.wells);
        if (data.hiddenButtonIds) setHiddenButtonIds(data.hiddenButtonIds);
        if (data.buttonUsage) setButtonUsage(data.buttonUsage);
        // Skip while a local drag is in flight — this listener fires
        // on ANY change to the bar doc (not just customOrders), and
        // an unconditional overwrite here would clobber an in-progress
        // reorder with the pre-drag server value the instant another
        // device touches the same bar document.
        if (data.customOrders && !isDraggingRef.current) setCustomOrders(data.customOrders);
        setBarSubscription(data.subscription || 'free');
        setBarTheme(data.theme);
      }
    }, (err) => console.error('Bar listener failed', err));

    // Listen for All Users (for "Who's On").
    // Query varies based on whether we are viewing the "Who's On" dialog (show off_clock users too).
    const userQuery = query(collection(db, `bars/${barId}/users`), where('status', 'in', ['active', 'pending']));

    const unsubAllUsers = onSnapshot(userQuery, (s) => {
        setAllUsers(s.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => console.error('Bar users listener failed', err));

    // Cleanup: Unsubscribe from non-time-windowed listeners. The
    // requests listener is owned by a separate effect below so it can
    // re-subscribe on the hourly windowEpoch without tearing these down.
    return () => { unsubUser(); unsubBar(); unsubAllUsers(); };
  }, [user, barId, isDraggingRef]);

  // Time-window epoch. Bumped every hour so the requests listener
  // below re-subscribes with a fresh "now" lower bound. In a
  // long-running PWA tab the 24h window would otherwise be pinned at
  // the moment the listener was first established.
  const [windowEpoch, setWindowEpoch] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setWindowEpoch(e => e + 1), 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Time-windowed requests listener. Split off from the main listener
  // block so it can re-subscribe on the hourly windowEpoch tick
  // without disturbing the user/bar/allUsers subscriptions. Chat
  // (which replaced the old time-windowed notices listener) is
  // persistent rather than time-windowed, so it's owned by useChat
  // instead — see below.
  useEffect(() => {
    if (!user || !barId) { setRequests([]); return; }

    const unsubReq = onSnapshot(
      query(
        collection(db, 'requests'),
        where('barId', '==', barId),
        where('timestamp', '>=', new Date(Date.now() - 24 * 60 * 60 * 1000)),
        orderBy('timestamp', 'desc'),
        limit(100),
      ),
      (s) => setRequests(s.docs.map(d => ({ id: d.id, ...d.data() } as Request))),
      (err) => console.error('Requests listener failed', err),
    );

    return unsubReq;
  }, [user, barId, windowEpoch]);

  // 86'd list listener. Public entries are visible to anyone with a
  // role; private entries (gated by premium subscription) are only
  // visible to Owner/Manager. Switching the query shape based on the
  // caller's permission is what keeps a tighter rule on the read
  // side and avoids the client even attempting a private read it
  // can't decode.
  useEffect(() => {
    if (!barId) { setEightySixEntries([]); return; }
    const canSeePrivate = isPremium && isManagerPlus;
    const q = canSeePrivate
      ? query(collection(db, `bars/${barId}/eightySixed`), orderBy('timestamp', 'desc'), limit(200))
      : query(collection(db, `bars/${barId}/eightySixed`), where('visibility', '==', 'public'), orderBy('timestamp', 'desc'), limit(200));
    const unsub = onSnapshot(q, (s) => {
      setEightySixEntries(s.docs.map(d => ({ id: d.id, ...d.data() } as EightySixEntry)));
    }, (err) => console.error('86\'d list listener failed', err));
    return () => unsub();
  }, [barId, isPremium, userRole]);

  // Pending ownership-claim listener (Manager+ only — matches the
  // read rule on ownershipClaims). Writes to this collection are
  // Cloud-Function-only (see functions/src/ownershipClaims.ts); this
  // just surfaces what's pending for review in WhoIsOnDialog.
  const [pendingOwnershipClaims, setPendingOwnershipClaims] = useState<Array<{ id: string; claimantName?: string; justification?: string }>>([]);
  useEffect(() => {
    if (!barId || !isManagerPlus) {
      setPendingOwnershipClaims([]);
      return;
    }
    const q = query(collection(db, `bars/${barId}/ownershipClaims`), where('status', '==', 'pending'));
    const unsub = onSnapshot(q, (s) => {
      setPendingOwnershipClaims(s.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => console.error('Ownership claims listener failed', err));
    return () => unsub();
  }, [barId, isManagerPlus]);

  // File a claim requesting ownership of the current bar (Account
  // dialog). Writes go through the Cloud Function only — the client
  // never touches ownershipClaims directly (allow write: if false).
  const fileOwnershipClaim = async () => {
    if (!barId) return;
    try {
      await httpsCallable(functions, 'fileOwnershipClaim')({ barId });
      alert('Ownership claim filed. A manager or the current owner needs to approve it.');
    } catch (e) {
      console.error('Failed to file ownership claim', e);
      alert(e instanceof Error ? e.message : 'Failed to file ownership claim.');
    }
  };

  // Approve/reject a pending ownership claim (WhoIsOnDialog, Manager+).
  const reviewOwnershipClaim = async (claimId: string, approve: boolean) => {
    if (!barId) return;
    try {
      await httpsCallable(functions, 'reviewOwnershipClaim')({ barId, claimId, approve });
    } catch (e) {
      console.error('Failed to review ownership claim', e);
      alert(e instanceof Error ? e.message : 'Failed to review ownership claim.');
    }
  };


  // --- 2.5 Auto-Clock In (Token Update) ---
  useEffect(() => {
    if (!user || !barId || !fcmToken) return;

    const userRef = doc(db, `bars/${barId}/users`, user.uid);
    const tokenRef = doc(db, `bars/${barId}/tokens`, user.uid);

    const autoClockIn = async () => {
      try {
        // Store FCM token. Previously unguarded — a rejection here
        // (e.g. a transient offline write) threw out of autoClockIn()
        // as an unhandled promise rejection (autoClockIn() is called
        // below with no .then/.catch) AND skipped the updateDoc below
        // entirely, silently leaving the user un-clocked-in with no
        // error surfaced anywhere.
        await setDoc(tokenRef, {
          token: fcmToken,
          updated: serverTimestamp()
        });
        // Set status to active and update heartbeat. Rules only permit
        // this self-write when transitioning from 'off_clock' (or when
        // status isn't changing at all) — a user still 'pending'
        // manager approval correctly stays pending here.
        await updateDoc(userRef, {
          status: 'active',
          lastSeen: serverTimestamp()
        });
      } catch (e) {
        console.error('Auto clock-in failed', e);
      }
    };
    autoClockIn();
  }, [user, barId, fcmToken]);


  // Auto-submit an "(Ask Me)" request if a sub-menu sits open for 60s.
  useInactivityAutoSubmit(
    navStack,
    (label) => submitRequestSafe(label),
    () => setNavStack([]),
    undefined,
    inputDialog.open || quantityPicker.open,
  );

  // --- Actions ---

  // Save a new beer brand to the bar's inventory. firestore.rules
  // restricts bars/{barId} writes to Manager+ — a Staff member
  // reaching this action (nothing in the UI currently hides "+ ADD
  // BRAND" from them) previously got no feedback at all: the write
  // threw, so neither the optimistic state update nor the dialog-close
  // ever ran, and the InputDialog just sat there with no explanation.
  const saveBrand = async (brandName: string) => {
    if (!user || !barId) return;

    // If it already exists, just open it.
    if (beerInventory[brandName]) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
        setNavStack(prev => [...prev, brandBtn]);
        return;
    }

    try {
      // Write to Firestore.
      await setDoc(doc(db, 'bars', barId), {
          beerInventory: { [brandName]: [] } // Object syntax uses dot notation for updates, but here we merge.
      }, { merge: true });
    } catch (e) {
      console.error('Failed to save brand', e);
      alert('Failed to add brand. Only managers can edit the beer inventory.');
      return;
    }

    // Update local state optimistically.
    setBeerInventory(prev => ({ ...prev, [brandName]: [] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate to the new brand.
    const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
    setNavStack(prev => [...prev, brandBtn]);
  };

  // Save a new beer type (e.g., "Bottle") to a brand. Same Manager+
  // restriction and same previously-silent-failure issue as saveBrand.
  const saveType = async (typeName: string) => {
    if (!user || !barId || !inputDialog.parentContext) return;
    const brand = inputDialog.parentContext;
    const currentTypes = beerInventory[brand] || [];

    // If exists, open it.
    if (currentTypes.includes(typeName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
        setNavStack(prev => [...prev, typeBtn]);
        return;
    }

    try {
      // Update Firestore (arrayUnion ensures uniqueness). Uses a
      // FieldPath instance rather than a `beerInventory.${brand}`
      // template-string key: Firestore splits string field paths on
      // literal '.' characters, so a brand name containing a period
      // (e.g. "St. Pauli Girl") would silently write into a nested
      // "St" -> " Pauli Girl" sub-object instead of the intended
      // top-level beerInventory[brand] entry. FieldPath takes each
      // segment as a separate argument, bypassing that parsing
      // entirely regardless of what characters the brand name has.
      await updateDoc(doc(db, 'bars', barId), new FieldPath('beerInventory', brand), arrayUnion(typeName));
    } catch (e) {
      console.error('Failed to save type', e);
      alert('Failed to add type. Only managers can edit the beer inventory.');
      return;
    }

    // Update local state.
    setBeerInventory(prev => ({ ...prev, [brand]: [...(prev[brand] || []), typeName] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate.
    const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
    setNavStack(prev => [...prev, typeBtn]);
  };

  // Save a new Well location. Same Manager+ restriction and same
  // previously-silent-failure issue as saveBrand/saveType.
  const saveWell = async (wellName: string) => {
    if (!user || !barId) return;

    // If exists, request ice for it.
    if (wells.includes(wellName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        submitRequestSafe(`ICE: ${wellName}`);
        setNavStack([]);
        return;
    }

    try {
      // Add to Firestore.
      await updateDoc(doc(db, 'bars', barId), {
          wells: arrayUnion(wellName)
      });
    } catch (e) {
      console.error('Failed to save well', e);
      alert('Failed to add well. Only managers can edit wells.');
      return;
    }

    // Update local state.
    setWells(prev => [...prev, wellName]);
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Submit request.
    submitRequestSafe(`ICE: ${wellName}`);
    setNavStack([]);
  };

  // Hide a button from the dashboard.
  const hideButton = async (btnId: string) => {
    if (!user || !barId) return;
    try {
      await updateDoc(doc(db, 'bars', barId), {
          hiddenButtonIds: arrayUnion(btnId)
      });
    } catch (e) {
      console.error('Failed to hide button', e);
      alert('Failed to hide. Please try again.');
      return;
    }
    setHiddenButtonIds(prev => [...prev, btnId]);
  };

  // Unhide a button (premium only).
  const unhideButton = async (btnId: string) => {
    if (!user || !barId) return;
    try {
      await updateDoc(doc(db, 'bars', barId), {
          hiddenButtonIds: arrayRemove(btnId)
      });
    } catch (e) {
      console.error('Failed to unhide button', e);
      alert('Failed to restore. Please try again.');
      return;
    }
    setHiddenButtonIds(prev => prev.filter(id => id !== btnId));
  };

  // BottleScanner "Add to Menu" action. Mirrors saveBrand/saveType
  // above but without their navigation side effects (this isn't part
  // of the request-button nav flow) and combined into one call, since
  // a scanned bottle may be a brand-new brand, a new type on an
  // existing brand, or already fully present (a no-op either way).
  const addBottleToMenu = async (brand: string, type: string) => {
    if (!barId) return;
    const existingTypes = beerInventory[brand];
    if (!existingTypes) {
      await setDoc(doc(db, 'bars', barId), {
        beerInventory: { [brand]: type ? [type] : [] },
      }, { merge: true });
      setBeerInventory(prev => ({ ...prev, [brand]: type ? [type] : [] }));
    } else if (type && !existingTypes.includes(type)) {
      // FieldPath, not a `beerInventory.${brand}` string key — see the
      // comment on the equivalent write in saveType above. Scanned
      // brand names come straight from OCR and are especially likely
      // to contain a literal period.
      await updateDoc(doc(db, 'bars', barId), new FieldPath('beerInventory', brand), arrayUnion(type));
      setBeerInventory(prev => ({ ...prev, [brand]: [...(prev[brand] || []), type] }));
    }
  };

  // BottleScanner "Send Alert" action: upload the captured photo,
  // then submit a normal request (server-side FCM/ntfy fanout applies
  // exactly as it does for any other request) referencing the bottle
  // by name with the photo attached.
  const sendBottleAlert = async (brand: string, photo: Blob) => {
    // Previously returned silently here — BottleScanner's runAction
    // only shows an error (and keeps the dialog open) when this
    // rejects, so a no-op success looked identical to a sent alert:
    // the dialog just closed as if it had gone out.
    if (!user || !barId) throw new Error('Not signed into a bar.');
    const path = `bottlePhotos/${barId}/${user.uid}_${Date.now()}.jpg`;
    const photoRef = storageRef(storage, path);
    await uploadBytes(photoRef, photo, { contentType: photo.type || 'image/jpeg' });
    const photoUrl = await getDownloadURL(photoRef);
    // Prefixed to match the "BEER" button's exact label (see
    // constants.ts's restock_beer entry) rather than a made-up
    // "RESTOCK:" prefix that matched no configured button at all.
    // getButtonIdForLabel resolved that to no buttonId, and
    // shouldNotifyMember treats a missing buttonId as "can't tell
    // who this is for, notify everyone" — so every bottle-scanner
    // alert (beer or spirits) was mass-notifying the entire bar
    // regardless of anyone's notification preferences. This isn't a
    // perfect category match for a scanned spirits bottle, but it's
    // the same inventory bucket "Add to Menu" already files spirits
    // into (see addBottleToMenu), so it's at least consistent with
    // how this feature already treats the two.
    await submitRequest(`BEER: ${brand}`, photoUrl);
  };

  // Add a person to the 86'd list. Visibility decides whether all
  // staff with a role can see the entry ('public') or only Manager+
  // ('private', gated by the premium subscription).
  const addEightySixEntry = async (patronName: string, reason?: string, visibility: 'public' | 'private' = 'public') => {
    if (!user || !barId || !patronName.trim()) return;
    await addDoc(collection(db, `bars/${barId}/eightySixed`), {
      patronName: patronName.trim(),
      submittedBy: user.uid,
      submitterName: displayName,
      visibility,
      ...(reason ? { reason } : {}),
      timestamp: serverTimestamp(),
    });
  };

  // Remove an entry from the 86'd list (Manager+ only via rules).
  const deleteEightySixEntry = async (entryId: string) => {
    if (!user || !barId) return;
    await deleteDoc(doc(db, `bars/${barId}/eightySixed`, entryId));
  };

  // Save the bar's custom theme. Gated to Manager+ via rules; the UI
  // hides the entry point unless isPremium.
  const saveBarTheme = async (theme: BarTheme) => {
    if (!barId) return;
    await updateDoc(doc(db, 'bars', barId), { theme });
  };

  // Chat data + actions. See docs/plans/2026-05-21-feature-set-purr-design.md
  // Phase 2 — replaces the old notice board.
  const {
    pinnedMessages,
    messages: chatMessages,
    hasMore: chatHasMore,
    loadingMore: chatLoadingMore,
    loadMore: loadMoreChat,
    hasUnread: chatHasUnread,
    sendMessage: sendChatMessage,
    togglePin: toggleChatPin,
    deleteMessage: deleteChatMessage,
  } = useChat({ user, barId, displayName, userRole, panelOpen: showChatPanel });

  // POS integration (Phase 3). See docs/plans/2026-05-21-feature-set-purr-design.md.
  const {
    connections: posConnections, menu: posMenu,
    connectSquare: posConnectSquare, connectToast: posConnectToast,
    disconnect: posDisconnect, syncMenu: posSyncMenu, getSales: posGetSales,
  } = usePOS({ barId, isManagerPlus });

  // Calendar (Phase 4). See docs/plans/2026-05-21-feature-set-purr-design.md.
  const {
    events: calendarEvents, googleConnection: calendarGoogleConnection,
    icalSubscriptions: calendarICalSubscriptions, feedToken: calendarFeedToken,
    createEvent: createCalendarEvent, updateEvent: updateCalendarEvent, deleteEvent: deleteCalendarEvent,
    connectGoogle: connectCalendarGoogle, listGoogleCalendars: listCalendarGoogleCalendars,
    selectGoogleCalendar: selectCalendarGoogleCalendar, disconnectGoogle: disconnectCalendarGoogle,
    addICalSubscription: addCalendarICalSubscription, removeICalSubscription: removeCalendarICalSubscription,
    rotateFeedToken: rotateCalendarFeedToken,
  } = useCalendar({ barId, isManagerPlus });

  // Shift auto-clock-in (Phase 4). If the user is off_clock but has
  // an active type:'shift' event assigned to them right now, promote
  // straight to active — connects to the same self-write rule
  // confirmRole's manual "Clock In" already relies on (off_clock ->
  // active is always self-allowed; see firestore.rules). Does NOT
  // apply to 'pending' status — that still requires Manager approval,
  // same as manual clock-in.
  useEffect(() => {
    if (!user || !barId || userStatus !== 'off_clock') return;
    const now = Date.now();
    const activeShift = calendarEvents.find((e) =>
      e.type === 'shift' && e.assignedTo?.includes(user.uid) &&
      new Date(e.start).getTime() <= now && now <= new Date(e.end).getTime(),
    );
    if (!activeShift) return;
    updateDoc(doc(db, `bars/${barId}/users`, user.uid), { status: 'active' })
      .catch((e) => console.error('Shift auto-clock-in failed', e));
  }, [user, barId, userStatus, calendarEvents]);

  // Determine children for dynamic buttons (ICE, BEER, etc.).
  const getDynamicChildren = (btn: ButtonConfig): ButtonConfig[] => {
    // Logic for ICE button -> Show Wells.
    if (btn.id === 'ice') {
        const wellButtons: ButtonConfig[] = wells.map(w => ({
            id: `well_${w}`,
            label: w
        }));
        // Add option to create new well.
        return [...wellButtons, { id: 'add_well', label: '+ ADD WELL', isCustom: true }];
    }

    // Logic for BEER button -> Show Brands.
    if (btn.id === 'restock_beer') {
      const brandButtons: ButtonConfig[] = Object.keys(beerInventory).map(brand => ({
        id: `brand_${brand}`,
        label: brand,
        children: []
      }));
      // Add option to create new brand.
      return [...brandButtons, { id: 'add_brand', label: '+ ADD BRAND', action: 'add_brand', isCustom: true }];
    }

    // Logic for Brand buttons -> Show Types.
    if (btn.id.startsWith('brand_')) {
      const brandName = btn.label;
      const types = beerInventory[brandName] || [];
      const typeButtons: ButtonConfig[] = types.map(t => ({
        id: `type_${brandName}_${t}`,
        label: t,
        children: []
      }));
      // Add option to create new type.
      return [...typeButtons, { id: 'add_type', label: '+ ADD TYPE', action: 'add_type', isCustom: true }];
    }

    // Logic for Type buttons -> Show Quantities.
    if (btn.id.startsWith('type_')) {
      return [
        { id: 'qty_6', label: '6' },
        { id: 'qty_12', label: '12' },
        { id: 'qty_24', label: '24' },
        { id: 'qty_other', label: 'Other', action: 'custom_qty' }
      ];
    }

    // Default: return static children.
    return btn.children || [];
  };

  // Buffered button-usage writes (10s flush interval).
  const { trackButtonUsage } = useUsageBatching(barId);

  // Sort buttons based on custom order or usage.
  const sortButtons = (btns: ButtonConfig[], contextId: string) => {
    const order = customOrders[contextId];
    if (order) {
        // Use custom order.
        return [...btns].sort((a, b) => {
            const indexA = order.indexOf(a.id);
            const indexB = order.indexOf(b.id);
            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });
    }
    // Default: Sort by usage (most used first).
    return [...btns].sort((a, b) => {
        const usageA = buttonUsage[a.id] || 0;
        const usageB = buttonUsage[b.id] || 0;
        return usageB - usageA;
    });
  };


  // Main button click handler.
  const handleButtonClick = (btn: ButtonConfig) => {
    trackButtonUsage(btn.id);

    // Handle special actions.
    if (btn.id === 'add_well') {
      const defaultName = `Well #${wells.length + 1}`;
      setInputDialog({ type: 'well', open: true, searchTerm: defaultName });
      return;
    }
    if (btn.action === 'add_brand') {
      setInputDialog({ type: 'brand', open: true, searchTerm: '' });
      return;
    }
    if (btn.action === 'add_type') {
      const brandBtn = navStack[navStack.length - 1];
      setInputDialog({ type: 'type', open: true, parentContext: brandBtn.label, searchTerm: '' });
      return;
    }
    if (btn.action === 'custom_qty') {
      setQuantityPicker({
        open: true,
        currentQty: 1,
        context: navStack.map(b => b.label).join(': ')
      });
      return;
    }
    if (btn.id === 'custom_req_btn') {
      setInputDialog({ type: 'custom', open: true, searchTerm: '' });
      return;
    }

    // Check for children.
    const children = getDynamicChildren(btn);
    if (children && children.length > 0) {
      // Navigate deeper.
      setNavStack([...navStack, btn]);
    } else {
      // Leaf node: Submit Request.
      // Construct label from stack + current button.
      submitRequestSafe([...navStack, btn].map(b => b.label).join(': '));
      setNavStack([]);
    }
  };

  // Finalize role selection and enter the dashboard. `title` is the
  // job function (or 'Owner' verbatim, from RoleSelector's new-bar
  // path) — the security-relevant privilege `role` is computed here,
  // never taken from the client-selectable list, since firestore.rules
  // only allows a self-create to claim 'Owner' when bars/{barId}.ownerId
  // already matches this uid (set atomically at bar-creation time).
  const confirmRole = async (title: string, name: string) => {
    if (!user || !barId) return;

    // Don't trust justCreatedBar alone — it's local UI state that's
    // lost the moment a user backs out of this screen without
    // confirming (the arrow-back / Cancel buttons both reset it) and
    // never restored if they come back to the SAME bar they created
    // via BarSearch's "already exists, just join it" path, which has
    // no reason to know they're its creator. Someone who did that
    // would confirm as 'Staff' on a bar whose ownerId already points
    // at them — and since fileOwnershipClaim explicitly rejects
    // "you already own this bar," there would be NO path back to
    // Owner short of manually editing Firestore. Re-derive from the
    // same source firestore.rules' self-create rule actually trusts:
    // bars/{barId}.ownerId.
    let isCreator = justCreatedBar;
    // Same staleness problem as isCreator above, and the same fix:
    // barJoinPolicy is only as fresh as the bar-config listener's
    // last snapshot, but RoleSelector renders (and is tappable) the
    // moment userRole is null — before that listener's FIRST snapshot
    // has necessarily arrived. A user who confirms fast, or on a slow
    // connection, computed status from barJoinPolicy's 'open' default
    // even when the bar's real joinPolicy was 'approval', and
    // firestore.rules' self-create rule checks the server's actual
    // value — status=='active' against a real 'approval' policy is
    // rejected outright, surfacing as "Failed to join this bar" with
    // no indication why. Reading it fresh here (reusing the same
    // getDoc as the ownership check, when one was needed) closes that
    // window instead of just working around one symptom of it.
    let joinPolicy: string = 'open';
    if (!isCreator) {
      try {
        const barSnap = await getDoc(doc(db, 'bars', barId));
        isCreator = barSnap.data()?.ownerId === user.uid;
        joinPolicy = barSnap.data()?.joinPolicy ?? 'open';
      } catch (e) {
        console.error('Failed to verify bar ownership before joining', e);
      }
    }
    const role = isCreator ? 'Owner' : 'Staff';
    const status = (role === 'Owner' || joinPolicy !== 'approval') ? 'active' : 'pending';

    try {
      // Update Global User Document with joined bar.
      await setDoc(doc(db, 'users', user.uid), {
          joinedBars: arrayUnion(barId)
      }, { merge: true });

      // Update User Document.
      await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
        role,
        jobTitle: title,
        displayName: name,
        email: user.email,
        status,
        joinedAt: serverTimestamp(),
        lastSeen: serverTimestamp(),
        // Set default prefs if not exists.
        notificationPreferences: ROLE_NOTIFICATION_DEFAULTS[title] || []
      }, { merge: true });

      // Ensure Token is fresh.
      if (fcmToken) {
        await setDoc(doc(db, `bars/${barId}/tokens`, user.uid), {
          token: fcmToken,
          updated: serverTimestamp()
        });
      }

      setJustCreatedBar(false);
      // The 'bars' claim used by firestore.rules is stamped
      // asynchronously by the onUserRoleChange Cloud Function and only
      // reflected on this client's ID token after a refresh. Force one
      // now so hasRole()-gated reads (requests, chat) don't spend up
      // to an hour denied while the cached token is stale.
      await user.getIdToken(true).catch((e) => console.error('Token refresh after join failed', e));
    } catch (e) {
      console.error('Failed to join bar', e);
      alert('Failed to join this bar. Please try again.');
    }
  };

  // Set user status to 'off_clock'.
  const goOffClock = async () => {
    if (!user || !barId) return;
    // Remove token so they stop getting pushes.
    await deleteDoc(doc(db, `bars/${barId}/tokens`, user.uid));
    // Update status.
    await updateDoc(doc(db, `bars/${barId}/users`, user.uid), {
      status: 'off_clock'
    });
    // Cleanup local state.
    setBarId(null);
    setJustCreatedBar(false);
    localStorage.removeItem('barId');
    setShowOffClockDialog(false);
  };

  // Switch to another bar. Despite the old name/comment, this DOES
  // clock the user out of the bar being left — otherwise they kept
  // getting paged (in-app and via push) from a bar they're no longer
  // standing in. Clocking back in later is a one-tap self-write (see
  // the auto-clock-in effect above), so this doesn't cost them
  // anything beyond a page they wouldn't have wanted anyway.
  const handleSwitchBar = async () => {
    if (user && barId) {
      const oldBarId = barId;
      await updateDoc(doc(db, `bars/${oldBarId}/users`, user.uid), { status: 'off_clock' })
        .catch((e) => console.error('Failed to clock out of previous bar', e));
      await deleteDoc(doc(db, `bars/${oldBarId}/tokens`, user.uid)).catch(() => {});
    }
    setBarId(null);
    setJustCreatedBar(false);
    localStorage.removeItem('barId');
  };

  // Approve/reject a user waiting on this bar's 'approval' joinPolicy
  // (WhoIsOnDialog, Manager+ only). Without this, a pending user had
  // no path off the "Approval Pending" screen — nothing in the app
  // could ever flip their status to 'active'.
  const approveUser = async (userId: string) => {
    if (!barId) return;
    try {
      await updateDoc(doc(db, `bars/${barId}/users`, userId), { status: 'active' });
    } catch (e) {
      console.error('Failed to approve user', e);
      alert('Failed to approve. Please try again.');
    }
  };

  const rejectUser = async (userId: string) => {
    if (!barId) return;
    try {
      await deleteDoc(doc(db, `bars/${barId}/users`, userId));
    } catch (e) {
      console.error('Failed to reject user', e);
      alert('Failed to reject. Please try again.');
    }
  };

  // Manager+ invites someone by email (BarManager). Consumption and
  // role-granting happen server-side — see the invite-check effect
  // below and functions/src/onInviteConsumed.ts.
  const sendInvite = async (email: string, role: 'Staff' | 'Manager') => {
    if (!user || !barId) return;
    await addDoc(collection(db, `bars/${barId}/invites`), {
      email,
      role,
      createdBy: user.uid,
      createdByName: displayName,
      createdAt: serverTimestamp(),
      consumed: false,
    });
  };

  // True while checking for (and possibly consuming) a pending invite
  // for this bar/email as soon as the user lands here with no role
  // yet. Gates the Role Selection screen so an invited user doesn't
  // see "pick a job title" for the instant before their invited role
  // lands — falls back to the normal flow if no invite is found, or
  // after a timeout if granting is taking unexpectedly long.
  const [checkingInvite, setCheckingInvite] = useState(false);
  useEffect(() => {
    if (userRole) setCheckingInvite(false);
  }, [userRole]);
  useEffect(() => {
    if (!user || !barId || userRole || !user.email) return;
    let cancelled = false;
    setCheckingInvite(true);
    const timeoutId = setTimeout(() => { if (!cancelled) setCheckingInvite(false); }, 8000);
    (async () => {
      try {
        const q = query(
          collection(db, `bars/${barId}/invites`),
          where('email', '==', user.email!.toLowerCase()),
          where('consumed', '==', false),
          limit(1),
        );
        const snap = await getDocs(q);
        if (cancelled) return;
        if (snap.empty) {
          setCheckingInvite(false);
          return;
        }
        await updateDoc(snap.docs[0].ref, {
          consumed: true,
          consumedBy: user.uid,
          consumedAt: serverTimestamp(),
        });
        // Leave checkingInvite true — the per-bar user listener will
        // clear it (via the effect above) once onInviteConsumed grants
        // the role, or the timeout above will if that takes too long.
      } catch (e) {
        console.error('Invite check failed', e);
        if (!cancelled) setCheckingInvite(false);
      }
    })();
    return () => { cancelled = true; clearTimeout(timeoutId); };
  }, [user, barId, userRole]);

  // Request mutations: submit (+ ntfy fanout), claim, cancel.
  const { submitRequest, claimRequest, unclaimRequest, cancelRequest } = useRequestActions({
    user, barId, displayName, userRole, getButtonIdForLabel,
  });

  // True while a request submission is in flight. Guards against a
  // double-tap or fat-finger creating two identical requests (none of
  // the submit call sites previously had any disabled/pending state),
  // and lets us surface a real failure instead of the previous
  // fire-and-forget submitRequest(...) with no await/catch — a failed
  // or offline-queued send used to look identical to a successful one.
  const [isSubmittingRequest, setIsSubmittingRequest] = useState(false);
  const submitRequestSafe = useCallback(async (label: string) => {
    if (isSubmittingRequest) return;
    setIsSubmittingRequest(true);
    try {
      await submitRequest(label);
    } catch (e) {
      console.error('Failed to submit request', e);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmittingRequest(false);
    }
  }, [isSubmittingRequest, submitRequest]);

  // Save new notification settings. Write to Firestore first, then
  // update local state on success — the previous order set local
  // state optimistically before awaiting the write, so a sign-out or
  // bar switch mid-write would leave the UI showing prefs that never
  // persisted. The per-bar user snapshot will also reconcile this
  // state once the write lands, so the local set is mostly a latency
  // smoother now.
  const saveNotificationPreferences = async (prefs: string[]) => {
    if (!user || !barId) return;
    try {
      await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
        notificationPreferences: prefs,
      }, { merge: true });
      setNotificationPreferences(prefs);
    } catch (e) {
      console.error('Failed to save notification preferences', e);
    }
  };

  // Sign out — also closes the account dialog that triggered it.
  //
  // Clearing barId (and its localStorage mirror) is what actually
  // matters here, not just calling signOut(): every bar-scoped
  // listener effect above is gated on `if (!user || !barId)`, and
  // now clears its own state when that guard fails (see those
  // effects' comments) — but only `user` was ever going to become
  // falsy on sign-out, since nothing here ever reset `barId`. On a
  // shared device, a second person signing in right after would have
  // had the FIRST person's bar name, roster, requests, and role still
  // rendered (barId was still set, so every listener just
  // re-subscribed under the new uid) until a full page reload. Also
  // matches the reset every other "leave this bar" path already does
  // (handleLeaveBar, handleSwitchBar, the Cancel button on Approval
  // Pending) — sign-out was the one path that never did it.
  const handleLogout = async () => {
    await signOut();
    setBarId(null);
    setJustCreatedBar(false);
    localStorage.removeItem('barId');
    setShowAccountDialog(false);
  };

  // Leave bar (delete user profile from bar).
  const handleLeaveBar = async () => {
    if (!user || !barId) return;
    if (!confirm('Are you sure you want to leave this bar? You will need to join again.')) return;
    await deleteDoc(doc(db, `bars/${barId}/users`, user.uid));
    // Also drop the FCM token — otherwise it's orphaned (the rules
    // restrict bars/{barId}/tokens/{uid} to its owner, and this user
    // never visits this bar's docs again to clean it up) and nag-bot
    // keeps paging a device that's no longer staff here, forever.
    await deleteDoc(doc(db, `bars/${barId}/tokens`, user.uid)).catch(() => {});
    // Remove from joinedBars list.
    await updateDoc(doc(db, 'users', user.uid), {
        joinedBars: arrayRemove(barId)
    }).catch(() => {});
    setBarId(null);
    setJustCreatedBar(false);
    localStorage.removeItem('barId');
    setShowAccountDialog(false);
  };

  // Delete account entirely.
  const handleDeleteAccount = async () => {
    if (!user) return;
    if (!confirm('Are you sure you want to delete your account? This cannot be undone.')) return;

    try {
      // 1. Get all bars the user is part of.
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      const joinedBars: string[] = userDoc.exists() ? (userDoc.data().joinedBars || []) : [];

      // 2. For each joined bar, drop the per-bar user profile AND the
      // FCM token. Previously tokens were left behind — they're now
      // restricted to the owning user by Firestore rules, so an
      // orphaned token would never be cleaned up.
      //
      // Per-doc failures are logged (not thrown) so a single missing
      // bar / network blip doesn't abort the rest of the cleanup, but
      // partial-cleanup issues remain visible in the console for
      // debugging.
      await Promise.all(joinedBars.flatMap((bid) => [
          deleteDoc(doc(db, `bars/${bid}/users`, user.uid))
              .catch(e => console.warn(`Failed to delete bars/${bid}/users/${user.uid}`, e)),
          deleteDoc(doc(db, `bars/${bid}/tokens`, user.uid))
              .catch(e => console.warn(`Failed to delete bars/${bid}/tokens/${user.uid}`, e)),
      ]));

      // 3. Delete the global user document.
      await deleteDoc(userDocRef);

      // 4. Delete the Auth user.
      await deleteUser(user);
      setShowAccountDialog(false);
    } catch (error) {
      console.error('Error deleting account:', error);
      // If error is auth/requires-recent-login, we could prompt for re-auth.
      // But for now, we alert.
      alert('Failed to delete account completely. Please log out and log back in, then try again.');
    }
  };

  // Handle email login/register form submission.
  const handleEmailAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await signInEmail(fd.get('email') as string, fd.get('password') as string);
  };

  // Handle Google Login.
  const handleGoogle = () => signInGoogle();

  // Handle PWA install click — delegated to the hook.
  const handleInstall = promptInstall;

  // Share the app URL.
  const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'BarBacker',
                text: 'Join my bar on BarBacker!',
                url: window.location.href
            });
        } catch (err) {
            console.log('Error sharing:', err);
        }
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
  };

  // --- Views ---

  // 0. Auth still restoring — without this a returning signed-in user
  // sees the login form flash before onAuthStateChanged resolves.
  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <md-circular-progress indeterminate style={{ width: '32px', height: '32px' }} />
      </div>
    );
  }

  // 1. Auth Screen
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black">
        <h1 className="text-4xl font-bold tracking-widest text-white">BARBACKER</h1>
        {authError && <div className="text-red-400 p-2 border border-red-800 rounded">{authError}</div>}
        <form onSubmit={handleEmailAuth} className="w-[300px] space-y-4">
          <md-filled-text-field label="Email" name="email" type="email" required />
          <md-filled-text-field label="Password" name="password" type="password" required />
          <md-filled-button type="submit">{isRegistering ? 'Create Account' : 'Clock In'}</md-filled-button>
        </form>
        <div className="flex gap-4 items-center">
           <md-text-button onClick={() => setIsRegistering(!isRegistering)}>{isRegistering ? 'Login' : 'Register'}</md-text-button>
           <md-outlined-button onClick={handleGoogle}><md-icon slot="icon">mail</md-icon>Google</md-outlined-button>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 space-y-2">
            <p>
              {apkLoading ? (
                 <span>Checking for Android App...</span>
              ) : (
                 <a href={apkUrl || "https://github.com/HereLiesAz/BarBacker/releases/latest"} className="text-blue-400 underline">Install BarBacker App</a>
              )} for Android.
            </p>
            <p>For iOS alerts, install <a href="https://ntfy.sh" target="_blank" className="text-blue-400 underline">ntfy.sh</a>.</p>
        </div>
      </div>
    );
  }

  // 2. Bar Selection Screen
  if (!barId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-1">Select Bar</h2>
          <p className="text-gray-500 text-sm">You are {user.email}</p>
        </div>
        <md-text-button onClick={signOut}>Sign Out</md-text-button>

        {myBars.length > 0 && (
            <div className="w-[300px] mb-2">
                <h3 className="text-gray-400 font-bold text-sm uppercase mb-2 pl-2">My Bars</h3>
                <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800">
                    <md-list className="bg-transparent">
                    {myBars.map(bid => (
                        <BarListItem key={bid} name={barDetails[bid] || 'Loading...'} onClick={() => { setBarId(bid); localStorage.setItem('barId', bid); }} />
                    ))}
                    </md-list>
                </div>
            </div>
        )}

        <BarSearch onJoin={async (b) => {
          if(b.id && user) {
            const barRef = doc(db, 'bars', b.id);
            const existingSnap = await getDoc(barRef);

            // Only create if it doesn't exist to prevent overwriting custom data.
            if (!existingSnap.exists()) {
                await setDoc(barRef, {
                  name: b.name,
                  address: b.address || '',
                  city: b.city || '',
                  state: b.state || '',
                  zip: b.zip || '',
                  phone: b.phone || '',
                  status: b.status || 'verified',
                  type: b.type || 'bar',
                  buttons: [],
                  ...(b.osmId ? { osmId: b.osmId } : {}),
                  ...(b.osmType ? { osmType: b.osmType } : {}),
                  // Names this user as the bar's creator — checked by
                  // firestore.rules to grant them 'Owner' on their own
                  // upcoming self-create of bars/{id}/users/{uid}.
                  ownerId: user.uid,
                });
                setJustCreatedBar(true);
            } else {
                setJustCreatedBar(false);
            }

            setBarId(b.id);
          }
        }} />
        <div className="text-center text-gray-500 text-xs mt-8 space-y-2 max-w-[300px]">
            <p>
              Tip: <a href={apkUrl || "https://github.com/HereLiesAz/BarBacker/releases/latest"} className="text-blue-400 underline">Install BarBacker App</a> for the best experience.
            </p>
            <div className="flex flex-col items-center gap-1 mt-2">
                 <a
                    href={globalNtfyTopic ? `ntfy://subscribe/${globalNtfyTopic}` : '#'}
                    aria-disabled={!globalNtfyTopic}
                    className={`text-blue-400 underline font-bold ${!globalNtfyTopic ? 'opacity-50 pointer-events-none' : ''}`}
                 >
                    Subscribe to iOS Alerts
                 </a>
                 <span className="text-xs text-green-400 font-bold">(It's free!)</span>
                 <span className="text-[10px] text-gray-600">(Requires ntfy app)</span>
            </div>
        </div>
      </div>
    );
  }

  // 3. Role Selection Screen
  if (!userRole) {
    if (checkingInvite) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-4 bg-black">
          <md-circular-progress indeterminate style={{ width: '32px', height: '32px' }} />
          <p className="text-gray-400 text-sm">Checking for an invite...</p>
        </div>
      );
    }
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black">
        <div className="flex w-full justify-between items-center max-w-[300px]">
            <md-icon-button onClick={() => { setBarId(null); setJustCreatedBar(false); localStorage.removeItem('barId'); }}><md-icon>arrow_back</md-icon></md-icon-button>
            <md-text-button onClick={signOut}>Sign Out</md-text-button>
        </div>
        <RoleSelector onSelect={confirmRole} initialName={user?.displayName || ''} key={user?.displayName || 'default'} isNewBar={justCreatedBar} />
      </div>
    );
  }

  // --- Main Dashboard Computation ---

  // History log: active requests are already filtered out.
  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  // Time formatter. Firestore timestamp fields are typed as
  // FieldValue | Timestamp because writes use serverTimestamp(), but
  // on read they're always Timestamps. Accept the union and handle
  // each shape; FieldValue has no toDate/seconds, so it falls through
  // to ''.
  const formatTime = (ts: unknown) => {
    if (!ts || typeof ts !== 'object') return '';
    const t = ts as { toDate?: () => Date; seconds?: number };
    if (typeof t.toDate === 'function') return t.toDate().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    if (typeof t.seconds === 'number') {
      return new Date(t.seconds * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
    return '';
  };

  // Determine which buttons to show based on nav stack.
  const currentContextId = navStack.length > 0 ? navStack[navStack.length - 1].id : 'main';
  const currentButtonsSource = navStack.length > 0 ? getDynamicChildren(navStack[navStack.length - 1]) : buttons;
  const activeButtons = currentButtonsSource.filter(btn => !hiddenButtonIds.includes(btn.id));
  const currentButtons = sortButtons(activeButtons, currentContextId);

  // Sorting for main screen.
  const sortedAllButtons = sortButtons(buttons, 'main');
  const mainScreenButtons = sortedAllButtons.filter(btn => !hiddenButtonIds.includes(btn.id));

  // Brand buttons (BEER > a specific brand) are synthesized on the fly
  // from beerInventory's keys in getDynamicChildren rather than living
  // in the `buttons` config array — so BottleScanner's "86 It" action
  // (which hides `brand_${brand}`) was hiding an id that never
  // appeared in `allButtons`, meaning BarManager's Restorable Buttons
  // section (which only ever looks at `allButtons`) had nothing to
  // show: once 86'd, a brand had no path back, premium or not.
  // Surfacing the hidden ones here — merged into the same array
  // BarManager already filters into "active" vs "hidden" — gives them
  // a restore path through the exact same UI, for free.
  const hiddenBrandButtons: ButtonConfig[] = hiddenButtonIds
    .filter(id => id.startsWith('brand_'))
    .map(id => ({ id, label: id.slice('brand_'.length) }));
  const allButtonsForManager = [...sortedAllButtons, ...hiddenBrandButtons];
  // CUSTOM is a permanent, non-configurable tile appended to every
  // bar's grid — it must be part of the SAME array passed to
  // SortableContext's `items` and to handleDragOver's `items` param
  // as the one actually rendered, or dnd-kit's active/over index
  // lookups go out of sync with what's on screen: dragging CUSTOM
  // itself resolves to index -1 and silently reorders a different
  // (the last "real") button instead.
  const customRequestButton: ButtonConfig = { id: 'custom_req_btn', label: 'CUSTOM', icon: 'add', isCustom: true };
  const mainScreenButtonsWithCustom = [...mainScreenButtons, customRequestButton];

  // Check for pending users (for Managers).
  const pendingUsers = allUsers.filter(u => u.status === 'pending');
  // Gated by isManagerPlus: the badge previously showed to every role,
  // but WhoIsOnDialog only renders the approvals section for
  // Manager+, so Staff clicking it landed on a dialog with nothing
  // relevant to approve — a confusing dead end.
  const showApprovals = isManagerPlus && pendingUsers.length > 0;

  // 4. Pending Approval Screen
  if (userStatus === 'pending') {
      return (
        <div className="h-[100dvh] w-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black text-center overflow-hidden">
            <md-icon style={{ fontSize: 64 }} className="text-yellow-500">hourglass_empty</md-icon>
            <h2 className="text-2xl font-bold text-white">Approval Pending</h2>
            <p className="text-gray-400">A manager must approve your request to join {barName}.</p>
            <md-text-button onClick={() => { setBarId(null); setJustCreatedBar(false); localStorage.removeItem('barId'); }}>Cancel</md-text-button>
        </div>
      );
  }

  // 5. Main Dashboard Render
  return (
    <div className="h-[100dvh] w-screen flex flex-col bg-black overflow-hidden">
      
      {/* Dialogs */}
      <BarManager
        open={showBarManager}
        onClose={() => setShowBarManager(false)}
        barName={barName}
        allButtons={allButtonsForManager}
        hiddenButtonIds={hiddenButtonIds}
        onHideButton={hideButton}
        isPremium={isPremium}
        onUnhideButton={unhideButton}
        isManagerPlus={isManagerPlus}
        onInvite={sendInvite}
      />

      <EightySixDialog
        open={showEightySixDialog}
        onClose={() => setShowEightySixDialog(false)}
        entries={eightySixEntries}
        onAdd={addEightySixEntry}
        onDelete={deleteEightySixEntry}
        isPremium={isPremium}
        userRole={userRole}
      />

      {isPremium && (
        <BottleScanner
          open={showBottleScanner}
          onClose={() => setShowBottleScanner(false)}
          isManagerPlus={isManagerPlus}
          candidates={[...DEFAULT_SPIRITS, ...DEFAULT_BEERS, ...Object.keys(beerInventory)]}
          existingBrands={Object.keys(beerInventory)}
          onAddToMenu={addBottleToMenu}
          onEightySix={(brand) => hideButton(`brand_${brand}`)}
          onSendAlert={sendBottleAlert}
        />
      )}

      {isPremium && (
        <ThemeEditor
          open={showThemeEditor}
          onClose={() => setShowThemeEditor(false)}
          currentTheme={barTheme}
          onSave={saveBarTheme}
          barId={barId!}
        />
      )}

      <WhoIsOnDialog
        open={showWhoIsOn}
        onClose={() => setShowWhoIsOn(false)}
        users={allUsers as BarUser[]}
        isManagerPlus={isManagerPlus}
        onApprove={approveUser}
        onReject={rejectUser}
        pendingOwnershipClaims={pendingOwnershipClaims}
        onApproveOwnershipClaim={(id) => reviewOwnershipClaim(id, true)}
        onRejectOwnershipClaim={(id) => reviewOwnershipClaim(id, false)}
      />

      <NotificationSettings
        open={showNotificationSettings}
        onClose={() => setShowNotificationSettings(false)}
        onSave={saveNotificationPreferences}
        userRole={jobTitle || userRole || ''}
        currentPreferences={notificationPreferences}
        currentNtfyTopic={globalNtfyTopic}
        allButtons={buttons}
      />

      <ChatPanel
        open={showChatPanel}
        onClose={() => setShowChatPanel(false)}
        messages={chatMessages}
        hasMore={chatHasMore}
        loadingMore={chatLoadingMore}
        onLoadMore={loadMoreChat}
        currentUserId={user?.uid ?? ''}
        isManagerPlus={isManagerPlus}
        onSend={sendChatMessage}
        onTogglePin={toggleChatPin}
        onDelete={deleteChatMessage}
      />

      <POSSettings
        open={showPOSSettings}
        onClose={() => setShowPOSSettings(false)}
        connections={posConnections}
        menu={posMenu}
        onConnectSquare={posConnectSquare}
        onConnectToast={posConnectToast}
        onDisconnect={posDisconnect}
        onSyncMenu={posSyncMenu}
        onGetSales={posGetSales}
      />

      <CalendarView
        open={showCalendarView}
        onClose={() => setShowCalendarView(false)}
        events={calendarEvents}
        isManagerPlus={isManagerPlus}
        onCreate={createCalendarEvent}
        onUpdate={updateCalendarEvent}
        onDelete={deleteCalendarEvent}
      />

      {barId && (
        <CalendarSettings
          open={showCalendarSettings}
          onClose={() => setShowCalendarSettings(false)}
          barId={barId}
          googleConnection={calendarGoogleConnection}
          icalSubscriptions={calendarICalSubscriptions}
          feedToken={calendarFeedToken}
          onConnectGoogle={connectCalendarGoogle}
          onListGoogleCalendars={listCalendarGoogleCalendars}
          onSelectGoogleCalendar={selectCalendarGoogleCalendar}
          onDisconnectGoogle={disconnectCalendarGoogle}
          onAddICalSubscription={(url) => addCalendarICalSubscription(url, user!.uid)}
          onRemoveICalSubscription={removeCalendarICalSubscription}
          onRotateFeedToken={rotateCalendarFeedToken}
        />
      )}

      <InputDialog
        open={inputDialog.open}
        mode={inputDialog.type}
        searchTerm={inputDialog.searchTerm}
        onSearchChange={(val) => setInputDialog(prev => ({ ...prev, searchTerm: val }))}
        onClose={() => setInputDialog(prev => ({ ...prev, open: false }))}
        onSelect={(val) => {
            // No dedup check here — saveBrand/saveType/saveWell each
            // already check for an existing match themselves and
            // navigate straight to it instead of creating a duplicate
            // (see their "If it already exists, just open it"
            // branches). This used to also check here first and, on a
            // match, show a dead-end `alert('This button already
            // exists!')` instead of ever calling through to that
            // navigate-to-it behavior — so picking a suggested brand/
            // type/well that already existed produced a blocking
            // alert instead of just taking the user there.
            if (inputDialog.type === 'brand') saveBrand(val);
            else if (inputDialog.type === 'type') saveType(val);
            else if (inputDialog.type === 'well') saveWell(val);
            else if (inputDialog.type === 'custom') {
                submitRequestSafe(val);
                setInputDialog(prev => ({ ...prev, open: false }));
            }
        }}
        suggestions={(() => {
            if (inputDialog.type === 'brand') return [...DEFAULT_BEERS, ...Object.keys(beerInventory)];
            if (inputDialog.type === 'type') return Array.from(new Set(Object.values(beerInventory).flat()));
            return [];
        })()}
      />

      <MdDialog open={quantityPicker.open} onClose={() => setQuantityPicker(prev => ({ ...prev, open: false }))}>
        <div slot="headline">Select Quantity</div>
        <div slot="content" className="flex items-center justify-center gap-6 py-6">
           <md-filled-tonal-button onClick={() => setQuantityPicker(prev => ({ ...prev, currentQty: Math.max(1, prev.currentQty - 1) }))}>
             <md-icon>remove</md-icon>
           </md-filled-tonal-button>
           <span className="text-4xl font-bold text-white">{quantityPicker.currentQty}</span>
           <md-filled-tonal-button onClick={() => setQuantityPicker(prev => ({ ...prev, currentQty: prev.currentQty + 1 }))}>
             <md-icon>add</md-icon>
           </md-filled-tonal-button>
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setQuantityPicker(prev => ({ ...prev, open: false }))}>Cancel</md-text-button>
          <md-filled-button onClick={() => {
             submitRequestSafe(`${quantityPicker.context}: ${quantityPicker.currentQty}`);
             setQuantityPicker(prev => ({ ...prev, open: false }));
             setNavStack([]);
          }}>Send</md-filled-button>
        </div>
      </MdDialog>

      <MdDialog open={showOffClockDialog} onClose={() => setShowOffClockDialog(false)}>
        <div slot="headline">Abandon Ship?</div>
        <div slot="content">
          Going off clock stops all notifications for you. You can clock back in any time by
          reopening this bar — the bar itself stays open, this only affects your own device.
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setShowOffClockDialog(false)}>Stay</md-text-button>
          <md-filled-button onClick={goOffClock} className="btn-alert">Clock Out</md-filled-button>
        </div>
      </MdDialog>

      {/* --- Navbar --- */}
      <div className="flex-none flex flex-wrap justify-between items-center py-12 px-6 bg-[#121212] border-b border-[#333] z-10 gap-4">
        {/* User Info */}
        <div
            className="flex items-center min-w-[200px] cursor-pointer hover:bg-white/5 p-2 rounded transition-colors mr-auto ml-4"
            onClick={() => setShowAccountDialog(true)}
        >
            <span className="whitespace-pre">    </span>
            <span className="text-white font-bold text-xl truncate">{displayName}</span>
            <span className="text-white text-xl whitespace-pre">        </span>
            <span className="bg-gray-800 px-4 py-2 rounded text-base text-gray-300 whitespace-nowrap">{jobTitle || userRole}</span>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6 mr-4 flex-wrap justify-end">
           {/* Bar Name (Hidden on small screens) */}
           <span className="font-bold text-xl text-white tracking-wide hidden sm:flex items-center gap-2">
             {barTheme?.logoUrl && isPremium && (
               <img src={barTheme.logoUrl} alt={barName} className="h-8 w-8 rounded-full object-cover" />
             )}
             {barName}
           </span>

           {/* Bar Manager Button (Visible on small screens) */}
           <md-text-button onClick={() => setShowBarManager(true)} className="sm:hidden">
             <span className="font-bold text-lg text-white tracking-wide flex items-center gap-2">
               {barTheme?.logoUrl && isPremium && (
                 <img src={barTheme.logoUrl} alt={barName} className="h-6 w-6 rounded-full object-cover" />
               )}
               {barName}
             </span>
           </md-text-button>

           <div className="flex gap-4 items-center">
                {/* Install App Button */}
                {installPrompt && (
                  <md-icon-button onClick={handleInstall} title="Install App" className="navbar-icon-button">
                    <md-icon className="text-blue-400" style={{ fontSize: '36px' }}>download</md-icon>
                  </md-icon-button>
                )}

                {/* Chat */}
                <span style={{ position: 'relative' }}>
                  <md-icon-button onClick={() => setShowChatPanel(true)} className="navbar-icon-button" aria-label="Chat">
                    <md-icon className="text-white" style={{ fontSize: '36px' }}>forum</md-icon>
                  </md-icon-button>
                  {chatHasUnread && (
                    <span
                      className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500 border border-black"
                      aria-label="Unread messages"
                    />
                  )}
                </span>

                {/* Main Menu */}
                <span style={{ position: 'relative' }}>
                    <md-icon-button
                        id="menu-anchor"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="navbar-icon-button"
                    >
                        <md-icon className="text-white" style={{ fontSize: '36px' }}>menu</md-icon>
                    </md-icon-button>

                    <md-menu
                        ref={menuRef}
                        anchor="menu-anchor"
                        open={menuOpen}
                        positioning="fixed"
                        quick
                        style={{ zIndex: 2000 }}
                    >
                        <md-menu-item onClick={() => setShowAccountDialog(true)}>
                            <md-icon slot="start">account_circle</md-icon>
                            <div slot="headline">Account Options</div>
                        </md-menu-item>
                        <md-menu-item onClick={handleSwitchBar}>
                            <md-icon slot="start">sync_alt</md-icon>
                            <div slot="headline">Switch Bar</div>
                        </md-menu-item>
                        <md-menu-item onClick={() => setShowBarManager(true)}>
                            <md-icon slot="start">store</md-icon>
                            <div slot="headline">Manage Bar</div>
                        </md-menu-item>
                        {isPremium && isManagerPlus && (
                          <md-menu-item onClick={() => setShowThemeEditor(true)}>
                              <md-icon slot="start">palette</md-icon>
                              <div slot="headline">Customize Theme</div>
                          </md-menu-item>
                        )}
                        {isPremium && isManagerPlus && (
                          <md-menu-item onClick={() => setShowPOSSettings(true)}>
                              <md-icon slot="start">point_of_sale</md-icon>
                              <div slot="headline">POS Integration</div>
                          </md-menu-item>
                        )}
                        <md-menu-item onClick={() => setShowCalendarView(true)}>
                            <md-icon slot="start">calendar_month</md-icon>
                            <div slot="headline">Calendar</div>
                        </md-menu-item>
                        {isPremium && isManagerPlus && (
                          <md-menu-item onClick={() => setShowCalendarSettings(true)}>
                              <md-icon slot="start">event_available</md-icon>
                              <div slot="headline">Calendar Settings</div>
                          </md-menu-item>
                        )}
                        <md-menu-item onClick={handleShare}>
                            <md-icon slot="start">share</md-icon>
                            <div slot="headline">Share</div>
                        </md-menu-item>
                        <md-menu-item onClick={() => setShowWhoIsOn(true)}>
                            <md-icon slot="start">group</md-icon>
                            <div slot="headline">Who's On</div>
                        </md-menu-item>
                        <md-menu-item onClick={() => setShowEightySixDialog(true)}>
                            <md-icon slot="start">block</md-icon>
                            <div slot="headline">86'd List</div>
                        </md-menu-item>
                        {isPremium && (
                          <md-menu-item onClick={() => setShowBottleScanner(true)}>
                              <md-icon slot="start">photo_camera</md-icon>
                              <div slot="headline">Scan Bottle</div>
                          </md-menu-item>
                        )}
                        <md-menu-item onClick={() => setShowNotificationSettings(true)}>
                            <md-icon slot="start">settings</md-icon>
                            <div slot="headline">Pagers</div>
                        </md-menu-item>
                        <md-menu-item onClick={() => setShowOffClockDialog(true)}>
                            <md-icon slot="start">power_settings_new</md-icon>
                            <div slot="headline">Clock Out</div>
                        </md-menu-item>
                    </md-menu>
                </span>
           </div>
        </div>
      </div>

      {/* --- Pinned Chat Marquee --- */}
      {pinnedMessages.length > 0 && (
          <div
            className="bg-yellow-900/20 border-b border-yellow-900/50 overflow-hidden relative h-8 flex items-center cursor-pointer"
            onClick={() => setShowChatPanel(true)}
          >
              <div className="animate-marquee whitespace-nowrap flex gap-12 text-yellow-500 text-sm font-medium items-center">
                  {pinnedMessages.map(msg => (
                      <span key={msg.id} className="inline-flex items-center gap-2">
                         <span>📌 {msg.text} <span className="text-yellow-700 text-xs">({msg.authorName})</span></span>
                      </span>
                  ))}
                  {/* Duplicate for infinite loop effect if few items */}
                   {pinnedMessages.map(msg => (
                      <span key={`dup-${msg.id}`} className="inline-flex items-center gap-2">
                         <span>📌 {msg.text} <span className="text-yellow-700 text-xs">({msg.authorName})</span></span>
                      </span>
                  ))}
              </div>
          </div>
      )}

      <MdDialog open={showNameEditDialog} onClose={() => { setShowNameEditDialog(false); setEditNameError(null); }}>
        <div slot="headline">Edit Name</div>
        <div slot="content" className="flex flex-col gap-4 pt-4">
            <md-filled-text-field
                label="Display Name"
                value={editNameValue}
                onInput={(e: React.FormEvent<HTMLElement>) => setEditNameValue((e.currentTarget as HTMLElement & { value: string }).value)}
                required
                type="text"
            />
            {editNameError && <div className="text-red-500 text-sm">{editNameError}</div>}
        </div>
        <div slot="actions">
            <md-text-button onClick={() => setShowNameEditDialog(false)}>Cancel</md-text-button>
            <md-filled-button onClick={async () => {
                const newName = editNameValue.trim();
                if (!newName) return;
                setEditNameError(null);
                try {
                    if (user) {
                        await updateProfile(user, { displayName: newName });
                        if (barId) {
                            await updateDoc(doc(db, `bars/${barId}/users`, user.uid), { displayName: newName });
                        }
                        setShowNameEditDialog(false);
                    }
                } catch (e) {
                    console.error("Error updating name:", e);
                    const msg = e instanceof Error ? e.message : 'Unknown error';
                    setEditNameError("Failed to update name: " + msg);
                }
            }}>Save</md-filled-button>
        </div>
      </MdDialog>

      {/* Account Dialog */}
      <MdDialog open={showAccountDialog} onClose={() => setShowAccountDialog(false)}>
        <div slot="headline">Account Options</div>
        <div slot="content" className="flex flex-col gap-4 pt-4">
            <p className="text-gray-300">Manage your account for <strong>{barName}</strong>.</p>
            <md-outlined-button onClick={() => {
                setEditNameValue(displayName);
                setEditNameError(null);
                setShowNameEditDialog(true);
            }}>
                <md-icon slot="icon">edit</md-icon>
                Edit Name
            </md-outlined-button>
            {userRole !== 'Owner' && (
                <md-outlined-button onClick={() => {
                    if (confirm(`File a claim requesting ownership of ${barName}? A manager or the current owner will need to approve it.`)) {
                        fileOwnershipClaim();
                    }
                }}>
                    <md-icon slot="icon">verified</md-icon>
                    Claim Ownership
                </md-outlined-button>
            )}
        </div>
        <div slot="actions">
            <div className="flex flex-col gap-2 w-full items-end">
                <div className="flex gap-2">
                    <md-text-button onClick={handleLeaveBar}>Leave Bar</md-text-button>
                    <md-text-button onClick={handleLogout}>Log Out</md-text-button>
                </div>
                <div className="flex gap-2">
                    <md-text-button onClick={handleDeleteAccount} className="text-red-500">Delete Account</md-text-button>
                    <md-filled-button onClick={() => setShowAccountDialog(false)}>Close</md-filled-button>
                </div>
            </div>
        </div>
      </MdDialog>

      {/* --- Main Content Area --- */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full relative pb-[35vh]">

      {/* Sub-menu Overlay (NavStack) */}
      {navStack.length > 0 && (
        <div className="fixed inset-0 top-[88px] z-50 bg-black/95 flex items-start justify-center p-4 pt-10 animate-in fade-in duration-200 backdrop-blur-sm">
          <div className="bg-[#121212] w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 rounded-2xl border border-gray-800 shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-3 mb-4 flex-none border-b border-gray-800 pb-4">
              <md-icon-button onClick={() => setNavStack([])}><md-icon>arrow_back</md-icon></md-icon-button>
              <span className="text-lg font-bold text-white uppercase tracking-wide truncate flex-1">
                {navStack.map(b => b.label).join(' > ')}
              </span>
            </div>

            {/* Draggable Sub-buttons */}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragOver={(e) => handleDragOver(e, currentContextId, currentButtons)}
              onDragEnd={(e) => handleDragEnd(e, currentContextId)}
              onDragCancel={handleDragCancel}
            >
              <SortableContext items={currentButtons} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-2 gap-4 mb-auto">
                  {currentButtons.map(btn => (
                    <SortableButton key={btn.id} id={btn.id} onClick={() => handleButtonClick(btn)}>
                      <md-filled-tonal-button style={{ height: '100px', fontSize: '18px', width: '100%', pointerEvents: 'none', border: '8px solid #000000', boxSizing: 'border-box' }}>
                        <span className="font-bold text-3xl line-clamp-2 text-center px-1" style={{ color: 'var(--bb-button-label-color)' }}>{btn.label}</span>
                      </md-filled-tonal-button>
                    </SortableButton>
                  ))}
                </div>
              </SortableContext>
              <DragOverlay>
                {activeId ? (
                   <md-filled-tonal-button style={{ height: '100px', fontSize: '18px', width: '100%', pointerEvents: 'none', opacity: 0.9 }}>
                      {currentButtons.find(b => b.id === activeId)?.label}
                   </md-filled-tonal-button>
                ) : null}
              </DragOverlay>
            </DndContext>

            <div className="mt-6 flex-none">
              <md-outlined-button className="w-full" onClick={() => setNavStack([])} style={{ height: '56px' }}>
                 Cancel
              </md-outlined-button>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid Buttons */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={(e) => handleDragOver(e, 'main', mainScreenButtonsWithCustom)}
        onDragEnd={(e) => handleDragEnd(e, 'main')}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={mainScreenButtonsWithCustom} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-2 gap-8 p-6">
            {/* Render Standard Buttons + Custom Request Button */}
            {mainScreenButtonsWithCustom.map(btn => {
              // Highlight pending requests.
              const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
              return (
                <SortableButton key={btn.id} id={btn.id} onClick={() => handleButtonClick(btn)}>
                  <md-filled-tonal-button className={isPending ? 'btn-alert' : ''} style={{ height: '120px', width: '100%', pointerEvents: 'none', border: isPending ? '8px solid #EF4444' : '8px solid #000000', boxSizing: 'border-box' }}>
                      <div className="flex flex-col items-center gap-2">
                      <md-icon style={{ fontSize: 32, color: 'var(--bb-button-label-color)' }}>{btn.icon || 'circle'}</md-icon>
                      <span className="text-3xl font-bold leading-none line-clamp-2 text-center px-1" style={{ color: 'var(--bb-button-label-color)' }}>{btn.label}</span>
                      {isPending && <span className="text-xs opacity-80 text-red-500">PENDING</span>}
                      </div>
                  </md-filled-tonal-button>
                </SortableButton>
              );
            })}
          </div>
        </SortableContext>
        <DragOverlay>
            {activeId ? (
                (() => {
                    const btn = mainScreenButtonsWithCustom.find(b => b.id === activeId);
                    if (!btn) return null;
                    const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
                    return (
                        <md-filled-tonal-button className={isPending ? 'btn-alert' : ''} style={{ height: '120px', width: '100%', pointerEvents: 'none', opacity: 0.9 }}>
                            <div className="flex flex-col items-center gap-2">
                            <md-icon style={{ fontSize: 32 }}>{btn.icon || 'circle'}</md-icon>
                            <span className="text-lg font-bold leading-none">{btn.label}</span>
                            {isPending && <span className="text-xs opacity-80">PENDING</span>}
                            </div>
                        </md-filled-tonal-button>
                    );
                })()
            ) : null}
        </DragOverlay>
      </DndContext>

      {/* --- Notification Footer (Active Requests) --- */}
      <div className="fixed bottom-0 left-0 right-0 w-full max-h-[33vh] bg-[#1E1E1E] border-t border-[#333] z-20 flex flex-col shadow-2xl transition-all duration-300">
        <div className="flex-none p-2 bg-[#252525] border-b border-[#333] flex justify-between items-center px-4 sticky top-0 z-30">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Notifications ({activeRequests.length})</span>
            {/* Show Pending Approvals Badge for Managers */}
            {showApprovals && (
                <md-filled-button
                    onClick={() => setShowWhoIsOn(true)}
                    style={{ height: '24px', fontSize: '12px', ...{ '--md-filled-button-container-color': '#EAB308', '--md-filled-button-label-text-color': '#000' } as React.CSSProperties }}
                >
                    {pendingUsers.length} Approvals
                </md-filled-button>
            )}
        </div>
        <div className="flex-1 overflow-y-auto w-full">
            {activeRequests.map(req => {
                const isIgnored = ignoredIds.includes(req.id);
                const isMyRequest = user && req.requesterId === user.uid;

                return (
                    <div
                        key={req.id}
                        className={`w-full grid grid-cols-[33vw_1fr_auto] items-center gap-2 p-3 transition-colors border-b border-[#333] ${isIgnored ? 'bg-[#1a1a1a] opacity-60' : 'bg-[#2C1A1A]'}`}
                    >
                        {/* Request Info */}
                        <div className="flex items-center gap-2 overflow-hidden mr-2">
                            {req.photoUrl && (
                                <img
                                    src={req.photoUrl}
                                    alt=""
                                    className="w-10 h-10 rounded object-cover flex-shrink-0"
                                />
                            )}
                            <div className="flex flex-col overflow-hidden">
                                <span className={`font-bold text-lg leading-tight truncate ${isIgnored ? 'text-gray-400' : 'text-red-100'}`}>{req.label}</span>
                                <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-1 truncate">
                                    <span>{req.requesterName}</span>
                                    <span>•</span>
                                    <span>{formatTime(req.timestamp)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Claim Button */}
                        <md-filled-button
                            onClick={() => claimRequest(req.id).catch(() => {
                                alert('Someone else already claimed this request.');
                            })}
                            className={`w-full ${isIgnored ? '' : 'btn-alert'}`}
                            style={{ height: '48px', minWidth: '100px' }}
                        >
                            CLAIM
                        </md-filled-button>

                        {/* Actions: Cancel (if own) or Ignore */}
                        {isMyRequest ? (
                             <md-outlined-button
                                onClick={async (e: React.MouseEvent<HTMLElement>) => {
                                    e.stopPropagation();
                                    if (confirm('Cancel this request?')) {
                                        await cancelRequest(req.id);
                                    }
                                }}
                                style={{ height: '48px', minWidth: '100px', '--md-outlined-button-label-text-color': '#EF4444', '--md-sys-color-outline': '#EF4444' } as React.CSSProperties}
                            >
                                CANCEL
                            </md-outlined-button>
                        ) : (
                            !isIgnored && (
                                <md-outlined-button
                                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                                        e.stopPropagation();
                                        setIgnoredIds(prev => [...prev, req.id].slice(-MAX_IGNORED_IDS));
                                    }}
                                    style={{ height: '48px', minWidth: '100px' }}
                                >
                                    Ignore
                                </md-outlined-button>
                            )
                        )}
                    </div>
                );
            })}
            {activeRequests.length === 0 && (
                <div className="p-8 text-center text-gray-600 italic">
                    No active requests
                </div>
            )}
        </div>
      </div>

      {/* --- Shift Log (Below Fold) --- */}
      <div className="px-4 mt-8 pb-32">
        <div className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Shift Log</div>
        <md-list className="bg-transparent">
          {logRequests.map(req => (
            <md-list-item key={req.id}>
              <div slot="headline" className="text-gray-400">{req.label}</div>
              <div slot="supporting-text" className="text-xs text-gray-600">
                 {req.claimerName || 'Someone'} claimed {req.claimedAt ? formatTime(req.claimedAt) : ''} • Asked {formatTime(req.timestamp)}
              </div>
              <md-icon slot="start" className="text-green-800">check_circle</md-icon>
              {/* Let the claimer release a stale/mistaken claim back to
                  pending — otherwise a claim that goes stale (they got
                  pulled away mid-task) is invisible forever. */}
              {user && req.claimedBy === user.uid && (
                <md-text-button slot="end" onClick={() => unclaimRequest(req.id).catch(() => {
                    alert('Failed to unclaim. Please try again.');
                })}>
                  Unclaim
                </md-text-button>
              )}
            </md-list-item>
          ))}
        </md-list>
      </div>
      </div>
    </div>
  );
}

export default App;

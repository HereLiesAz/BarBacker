// Import React hooks for managing state and side effects.
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// Import 'useSearchParams' to read/write URL query parameters.
import { useSearchParams } from 'react-router-dom';
// Import Firebase Auth functions.
import { 
  onAuthStateChanged, // Listener for auth state changes (login/logout).
  signInWithPopup,    // Sign in using a popup window (for Google).
  signInWithEmailAndPassword, // Sign in with email/password.
  createUserWithEmailAndPassword, // Register with email/password.
  signOut, // Sign out function.
  deleteUser, // Function to delete the user account.
  updateProfile, // Update user profile.
  User // Type definition for a Firebase User.
} from 'firebase/auth';
// Import Firestore functions.
import { 
  collection, // Reference a collection.
  addDoc,     // Add a new document with an auto-generated ID.
  query,      // Create a query.
  where,      // Add a filter to a query.
  onSnapshot, // Listen for real-time updates.
  orderBy,    // Sort query results.
  limit,      // Limit the number of results.
  updateDoc,  // Update specific fields in a document.
  doc,        // Reference a specific document.
  serverTimestamp, // Generate a server-side timestamp.
  setDoc,     // Set (overwrite or create) a document.
  getDoc,     // Fetch a single document once.
  deleteDoc,  // Delete a document.
  arrayUnion, // Add elements to an array field.
  arrayRemove, // Remove elements from an array field.
  increment,  // Atomic increment of a numeric field.
} from 'firebase/firestore';
// Import initialized Firebase instances and helper functions.
import { 
  auth, 
  db, 
  googleProvider, 
  requestNotificationPermission, 
  onMessageListener 
} from './firebase';
// Import Capacitor plugins for native functionality.
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
// Import custom hook for fetching the latest APK release.
import { useLatestRelease } from './hooks/useLatestRelease';

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
import { Bar, ButtonConfig, Request, Notice, BarUser } from './types';
import { DEFAULT_BUTTONS, ROLE_NOTIFICATION_DEFAULTS, DEFAULT_BEERS } from './constants';
// Import Custom Hooks.
import { useNag } from './hooks/useNag';
// Import UI Components.
import BarSearch from './components/BarSearch';
import RoleSelector from './components/RoleSelector';
import NotificationSettings from './components/NotificationSettings';
import BarManager from './components/BarManager';
import InputDialog from './components/InputDialog';
import { WhoIsOnDialog } from './components/WhoIsOnDialog';
import { SortableButton } from './components/SortableButton';
// Import dnd-kit for drag-and-drop functionality.
import {
  DndContext,
  closestCenter,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent
} from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';

// Helper component for listing joined bars.
const BarListItem = ({ barId, onClick }: { barId: string, onClick: () => void }) => {
    const [name, setName] = useState('Loading...');

    useEffect(() => {
        getDoc(doc(db, 'bars', barId)).then(d => {
            if (d.exists()) setName((d.data() as Bar).name);
            else setName('Unknown Bar');
        }).catch(() => setName('Error loading bar'));
    }, [barId]);

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
  // Ref to hold the Audio object for alerts. Persistence prevents memory leaks and glitches.
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // --- Authentication State ---
  // Store the current logged-in Firebase User.
  const [user, setUser] = useState<User | null>(null);
  // Store any authentication error messages (e.g., "Wrong password").
  const [authError, setAuthError] = useState<string | null>(null);
  // Toggle between Login and Register modes in the auth form.
  const [isRegistering, setIsRegistering] = useState(false);
  
  // --- Routing & Bar State ---
  // Access URL query parameters.
  const [searchParams, setSearchParams] = useSearchParams();
  // Get the 'bar' param from URL or fallback to localStorage.
  const initialBarId = searchParams.get('bar') || localStorage.getItem('barId');
  // Store the current Bar ID.
  const [barId, setBarId] = useState<string | null>(initialBarId);
  
  // --- User Context in Bar ---
  // Store the name of the current bar.
  const [barName, setBarName] = useState('');
  // Store the user's role in this bar (e.g., 'Bartender').
  const [userRole, setUserRole] = useState<string | null>(null);
  // Store the user's status (active/off_clock/pending).
  const [userStatus, setUserStatus] = useState<string>('active');
  // Store the user's display name.
  const [displayName, setDisplayName] = useState<string>('');
  // Store the user's notification preferences (list of button IDs).
  const [notificationPreferences, setNotificationPreferences] = useState<string[]>([]);
  // Store the ntfy topic ID for iOS notifications.
  const [ntfyTopic, setNtfyTopic] = useState<string | null>(null);
  
  // --- Data State ---
  // Store the list of active requests.
  const [requests, setRequests] = useState<Request[]>([]);
  // Store the list of joined bars.
  const [myBars, setMyBars] = useState<string[]>([]);
  // Store the list of configured buttons.
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);
  // Store the FCM token for push notifications.
  const [fcmToken, setFcmToken] = useState<string | null>(null);

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
  const [activeId, setActiveId] = useState<string | null>(null);
  // Store the list of all users in the bar (for "Who's On" and managing).
  const [allUsers, setAllUsers] = useState<any[]>([]);
  // Control the Input Dialog state (Open/Close, Type, Context).
  const [inputDialog, setInputDialog] = useState<{ type: 'brand' | 'type' | 'well' | 'custom', open: boolean, parentContext?: string, searchTerm: string }>({ type: 'brand', open: false, searchTerm: '' });
  // Control the Quantity Picker Dialog state.
  const [quantityPicker, setQuantityPicker] = useState<{ open: boolean, currentQty: number, context: string }>({ open: false, currentQty: 1, context: '' });

  // Stack to navigate through nested button menus.
  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);

  // Ref for the inactivity timer (auto-closes menus). Typed as 'number' for browser compatibility.
  const timerRef = useRef<number | null>(null);
  // Ref to track dragging state to prevent accidental clicks.
  const isDraggingRef = useRef(false);

  // Dialog visibility states.
  const [showOffClockDialog, setShowOffClockDialog] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [showBarManager, setShowBarManager] = useState(false);
  const [showAccountDialog, setShowAccountDialog] = useState(false);
  const [showWhoIsOn, setShowWhoIsOn] = useState(false);
  const [showNameEditDialog, setShowNameEditDialog] = useState(false);
  const [editNameValue, setEditNameValue] = useState('');
  const [editNameError, setEditNameError] = useState<string | null>(null);

  // List of request IDs the user has locally ignored/muted.
  const [ignoredIds, setIgnoredIds] = useState<string[]>([]);

  // Notice Board State.
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isAddingNotice, setIsAddingNotice] = useState(false);
  const [noticeText, setNoticeText] = useState('');
  const [noticeError, setNoticeError] = useState<string | null>(null);

  // Store the PWA install prompt event.
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  // Control the main menu dropdown.
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch latest APK info using custom hook.
  const { downloadUrl: apkUrl, loading: apkLoading } = useLatestRelease();

  // Configure sensors for Drag and Drop (Mouse and Touch).
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250, // Require a long press to start dragging on touch.
        tolerance: 5,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10, // Require movement to start dragging on mouse.
      },
    })
  );

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

  // Helper: Find the Button ID given a Request Label string.
  const getButtonIdForLabel = useCallback((label: string): string | undefined => {
    // 1. Try exact match from the memoized map (O(1)).
    const exactMatch = buttonLookupMap.get(label);
    if (exactMatch) return exactMatch;

    // 2. Check for partial matches (e.g. "ICE: Well 1" starts with "ICE") (O(Buttons)).
    // We only iterate top-level buttons, avoiding nested child loops.
    for (const btn of buttons) {
        if (label.startsWith(btn.label)) return btn.id;
    }

    return undefined;
  }, [buttons, buttonLookupMap]);

  // Compute the list of active requests relevant to the user.
  const activeRequests = useMemo(() => requests.filter(r => {
      // Only show pending requests.
      if (r.status !== 'pending') return false;

      const btnId = getButtonIdForLabel(r.label);

      // Special Logic: ALWAYS show BREAK requests.
      if (btnId === 'break' || r.label.includes('BREAK')) {
         return true;
      }

      // If we can't identify the button type, show it by default (safety).
      if (!btnId) return true;

      // Otherwise, check if the user has subscribed to this notification type.
      return notificationPreferences.includes(btnId);
  }).sort((a, b) => {
      // Sort Logic: Ignored requests go to the bottom.
      const aIgnored = ignoredIds.includes(a.id);
      const bIgnored = ignoredIds.includes(b.id);
      if (aIgnored === bIgnored) {
          return 0;
      }
      return aIgnored ? 1 : -1;
  }), [requests, getButtonIdForLabel, notificationPreferences, ignoredIds]);

  // Activate the Nag hook to play sounds for these requests.
  useNag(activeRequests, ignoredIds);

  // Effect: Capture the PWA 'beforeinstallprompt' event.
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault(); // Prevent the mini-infobar from appearing.
      setInstallPrompt(e); // Stash the event so it can be triggered later.
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // --- 1. Auth & Token Sync ---
  useEffect(() => {
    // Listen for auth state changes.
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        // User is logged in. Setup notifications.
        if (Capacitor.isNativePlatform()) {
          // Native (Android/iOS) Push Logic using Capacitor.
          try {
             // Listen for registration success to get the token.
             await PushNotifications.addListener('registration', token => {
                setFcmToken(token.value);
             });

             // Listen for registration errors.
             await PushNotifications.addListener('registrationError', err => {
                console.error('Registration error: ', err.error);
             });

             // Listen for incoming notifications (foreground).
             await PushNotifications.addListener('pushNotificationReceived', () => {
                // Vibrate.
                if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
                // Play sound.
                if (!audioRef.current) audioRef.current = new Audio('/alert.wav');
                const audio = audioRef.current;
                audio.pause();
                audio.onended = null;
                audio.currentTime = 0;
                audio.play().catch(() => {});
             });

             // Listen for notification taps.
             await PushNotifications.addListener('pushNotificationActionPerformed', () => {
                 // Future: Handle tap action (e.g., open specific request).
             });

             // Request permissions.
             let permStatus = await PushNotifications.checkPermissions();
             if (permStatus.receive === 'prompt') {
               permStatus = await PushNotifications.requestPermissions();
             }
             if (permStatus.receive === 'granted') {
               await PushNotifications.register();
             }
          } catch (e) {
             console.error("Native push setup failed", e);
          }
        } else {
          // Web (PWA) Push Logic.
          const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
          // Only request permission if installed as PWA (to avoid annoying web visitors).
          if (isStandalone) {
              requestNotificationPermission().then(t => t && setFcmToken(t));
          }

          // Listen for foreground messages.
          onMessageListener().then((payload: any) => {
            if (navigator.vibrate) navigator.vibrate([500, 200, 500]);

            // Show system notification if supported.
            if (payload && payload.notification) {
              new Notification(payload.notification.title, {
                body: payload.notification.body,
                icon: '/icon-192x192.png',
              });
            }

            // Play alert sound (looped 8 times for urgency).
            if (!audioRef.current) audioRef.current = new Audio('/alert.wav');
            const audio = audioRef.current;
            let plays = 0;
            audio.onended = () => {
                plays++;
                if (plays < 8) {
                    audio.currentTime = 0;
                    audio.play().catch(() => {});
                }
            };
            audio.play().catch(() => {});
          });
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // --- 1.5. User Data & Joined Bars ---
  useEffect(() => {
    if (!user) return;
    const unsub = onSnapshot(doc(db, 'users', user.uid), (d) => {
        if (d.exists() && d.data().joinedBars) {
            setMyBars(d.data().joinedBars);
        } else {
            setMyBars([]);
        }
    });
    return () => unsub();
  }, [user]);

  // --- 2. Bar Logic & Auto-Clock In ---
  useEffect(() => {
    // If no user or bar selected, do nothing.
    if (!user || !barId) return;

    // Persist Bar ID to URL and LocalStorage.
    setSearchParams({ bar: barId });
    localStorage.setItem('barId', barId);

    // References to Firestore documents.
    const userRef = doc(db, `bars/${barId}/users`, user.uid);
    const tokenRef = doc(db, `bars/${barId}/tokens`, user.uid);

    // Function to auto-update status and token.
    const autoClockIn = async () => {
      if (fcmToken) {
        // Store FCM token.
        await setDoc(tokenRef, {
          token: fcmToken,
          updated: serverTimestamp()
        });
        // Set status to active and update heartbeat.
        await updateDoc(userRef, { 
          status: 'active',
          lastSeen: serverTimestamp()
        }).catch(() => {});
      }
    };
    autoClockIn();

    // Listen for changes to the User's profile.
    const unsubUser = onSnapshot(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setUserRole(data.role);
        setUserStatus(data.status || 'active');
        setDisplayName(data.displayName || 'Unknown');

        // Load notification preferences or set defaults.
        if (data.notificationPreferences) {
          setNotificationPreferences(data.notificationPreferences);
        } else if (data.role) {
          // If no preferences saved, use defaults for role.
          setNotificationPreferences(ROLE_NOTIFICATION_DEFAULTS[data.role] || []);
        }

        // Auto-coordinate ntfy topic (e.g., 'barbacker-uid').
        const autoTopic = `barbacker-${user.uid}`;
        if (data.ntfyTopic !== autoTopic) {
            // If topic is missing or wrong, update it.
            updateDoc(userRef, { ntfyTopic: autoTopic }).catch(console.error);
            setNtfyTopic(autoTopic);
        } else {
            setNtfyTopic(data.ntfyTopic);
        }
      } else {
        // User document doesn't exist (new user).
        setUserRole(null);
      }
    });

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
        if (data.customOrders) setCustomOrders(data.customOrders);
      }
    });

    // Listen for Requests.
    // Query: Last 24 hours, matching Bar ID, ordered by time. Limit to 100 for performance.
    const unsubReq = onSnapshot(
      query(collection(db, 'requests'), where('barId', '==', barId), where('timestamp', '>=', new Date(Date.now() - 24 * 60 * 60 * 1000)), orderBy('timestamp', 'desc'), limit(100)),
      (s) => setRequests(s.docs.map(d => ({ id: d.id, ...d.data() } as Request)))
    );

    // Listen for All Users (for "Who's On").
    // Query varies based on whether we are viewing the "Who's On" dialog (show off_clock users too).
    const userQuery = query(collection(db, `bars/${barId}/users`), where('status', 'in', ['active', 'pending']));

    const unsubAllUsers = onSnapshot(userQuery, (s) => {
        setAllUsers(s.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // Listen for Notices (Bulletin Board).
    // Query: Last 3 days.
    const unsubNotices = onSnapshot(
      query(
        collection(db, `bars/${barId}/notices`),
        where('timestamp', '>=', new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)),
        orderBy('timestamp', 'desc'), limit(100)
      ),
      (s) => {
        const validNotices = s.docs.map(d => ({ id: d.id, ...d.data() } as Notice));
        setNotices(validNotices);
      }
    );

    // Cleanup: Unsubscribe from all listeners when component unmounts or barId changes.
    return () => { unsubUser(); unsubBar(); unsubReq(); unsubAllUsers(); unsubNotices(); };
  }, [user, barId, fcmToken, setSearchParams]);


  // --- Timer ---
  // Inactivity timer to close menus after 60 seconds.
  useEffect(() => {
    // Clear existing timer.
    if (timerRef.current) window.clearTimeout(timerRef.current);

    // If a menu is open (navStack > 0)...
    if (navStack.length > 0) {
      // Set a timeout.
      timerRef.current = window.setTimeout(() => {
        // Construct label from the path (e.g. "SERVICE ITEMS: PINT").
        const trail = navStack.map(b => b.label).join(': ');
        // Auto-submit as an "Ask Me" request.
        submitRequest(`${trail} (Ask Me)`);
        // Reset stack.
        setNavStack([]);
      }, 60000);
    }
    // Cleanup.
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [navStack]);

  // --- Actions ---

  // Save a new beer brand to the bar's inventory.
  const saveBrand = async (brandName: string) => {
    if (!user || !barId) return;

    // If it already exists, just open it.
    if (beerInventory[brandName]) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
        setNavStack(prev => [...prev, brandBtn]);
        return;
    }

    // Write to Firestore.
    await setDoc(doc(db, 'bars', barId), {
        beerInventory: { [brandName]: [] } // Object syntax uses dot notation for updates, but here we merge.
    }, { merge: true });

    // Update local state optimistically.
    setBeerInventory(prev => ({ ...prev, [brandName]: [] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate to the new brand.
    const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
    setNavStack(prev => [...prev, brandBtn]);
  };

  // Save a new beer type (e.g., "Bottle") to a brand.
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

    // Update Firestore (arrayUnion ensures uniqueness).
    await updateDoc(doc(db, 'bars', barId), {
        [`beerInventory.${brand}`]: arrayUnion(typeName)
    });

    // Update local state.
    setBeerInventory(prev => ({ ...prev, [brand]: [...(prev[brand] || []), typeName] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate.
    const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
    setNavStack(prev => [...prev, typeBtn]);
  };

  // Save a new Well location.
  const saveWell = async (wellName: string) => {
    if (!user || !barId) return;

    // If exists, request ice for it.
    if (wells.includes(wellName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        submitRequest(`ICE: ${wellName}`);
        setNavStack([]);
        return;
    }

    // Add to Firestore.
    await updateDoc(doc(db, 'bars', barId), {
        wells: arrayUnion(wellName)
    });

    // Update local state.
    setWells(prev => [...prev, wellName]);
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Submit request.
    submitRequest(`ICE: ${wellName}`);
    setNavStack([]);
  };

  // Hide a button from the dashboard.
  const hideButton = async (btnId: string) => {
    if (!user || !barId) return;
    await updateDoc(doc(db, 'bars', barId), {
        hiddenButtonIds: arrayUnion(btnId)
    });
    setHiddenButtonIds(prev => [...prev, btnId]);
  };

  // Save a notice to the bulletin board.
  const saveNotice = async (text: string) => {
    if (!user || !barId || !text.trim()) return;
    try {
      await addDoc(collection(db, `bars/${barId}/notices`), {
          text,
          authorId: user.uid,
          authorName: displayName,
          timestamp: serverTimestamp()
      });
      setNoticeText('');
      setIsAddingNotice(false);
    } catch (e: any) {
      console.error("Error saving notice:", e);
      setNoticeError("Failed to save notice: " + (e.message || "Unknown error"));
    }
  };

  // Delete a notice.
  const deleteNotice = async (noticeId: string) => {
    if (!user || !barId) return;
    if (confirm("Delete this notice?")) {
        await deleteDoc(doc(db, `bars/${barId}/notices`, noticeId));
    }
  };

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

  // Track usage for sorting.
  const trackButtonUsage = (btnId: string) => {
    if (!barId) return;
    updateDoc(doc(db, 'bars', barId), {
        [`buttonUsage.${btnId}`]: increment(1)
    }).catch(e => console.error("Failed to track usage", e));
  };

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

  // Drag handlers for dnd-kit.
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    isDraggingRef.current = true;
  };

  const handleDragOver = (event: DragEndEvent, contextId: string, items: ButtonConfig[]) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);

      // Reorder items locally.
      const newOrder = arrayMove(items, oldIndex, newIndex).map(i => i.id);
      setCustomOrders(prev => ({ ...prev, [contextId]: newOrder }));
    }
  };

  const handleDragEnd = async (_event: DragEndEvent, contextId: string) => {
    setActiveId(null);
    isDraggingRef.current = false;

    // Persist new order to Firestore.
    if (barId && customOrders[contextId]) {
       await updateDoc(doc(db, 'bars', barId), {
          [`customOrders.${contextId}`]: customOrders[contextId]
       });
    }
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
      submitRequest([...navStack, btn].map(b => b.label).join(': '));
      setNavStack([]);
    }
  };

  // Finalize role selection and enter the dashboard.
  const confirmRole = async (role: string, name: string) => {
    if (!user || !barId) return;

    const status = 'active';

    // Update Global User Document with joined bar.
    await setDoc(doc(db, 'users', user.uid), {
        joinedBars: arrayUnion(barId)
    }, { merge: true });

    // Update User Document.
    await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
      role: role,
      displayName: name,
      email: user.email,
      status: status,
      joinedAt: serverTimestamp(),
      lastSeen: serverTimestamp(),
      // Set default prefs if not exists.
      notificationPreferences: ROLE_NOTIFICATION_DEFAULTS[role] || []
    }, { merge: true });
    
    // Ensure Token is fresh.
    if (fcmToken) {
      await setDoc(doc(db, `bars/${barId}/tokens`, user.uid), {
        token: fcmToken,
        updated: serverTimestamp()
      });
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
    localStorage.removeItem('barId');
    setShowOffClockDialog(false);
  };

  // Switch to another bar without clocking out (unless inactive).
  const handleSwitchBar = async () => {
    setBarId(null);
    localStorage.removeItem('barId');
  };

  // Create a new request.
  const submitRequest = async (label: string) => {
    if (!user || !barId) return;
    // Vibrate feedback.
    if (navigator.vibrate) navigator.vibrate(100);

    // Add to Firestore.
    await addDoc(collection(db, 'requests'), {
      barId,
      label: label,
      requesterId: user.uid,
      requesterName: displayName,
      requesterRole: userRole,
      status: 'pending',
      timestamp: serverTimestamp(),
      lastNotification: serverTimestamp()
    });

    // Send ntfy notifications (iOS/external).

    const btnId = getButtonIdForLabel(label);

    const topics = new Set<string>();

    allUsers.forEach(u => {
        // Treat undefined status as active.
        const isActive = u.status === 'active' || u.status === undefined;
        // Skip inactive users, self, or those without topics.
        if (!isActive || u.id === user.uid || !u.ntfyTopic) return;

        let prefs = u.notificationPreferences;
        // Fallback to role defaults.
        if (!prefs && u.role) {
            prefs = ROLE_NOTIFICATION_DEFAULTS[u.role] || [];
        }

        // Special BREAK logic: Everyone gets BREAK alerts if configured.
        if (label.includes('BREAK') || btnId === 'break') {
             topics.add(u.ntfyTopic);
             return;
        }

        // Normal check: Does user's prefs include this button?
        if (prefs && btnId && prefs.includes(btnId)) {
            topics.add(u.ntfyTopic);
        }
    });

    // Send the requests in parallel.
    Promise.all(Array.from(topics).map(topic =>
        fetch(`https://ntfy.sh/${topic}`, {
            method: 'POST',
            body: `New Request: ${label} (by ${displayName})`,
            headers: {
                'Title': 'BarBacker Alert',
                'Priority': 'high',
                'Tags': 'bell,bar_chart'
            }
        }).catch(err => console.error('Failed to send ntfy', err))
    ));
  };

  // Mark a request as claimed.
  const claimRequest = async (reqId: string) => {
    await updateDoc(doc(db, 'requests', reqId), {
      status: 'claimed',
      claimedBy: user?.uid,
      claimerName: displayName,
      claimedAt: serverTimestamp()
    });
  };

  // Save new notification settings.
  const saveNotificationPreferences = async (prefs: string[], topic: string) => {
    if (!user || !barId) return;
    setNotificationPreferences(prefs);
    setNtfyTopic(topic);
    await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
        notificationPreferences: prefs,
        ntfyTopic: topic
    }, { merge: true });
  };

  // Sign out.
  const handleLogout = async () => {
    await signOut(auth);
    setShowAccountDialog(false);
  };

  // Leave bar (delete user profile from bar).
  const handleLeaveBar = async () => {
    if (!user || !barId) return;
    if (!confirm('Are you sure you want to leave this bar? You will need to join again.')) return;
    await deleteDoc(doc(db, `bars/${barId}/users`, user.uid));
    // Remove from joinedBars list.
    await updateDoc(doc(db, 'users', user.uid), {
        joinedBars: arrayRemove(barId)
    }).catch(() => {});
    setBarId(null);
    localStorage.removeItem('barId');
    setShowAccountDialog(false);
  };

  // Delete account entirely.
  const handleDeleteAccount = async () => {
    if (!user || !barId) return;
    if (!confirm('Are you sure you want to delete your account? This cannot be undone.')) return;

    try {
      await deleteDoc(doc(db, `bars/${barId}/users`, user.uid));
      await deleteUser(user);
      setShowAccountDialog(false);
    } catch (error: any) {
      console.error('Error deleting account:', error);
      alert('Failed to delete account. You may need to re-login recently.');
    }
  };

  // Handle email login/register form submission.
  const handleEmailAuth = async (e: any) => {
    e.preventDefault(); const fd = new FormData(e.target);
    try { isRegistering ? await createUserWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string) : await signInWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string); } catch (e: any) { setAuthError(e.message); }
  };

  // Handle Google Login.
  const handleGoogle = async () => { try { await signInWithPopup(auth, googleProvider); } catch (e: any) { setAuthError(e.message); } };

  // Handle PWA install click.
  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      // Request permissions after install.
      if (user) {
         requestNotificationPermission().then(t => t && setFcmToken(t));
      }
    }
  };

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
        <md-text-button onClick={() => signOut(auth)}>Sign Out</md-text-button>

        {myBars.length > 0 && (
            <div className="w-[300px] mb-2">
                <h3 className="text-gray-400 font-bold text-sm uppercase mb-2 pl-2">My Bars</h3>
                <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800">
                    <md-list className="bg-transparent">
                    {myBars.map(bid => (
                        <BarListItem key={bid} barId={bid} onClick={() => { setBarId(bid); localStorage.setItem('barId', bid); }} />
                    ))}
                    </md-list>
                </div>
            </div>
        )}

        <BarSearch onJoin={async (b) => {
          if(b.id) {
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
                  buttons: []
                });
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
                    href={`ntfy://subscribe/barbacker-${user.uid}`}
                    className="text-blue-400 underline font-bold"
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
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black">
        <div className="flex w-full justify-between items-center max-w-[300px]">
            <md-icon-button onClick={() => { setBarId(null); localStorage.removeItem('barId'); }}><md-icon>arrow_back</md-icon></md-icon-button>
            <md-text-button onClick={() => signOut(auth)}>Sign Out</md-text-button>
        </div>
        <RoleSelector onSelect={confirmRole} initialName={user?.displayName || ''} key={user?.displayName || 'default'} />
      </div>
    );
  }

  // --- Main Dashboard Computation ---

  // History log: active requests are already filtered out.
  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  // Time formatter.
  const formatTime = (ts: any) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts.seconds * 1000);
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  // Determine which buttons to show based on nav stack.
  const currentContextId = navStack.length > 0 ? navStack[navStack.length - 1].id : 'main';
  const currentButtonsSource = navStack.length > 0 ? getDynamicChildren(navStack[navStack.length - 1]) : buttons;
  const activeButtons = currentButtonsSource.filter(btn => !hiddenButtonIds.includes(btn.id));
  const currentButtons = sortButtons(activeButtons, currentContextId);

  // Sorting for main screen.
  const sortedAllButtons = sortButtons(buttons, 'main');
  const mainScreenButtons = sortedAllButtons.filter(btn => !hiddenButtonIds.includes(btn.id));

  // Check for pending users (for Managers).
  const pendingUsers = allUsers.filter(u => u.status === 'pending');
  const showApprovals = pendingUsers.length > 0;

  // 4. Pending Approval Screen
  if (userStatus === 'pending') {
      return (
        <div className="h-[100dvh] w-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black text-center overflow-hidden">
            <md-icon style={{ fontSize: 64 }} className="text-yellow-500">hourglass_empty</md-icon>
            <h2 className="text-2xl font-bold text-white">Approval Pending</h2>
            <p className="text-gray-400">A manager must approve your request to join {barName}.</p>
            <md-text-button onClick={() => { setBarId(null); localStorage.removeItem('barId'); }}>Cancel</md-text-button>
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
        allButtons={sortedAllButtons}
        hiddenButtonIds={hiddenButtonIds}
        onHideButton={hideButton}
      />

      <WhoIsOnDialog
        open={showWhoIsOn}
        onClose={() => setShowWhoIsOn(false)}
        users={allUsers as BarUser[]}
      />

      <NotificationSettings
        open={showNotificationSettings}
        onClose={() => setShowNotificationSettings(false)}
        onSave={saveNotificationPreferences}
        userRole={userRole || ''}
        currentPreferences={notificationPreferences}
        currentNtfyTopic={ntfyTopic}
        allButtons={buttons}
      />

      <InputDialog
        open={inputDialog.open}
        mode={inputDialog.type as 'brand' | 'type' | 'well'}
        searchTerm={inputDialog.searchTerm}
        onSearchChange={(val) => setInputDialog(prev => ({ ...prev, searchTerm: val }))}
        onClose={() => setInputDialog(prev => ({ ...prev, open: false }))}
        onSelect={(val) => {
            // Deduplication Check.
            const existingLabels = currentButtonsSource.map(b => b.label.toLowerCase());
            if (existingLabels.includes(val.toLowerCase())) {
                alert('This button already exists!');
                return;
            }

            if (inputDialog.type === 'brand') saveBrand(val);
            else if (inputDialog.type === 'type') saveType(val);
            else if (inputDialog.type === 'well') saveWell(val);
            else if (inputDialog.type === 'custom') {
                submitRequest(val);
                setInputDialog(prev => ({ ...prev, open: false }));
            }
        }}
        suggestions={(() => {
            if (inputDialog.type === 'brand') return [...DEFAULT_BEERS, ...Object.keys(beerInventory)];
            if (inputDialog.type === 'type') return Array.from(new Set(Object.values(beerInventory).flat()));
            return [];
        })()}
      />

      <md-dialog open={quantityPicker.open || undefined} onClose={() => setQuantityPicker(prev => ({ ...prev, open: false }))}>
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
             submitRequest(`${quantityPicker.context}: ${quantityPicker.currentQty}`);
             setQuantityPicker(prev => ({ ...prev, open: false }));
             setNavStack([]);
          }}>Send</md-filled-button>
        </div>
      </md-dialog>

      <md-dialog open={isAddingNotice || undefined} onClose={() => setIsAddingNotice(false)}>
        <div slot="headline">Add Notice</div>
        <div slot="content" className="flex flex-col gap-4">
            <md-filled-text-field
                label="Notice Message"
                value={noticeText}
                onInput={(e: any) => setNoticeText(e.target.value)}
                required
                type="text"
            />
            {noticeError && <div className="text-red-500 text-sm mt-2">{noticeError}</div>}
        </div>
        <div slot="actions">
            <md-text-button onClick={() => setIsAddingNotice(false)}>Cancel</md-text-button>
            <md-filled-button onClick={() => saveNotice(noticeText)}>Post</md-filled-button>
        </div>
      </md-dialog>

      <md-dialog open={showOffClockDialog || undefined} onClose={() => setShowOffClockDialog(false)}>
        <div slot="headline">Abandon Ship?</div>
        <div slot="content">
          Going off clock stops all notifications and signs you out. The bar will be unprotected. Are you sure?
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setShowOffClockDialog(false)}>Stay</md-text-button>
          <md-filled-button onClick={goOffClock} className="btn-alert">Clock Out</md-filled-button>
        </div>
      </md-dialog>

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
            <span className="bg-gray-800 px-4 py-2 rounded text-base text-gray-300 whitespace-nowrap">{userRole}</span>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6 mr-4 flex-wrap justify-end">
           {/* Bar Name (Hidden on small screens) */}
           <span className="font-bold text-xl text-white tracking-wide hidden sm:block">{barName}</span>

           {/* Bar Manager Button (Visible on small screens) */}
           <md-text-button onClick={() => setShowBarManager(true)} className="sm:hidden">
             <span className="font-bold text-lg text-white tracking-wide">{barName}</span>
           </md-text-button>

           <div className="flex gap-4 items-center">
                {/* Install App Button */}
                {installPrompt && (
                  <md-icon-button onClick={handleInstall} title="Install App" className="navbar-icon-button">
                    <md-icon className="text-blue-400" style={{ fontSize: '36px' }}>download</md-icon>
                  </md-icon-button>
                )}

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
                        anchor="menu-anchor"
                        open={menuOpen}
                        onClosed={() => setMenuOpen(false)}
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
                        <md-menu-item onClick={handleShare}>
                            <md-icon slot="start">share</md-icon>
                            <div slot="headline">Share</div>
                        </md-menu-item>
                        <md-menu-item onClick={() => setShowWhoIsOn(true)}>
                            <md-icon slot="start">group</md-icon>
                            <div slot="headline">Who's On</div>
                        </md-menu-item>
                        <md-menu-item onClick={() => { setIsAddingNotice(true); setNoticeError(null); }}>
                            <md-icon slot="start">campaign</md-icon>
                            <div slot="headline">Post Notice</div>
                        </md-menu-item>
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

      {/* --- Bulletin Board (Marquee) --- */}
      {notices.length > 0 && (
          <div className="bg-yellow-900/20 border-b border-yellow-900/50 overflow-hidden relative h-8 flex items-center">
              <div className="animate-marquee whitespace-nowrap flex gap-12 text-yellow-500 text-sm font-medium items-center">
                  {notices.map(notice => (
                      <span key={notice.id} className="inline-flex items-center gap-2 cursor-pointer" onClick={() => deleteNotice(notice.id)}>
                         <span>📢 {notice.text} <span className="text-yellow-700 text-xs">({notice.authorName})</span></span>
                         <md-icon style={{ fontSize: 14 }} className="text-yellow-700 hover:text-red-500">close</md-icon>
                      </span>
                  ))}
                  {/* Duplicate for infinite loop effect if few items */}
                   {notices.map(notice => (
                      <span key={`dup-${notice.id}`} className="inline-flex items-center gap-2">
                         <span>📢 {notice.text} <span className="text-yellow-700 text-xs">({notice.authorName})</span></span>
                      </span>
                  ))}
              </div>
          </div>
      )}

      <md-dialog open={showNameEditDialog || undefined} onClose={() => { setShowNameEditDialog(false); setEditNameError(null); }}>
        <div slot="headline">Edit Name</div>
        <div slot="content" className="flex flex-col gap-4 pt-4">
            <md-filled-text-field
                label="Display Name"
                value={editNameValue}
                onInput={(e: any) => setEditNameValue(e.target.value)}
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
                } catch (e: any) {
                    console.error("Error updating name:", e);
                    setEditNameError("Failed to update name: " + (e.message || "Unknown error"));
                }
            }}>Save</md-filled-button>
        </div>
      </md-dialog>

      {/* Account Dialog */}
      <md-dialog open={showAccountDialog || undefined} onClose={() => setShowAccountDialog(false)}>
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
      </md-dialog>

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
            >
              <SortableContext items={currentButtons} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-2 gap-4 mb-auto">
                  {currentButtons.map(btn => (
                    <SortableButton key={btn.id} id={btn.id} onClick={() => handleButtonClick(btn)}>
                      <md-filled-tonal-button style={{ height: '100px', fontSize: '18px', width: '100%', pointerEvents: 'none', border: '8px solid #000000', boxSizing: 'border-box' }}>
                        <span className="text-red-500 font-bold text-3xl">{btn.label}</span>
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
        onDragOver={(e) => handleDragOver(e, 'main', mainScreenButtons)}
        onDragEnd={(e) => handleDragEnd(e, 'main')}
      >
        <SortableContext items={mainScreenButtons} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-2 gap-8 p-6">
            {/* Render Standard Buttons + Custom Request Button */}
            {[...mainScreenButtons, { id: 'custom_req_btn', label: 'CUSTOM', icon: 'add', isCustom: true }].map(btn => {
              // Highlight pending requests.
              const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
              return (
                <SortableButton key={btn.id} id={btn.id} onClick={() => handleButtonClick(btn)}>
                  <md-filled-tonal-button className={isPending ? 'btn-alert' : ''} style={{ height: '120px', width: '100%', pointerEvents: 'none', border: isPending ? '8px solid #EF4444' : '8px solid #000000', boxSizing: 'border-box' }}>
                      <div className="flex flex-col items-center gap-2">
                      <md-icon style={{ fontSize: 32 }} className="text-red-500">{btn.icon || 'circle'}</md-icon>
                      <span className="text-3xl font-bold leading-none text-red-500">{btn.label}</span>
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
                    const btn = buttons.find(b => b.id === activeId);
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
                    onClick={() => setShowBarManager(true)}
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
                        <div className="flex flex-col overflow-hidden mr-2">
                            <span className={`font-bold text-lg leading-tight truncate ${isIgnored ? 'text-gray-400' : 'text-red-100'}`}>{req.label}</span>
                            <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-1 truncate">
                                <span>{req.requesterName}</span>
                                <span>•</span>
                                <span>{formatTime(req.timestamp)}</span>
                            </div>
                        </div>

                        {/* Claim Button */}
                        <md-filled-button
                            onClick={() => claimRequest(req.id)}
                            className={`w-full ${isIgnored ? '' : 'btn-alert'}`}
                            style={{ height: '48px', minWidth: '100px' }}
                        >
                            CLAIM
                        </md-filled-button>

                        {/* Actions: Cancel (if own) or Ignore */}
                        {isMyRequest ? (
                             <md-outlined-button
                                onClick={async (e: any) => {
                                    e.stopPropagation();
                                    if(confirm('Cancel this request?')) {
                                        await deleteDoc(doc(db, 'requests', req.id));
                                    }
                                }}
                                style={{ height: '48px', minWidth: '100px', '--md-outlined-button-label-text-color': '#EF4444', '--md-sys-color-outline': '#EF4444' } as React.CSSProperties}
                            >
                                CANCEL
                            </md-outlined-button>
                        ) : (
                            !isIgnored && (
                                <md-outlined-button
                                    onClick={(e: any) => { e.stopPropagation(); setIgnoredIds(prev => [...prev, req.id]); }}
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
            </md-list-item>
          ))}
        </md-list>
      </div>
      </div>
    </div>
  );
}

export default App;

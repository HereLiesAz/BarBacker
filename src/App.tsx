// Import necessary hooks from React: useState for local state, useEffect for side effects, useRef for mutable references.
import { useState, useEffect, useRef } from 'react';
// Import Firestore functions for database operations:
// collection: Reference a collection.
// addDoc: Add a new document with an auto-generated ID.
// query: Create a query object.
// where: Add a filter constraint to a query.
// onSnapshot: Listen for real-time updates to a document or query.
// doc: Reference a specific document.
// setDoc: Write to a document (overwrite or merge).
// serverTimestamp: Generate a server-side timestamp.
// updateDoc: Update specific fields of a document.
// orderBy: Sort query results.
// limit: Limit the number of query results.
// deleteDoc: Delete a document.
// getDoc: Fetch a single document once.
// increment: Atomically increment a numeric field.
// arrayUnion: Atomically add elements to an array field.
import { 
  collection, addDoc, query, where, onSnapshot, doc, setDoc,
  serverTimestamp, updateDoc, orderBy, limit, deleteDoc, getDoc,
  increment, arrayUnion
} from 'firebase/firestore';
// Import Firebase Auth functions:
// signInAnonymously: Sign in without credentials (temp account).
// onAuthStateChanged: Listen for auth state changes (login/logout).
// signOut: Sign out the current user.
// User: Type definition for the user object.
import {
  signInAnonymously, onAuthStateChanged, signOut, User
} from 'firebase/auth';
// Import initialized Firebase instances and helper functions.
import { 
  db, auth, requestNotificationPermission, onMessageListener
} from './firebase';
// Import Drag and Drop primitives from @dnd-kit/core.
import {
  DndContext, DragOverlay, useSensor, useSensors,
  TouchSensor, MouseSensor, closestCenter, DragStartEvent, DragEndEvent
} from '@dnd-kit/core';
// Import Sortable primitives from @dnd-kit/sortable.
import {
  SortableContext, arrayMove, rectSortingStrategy
} from '@dnd-kit/sortable';
// Import Capacitor core for native platform detection.
import { Capacitor } from '@capacitor/core';
// Import Capacitor Push Notifications plugin for native push.
import { PushNotifications } from '@capacitor/push-notifications';
// Import useSearchParams to read/write URL query parameters.
import { useSearchParams } from 'react-router-dom';

// Import Material Web Web Components (side-effect imports to register custom elements).
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/dialog/dialog.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';

// Import Custom React Components used in the application.
import BarSearch from './components/BarSearch';
import RoleSelector from './components/RoleSelector';
import NotificationSettings from './components/NotificationSettings';
import BarManager from './components/BarManager';
import InputDialog from './components/InputDialog';
import { SortableButton } from './components/SortableButton';
import { WhoIsOnDialog } from './components/WhoIsOnDialog';
// Import custom hooks.
import { useNag } from './hooks/useNag';
import { useLatestRelease } from './hooks/useLatestRelease';
// Import constants and type definitions.
import { DEFAULT_BUTTONS, DEFAULT_BEERS, ROLE_NOTIFICATION_DEFAULTS } from './constants';
import { ButtonConfig, Request, Bar, Notice, BarUser } from './types';

/**
 * Main Application Component.
 *
 * This component acts as the central controller for the application.
 * It manages authentication, global state, routing (via bar selection),
 * real-time data subscriptions, and the primary UI layout.
 */
function App() {
  // --- Global State ---
  // State to hold the current Firebase Auth user object.
  const [user, setUser] = useState<User | null>(null);
  // Hook to access and modify URL search parameters.
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize barId from the URL 'bar' parameter or fallback to LocalStorage.
  // This ensures that if a user refreshes the page, they stay in the same bar context.
  const initialBarId = searchParams.get('bar') || localStorage.getItem('barId');
  // State to hold the current Bar ID (Firestore Document ID).
  const [barId, setBarId] = useState<string | null>(initialBarId);
  
  // --- Bar & User Metadata State ---
  // State to store the display name of the current bar.
  const [barName, setBarName] = useState('');
  // State to store the current user's role (e.g., 'Bartender', 'Barback').
  const [userRole, setUserRole] = useState<string | null>(null);
  // State to store the user's status ('active', 'pending', 'off_clock').
  const [userStatus, setUserStatus] = useState<string>('active');
  // State to store the user's chosen display name.
  const [displayName, setDisplayName] = useState<string>('');
  // State to store the list of button IDs the user wants to receive notifications for.
  const [notificationPreferences, setNotificationPreferences] = useState<string[]>([]);
  // State to store the ntfy.sh topic for iOS push notifications.
  const [ntfyTopic, setNtfyTopic] = useState<string | null>(null);
  
  // --- Data State ---
  // State to store the list of active requests fetched from Firestore.
  const [requests, setRequests] = useState<Request[]>([]);
  // State to store the configuration of buttons (menu items) for the bar.
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);
  // State to store the Firebase Cloud Messaging (FCM) token for push notifications.
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  // --- Inventory & Config State ---
  // State to store beer inventory (Brand -> Array of Types).
  const [beerInventory, setBeerInventory] = useState<Record<string, string[]>>({});
  // State to store the list of Well names (e.g., 'Speed Rack', 'Well 2').
  const [wells, setWells] = useState<string[]>([]);
  // State to store IDs of buttons that have been hidden by the manager.
  const [hiddenButtonIds, setHiddenButtonIds] = useState<string[]>([]);
  // State to store usage counts for each button to enable sorting by popularity.
  const [buttonUsage, setButtonUsage] = useState<Record<string, number>>({});
  // State to store custom button order preferences per context (screen).
  const [customOrders, setCustomOrders] = useState<Record<string, string[]>>({});

  // --- UI Control State ---
  // State to track the currently dragged item's ID during drag-and-drop operations.
  const [activeId, setActiveId] = useState<string | null>(null);
  // State to store the list of all users currently associated with the bar (for 'Who's On').
  const [allUsers, setAllUsers] = useState<any[]>([]);

  // State to control the visibility and mode of the Input Dialog (for creating new items).
  const [inputDialog, setInputDialog] = useState<{ type: 'brand' | 'type' | 'well' | 'custom', open: boolean, parentContext?: string, searchTerm: string }>({ type: 'brand', open: false, searchTerm: '' });
  // State to control the Quantity Picker dialog.
  const [quantityPicker, setQuantityPicker] = useState<{ open: boolean, currentQty: number, context: string }>({ open: false, currentQty: 1, context: '' });

  // State to manage the navigation stack for nested buttons (e.g., Mixers -> Coke).
  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);

  // Ref to track if a drag operation is currently in progress (to prevent click handlers firing).
  const isDraggingRef = useRef(false);
  // Ref to store a reusable Audio object for playing alert sounds (performance optimization).
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // --- Dialog Visibility States ---
  // Controls the "Off Clock" confirmation dialog.
  const [showOffClockDialog, setShowOffClockDialog] = useState(false);
  // Controls the Notification Settings dialog.
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  // Controls the Bar Manager dialog.
  const [showBarManager, setShowBarManager] = useState(false);
  // Controls the Account Dialog (Placeholder for now).
  const [_showAccountDialog, setShowAccountDialog] = useState(false);
  // Controls the "Who's On" roster dialog.
  const [showWhoIsOn, setShowWhoIsOn] = useState(false);

  // State to store IDs of requests that the user has locally ignored/snoozed.
  const [ignoredIds, setIgnoredIds] = useState<string[]>([]);

  // --- Notice Board State ---
  // State to store the list of active notices/announcements.
  const [notices, setNotices] = useState<Notice[]>([]);
  // Controls the "Add Notice" dialog.
  const [isAddingNotice, setIsAddingNotice] = useState(false);
  // State to store the text input for a new notice.
  const [noticeText, setNoticeText] = useState('');
  // State to store validation errors for the notice form.
  const [noticeError, setNoticeError] = useState<string | null>(null);

  // --- Installation & Updates ---
  // State to store the 'beforeinstallprompt' event for PWA installation.
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  // Controls the visibility of the top-right menu.
  const [menuOpen, setMenuOpen] = useState(false);
  // Custom hook to fetch the latest APK download URL from GitHub Releases.
  const { downloadUrl: apkUrl } = useLatestRelease();

  // --- Drag and Drop Sensors ---
  // Configure sensors for drag detection.
  const sensors = useSensors(
    // Touch sensor with constraints to distinguish between scrolling/tapping and dragging.
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250, // User must hold for 250ms to start drag.
        tolerance: 5, // User can move 5px before drag cancels.
      },
    }),
    // Mouse sensor with constraints.
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10, // User must move mouse 10px to start drag.
      },
    })
  );

  /**
   * Helper function to determine the root button ID for a given request label.
   * This is used to map specific requests (e.g., "Mixers: Coke") back to their
   * configuration category (e.g., "mixers") for notification filtering.
   *
   * @param label - The label of the request.
   * @returns The ID of the matching button configuration, or undefined.
   */
  const getButtonIdForLabel = (label: string): string | undefined => {
    // Iterate through all top-level buttons.
    for (const btn of buttons) {
        // Exact match.
        if (label === btn.label) return btn.id;
        // Prefix match (for custom quantities or sub-items).
        if (label.startsWith(btn.label)) return btn.id;
        // Check children if they exist.
        if (btn.children) {
            for (const child of btn.children) {
                if (label === child.label) return btn.id;
            }
        }
    }
    return undefined;
  };

  /**
   * Computed property: Filter and Sort Active Requests.
   *
   * Filters requests based on:
   * 1. Status must be 'pending'.
   * 2. The request type must be in the user's `notificationPreferences`.
   *    Exception: 'BREAK' requests are always shown (safety/importance).
   *
   * Sorts requests based on:
   * 1. Ignored requests are moved to the bottom.
   * 2. Otherwise, they keep their natural sort order (timestamp, from Firestore query).
   */
  const activeRequests = requests.filter(r => {
      // Only show pending requests.
      if (r.status !== 'pending') return false;

      // Determine the category ID.
      const btnId = getButtonIdForLabel(r.label);

      // Special Logic: Always show BREAK requests regardless of preferences.
      if (btnId === 'break' || r.label.includes('BREAK')) {
         return true;
      }

      // If we can't map it, show it by default to be safe.
      if (!btnId) return true;

      // Check if the user has subscribed to this notification type.
      return notificationPreferences.includes(btnId);
  }).sort((a, b) => {
      // Check if items are in the ignored list.
      const aIgnored = ignoredIds.includes(a.id);
      const bIgnored = ignoredIds.includes(b.id);

      // Sort ignored items to the bottom.
      if (aIgnored === bIgnored) return 0;
      return aIgnored ? 1 : -1;
  });

  // Invoke the custom 'useNag' hook.
  // This hook plays a sound/vibration every minute if there are active, un-ignored requests.
  useNag(activeRequests, ignoredIds);

  // Effect to listen for the browser's 'beforeinstallprompt' event.
  // This event fires when the browser detects the app is installable as a PWA.
  useEffect(() => {
    const handler = (e: any) => {
      // Prevent the default mini-infobar from appearing.
      e.preventDefault();
      // Stash the event so it can be triggered later by a button click.
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    // Cleanup the event listener on unmount.
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // --- 1. Auth & Token Sync Effect ---
  // Sets up the Firebase Auth listener and initializes Push Notifications.
  useEffect(() => {
    // Subscribe to auth state changes.
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      // Update local user state.
      setUser(u);

      // If a user is logged in...
      if (u) {
        // Check if running on a native device (Android/iOS) via Capacitor.
        if (Capacitor.isNativePlatform()) {
          // --- Native Push Logic ---
          try {
             // Listener: Registration success.
             await PushNotifications.addListener('registration', token => {
                // Save the FCM token to state.
                setFcmToken(token.value);
             });

             // Listener: Registration failure.
             await PushNotifications.addListener('registrationError', err => {
                console.error('Registration error: ', err.error);
             });

             // Listener: Foreground notification received.
             await PushNotifications.addListener('pushNotificationReceived', () => {
                // Vibrate the device.
                if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
                // Play sound logic.
                if (!audioRef.current) audioRef.current = new Audio('/alert.wav');
                const audio = audioRef.current;
                audio.pause();
                audio.onended = null;
                audio.currentTime = 0;
                audio.play().catch(() => {});
             });

             // Listener: Notification action (tap).
             await PushNotifications.addListener('pushNotificationActionPerformed', () => {
                 // Future: Handle tap action (e.g. open specific request).
             });

             // Check current permission status.
             let permStatus = await PushNotifications.checkPermissions();
             // If not determined, request permissions.
             if (permStatus.receive === 'prompt') {
               permStatus = await PushNotifications.requestPermissions();
             }
             // If granted, register with FCM.
             if (permStatus.receive === 'granted') {
               await PushNotifications.register();
             }
          } catch (e) {
             console.error("Native push setup failed", e);
          }
        } else {
          // --- Web Push Logic ---
          // Check if the app is running in 'standalone' mode (installed PWA).
          const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

          // Only request strict notification permission if installed.
          // Browsers often block permission requests on first load if not user-initiated.
          if (isStandalone) {
              requestNotificationPermission().then(t => t && setFcmToken(t));
          }

          // Set up listener for foreground messages in the browser.
          onMessageListener().then((payload: any) => {
            // Vibrate if supported.
            if (navigator.vibrate) navigator.vibrate([500, 200, 500]);

            // Show a system notification if the browser allows it.
            if (payload && payload.notification) {
              new Notification(payload.notification.title, {
                body: payload.notification.body,
                icon: '/icon-192x192.png',
              });
            }

            // Play Sound.
            // Logic: Play up to 8 times to ensure it's heard (urgency).
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
    // Unsubscribe from auth listener on unmount.
    return () => unsubscribe();
  }, []);

  // --- 2. Bar Logic & Auto-Clock In Effect ---
  // Manages data subscriptions once the user is authenticated and has a Bar ID.
  useEffect(() => {
    // Exit if not authenticated or no bar selected.
    if (!user || !barId) return;

    // Update the URL query param to reflect the current bar.
    setSearchParams({ bar: barId });
    // Save barId to localStorage for persistence.
    localStorage.setItem('barId', barId);

    // References to the User and Token documents in Firestore.
    const userRef = doc(db, `bars/${barId}/users`, user.uid);
    const tokenRef = doc(db, `bars/${barId}/tokens`, user.uid);

    // Function to handle auto-clock-in logic.
    const autoClockIn = async () => {
      // If we have an FCM token, save it to the tokens collection.
      if (fcmToken) {
        await setDoc(tokenRef, {
          token: fcmToken,
          updated: serverTimestamp()
        });
        // Update user status to 'active' and update 'lastSeen'.
        await updateDoc(userRef, { 
          status: 'active',
          lastSeen: serverTimestamp()
        }).catch(() => {});
      }
    };
    // Execute auto-clock-in.
    autoClockIn();

    // Subscribe to the User Document.
    const unsubUser = onSnapshot(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        // Update local state with user data from Firestore.
        setUserRole(data.role);
        setUserStatus(data.status || 'active');
        setDisplayName(data.displayName || 'Unknown');

        // Load notification preferences.
        if (data.notificationPreferences) {
          setNotificationPreferences(data.notificationPreferences);
        } else if (data.role) {
          // If no preferences saved, fall back to defaults for the role.
          setNotificationPreferences(ROLE_NOTIFICATION_DEFAULTS[data.role] || []);
        }

        // Auto-coordinate ntfy.sh topic.
        // Format: barbacker-{uid}. This is a private channel for the user.
        const autoTopic = `barbacker-${user.uid}`;
        if (data.ntfyTopic !== autoTopic) {
            // If topic is missing or incorrect, update it.
            updateDoc(userRef, { ntfyTopic: autoTopic }).catch(console.error);
            setNtfyTopic(autoTopic);
        } else {
            setNtfyTopic(data.ntfyTopic);
        }
      } else {
        // User document does not exist (e.g., removed from bar).
        setUserRole(null);
      }
    });

    // Subscribe to the Bar Configuration Document.
    const unsubBar = onSnapshot(doc(db, 'bars', barId), (d) => {
      if (d.exists()) {
        const data = d.data() as Bar;
        setBarName(data.name);

        // Merge buttons: Combine defaults with any custom buttons saved in the bar doc.
        if (data.buttons) {
            // Use a Map to deduplicate based on ID.
            // Custom buttons (from DB) take precedence over defaults.
            const customMap = new Map(data.buttons.map(b => [b.id, b]));
            const combined = [...DEFAULT_BUTTONS.filter(b => !customMap.has(b.id)), ...data.buttons];
            setButtons(combined);
        } else {
            setButtons(DEFAULT_BUTTONS);
        }

        // Sync Inventory and Settings from Firestore.
        if (data.beerInventory) setBeerInventory(data.beerInventory);
        if (data.wells) setWells(data.wells);
        if (data.hiddenButtonIds) setHiddenButtonIds(data.hiddenButtonIds);
        if (data.buttonUsage) setButtonUsage(data.buttonUsage);
        if (data.customOrders) setCustomOrders(data.customOrders);
      }
    });

    // Subscribe to Requests Collection.
    // Filter: Same Bar ID.
    // Filter: Created in the last 24 hours (prevents loading ancient history).
    // Order: Newest first.
    // Limit: 100 requests max.
    const unsubReq = onSnapshot(
      query(
          collection(db, 'requests'),
          where('barId', '==', barId),
          where('timestamp', '>=', new Date(Date.now() - 24 * 60 * 60 * 1000)),
          orderBy('timestamp', 'desc'),
          limit(100)
      ),
      (s) => setRequests(s.docs.map(d => ({ id: d.id, ...d.data() } as Request)))
    );

    // Subscribe to All Users (for Roster).
    // Optimization: Only query 'active'/'pending' normally.
    // If 'showWhoIsOn' dialog is open, include 'off_clock' users too.
    const requiredStatuses = showWhoIsOn ? ['active', 'pending', 'off_clock'] : ['active', 'pending'];
    const userQuery = query(collection(db, `bars/${barId}/users`), where('status', 'in', requiredStatuses));

    const unsubAllUsers = onSnapshot(userQuery, (s) => {
        setAllUsers(s.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // Subscribe to Notices.
    // Filter: Last 3 days only.
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const noticesQuery = query(
        collection(db, `bars/${barId}/notices`),
        where('timestamp', '>=', threeDaysAgo),
        orderBy('timestamp', 'desc')
    );
    const unsubNotices = onSnapshot(noticesQuery, (s) => {
        setNotices(s.docs.map(d => ({ id: d.id, ...d.data() } as Notice)));
    });

    // Cleanup function: Unsubscribe from all listeners when effect re-runs or component unmounts.
    return () => {
      unsubUser();
      unsubBar();
      unsubReq();
      unsubAllUsers();
      unsubNotices();
    };
  }, [user, barId, showWhoIsOn]); // Dependencies that trigger re-subscription.

  // --- Handlers ---

  /**
   * Prompts the browser's PWA install dialog.
   * Only works if the 'beforeinstallprompt' event was captured earlier.
   */
  const handleInstall = () => {
    if (installPrompt) {
        installPrompt.prompt();
        // Wait for the user to respond to the prompt
        installPrompt.userChoice.then((result: any) => {
             // Clear the prompt if accepted
             if (result.outcome === 'accepted') setInstallPrompt(null);
        });
    }
  };

  /**
   * Marks a request as 'claimed' by the current user.
   * @param reqId - The ID of the request to claim.
   */
  const handleClaim = async (reqId: string) => {
    if (!user) return;
    await updateDoc(doc(db, 'requests', reqId), {
        status: 'claimed',
        claimedBy: user.uid,
        claimerName: displayName,
        claimedAt: serverTimestamp()
    });
  };

  // Wrapper for handleClaim to be passed to child components.
  const claimRequest = (reqId: string) => handleClaim(reqId);

  /**
   * Saves the user's notification preferences to Firestore.
   * @param prefs - Array of button IDs to notify on.
   * @param topic - The ntfy.sh topic string.
   */
  const saveNotificationPreferences = async (prefs: string[], topic: string) => {
    if (!user || !barId) return;
    // Optimistic update
    setNotificationPreferences(prefs);
    if (topic) setNtfyTopic(topic);

    // Persist
    await updateDoc(doc(db, `bars/${barId}/users`, user.uid), {
        notificationPreferences: prefs,
        ntfyTopic: topic || null
    });
  };

  /**
   * Adds a new Beer Brand to the bar's inventory.
   * @param brandName - The name of the brand (e.g., "Guinness").
   */
  const saveBrand = async (brandName: string) => {
    if (!user || !barId) return;

    // Check if the brand already exists in local state.
    if (beerInventory[brandName]) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        // Navigate into the brand's submenu immediately.
        const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
        setNavStack(prev => [...prev, brandBtn]);
        return;
    }

    // Persist to Firestore (merge: true ensures we don't overwrite other fields).
    await setDoc(doc(db, 'bars', barId), {
        beerInventory: { [brandName]: [] }
    }, { merge: true });

    // Optimistic update of local state.
    setBeerInventory(prev => ({ ...prev, [brandName]: [] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate into the new brand.
    const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
    setNavStack(prev => [...prev, brandBtn]);
  };

  /**
   * Adds a new Beer Type to a specific Brand.
   * @param typeName - The type (e.g., "Stout").
   */
  const saveType = async (typeName: string) => {
    // Ensure we know which brand we are adding to.
    if (!user || !barId || !inputDialog.parentContext) return;
    const brand = inputDialog.parentContext;
    const currentTypes = beerInventory[brand] || [];

    // Check for duplicates.
    if (currentTypes.includes(typeName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
        setNavStack(prev => [...prev, typeBtn]);
        return;
    }

    // Update Firestore using Dot Notation to target the nested array field.
    // arrayUnion ensures no duplicates are added database-side.
    await updateDoc(doc(db, 'bars', barId), {
        [`beerInventory.${brand}`]: arrayUnion(typeName)
    });

    // Optimistic update.
    setBeerInventory(prev => ({ ...prev, [brand]: [...(prev[brand] || []), typeName] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate.
    const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
    setNavStack(prev => [...prev, typeBtn]);
  };

  /**
   * Adds a new Well definition (e.g. "Patio Well").
   * @param wellName - The name of the well.
   */
  const saveWell = async (wellName: string) => {
    if (!user || !barId) return;

    if (wells.includes(wellName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        // Auto-request Ice for this well upon selection/creation.
        submitRequest(`ICE: ${wellName}`);
        setNavStack([]);
        return;
    }

    await updateDoc(doc(db, 'bars', barId), {
        wells: arrayUnion(wellName)
    });

    setWells(prev => [...prev, wellName]);
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    submitRequest(`ICE: ${wellName}`);
    setNavStack([]);
  };

  /**
   * Hides a button from the main dashboard.
   * Effectively "deletes" it from the UI without removing data.
   */
  const hideButton = async (btnId: string) => {
    if (!user || !barId) return;
    await updateDoc(doc(db, 'bars', barId), {
        hiddenButtonIds: arrayUnion(btnId)
    });
    setHiddenButtonIds(prev => [...prev, btnId]);
  };


  /**
   * Posts a new notice to the bar's notice board.
   */
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

  /**
   * Deletes a notice (only author allowed via UI logic).
   */
  const deleteNotice = async (noticeId: string) => {
    if (!user || !barId) return;
    if (confirm("Delete this notice?")) {
        await deleteDoc(doc(db, `bars/${barId}/notices`, noticeId));
    }
  };

  /**
   * Dynamically generates children buttons for specific categories.
   * This allows the UI to adapt based on Inventory and Wells configuration.
   *
   * @param btn - The parent button configuration.
   * @returns Array of child button configurations.
   */
  const getDynamicChildren = (btn: ButtonConfig): ButtonConfig[] => {
    // If 'ICE' is selected, show list of Wells.
    if (btn.id === 'ice') {
        const wellButtons: ButtonConfig[] = wells.map(w => ({
            id: `well_${w}`,
            label: w
        }));
        // Add option to create a new well.
        return [...wellButtons, { id: 'add_well', label: '+ ADD WELL', isCustom: true }];
    }

    // If 'BEER' is selected, show list of Brands.
    if (btn.id === 'restock_beer') {
      const brandButtons: ButtonConfig[] = Object.keys(beerInventory).map(brand => ({
        id: `brand_${brand}`,
        label: brand,
        children: []
      }));
      return [...brandButtons, { id: 'add_brand', label: '+ ADD BRAND', action: 'add_brand', isCustom: true }];
    }

    // If a Brand is selected, show list of Types.
    if (btn.id.startsWith('brand_')) {
      const brandName = btn.label;
      const types = beerInventory[brandName] || [];
      const typeButtons: ButtonConfig[] = types.map(t => ({
        id: `type_${brandName}_${t}`,
        label: t,
        children: []
      }));
      return [...typeButtons, { id: 'add_type', label: '+ ADD TYPE', action: 'add_type', isCustom: true }];
    }

    // If a Type is selected, show Quantity Picker.
    if (btn.id.startsWith('type_')) {
      return [
        { id: 'qty_6', label: '6' },
        { id: 'qty_12', label: '12' },
        { id: 'qty_24', label: '24' },
        { id: 'qty_other', label: 'Other', action: 'custom_qty' }
      ];
    }

    // Return static children if no dynamic logic applies.
    return btn.children || [];
  };

  /**
   * Tracks button usage to update the sorting order.
   * Uses Firebase `increment` for atomic counting.
   */
  const trackButtonUsage = (btnId: string) => {
    if (!barId) return;
    updateDoc(doc(db, 'bars', barId), {
        [`buttonUsage.${btnId}`]: increment(1)
    }).catch(e => console.error("Failed to track usage", e));
  };

  /**
   * Sorts a list of buttons.
   * Priority:
   * 1. Custom defined order (via Drag & Drop).
   * 2. Usage frequency (most used first).
   */
  const sortButtons = (btns: ButtonConfig[], contextId: string) => {
    const order = customOrders[contextId];
    if (order) {
        // Sort by defined order array.
        return [...btns].sort((a, b) => {
            const indexA = order.indexOf(a.id);
            const indexB = order.indexOf(b.id);
            if (indexA === -1 && indexB === -1) return 0; // Neither in order list
            if (indexA === -1) return 1; // Put new items at end
            if (indexB === -1) return -1;
            return indexA - indexB;
        });
    }
    // Fallback: Sort by usage count.
    return [...btns].sort((a, b) => {
        const usageA = buttonUsage[a.id] || 0;
        const usageB = buttonUsage[b.id] || 0;
        return usageB - usageA;
    });
  };

  // --- DND Handlers ---

  // Triggered when dragging starts.
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    isDraggingRef.current = true;
  };

  // Triggered when item is dragged over another item.
  const handleDragOver = (event: DragEndEvent, contextId: string, items: ButtonConfig[]) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);

      // Optimistic update: Calculate new array order.
      const newOrder = arrayMove(items, oldIndex, newIndex).map(i => i.id);
      setCustomOrders(prev => ({ ...prev, [contextId]: newOrder }));
    }
  };

  // Triggered when drag ends.
  const handleDragEnd = async (_event: DragEndEvent, contextId: string) => {
    setActiveId(null);
    isDraggingRef.current = false;

    // Persist the new order to Firestore.
    if (barId && customOrders[contextId]) {
       await updateDoc(doc(db, 'bars', barId), {
          [`customOrders.${contextId}`]: customOrders[contextId]
       });
    }
  };

  /**
   * Main Button Click Handler.
   * Routes logic between navigation, custom actions, and request submission.
   */
  const handleButtonClick = (btn: ButtonConfig) => {
    // 1. Track Usage.
    trackButtonUsage(btn.id);

    // 2. Handle Special Actions (Opening Dialogs).
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

    // 3. Handle Navigation vs Submission.
    const children = getDynamicChildren(btn);
    if (children && children.length > 0) {
      // If button has children, navigate deeper.
      setNavStack([...navStack, btn]);
    } else {
      // If leaf node, submit the request.
      // Construct label from the full path (e.g. "Mixers: Coke").
      submitRequest([...navStack, btn].map(b => b.label).join(': '));
      // Reset navigation stack to root.
      setNavStack([]);
    }
  };

  /**
   * Handles the Role Confirmation step after a user selects a bar.
   * Saves user metadata to Firestore.
   */
  const confirmRole = async (role: string, name: string) => {
    if (!user || !barId) return;

    const status = 'active';

    // Create/Update User Document.
    await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
      role: role,
      displayName: name,
      email: user.email,
      status: status,
      joinedAt: serverTimestamp(),
      lastSeen: serverTimestamp(),
      // Set default preferences if not exists.
      notificationPreferences: ROLE_NOTIFICATION_DEFAULTS[role] || []
    }, { merge: true });
    
    // Register Token if available.
    if (fcmToken) {
      await setDoc(doc(db, `bars/${barId}/tokens`, user.uid), {
        token: fcmToken,
        updated: serverTimestamp()
      });
    }
  };

  /**
   * Handles the "Clock Out" action.
   * Removes push token (stopping notifications) and updates status.
   */
  const goOffClock = async () => {
    if (!user || !barId) return;
    // Delete token doc to stop pushes.
    await deleteDoc(doc(db, `bars/${barId}/tokens`, user.uid));
    // Set status to 'off_clock'.
    await updateDoc(doc(db, `bars/${barId}/users`, user.uid), {
      status: 'off_clock'
    });
    // Clear local state.
    setBarId(null);
    localStorage.removeItem('barId');
    setShowOffClockDialog(false);
    // Sign out from Firebase.
    await signOut(auth);
  };

  /**
   * Submits a request to Firestore and triggers Push Notifications via ntfy.sh.
   * @param label - The request label (e.g. "ICE: Well 1").
   */
  const submitRequest = async (label: string) => {
    if (!user || !barId) return;

    // Haptic feedback.
    if (navigator.vibrate) navigator.vibrate(100);

    // Create the Request Document.
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

    // --- Notification Dispatch Logic ---
    const btnId = getButtonIdForLabel(label);
    const topics = new Set<string>();

    // Identify target users.
    allUsers.forEach(u => {
        // Only notify active users who are not the requester (and have a topic configured).
        const isActive = u.status === 'active' || u.status === undefined;
        if (!isActive || u.id === user.uid || !u.ntfyTopic) return;

        // Get user's preferences.
        let prefs = u.notificationPreferences;
        if (!prefs && u.role) {
            prefs = ROLE_NOTIFICATION_DEFAULTS[u.role] || [];
        }

        // Special Rule: 'BREAK' alerts bypass preferences and go to everyone
        // (who would normally see manager stuff, or just everyone? Code implies everyone with topic).
        // Actually code checks:
        if (label.includes('BREAK') || btnId === 'break') {
             topics.add(u.ntfyTopic);
             return;
        }

        // Standard Rule: Notify if user's prefs include this button ID.
        if (prefs && btnId && prefs.includes(btnId)) {
            topics.add(u.ntfyTopic);
        }
    });

    // Send POST requests to ntfy.sh for each topic.
    // This triggers the push notification on the receiving devices.
    topics.forEach(topic => {
         fetch('https://ntfy.sh/' + topic, {
             method: 'POST',
             body: `${displayName}: ${label}`,
             headers: { 'Title': 'New Request', 'Priority': 'high' }
         }).catch(console.error);
    });
  };

  // --- Rendering ---

  // Condition: Not Authenticated.
  if (!user) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white p-6 space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center space-y-2">
            <h1 className="text-6xl font-black tracking-tighter text-white">BAR<span className="text-gray-500">BACKER</span></h1>
            <p className="text-gray-400 text-lg">Silent Communication. Maximum Efficiency.</p>
        </div>
        {/* Anonymous Sign-In Button */}
        <md-filled-button onClick={() => signInAnonymously(auth)} className="w-full max-w-xs h-14 text-lg">
          Start Shift
        </md-filled-button>
        <div className="text-xs text-gray-600 mt-8">v{import.meta.env.VITE_APP_VERSION || '1.0.0'}</div>
      </div>
    );
  }

  // Condition: Authenticated but No Bar Selected.
  if (!barId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black">
        <md-text-button onClick={() => signOut(auth)}>Sign Out</md-text-button>
        {/* BarSearch Component: Handles Search and Create Logic */}
        <BarSearch onJoin={async (b) => {
          if(b.id) {
            // Check if bar exists, if not create it (e.g. from OSM result).
            const barRef = doc(db, 'bars', b.id);
            const existingSnap = await getDoc(barRef);

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
        {/* Help/Install Prompts */}
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

  // Condition: In Bar but No Role Selected.
  if (!userRole) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black">
        <div className="flex w-full justify-between items-center max-w-[300px]">
            {/* Back Button */}
            <md-icon-button onClick={() => { setBarId(null); localStorage.removeItem('barId'); }}><md-icon>arrow_back</md-icon></md-icon-button>
            <md-text-button onClick={() => signOut(auth)}>Sign Out</md-text-button>
        </div>
        {/* Role Selector Form */}
        <RoleSelector onSelect={confirmRole} />
      </div>
    );
  }

  // --- Main Dashboard Rendering ---

  // Slice logs to show recent history only.
  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  // Helper to format timestamps for display.
  const formatTime = (ts: any) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts.seconds * 1000);
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  // Determine current buttons to display (Root or Nested).
  const currentContextId = navStack.length > 0 ? navStack[navStack.length - 1].id : 'main';
  // Get source array (Root 'buttons' state or children of top stack item).
  const currentButtonsSource = navStack.length > 0 ? getDynamicChildren(navStack[navStack.length - 1]) : buttons;
  // Filter out hidden buttons.
  const activeButtons = currentButtonsSource.filter(btn => !hiddenButtonIds.includes(btn.id));
  // Apply sorting.
  const currentButtons = sortButtons(activeButtons, currentContextId);

  // Prepare 'main' screen buttons for DND context on the root screen.
  const sortedAllButtons = sortButtons(buttons, 'main');
  const mainScreenButtons = sortedAllButtons.filter(btn => !hiddenButtonIds.includes(btn.id));

  // Determine if there are pending users to approve (for notification badge).
  const pendingUsers = allUsers.filter(u => u.status === 'pending');
  const showApprovals = pendingUsers.length > 0;

  // Condition: User is Pending Approval.
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

  // --- Authenticated & Active Dashboard ---
  return (
    <div className="h-[100dvh] w-screen flex flex-col bg-black overflow-hidden">
      
      {/* --- Dialogs (Rendered conditionally) --- */}

      {/* Bar Manager: Hide/Show Buttons */}
      <BarManager
        open={showBarManager}
        onClose={() => setShowBarManager(false)}
        barName={barName}
        allButtons={sortedAllButtons}
        hiddenButtonIds={hiddenButtonIds}
        onHideButton={hideButton}
      />

      {/* Roster: View who is clocked in */}
      <WhoIsOnDialog
        open={showWhoIsOn}
        onClose={() => setShowWhoIsOn(false)}
        users={allUsers as BarUser[]}
      />

      {/* Notification Preferences */}
      <NotificationSettings
        open={showNotificationSettings}
        onClose={() => setShowNotificationSettings(false)}
        onSave={saveNotificationPreferences}
        userRole={userRole || ''}
        currentPreferences={notificationPreferences}
        currentNtfyTopic={ntfyTopic}
        allButtons={buttons}
      />

      {/* Input Dialog: Generic for Brands, Types, Wells, Custom */}
      <InputDialog
        open={inputDialog.open}
        mode={inputDialog.type as 'brand' | 'type' | 'well'}
        searchTerm={inputDialog.searchTerm}
        onSearchChange={(val) => setInputDialog(prev => ({ ...prev, searchTerm: val }))}
        onClose={() => setInputDialog(prev => ({ ...prev, open: false }))}
        onSelect={(val) => {
            // Deduplication Check
            const existingLabels = currentButtonsSource.map(b => b.label.toLowerCase());
            if (existingLabels.includes(val.toLowerCase())) {
                alert('This button already exists!');
                return;
            }

            // Route to appropriate handler
            if (inputDialog.type === 'brand') saveBrand(val);
            else if (inputDialog.type === 'type') saveType(val);
            else if (inputDialog.type === 'well') saveWell(val);
            else if (inputDialog.type === 'custom') {
                submitRequest(val);
                setInputDialog(prev => ({ ...prev, open: false }));
            }
        }}
        suggestions={(() => {
            // Provide autocomplete suggestions
            if (inputDialog.type === 'brand') return [...DEFAULT_BEERS, ...Object.keys(beerInventory)];
            if (inputDialog.type === 'type') return Array.from(new Set(Object.values(beerInventory).flat()));
            return [];
        })()}
      />

      {/* Quantity Picker Dialog */}
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

      {/* Add Notice Dialog */}
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

      {/* Off Clock Confirmation Dialog */}
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

      {/* --- Top Bar (User Info & Actions) --- */}
      <div className="flex-none flex flex-wrap justify-between items-center py-12 px-6 bg-[#121212] border-b border-[#333] z-10 gap-4">
        {/* User Info Capsule */}
        <div
            className="flex items-center min-w-[200px] cursor-pointer hover:bg-white/5 p-2 rounded transition-colors mr-auto ml-4"
            onClick={() => setShowAccountDialog(true)}
        >
            <span className="whitespace-pre">    </span>
            <span className="text-white font-bold text-xl truncate">{displayName}</span>
            <span className="text-white text-xl whitespace-pre">        </span>
            <span className="bg-gray-800 px-4 py-2 rounded text-base text-gray-300 whitespace-nowrap">{userRole}</span>
        </div>

        {/* Bar Name & Actions */}
        <div className="flex items-center gap-6 mr-4 flex-wrap justify-end">
           <span className="font-bold text-xl text-white tracking-wide hidden sm:block">{barName}</span>
           <md-text-button onClick={() => setShowBarManager(true)} className="sm:hidden">
             <span className="font-bold text-lg text-white tracking-wide">{barName}</span>
           </md-text-button>

           <div className="flex gap-4 items-center">
                {/* PWA Install Button (Only visible if installable) */}
                {installPrompt && (
                  <md-icon-button onClick={handleInstall} title="Install App" className="navbar-icon-button">
                    <md-icon className="text-blue-400" style={{ fontSize: '36px' }}>download</md-icon>
                  </md-icon-button>
                )}

                {/* Main Action Menu */}
                <div className="relative">
                     <md-icon-button id="usage-menu-anchor" onClick={() => setMenuOpen(!menuOpen)} className="navbar-icon-button">
                         <md-icon className="text-white" style={{ fontSize: '36px' }}>more_vert</md-icon>
                     </md-icon-button>
                     <md-menu anchor="usage-menu-anchor" open={menuOpen} onClosed={() => setMenuOpen(false)}>
                         <md-menu-item onClick={() => setShowWhoIsOn(true)}>
                             <md-icon slot="start">group</md-icon>
                             <div slot="headline">Who's On</div>
                         </md-menu-item>
                         <md-menu-item onClick={() => setShowNotificationSettings(true)}>
                             <md-icon slot="start">notifications</md-icon>
                             <div slot="headline">Alert Settings</div>
                         </md-menu-item>
                         <md-menu-item onClick={() => setShowBarManager(true)}>
                             <md-icon slot="start">settings</md-icon>
                             <div slot="headline">Bar Settings</div>
                         </md-menu-item>
                         <md-menu-item onClick={() => setShowOffClockDialog(true)}>
                             <md-icon slot="start">logout</md-icon>
                             <div slot="headline">Clock Out</div>
                         </md-menu-item>
                     </md-menu>
                </div>
           </div>
        </div>
      </div>

      {/* --- Notices Bar --- */}
      {notices.length > 0 && (
         <div className="w-full bg-[#3D2200] border-b border-[#553300] px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
                <md-icon className="text-orange-400">campaign</md-icon>
                <div className="text-orange-100 text-sm font-medium truncate">
                   <span className="font-bold">{notices[0].authorName}:</span> {notices[0].text}
                   <span className="text-orange-400/60 ml-2 text-xs">({formatTime(notices[0].timestamp)})</span>
                </div>
            </div>
            {/* Allow author to delete their own notice */}
            {notices[0].authorId === user.uid && (
                 <md-icon-button onClick={() => deleteNotice(notices[0].id)} style={{ width: '24px', height: '24px' }}>
                     <md-icon style={{ fontSize: '16px' }}>close</md-icon>
                 </md-icon-button>
            )}
         </div>
      )}

      {/* --- Main Content Area --- */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full relative pb-[35vh]">

      {/* Nested Navigation Overlay (e.g. Mixers -> [List of Mixers]) */}
      {/* Only rendered if navStack is not empty */}
      {navStack.length > 0 && (
        <div className="fixed inset-0 top-[88px] z-50 bg-black/95 flex items-start justify-center p-4 pt-10 animate-in fade-in duration-200 backdrop-blur-sm">
          <div className="bg-[#121212] w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 rounded-2xl border border-gray-800 shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200">
            {/* Overlay Header */}
            <div className="flex items-center gap-3 mb-4 flex-none border-b border-gray-800 pb-4">
              <md-icon-button onClick={() => setNavStack([])}><md-icon>arrow_back</md-icon></md-icon-button>
              <span className="text-lg font-bold text-white uppercase tracking-wide truncate flex-1">
                {navStack.map(b => b.label).join(' > ')}
              </span>
            </div>
            {/* Draggable Context for Nested Items */}
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
              {/* Drag Overlay (Visual Follower) */}
              <DragOverlay>
                {activeId ? (
                   <md-filled-tonal-button style={{ height: '100px', fontSize: '18px', width: '100%', pointerEvents: 'none', opacity: 0.9 }}>
                      {currentButtons.find(b => b.id === activeId)?.label}
                   </md-filled-tonal-button>
                ) : null}
              </DragOverlay>
            </DndContext>
            {/* Overlay Footer */}
            <div className="mt-6 flex-none">
              <md-outlined-button className="w-full" onClick={() => setNavStack([])} style={{ height: '56px' }}>
                 Cancel
              </md-outlined-button>
            </div>
          </div>
        </div>
      )}

      {/* --- Main Button Grid --- */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={(e) => handleDragOver(e, 'main', mainScreenButtons)}
        onDragEnd={(e) => handleDragEnd(e, 'main')}
      >
        <SortableContext items={mainScreenButtons} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-2 gap-8 p-6">
            {/* Map buttons + Custom Request button */}
            {[...mainScreenButtons, { id: 'custom_req_btn', label: 'CUSTOM', icon: 'add', isCustom: true }].map(btn => {
              // Check if there is a pending request for this button (for visual feedback).
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
        {/* Main Screen Drag Overlay */}
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

      {/* --- Bottom Panel (Notifications & Request List) --- */}
      <div className="fixed bottom-0 left-0 right-0 w-full max-h-[33vh] bg-[#1E1E1E] border-t border-[#333] z-20 flex flex-col shadow-2xl transition-all duration-300">
        <div className="flex-none p-2 bg-[#252525] border-b border-[#333] flex justify-between items-center px-4 sticky top-0 z-30">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Notifications ({activeRequests.length})</span>
            {/* Show 'Approvals' button if users are pending */}
            {showApprovals && (
                <md-filled-button
                    onClick={() => setShowBarManager(true)}
                    style={{ height: '24px', fontSize: '12px', ...{ '--md-filled-button-container-color': '#EAB308', '--md-filled-button-label-text-color': '#000' } as React.CSSProperties }}
                >
                    {pendingUsers.length} Approvals
                </md-filled-button>
            )}
        </div>
        {/* Scrollable list of requests */}
        <div className="flex-1 overflow-y-auto w-full">
            {activeRequests.map(req => {
                const isIgnored = ignoredIds.includes(req.id);
                const isMyRequest = user && req.requesterId === user.uid;

                return (
                    <div
                        key={req.id}
                        className={`w-full grid grid-cols-[33vw_1fr_auto] items-center gap-2 p-3 transition-colors border-b border-[#333] ${isIgnored ? 'bg-[#1a1a1a] opacity-60' : 'bg-[#2C1A1A]'}`}
                    >
                        {/* Request Details Column */}
                        <div className="flex flex-col overflow-hidden mr-2">
                            <span className={`font-bold text-lg leading-tight truncate ${isIgnored ? 'text-gray-400' : 'text-red-100'}`}>{req.label}</span>
                            <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-1 truncate">
                                <span>{req.requesterName}</span>
                                <span>•</span>
                                <span>{formatTime(req.timestamp)}</span>
                            </div>
                        </div>

                        {/* Claim Button Column */}
                        <md-filled-button
                            onClick={() => claimRequest(req.id)}
                            className={`w-full ${isIgnored ? '' : 'btn-alert'}`}
                            style={{ height: '48px', minWidth: '100px' }}
                        >
                            CLAIM
                        </md-filled-button>

                        {/* Action Buttons (Cancel/Ignore) Column */}
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

      {/* --- Shift Log Section (Completed Items) --- */}
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

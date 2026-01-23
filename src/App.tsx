import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
  User 
} from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  updateDoc, 
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  deleteDoc,
  arrayUnion,
  increment,
} from 'firebase/firestore';
import { 
  auth, 
  db, 
  googleProvider, 
  requestNotificationPermission, 
  onMessageListener 
} from './firebase';

// --- Material Web Imports ---
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

import { Bar, ButtonConfig, Request, Notice } from './types';
import { DEFAULT_BUTTONS, ROLE_NOTIFICATION_DEFAULTS, DEFAULT_BEERS } from './constants';
import BarSearch from './components/BarSearch';
import RoleSelector from './components/RoleSelector';
import NotificationSettings from './components/NotificationSettings';
import BarManager from './components/BarManager';
import InputDialog from './components/InputDialog';
import { SortableButton } from './components/SortableButton';
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

// --- MAIN APP COMPONENT ---
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBarId = searchParams.get('bar') || localStorage.getItem('barId');
  const [barId, setBarId] = useState<string | null>(initialBarId);
  
  const [barName, setBarName] = useState('');
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userStatus, setUserStatus] = useState<string>('active');
  const [displayName, setDisplayName] = useState<string>('');
  const [notificationPreferences, setNotificationPreferences] = useState<string[]>([]);
  const [ntfyTopic, setNtfyTopic] = useState<string | null>(null);
  
  const [requests, setRequests] = useState<Request[]>([]);
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  const [beerInventory, setBeerInventory] = useState<Record<string, string[]>>({});
  const [wells, setWells] = useState<string[]>([]);
  const [hiddenButtonIds, setHiddenButtonIds] = useState<string[]>([]);
  const [buttonUsage, setButtonUsage] = useState<Record<string, number>>({});
  const [customOrders, setCustomOrders] = useState<Record<string, string[]>>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [inputDialog, setInputDialog] = useState<{ type: 'brand' | 'type' | 'well' | 'custom', open: boolean, parentContext?: string, searchTerm: string }>({ type: 'brand', open: false, searchTerm: '' });
  const [quantityPicker, setQuantityPicker] = useState<{ open: boolean, currentQty: number, context: string }>({ open: false, currentQty: 1, context: '' });

  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);
  const timerRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const [showOffClockDialog, setShowOffClockDialog] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [showBarManager, setShowBarManager] = useState(false);
  const [showAccountDialog, setShowAccountDialog] = useState(false);
  const [ignoredIds, setIgnoredIds] = useState<string[]>([]);

  const [notices, setNotices] = useState<Notice[]>([]);
  const [isAddingNotice, setIsAddingNotice] = useState(false);
  const [noticeText, setNoticeText] = useState('');
  const [noticeError, setNoticeError] = useState<string | null>(null);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const getButtonIdForLabel = (label: string): string | undefined => {
    for (const btn of buttons) {
        if (label === btn.label) return btn.id;
        if (label.startsWith(btn.label)) return btn.id;
        if (btn.children) {
            for (const child of btn.children) {
                if (label === child.label) return btn.id;
            }
        }
    }
    return undefined;
  };

  const activeRequests = requests.filter(r => {
      if (r.status !== 'pending') return false;
      const btnId = getButtonIdForLabel(r.label);

      // Special logic for BREAK
      if (btnId === 'break' || r.label.includes('BREAK')) {
         if (userRole === 'Manager' || userRole === 'Owner') return true;
         // Allow users with same role to see it
         if (r.requesterRole === userRole) return true;
      }

      if (!btnId) return true;
      return notificationPreferences.includes(btnId);
  }).sort((a, b) => {
      const aIgnored = ignoredIds.includes(a.id);
      const bIgnored = ignoredIds.includes(b.id);
      if (aIgnored === bIgnored) {
          return 0;
      }
      return aIgnored ? 1 : -1;
  });

  // Reference to active requests for the nag timer
  const activeRequestsRef = useRef<Request[]>([]);

  // Keep ref updated for the interval
  useEffect(() => {
    activeRequestsRef.current = activeRequests;
  }, [activeRequests]);

  // Nag Script: Play sound every 5 minutes if there are pending requests
  useEffect(() => {
    const interval = setInterval(() => {
       const pending = activeRequestsRef.current.filter(r => !ignoredIds.includes(r.id));
       if (pending.length > 0) {
           const audio = new Audio('/alert.wav');
           audio.play().catch(e => console.log('Audio play failed', e));
           if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
       }
    }, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, [ignoredIds]);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // --- 1. Auth & Token Sync ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      // Only request permission if already installed (standalone)
      if (u) {
          const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
          if (isStandalone) {
              requestNotificationPermission().then(t => t && setFcmToken(t));
          }
      }
    });
    onMessageListener().then((payload: any) => {
      if (navigator.vibrate) navigator.vibrate([500, 200, 500]);

      if (payload && payload.notification) {
        new Notification(payload.notification.title, {
          body: payload.notification.body,
          icon: '/icon-192x192.png',
        });
      }

      const audio = new Audio('/alert.wav');
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
    return () => unsubscribe();
  }, []);

  // --- 2. Bar Logic & Auto-Clock In ---
  useEffect(() => {
    if (!user || !barId) return;

    setSearchParams({ bar: barId });
    localStorage.setItem('barId', barId);

    const userRef = doc(db, `bars/${barId}/users`, user.uid);
    const tokenRef = doc(db, `bars/${barId}/tokens`, user.uid);

    const autoClockIn = async () => {
      if (fcmToken) {
        await setDoc(tokenRef, {
          token: fcmToken,
          updated: serverTimestamp()
        });
        await updateDoc(userRef, { 
          status: 'active',
          lastSeen: serverTimestamp()
        }).catch(() => {});
      }
    };
    autoClockIn();

    const unsubUser = onSnapshot(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setUserRole(data.role);
        setUserStatus(data.status || 'active');
        setDisplayName(data.displayName || 'Unknown');

        // Load notification preferences or set defaults
        if (data.notificationPreferences) {
          setNotificationPreferences(data.notificationPreferences);
        } else if (data.role) {
          // If no preferences saved, use defaults for role
          setNotificationPreferences(ROLE_NOTIFICATION_DEFAULTS[data.role] || []);
        }

        // Auto-coordinate ntfy topic
        const autoTopic = `barbacker-${user.uid}`;
        if (data.ntfyTopic !== autoTopic) {
            updateDoc(userRef, { ntfyTopic: autoTopic }).catch(console.error);
            setNtfyTopic(autoTopic);
        } else {
            setNtfyTopic(data.ntfyTopic);
        }
      } else {
        setUserRole(null);
      }
    });

    const unsubBar = onSnapshot(doc(db, 'bars', barId), (d) => {
      if (d.exists()) {
        const data = d.data() as Bar;
        setBarName(data.name);
        if (data.buttons) {
            // Deduplicate buttons by ID, preferring custom (data.buttons) over default
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

    const unsubReq = onSnapshot(
      query(collection(db, 'requests'), where('barId', '==', barId), orderBy('timestamp', 'desc')), 
      (s) => setRequests(s.docs.map(d => ({ id: d.id, ...d.data() } as Request)))
    );

    const unsubAllUsers = onSnapshot(collection(db, `bars/${barId}/users`), (s) => {
        setAllUsers(s.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    // Notices Subscription
    const unsubNotices = onSnapshot(
      query(collection(db, `bars/${barId}/notices`), orderBy('timestamp', 'desc')),
      (s) => {
        const now = Date.now();
        const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
        const validNotices = s.docs.map(d => ({ id: d.id, ...d.data() } as Notice))
            .filter(n => {
                // Filter locally for 3 days expiration if simpler than composite index query
                const ts = n.timestamp && (n.timestamp as any).toMillis ? (n.timestamp as any).toMillis() : Date.now();
                return (now - ts) < threeDaysMs;
            });
        setNotices(validNotices);
      }
    );

    return () => { unsubUser(); unsubBar(); unsubReq(); unsubAllUsers(); unsubNotices(); };
  }, [user, barId, fcmToken, setSearchParams]);

  // --- Timer ---
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (navStack.length > 0) {
      timerRef.current = setTimeout(() => {
        const trail = navStack.map(b => b.label).join(': ');
        submitRequest(`${trail} (Ask Me)`);
        setNavStack([]);
      }, 60000);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [navStack]);

  // --- Actions ---

  const saveBrand = async (brandName: string) => {
    if (!user || !barId) return;

    if (beerInventory[brandName]) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
        setNavStack(prev => [...prev, brandBtn]);
        return;
    }

    await setDoc(doc(db, 'bars', barId), {
        beerInventory: { [brandName]: [] }
    }, { merge: true });

    setBeerInventory(prev => ({ ...prev, [brandName]: [] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
    setNavStack(prev => [...prev, brandBtn]);
  };

  const saveType = async (typeName: string) => {
    if (!user || !barId || !inputDialog.parentContext) return;
    const brand = inputDialog.parentContext;
    const currentTypes = beerInventory[brand] || [];

    if (currentTypes.includes(typeName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
        setNavStack(prev => [...prev, typeBtn]);
        return;
    }

    await updateDoc(doc(db, 'bars', barId), {
        [`beerInventory.${brand}`]: arrayUnion(typeName)
    });

    setBeerInventory(prev => ({ ...prev, [brand]: [...(prev[brand] || []), typeName] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
    setNavStack(prev => [...prev, typeBtn]);
  };

  const saveWell = async (wellName: string) => {
    if (!user || !barId) return;

    if (wells.includes(wellName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
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

  const hideButton = async (btnId: string) => {
    if (!user || !barId) return;
    await updateDoc(doc(db, 'bars', barId), {
        hiddenButtonIds: arrayUnion(btnId)
    });
    setHiddenButtonIds(prev => [...prev, btnId]);
  };

  const approveUser = async (uid: string) => {
    if (!user || !barId) return;
    await updateDoc(doc(db, `bars/${barId}/users`, uid), { status: 'active' });
  };

  const removeUser = async (uid: string) => {
    if (!user || !barId) return;
    await deleteDoc(doc(db, `bars/${barId}/users`, uid));
  };

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

  const deleteNotice = async (noticeId: string) => {
    if (!user || !barId) return;
    if (confirm("Delete this notice?")) {
        await deleteDoc(doc(db, `bars/${barId}/notices`, noticeId));
    }
  };

  const getDynamicChildren = (btn: ButtonConfig): ButtonConfig[] => {
    if (btn.id === 'ice') {
        const wellButtons: ButtonConfig[] = wells.map(w => ({
            id: `well_${w}`,
            label: w
        }));
        return [...wellButtons, { id: 'add_well', label: '+ ADD WELL', isCustom: true }];
    }

    if (btn.id === 'restock_beer') {
      const brandButtons: ButtonConfig[] = Object.keys(beerInventory).map(brand => ({
        id: `brand_${brand}`,
        label: brand,
        children: []
      }));
      return [...brandButtons, { id: 'add_brand', label: '+ ADD BRAND', action: 'add_brand', isCustom: true }];
    }

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

    if (btn.id.startsWith('type_')) {
      return [
        { id: 'qty_6', label: '6' },
        { id: 'qty_12', label: '12' },
        { id: 'qty_24', label: '24' },
        { id: 'qty_other', label: 'Other', action: 'custom_qty' }
      ];
    }

    return btn.children || [];
  };

  const trackButtonUsage = (btnId: string) => {
    if (!barId) return;
    updateDoc(doc(db, 'bars', barId), {
        [`buttonUsage.${btnId}`]: increment(1)
    }).catch(e => console.error("Failed to track usage", e));
  };

  const sortButtons = (btns: ButtonConfig[], contextId: string) => {
    const order = customOrders[contextId];
    if (order) {
        return [...btns].sort((a, b) => {
            const indexA = order.indexOf(a.id);
            const indexB = order.indexOf(b.id);
            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });
    }
    return [...btns].sort((a, b) => {
        const usageA = buttonUsage[a.id] || 0;
        const usageB = buttonUsage[b.id] || 0;
        return usageB - usageA;
    });
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    isDraggingRef.current = true;
  };

  const handleDragOver = (event: DragEndEvent, contextId: string, items: ButtonConfig[]) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);

      const newOrder = arrayMove(items, oldIndex, newIndex).map(i => i.id);
      setCustomOrders(prev => ({ ...prev, [contextId]: newOrder }));
    }
  };

  const handleDragEnd = async (_event: DragEndEvent, contextId: string) => {
    setActiveId(null);
    isDraggingRef.current = false;

    if (barId && customOrders[contextId]) {
       await updateDoc(doc(db, 'bars', barId), {
          [`customOrders.${contextId}`]: customOrders[contextId]
       });
    }
  };

  const handleButtonClick = (btn: ButtonConfig) => {
    trackButtonUsage(btn.id);

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

    const children = getDynamicChildren(btn);
    if (children && children.length > 0) {
      setNavStack([...navStack, btn]);
    } else {
      submitRequest([...navStack, btn].map(b => b.label).join(': '));
      setNavStack([]);
    }
  };

  const confirmRole = async (role: string, name: string) => {
    if (!user || !barId) return;

    let status = 'active';
    if (role !== 'Owner') {
        const hasManager = allUsers.some(u => u.role === 'Owner' || u.role === 'Manager');
        if (hasManager) {
            status = 'pending';
        }
    }

    await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
      role: role,
      displayName: name,
      email: user.email,
      status: status,
      joinedAt: serverTimestamp(),
      lastSeen: serverTimestamp(),
      notificationPreferences: ROLE_NOTIFICATION_DEFAULTS[role] || []
    }, { merge: true });
    
    if (fcmToken) {
      await setDoc(doc(db, `bars/${barId}/tokens`, user.uid), {
        token: fcmToken,
        updated: serverTimestamp()
      });
    }
  };

  const goOffClock = async () => {
    if (!user || !barId) return;
    await deleteDoc(doc(db, `bars/${barId}/tokens`, user.uid));
    await updateDoc(doc(db, `bars/${barId}/users`, user.uid), {
      status: 'off_clock'
    });
    setBarId(null);
    localStorage.removeItem('barId');
    setShowOffClockDialog(false);
  };

  const submitRequest = async (label: string) => {
    if (!user || !barId) return;
    if (navigator.vibrate) navigator.vibrate(100);
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

    // Send ntfy notifications to relevant users
    // Filter logic: Users who are active, not the requester (optional), and have a topic
    // For simplicity, send to all users with a topic in this bar.
    // In a real app, you might filter by role or preference (using notificationPreferences logic would be complex here without loading every user's preferences fully).
    // Let's blindly send to all configured topics for now, as ntfy is opt-in via topic.

    const btnId = getButtonIdForLabel(label);

    // Send ntfy notifications to relevant users
    // Filter logic: Users who are active, not the requester, and have a topic
    // AND fulfill the role-based filtering requirement
    const topics = new Set<string>();

    allUsers.forEach(u => {
        if (u.id === user.uid || !u.ntfyTopic) return;

        let prefs = u.notificationPreferences;
        if (!prefs && u.role) {
            prefs = ROLE_NOTIFICATION_DEFAULTS[u.role] || [];
        }

        // Special BREAK logic
        if (label.includes('BREAK') || btnId === 'break') {
             if (u.role === 'Manager' || u.role === 'Owner' || u.role === userRole) {
                 topics.add(u.ntfyTopic);
             }
             return;
        }

        if (prefs && btnId && prefs.includes(btnId)) {
            topics.add(u.ntfyTopic);
        }
    });

    topics.forEach(topic => {
        fetch(`https://ntfy.sh/${topic}`, {
            method: 'POST',
            body: `New Request: ${label} (by ${displayName})`,
            headers: {
                'Title': 'BarBacker Alert',
                'Priority': 'high',
                'Tags': 'bell,bar_chart'
            }
        }).catch(err => console.error('Failed to send ntfy', err));
    });
  };

  const claimRequest = async (reqId: string) => {
    await updateDoc(doc(db, 'requests', reqId), {
      status: 'claimed',
      claimedBy: user?.uid,
      claimerName: displayName,
      claimedAt: serverTimestamp()
    });
  };

  const saveNotificationPreferences = async (prefs: string[], topic: string) => {
    if (!user || !barId) return;
    setNotificationPreferences(prefs);
    setNtfyTopic(topic);
    await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
        notificationPreferences: prefs,
        ntfyTopic: topic
    }, { merge: true });
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowAccountDialog(false);
  };

  const handleLeaveBar = async () => {
    if (!user || !barId) return;
    if (!confirm('Are you sure you want to leave this bar? You will need to join again.')) return;
    await deleteDoc(doc(db, `bars/${barId}/users`, user.uid));
    setBarId(null);
    localStorage.removeItem('barId');
    setShowAccountDialog(false);
  };

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

  const handleEmailAuth = async (e: any) => {
    e.preventDefault(); const fd = new FormData(e.target);
    try { isRegistering ? await createUserWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string) : await signInWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string); } catch (e: any) { setAuthError(e.message); }
  };
  const handleGoogle = async () => { try { await signInWithPopup(auth, googleProvider); } catch (e: any) { setAuthError(e.message); } };

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      // Request permissions after install
      if (user) {
         requestNotificationPermission().then(t => t && setFcmToken(t));
      }
    }
  };

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
            <p>Install <span className="text-blue-400">BarBacker PWA</span> for Android.</p>
            <p>For iOS alerts, install <a href="https://ntfy.sh" target="_blank" className="text-blue-400 underline">ntfy.sh</a>.</p>
        </div>
      </div>
    );
  }

  if (!barId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-1">Select Bar</h2>
          <p className="text-gray-500 text-sm">You are {user.email}</p>
        </div>
        <md-text-button onClick={() => signOut(auth)}>Sign Out</md-text-button>
        <BarSearch onJoin={async (b) => {
          if(b.id) {
            const barRef = doc(db, 'bars', b.id);
            const existingSnap = await getDoc(barRef);

            // Only create if it doesn't exist to prevent overwriting custom data
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
            <p>Tip: Install <span className="text-blue-400">BarBacker</span> as an app for the best experience.</p>
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

  if (!userRole) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black">
        <md-icon-button onClick={() => { setBarId(null); localStorage.removeItem('barId'); }}><md-icon>arrow_back</md-icon></md-icon-button>
        <RoleSelector onSelect={confirmRole} />
      </div>
    );
  }

  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  const formatTime = (ts: any) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts.seconds * 1000);
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const currentContextId = navStack.length > 0 ? navStack[navStack.length - 1].id : 'main';
  const currentButtonsSource = navStack.length > 0 ? getDynamicChildren(navStack[navStack.length - 1]) : buttons;
  const activeButtons = currentButtonsSource.filter(btn => !hiddenButtonIds.includes(btn.id));
  const currentButtons = sortButtons(activeButtons, currentContextId);

  const sortedAllButtons = sortButtons(buttons, 'main');
  const mainScreenButtons = sortedAllButtons.filter(btn => !hiddenButtonIds.includes(btn.id));

  const pendingUsers = allUsers.filter(u => u.status === 'pending');
  const showApprovals = (userRole === 'Owner' || userRole === 'Manager') && pendingUsers.length > 0;

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

  return (
    <div className="h-[100dvh] w-screen flex flex-col bg-black overflow-hidden">
      
      <BarManager
        open={showBarManager}
        onClose={() => setShowBarManager(false)}
        barName={barName}
        allButtons={sortedAllButtons}
        hiddenButtonIds={hiddenButtonIds}
        onHideButton={hideButton}
        users={allUsers}
        onApproveUser={approveUser}
        onRemoveUser={removeUser}
        currentUserRole={userRole || ''}
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
            // Deduplication Check
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
          Going off clock stops all notifications. The bar will be unprotected. Are you sure?
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setShowOffClockDialog(false)}>Stay</md-text-button>
          <md-filled-button onClick={goOffClock} className="btn-alert">Leave</md-filled-button>
        </div>
      </md-dialog>

      <div className="flex-none flex justify-between items-center py-12 px-6 bg-[#121212] border-b border-[#333] z-10">
        <div
            className="flex items-center min-w-[200px] cursor-pointer hover:bg-white/5 p-2 rounded transition-colors mr-auto ml-4"
            onClick={() => setShowAccountDialog(true)}
        >
            <span className="whitespace-pre">    </span>
            <span className="text-white font-bold text-xl truncate">{displayName}</span>
            <span className="text-white text-xl whitespace-pre">        </span>
            <span className="bg-gray-800 px-4 py-2 rounded text-base text-gray-300 whitespace-nowrap">{userRole}</span>
        </div>
        <div className="flex items-center gap-6 mr-4">
           <span className="font-bold text-xl text-white tracking-wide hidden sm:block">{barName}</span>
           <md-text-button onClick={() => setShowBarManager(true)} className="sm:hidden">
             <span className="font-bold text-lg text-white tracking-wide">{barName}</span>
           </md-text-button>

           <div className="flex gap-4 items-center">
                {installPrompt && (
                  <md-icon-button onClick={handleInstall} title="Install App" className="navbar-icon-button">
                    <md-icon className="text-blue-400" style={{ fontSize: '36px' }}>download</md-icon>
                  </md-icon-button>
                )}

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
                        {(userRole === 'Owner' || userRole === 'Manager') && (
                            <md-menu-item onClick={() => setShowBarManager(true)}>
                                <md-icon slot="start">store</md-icon>
                                <div slot="headline">Manage Bar</div>
                            </md-menu-item>
                        )}
                        <md-menu-item onClick={handleShare}>
                            <md-icon slot="start">share</md-icon>
                            <div slot="headline">Share</div>
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

      {/* Bulletin Board */}
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

      <md-dialog open={showAccountDialog || undefined} onClose={() => setShowAccountDialog(false)}>
        <div slot="headline">Account Options</div>
        <div slot="content" className="flex flex-col gap-4 pt-4">
            <p className="text-gray-300">Manage your account for <strong>{barName}</strong>.</p>
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

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full relative pb-[35vh]">
      {navStack.length > 0 && (
        <div className="fixed inset-0 top-[88px] z-50 bg-black/95 flex items-start justify-center p-4 pt-10 animate-in fade-in duration-200 backdrop-blur-sm">
          <div className="bg-[#121212] w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 rounded-2xl border border-gray-800 shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 mb-4 flex-none border-b border-gray-800 pb-4">
              <md-icon-button onClick={() => setNavStack([])}><md-icon>arrow_back</md-icon></md-icon-button>
              <span className="text-lg font-bold text-white uppercase tracking-wide truncate flex-1">
                {navStack.map(b => b.label).join(' > ')}
              </span>
            </div>
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

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={(e) => handleDragOver(e, 'main', mainScreenButtons)}
        onDragEnd={(e) => handleDragEnd(e, 'main')}
      >
        <SortableContext items={mainScreenButtons} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-2 gap-8 p-6">
            {[...mainScreenButtons, { id: 'custom_req_btn', label: 'CUSTOM', icon: 'add', isCustom: true }].map(btn => {
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

      <div className="fixed bottom-0 left-0 right-0 w-full max-h-[33vh] bg-[#1E1E1E] border-t border-[#333] z-20 flex flex-col shadow-2xl transition-all duration-300">
        <div className="flex-none p-2 bg-[#252525] border-b border-[#333] flex justify-between items-center px-4 sticky top-0 z-30">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Notifications ({activeRequests.length})</span>
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
                        <div className="flex flex-col overflow-hidden mr-2">
                            <span className={`font-bold text-lg leading-tight truncate ${isIgnored ? 'text-gray-400' : 'text-red-100'}`}>{req.label}</span>
                            <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-1 truncate">
                                <span>{req.requesterName}</span>
                                <span>•</span>
                                <span>{formatTime(req.timestamp)}</span>
                            </div>
                        </div>

                        <md-filled-button
                            onClick={() => claimRequest(req.id)}
                            className={`w-full ${isIgnored ? '' : 'btn-alert'}`}
                            style={{ height: '48px', minWidth: '100px' }}
                        >
                            CLAIM
                        </md-filled-button>

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

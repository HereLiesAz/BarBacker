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
  deleteDoc,
  arrayUnion,
  increment
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

import { PowerOff } from 'lucide-react';

import { Bar, ButtonConfig, Request } from './types';
import { DEFAULT_BUTTONS, ROLE_NOTIFICATION_DEFAULTS } from './constants';
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
  rectSortingStrategy
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
  const [inputDialog, setInputDialog] = useState<{ type: 'brand' | 'type' | 'well', open: boolean, parentContext?: string, searchTerm: string }>({ type: 'brand', open: false, searchTerm: '' });
  const [quantityPicker, setQuantityPicker] = useState<{ open: boolean, currentQty: number, context: string }>({ open: false, currentQty: 1, context: '' });

  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);
  // FIX 1: Use proper return type for browser environment
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showOffClockDialog, setShowOffClockDialog] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [showBarManager, setShowBarManager] = useState(false);
  const [showAccountDialog, setShowAccountDialog] = useState(false);
  const [ignoredIds, setIgnoredIds] = useState<string[]>([]);

  // --- 1. Auth & Token Sync ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) requestNotificationPermission().then(t => t && setFcmToken(t));
    });
    onMessageListener().then(() => {
      // payload usually has { notification: { title, body }, data: { ... } }
      // We need to check if we should alert.
      // Since we don't control the sender here (it's unknown), we can only guess or use local filtering.
      // Assuming payload.data.label exists or we just rely on local updates?
      // For now, let's keep the sound but ideally we'd filter it.
      // IF the prompt implies we should filter EVERYTHING, we should check here.
      // But without payload structure knowledge, it's risky.
      // However, the `activeRequests` list is what visualizes it.

      if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
      new Audio('/alert.mp3').play().catch(() => {});
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

    return () => { unsubUser(); unsubBar(); unsubReq(); unsubAllUsers(); };
  }, [user, barId, fcmToken, setSearchParams]);

  // --- Timer ---
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (navStack.length > 0) {
      timerRef.current = setTimeout(() => {
        // FIX 2: Removed unused 'lastItem'
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

    // Check if it already exists locally
    if (beerInventory[brandName]) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        // Navigate to existing brand
        const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
        setNavStack(prev => [...prev, brandBtn]);
        return;
    }

    // Atomic update: merge new brand into map
    await setDoc(doc(db, 'bars', barId), {
        beerInventory: { [brandName]: [] }
    }, { merge: true });

    // Optimistic update
    setBeerInventory(prev => ({ ...prev, [brandName]: [] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate to new brand
    const brandBtn = { id: `brand_${brandName}`, label: brandName, children: [] };
    setNavStack(prev => [...prev, brandBtn]);
  };

  const saveType = async (typeName: string) => {
    if (!user || !barId || !inputDialog.parentContext) return;
    const brand = inputDialog.parentContext;
    const currentTypes = beerInventory[brand] || [];

    // Check duplication locally
    if (currentTypes.includes(typeName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
        setNavStack(prev => [...prev, typeBtn]);
        return;
    }

    // Atomic update: add to array
    await updateDoc(doc(db, 'bars', barId), {
        [`beerInventory.${brand}`]: arrayUnion(typeName)
    });

    // Optimistic update
    setBeerInventory(prev => ({ ...prev, [brand]: [...(prev[brand] || []), typeName] }));
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Navigate to new type
    const typeBtn = { id: `type_${brand}_${typeName}`, label: typeName, children: [] };
    setNavStack(prev => [...prev, typeBtn]);
  };

  const saveWell = async (wellName: string) => {
    if (!user || !barId) return;

    if (wells.includes(wellName)) {
        setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));
        // Just submit request for existing well
        submitRequest(`ICE: ${wellName}`);
        setNavStack([]);
        return;
    }

    await updateDoc(doc(db, 'bars', barId), {
        wells: arrayUnion(wellName)
    });

    setWells(prev => [...prev, wellName]);
    setInputDialog(prev => ({ ...prev, open: false, searchTerm: '' }));

    // Submit request
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
        // Since we are creating these on the fly, we don't have explicit children stored,
        // but we know logic dictates they have children (types).
        // We set 'children: []' as a signal that it has children,
        // but the actual retrieval will be recursive via getDynamicChildren.
        children: []
      }));
      return [...brandButtons, { id: 'add_brand', label: '+ ADD BRAND', action: 'add_brand', isCustom: true }];
    }

    // Check if button is a Brand
    if (btn.id.startsWith('brand_')) {
      const brandName = btn.label;
      const types = beerInventory[brandName] || [];
      const typeButtons: ButtonConfig[] = types.map(t => ({
        id: `type_${brandName}_${t}`,
        label: t,
        children: [] // Signal it has children (quantities)
      }));
      return [...typeButtons, { id: 'add_type', label: '+ ADD TYPE', action: 'add_type', isCustom: true }];
    }

    // Check if button is a Type
    if (btn.id.startsWith('type_')) {
      // Return quantity options
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
    // Fallback to usage
    return [...btns].sort((a, b) => {
        const usageA = buttonUsage[a.id] || 0;
        const usageB = buttonUsage[b.id] || 0;
        return usageB - usageA;
    });
  };

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

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = async (event: DragEndEvent, contextId: string, items: ButtonConfig[]) => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id && barId) {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);

      const newItems = [...items];
      const [removed] = newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, removed);

      const newOrder = newItems.map(i => i.id);

      setCustomOrders(prev => ({ ...prev, [contextId]: newOrder }));
      await updateDoc(doc(db, 'bars', barId), {
          [`customOrders.${contextId}`]: newOrder
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
      // Parent context is the brand name. The navStack has [Restock Beer, BrandName]
      const brandBtn = navStack[navStack.length - 1];
      setInputDialog({ type: 'type', open: true, parentContext: brandBtn.label, searchTerm: '' });
      return;
    }
    if (btn.action === 'custom_qty') {
      // We want context "RESTOCK BEER: Corona: Bottle"
      setQuantityPicker({
        open: true,
        currentQty: 1,
        context: navStack.map(b => b.label).join(': ')
      });
      return;
    }

    // Standard navigation
    // We check if it SHOULD have children.
    // getDynamicChildren will return children if it's dynamic.
    const children = getDynamicChildren(btn);
    if (children && children.length > 0) {
      setNavStack([...navStack, btn]);
    } else {
      // Leaf node
      submitRequest([...navStack, btn].map(b => b.label).join(': '));
      setNavStack([]);
    }
  };

  const confirmRole = async (role: string, name: string) => {
    if (!user || !barId) return;

    let status = 'active';
    // Check if managers exist using local state to avoid extra reads
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
  };

  const claimRequest = async (reqId: string) => {
    await updateDoc(doc(db, 'requests', reqId), {
      status: 'claimed',
      claimedBy: user?.uid,
      claimerName: displayName
    });
  };

  const saveNotificationPreferences = async (prefs: string[]) => {
    if (!user || !barId) return;
    setNotificationPreferences(prefs); // Optimistic update
    await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
        notificationPreferences: prefs
    }, { merge: true });
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowAccountDialog(false);
  };

  const handleDeleteAccount = async () => {
    if (!user || !barId) return;
    if (!confirm('Are you sure you want to delete your account? This cannot be undone.')) return;

    try {
      // Remove from bar users
      await deleteDoc(doc(db, `bars/${barId}/users`, user.uid));
      // Delete auth account
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

  // --- Views ---

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black">
        <h1 className="text-4xl font-bold tracking-widest text-white">BARBACKER</h1>
        {authError && <div className="text-red-400 p-2 border border-red-800 rounded">{authError}</div>}
        <form onSubmit={handleEmailAuth} className="w-full max-w-sm space-y-4">
          <md-filled-text-field label="Email" name="email" type="email" required />
          <md-filled-text-field label="Password" name="password" type="password" required />
          <md-filled-button type="submit">{isRegistering ? 'Create Account' : 'Clock In'}</md-filled-button>
        </form>
        <div className="flex gap-4 items-center">
           <md-text-button onClick={() => setIsRegistering(!isRegistering)}>{isRegistering ? 'Login' : 'Register'}</md-text-button>
           <md-outlined-button onClick={handleGoogle}><md-icon slot="icon">mail</md-icon>Google</md-outlined-button>
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
            if (b.status === 'temporary') {
               await setDoc(doc(db, 'bars', b.id), {
                 name: b.name,
                 address: b.address || '',
                 status: 'temporary',
                 type: b.type || 'bar',
                 buttons: []
               }, { merge: true });
            }
            setBarId(b.id);
          }
        }} />
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

  // Helper: Find button ID for a given label.
  const getButtonIdForLabel = (label: string): string | undefined => {
    for (const btn of buttons) {
        if (label === btn.label) return btn.id;
        if (label.startsWith(btn.label)) return btn.id; // "ICE: CUBES" ?
        if (btn.children) {
            for (const child of btn.children) {
                if (label === child.label) return btn.id; // Map child to parent ID
            }
        }
    }
    return undefined;
  };

  const activeRequests = requests.filter(r => {
      if (r.status !== 'pending') return false;
      const btnId = getButtonIdForLabel(r.label);
      if (!btnId) return true; // Show unknown/custom types
      return notificationPreferences.includes(btnId);
  }).sort((a, b) => {
      const aIgnored = ignoredIds.includes(a.id);
      const bIgnored = ignoredIds.includes(b.id);
      if (aIgnored === bIgnored) {
          // Default sort by timestamp (already sorted from query?)
          // Query is orderBy('timestamp', 'desc').
          return 0;
      }
      // Ignored (true) goes to bottom
      return aIgnored ? 1 : -1;
  });

  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  // Context management
  const currentContextId = navStack.length > 0 ? navStack[navStack.length - 1].id : 'main';
  const currentButtonsSource = navStack.length > 0 ? getDynamicChildren(navStack[navStack.length - 1]) : buttons;
  const activeButtons = currentButtonsSource.filter(btn => !hiddenButtonIds.includes(btn.id));
  const currentButtons = sortButtons(activeButtons, currentContextId);

  const sortedAllButtons = sortButtons(buttons, 'main');
  // Stable list for Main Screen
  const mainScreenButtons = sortButtons(buttons, 'main').filter(btn => !hiddenButtonIds.includes(btn.id));

  // Inject pending approvals for Managers/Owners
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
        allButtons={buttons}
      />

      <InputDialog
        open={inputDialog.open}
        mode={inputDialog.type}
        searchTerm={inputDialog.searchTerm}
        onSearchChange={(val) => setInputDialog(prev => ({ ...prev, searchTerm: val }))}
        onClose={() => setInputDialog(prev => ({ ...prev, open: false }))}
        onSelect={(val) => {
            if (inputDialog.type === 'brand') saveBrand(val);
            else if (inputDialog.type === 'type') saveType(val);
            else saveWell(val);
        }}
        suggestions={(() => {
            if (inputDialog.type === 'brand') return Object.keys(beerInventory);
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

      <div className="flex-none flex justify-between items-center p-4 bg-[#121212] border-b border-[#333] z-10">
        <div
            className="flex items-center gap-6 cursor-pointer hover:bg-white/5 p-2 rounded transition-colors"
            onClick={() => setShowAccountDialog(true)}
        >
            <span className="text-white font-bold text-lg">{displayName}</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">{userRole}</span>
        </div>
        <div className="flex items-center gap-4">
           <span className="font-bold text-lg text-white tracking-wide hidden sm:block">{barName}</span>
           <md-text-button onClick={() => setShowBarManager(true)} className="sm:hidden">
             <span className="font-bold text-white tracking-wide">{barName}</span>
           </md-text-button>

           <div className="flex gap-2">
                <md-icon-button onClick={() => setShowNotificationSettings(true)} title="Notification Settings">
                    <md-icon className="text-gray-400">settings</md-icon>
                </md-icon-button>
                <md-icon-button onClick={() => setShowOffClockDialog(true)} title="Go Off Clock">
                    <PowerOff className="text-gray-500 hover:text-red-500" />
                </md-icon-button>
           </div>
        </div>
      </div>

      <md-dialog open={showAccountDialog || undefined} onClose={() => setShowAccountDialog(false)}>
        <div slot="headline">Account Options</div>
        <div slot="content" className="flex flex-col gap-4 pt-4">
            <p className="text-gray-300">Manage your account for <strong>{barName}</strong>.</p>
        </div>
        <div slot="actions">
            <md-text-button onClick={handleLogout}>Log Out</md-text-button>
            <md-text-button onClick={handleDeleteAccount} className="text-red-500">Delete Account</md-text-button>
            <md-filled-button onClick={() => setShowAccountDialog(false)}>Close</md-filled-button>
        </div>
      </md-dialog>

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full relative pb-[35vh]">
      {navStack.length > 0 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300 overflow-y-auto pb-32">
          <div className="flex items-center gap-4 mb-8 flex-none">
            <md-icon-button onClick={() => setNavStack([])}><md-icon>close</md-icon></md-icon-button>
            <span className="text-xl font-medium text-gray-200">{navStack.map(b => b.label).join(' > ')}</span>
          </div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={(e) => handleDragEnd(e, currentContextId, currentButtons)}
          >
            <SortableContext items={currentButtons} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-2 gap-4 mb-auto">
                {currentButtons.map(btn => (
                  <SortableButton key={btn.id} id={btn.id} onClick={() => handleButtonClick(btn)}>
                    <md-filled-tonal-button style={{ height: '100px', fontSize: '18px', width: '100%', pointerEvents: 'none' }}>
                      {btn.label}
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
          <div className="mt-8">
            <md-filled-button className="w-full bg-gray-800 text-gray-300" onClick={() => setNavStack([])}>
               Cancel
            </md-filled-button>
          </div>
        </div>
      )}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={(e) => handleDragEnd(e, 'main', mainScreenButtons)}
      >
        <SortableContext items={mainScreenButtons} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-2 gap-6 p-6">
            {mainScreenButtons.map(btn => {
              const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
              return (
                <SortableButton key={btn.id} id={btn.id} onClick={() => handleButtonClick(btn)}>
                  <md-filled-tonal-button className={isPending ? 'btn-alert' : ''} style={{ height: '120px', width: '100%', pointerEvents: 'none' }}>
                    <div className="flex flex-col items-center gap-2">
                      <md-icon style={{ fontSize: 32 }}>{btn.icon || 'circle'}</md-icon>
                      <span className="text-lg font-bold leading-none">{btn.label}</span>
                      {isPending && <span className="text-xs opacity-80">PENDING</span>}
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

      <div className="fixed bottom-0 left-0 right-0 h-[33vh] bg-[#1E1E1E] border-t border-[#333] z-20 flex flex-col shadow-2xl">
        <div className="flex-none p-2 bg-[#252525] border-b border-[#333] flex justify-between items-center px-4">
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
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeRequests.map(req => {
                const isIgnored = ignoredIds.includes(req.id);
                return (
                    <div
                        key={req.id}
                        className={`p-3 rounded-lg flex justify-between items-center transition-colors border-l-4 ${isIgnored ? 'bg-[#1a1a1a] border-gray-600 opacity-60' : 'bg-[#2C1A1A] border-red-500'}`}
                    >
                        <div className="flex flex-col">
                            <span className={`font-medium ${isIgnored ? 'text-gray-400' : 'text-red-100'}`}>{req.label}</span>
                            <span className="text-xs text-gray-500">{req.requesterName} ({req.requesterRole})</span>
                        </div>
                        <div className="flex gap-2">
                            {!isIgnored && (
                                <md-outlined-button
                                    onClick={(e: any) => { e.stopPropagation(); setIgnoredIds(prev => [...prev, req.id]); }}
                                    style={{ height: '32px' }}
                                >
                                    Ignore
                                </md-outlined-button>
                            )}
                            <md-filled-button
                                onClick={() => claimRequest(req.id)}
                                className={isIgnored ? '' : 'btn-alert'}
                                style={{ height: '32px' }}
                            >
                                CLAIM
                            </md-filled-button>
                        </div>
                    </div>
                );
            })}
            {activeRequests.length === 0 && (
                <div className="h-full flex items-center justify-center text-gray-600 italic">
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
                 Asked by {req.requesterName} • Claimed by {req.claimerName || 'Someone'}
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

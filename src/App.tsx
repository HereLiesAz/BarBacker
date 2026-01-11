import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
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
  arrayUnion
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
  const [displayName, setDisplayName] = useState<string>('');
  const [notificationPreferences, setNotificationPreferences] = useState<string[]>([]);
  
  const [requests, setRequests] = useState<Request[]>([]);
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  const [beerInventory, setBeerInventory] = useState<Record<string, string[]>>({});
  const [inputDialog, setInputDialog] = useState<{ type: 'brand' | 'type', open: boolean, parentContext?: string, searchTerm: string }>({ type: 'brand', open: false, searchTerm: '' });
  const [quantityPicker, setQuantityPicker] = useState<{ open: boolean, currentQty: number, context: string }>({ open: false, currentQty: 1, context: '' });

  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);
  // FIX 1: Use proper return type for browser environment
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showOffClockDialog, setShowOffClockDialog] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);

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
        if (data.buttons) setButtons([...DEFAULT_BUTTONS, ...data.buttons]);
        if (data.beerInventory) setBeerInventory(data.beerInventory);
      }
    });

    const unsubReq = onSnapshot(
      query(collection(db, 'requests'), where('barId', '==', barId), orderBy('timestamp', 'desc')), 
      (s) => setRequests(s.docs.map(d => ({ id: d.id, ...d.data() } as Request)))
    );

    return () => { unsubUser(); unsubBar(); unsubReq(); };
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

  const getDynamicChildren = (btn: ButtonConfig): ButtonConfig[] => {
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

  const handleButtonClick = (btn: ButtonConfig) => {
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
    await setDoc(doc(db, `bars/${barId}/users`, user.uid), {
      role: role,
      displayName: name,
      email: user.email,
      status: 'active',
      joinedAt: serverTimestamp(),
      lastSeen: serverTimestamp(),
      // Set defaults on join if not present
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
  });

  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 
  const currentButtons = navStack.length > 0 ? getDynamicChildren(navStack[navStack.length - 1]) : buttons;

  return (
    <div className="min-h-screen pb-24 bg-black relative overflow-hidden">
      
      <NotificationSettings
        open={showNotificationSettings}
        onClose={() => setShowNotificationSettings(false)}
        onSave={saveNotificationPreferences}
        userRole={userRole || ''}
        currentPreferences={notificationPreferences}
        allButtons={buttons}
      />

      <md-dialog open={inputDialog.open} onClose={() => setInputDialog(prev => ({ ...prev, open: false }))}>
        <div slot="headline">{inputDialog.type === 'brand' ? 'Select or Add Brand' : 'Select or Add Type'}</div>
        <div slot="content" className="flex flex-col gap-4 min-w-[300px] h-[300px]">
           <md-filled-text-field
             label="Search..."
             value={inputDialog.searchTerm}
             onInput={(e: Event) => setInputDialog(prev => ({ ...prev, searchTerm: (e.target as HTMLInputElement).value }))}
             style={{ width: '100%' }}
           />
           <div className="flex-1 overflow-y-auto border border-gray-800 rounded p-2">
             <md-list>
               {(() => {
                 const term = inputDialog.searchTerm.toLowerCase();
                 // Determine source list
                 let items: string[] = [];
                 if (inputDialog.type === 'brand') {
                    items = Object.keys(beerInventory);
                 } else {
                    // For types, collect all unique types across all brands to suggest
                    items = Array.from(new Set(Object.values(beerInventory).flat()));
                 }

                 const matches = items.filter(i => i.toLowerCase().includes(term));
                 const exactMatch = matches.some(i => i.toLowerCase() === term);

                 return (
                   <>
                     {matches.map(item => (
                       <md-list-item key={item} type="button" onClick={() => inputDialog.type === 'brand' ? saveBrand(item) : saveType(item)}>
                         <div slot="headline">{item}</div>
                         <md-icon slot="end">arrow_forward</md-icon>
                       </md-list-item>
                     ))}
                     {inputDialog.searchTerm && !exactMatch && (
                       <md-list-item type="button" onClick={() => inputDialog.type === 'brand' ? saveBrand(inputDialog.searchTerm) : saveType(inputDialog.searchTerm)}>
                         <div slot="headline" className="text-blue-400">Create "{inputDialog.searchTerm}"</div>
                         <md-icon slot="end" className="text-blue-400">add_circle</md-icon>
                       </md-list-item>
                     )}
                   </>
                 );
               })()}
             </md-list>
           </div>
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setInputDialog(prev => ({ ...prev, open: false }))}>Cancel</md-text-button>
        </div>
      </md-dialog>

      <md-dialog open={quantityPicker.open} onClose={() => setQuantityPicker(prev => ({ ...prev, open: false }))}>
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

      <md-dialog open={showOffClockDialog} onClose={() => setShowOffClockDialog(false)}>
        <div slot="headline">Abandon Ship?</div>
        <div slot="content">
          Going off clock stops all notifications. The bar will be unprotected. Are you sure?
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setShowOffClockDialog(false)}>Stay</md-text-button>
          <md-filled-button onClick={goOffClock} class="btn-alert">Leave</md-filled-button>
        </div>
      </md-dialog>

      <div className="flex justify-between items-center p-4 bg-[#121212] sticky top-0 z-10 border-b border-[#333]">
        <div className="flex flex-col">
          <span className="font-bold text-lg text-white tracking-wide">{barName}</span>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="text-white font-bold">{displayName}</span>
            <span className="bg-gray-800 px-1 rounded">{userRole}</span>
          </div>
        </div>
        <div className="flex gap-2">
           <md-icon-button onClick={() => setShowNotificationSettings(true)} title="Notification Settings">
             <md-icon className="text-gray-400">settings</md-icon>
           </md-icon-button>
           <md-icon-button onClick={() => setShowOffClockDialog(true)} title="Go Off Clock">
             <PowerOff className="text-gray-500 hover:text-red-500" />
           </md-icon-button>
        </div>
      </div>

      {navStack.length > 0 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-4 mb-8">
            <md-icon-button onClick={() => setNavStack([])}><md-icon>close</md-icon></md-icon-button>
            <span className="text-xl font-medium text-gray-200">{navStack.map(b => b.label).join(' > ')}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-auto">
            {currentButtons.map(btn => (
              <md-filled-tonal-button key={btn.id} onClick={() => handleButtonClick(btn)} style={{ height: '100px', fontSize: '18px' }}>
                {btn.label}
              </md-filled-tonal-button>
            ))}
          </div>
          <div className="mt-8">
            <md-filled-button class="w-full bg-gray-800 text-gray-300" onClick={() => setNavStack([])}>
               Cancel
            </md-filled-button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 p-4">
        {buttons.map(btn => {
          const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
          return (
            <md-filled-tonal-button key={btn.id} onClick={() => handleButtonClick(btn)} class={isPending ? 'btn-alert' : ''} style={{ height: '120px' }}>
              <div className="flex flex-col items-center gap-2">
                <md-icon style={{ fontSize: 32 }}>{btn.icon || 'circle'}</md-icon>
                <span className="text-lg font-bold leading-none">{btn.label}</span>
                {isPending && <span className="text-xs opacity-80">PENDING</span>}
              </div>
            </md-filled-tonal-button>
          );
        })}
      </div>

      <div className="px-4 mt-4">
        {activeRequests.map(req => (
          <div key={req.id} onClick={() => claimRequest(req.id)} className="mb-2 p-4 bg-[#2C1A1A] border-l-4 border-red-500 rounded-r-lg flex justify-between items-center cursor-pointer active:bg-red-900/40 transition-colors">
            <div className="flex flex-col">
              <span className="font-medium text-red-100">{req.label}</span>
              <span className="text-xs text-red-400">{req.requesterName} ({req.requesterRole})</span>
            </div>
            <md-filled-button class="btn-alert" style={{ height: '32px' }}>CLAIM</md-filled-button>
          </div>
        ))}
      </div>

      <div className="px-4 mt-8 pb-10">
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
  );
}

export default App;

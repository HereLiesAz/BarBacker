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
  deleteDoc
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
import TestLogin from './components/TestLogin';
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
  const currentButtons = navStack.length > 0 ? navStack[navStack.length - 1].children || [] : buttons;

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
          <div className="grid grid-cols-2 gap-4">
            {currentButtons.map(btn => (
              <md-filled-tonal-button key={btn.id} onClick={() => { if(btn.children) setNavStack([...navStack, btn]); else { submitRequest([...navStack, btn].map(b=>b.label).join(': ')); setNavStack([]); }}} style={{ height: '100px', fontSize: '18px' }}>
                {btn.label}
              </md-filled-tonal-button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 p-4">
        {buttons.map(btn => {
          const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
          return (
            <md-filled-tonal-button key={btn.id} onClick={() => { if(btn.children) setNavStack([...navStack, btn]); else submitRequest(btn.label); }} class={isPending ? 'btn-alert' : ''} style={{ height: '120px' }}>
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

import React, { useState, useEffect } from 'react';
import { 
  signInAnonymously, 
  onAuthStateChanged,
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
  getDoc
} from 'firebase/firestore';
import { auth, db, requestNotificationPermission, onMessageListener } from './firebase';
import { Bell, CheckCircle, Plus, LogOut, AlertTriangle } from 'lucide-react';

// --- Types ---
interface Bar {
  id: string;
  name: string;
  buttons: ButtonConfig[];
}

interface ButtonConfig {
  id: string;
  label: string;
  isCustom?: boolean;
}

interface Request {
  id: string;
  label: string;
  requesterId: string;
  status: 'pending' | 'claimed';
  timestamp: any;
  barId: string;
}

// --- Default Buttons ---
const DEFAULT_BUTTONS = [
  { id: 'ice', label: 'ICE' },
  { id: 'glass', label: 'GLASSWARE' },
  { id: 'citrus', label: 'CITRUS' },
  { id: 'trash', label: 'TRASH' },
  { id: 'keg', label: 'KEG KICKED' },
  { id: 'manager', label: 'MANAGER' },
];

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [barId, setBarId] = useState<string | null>(localStorage.getItem('barId'));
  const [barName, setBarName] = useState('');
  const [requests, setRequests] = useState<Request[]>([]);
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  // 1. Auth & Notification Setup
  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, (u) => setUser(u));
    
    // Request permission immediately on load (brute force)
    requestNotificationPermission().then(token => {
      if (token) {
        setFcmToken(token);
        console.log("FCM Token:", token);
      }
    });

    // Listen for foreground messages
    onMessageListener().then((payload: any) => {
      // If app is open, VIBRATE HARD
      if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
      // Play a sound if you add an audio element
      new Audio('/alert.mp3').play().catch(() => {});
      console.log("Foreground alert:", payload);
    });
  }, []);

  // 2. Bar Sync & Token Registration
  useEffect(() => {
    if (!user || !barId) return;

    // Save token to bar's user list for cloud functions to find
    const registerToken = async () => {
      if (fcmToken) {
        await setDoc(doc(db, `bars/${barId}/tokens`, user.uid), {
          token: fcmToken,
          updated: serverTimestamp()
        });
      }
    };
    registerToken();

    // Listen to Bar Config (Custom Buttons)
    const unsubBar = onSnapshot(doc(db, 'bars', barId), (doc) => {
      if (doc.exists()) {
        const data = doc.data() as Bar;
        setBarName(data.name);
        if (data.buttons) setButtons([...DEFAULT_BUTTONS, ...data.buttons]);
      }
    });

    // Listen to Requests (The Pulse)
    const q = query(
      collection(db, 'requests'),
      where('barId', '==', barId),
      orderBy('timestamp', 'desc') // Get newest first
    );

    const unsubReq = onSnapshot(q, (snapshot) => {
      const reqs = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Request));
      setRequests(reqs);
    });

    return () => { unsubBar(); unsubReq(); };
  }, [user, barId, fcmToken]);

  // --- Actions ---

  const joinBar = async (name: string) => {
    // Simplified: Using name as ID for chaos. In production, use real IDs.
    const id = name.toLowerCase().replace(/\s/g, '-');
    
    // Create bar if not exists
    const barRef = doc(db, 'bars', id);
    const snap = await getDoc(barRef);
    if (!snap.exists()) {
      await setDoc(barRef, { name, buttons: [] });
    }
    
    localStorage.setItem('barId', id);
    setBarId(id);
  };

  const sendRequest = async (btn: ButtonConfig) => {
    if (!user || !barId) return;
    await addDoc(collection(db, 'requests'), {
      barId,
      label: btn.label,
      requesterId: user.uid,
      status: 'pending',
      timestamp: serverTimestamp(),
      lastNotification: serverTimestamp()
    });
    // Trigger vibration to confirm press
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const claimRequest = async (reqId: string) => {
    await updateDoc(doc(db, 'requests', reqId), {
      status: 'claimed',
      claimedBy: user?.uid
    });
  };

  const addCustomButton = async () => {
    const label = prompt("New button label?");
    if (!label || !barId) return;
    const newBtn = { id: Date.now().toString(), label, isCustom: true };
    
    const barRef = doc(db, 'bars', barId);
    // Note: In real app, use arrayUnion
    const currentCustom = buttons.filter(b => b.isCustom);
    await updateDoc(barRef, {
      buttons: [...currentCustom, newBtn]
    });
  };

  // --- Views ---

  if (!user) return <div className="p-10 text-center">Connecting to the void...</div>;

  if (!barId) {
    return (
      <div className="flex flex-col h-screen items-center justify-center p-6 space-y-4">
        <h1 className="text-2xl font-bold uppercase tracking-widest">The Well</h1>
        <p className="text-gray-400 text-sm text-center">Enter your Bar ID to join the collective suffering.</p>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            joinBar(fd.get('barName') as string);
          }}
          className="w-full max-w-xs flex flex-col gap-3"
        >
          <input 
            name="barName" 
            placeholder="Bar Name (e.g. diving-bell)" 
            className="bg-gray-800 border border-gray-700 p-4 rounded text-white text-center uppercase"
            autoFocus
          />
          <button className="bg-white text-black p-4 rounded font-bold uppercase">Enter</button>
        </form>
      </div>
    );
  }

  const activeRequests = requests.filter(r => r.status === 'pending');
  // Sort logs: claimed requests at top of log section, but below active
  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <h2 className="font-bold uppercase">{barName}</h2>
        <button onClick={() => { localStorage.removeItem('barId'); setBarId(null); }}>
          <LogOut size={20} />
        </button>
      </div>

      {/* iOS Warning (Only show if standalone is false - tricky to detect perfectly, simplified here) */}
      <div className="bg-blue-900/30 p-2 text-xs text-center text-blue-200">
        iOS Users: Share → Add to Home Screen for Notifications
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {buttons.map(btn => {
          // Is this button currently active?
          const isPending = activeRequests.some(r => r.label === btn.label);
          return (
            <button
              key={btn.id}
              onClick={() => sendRequest(btn)}
              className={`grid-btn h-32 ${isPending ? 'bg-red-600 animate-pulse-fast border-red-500' : 'hover:bg-gray-800'}`}
            >
              {isPending && <AlertTriangle className="mb-2" />}
              {btn.label}
              {isPending && <span className="text-xs mt-1">PENDING</span>}
            </button>
          );
        })}
        <button onClick={addCustomButton} className="grid-btn h-32 border-dashed border-gray-600 text-gray-500">
          <Plus />
        </button>
      </div>

      {/* Active Claims List */}
      <div className="p-4">
        <h3 className="text-gray-500 uppercase text-xs mb-2 tracking-widest border-b border-gray-800 pb-1">Pending Tasks</h3>
        {activeRequests.length === 0 && <p className="text-gray-600 italic text-sm">Silence...</p>}
        {activeRequests.map(req => (
          <div key={req.id} onClick={() => claimRequest(req.id)} className="bg-red-900/20 border border-red-900 p-4 mb-2 rounded flex justify-between items-center cursor-pointer hover:bg-red-900/40">
            <span>{req.label}</span>
            <span className="text-xs bg-red-600 px-2 py-1 rounded text-white">CLAIM</span>
          </div>
        ))}
      </div>

      {/* Log */}
      <div className="p-4 opacity-50">
        <h3 className="text-gray-500 uppercase text-xs mb-2 tracking-widest border-b border-gray-800 pb-1">Log</h3>
        {logRequests.map(req => (
          <div key={req.id} className="flex justify-between items-center py-2 text-sm border-b border-gray-900">
            <span className="text-gray-400">{req.label}</span>
            <span className="text-green-600 flex items-center gap-1"><CheckCircle size={12}/> Done</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

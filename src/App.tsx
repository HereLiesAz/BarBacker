import { useState, useEffect } from 'react';
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
  getDoc
} from 'firebase/firestore';
import { 
  auth, 
  db, 
  googleProvider, 
  requestNotificationPermission, 
  onMessageListener 
} from './firebase';
import { CheckCircle, Plus, LogOut, AlertTriangle, Mail, Smartphone, Search, MapPin } from 'lucide-react';

// --- Types ---
interface Bar {
  id: string;
  name: string;
  buttons: ButtonConfig[];
  address?: string;
  osmId?: string;
  status: 'verified' | 'temporary';
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

const DEFAULT_BUTTONS = [
  { id: 'ice', label: 'ICE' },
  { id: 'glass', label: 'GLASSWARE' },
  { id: 'citrus', label: 'CITRUS' },
  { id: 'trash', label: 'TRASH' },
  { id: 'keg', label: 'KEG KICKED' },
  { id: 'manager', label: 'MANAGER' },
];

// --- Helper: OSM Search ---
interface OSMResult {
  place_id: number;
  osm_id: number;
  display_name: string;
  name: string;
  address: {
    city?: string;
    town?: string;
    village?: string;
  };
}

const searchOSM = async (query: string): Promise<OSMResult[]> => {
  if (!query || query.length < 3) return [];
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`,
      {
        headers: {
          'User-Agent': 'TheWellPWA/1.0' // Polite identification
        }
      }
    );
    return await response.json();
  } catch (e) {
    console.error("OSM Search failed", e);
    return [];
  }
};

// --- Component: Bar Search ---
const BarSearch = ({ onJoin }: { onJoin: (bar: Partial<Bar>) => void }) => {
  const [mode, setMode] = useState<'search' | 'create'>('search');
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<OSMResult[]>([]);
  const [searching, setSearching] = useState(false);
  
  // Create Form State
  const [tempName, setTempName] = useState('');
  const [tempCity, setTempCity] = useState('');

  // Debounced Search
  useEffect(() => {
    if (mode !== 'search') return;
    const timeoutId = setTimeout(async () => {
      if (queryText.length >= 3) {
        setSearching(true);
        const data = await searchOSM(queryText);
        setResults(data);
        setSearching(false);
      } else {
        setResults([]);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [queryText, mode]);

  const handleSelect = (item: OSMResult) => {
    // Extract a clean name (first part of comma separated string usually)
    // Or use item.name if available
    const name = item.name || item.display_name.split(',')[0];
    
    onJoin({
      id: `osm_${item.place_id}`,
      name: name,
      address: item.display_name,
      osmId: item.osm_id.toString(),
      status: 'verified'
    });
  };

  const handleManualCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempName) return;
    
    const randomId = `temp_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    onJoin({
      id: randomId,
      name: tempName,
      address: tempCity,
      status: 'temporary'
    });
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      
      {/* Toggle Header */}
      <div className="flex border-b border-gray-800 mb-4">
        <button 
          onClick={() => setMode('search')}
          className={`flex-1 pb-2 text-sm uppercase tracking-widest ${mode === 'search' ? 'text-white border-b-2 border-white' : 'text-gray-600'}`}
        >
          Search (OSM)
        </button>
        <button 
          onClick={() => setMode('create')}
          className={`flex-1 pb-2 text-sm uppercase tracking-widest ${mode === 'create' ? 'text-white border-b-2 border-white' : 'text-gray-600'}`}
        >
          Create Temp
        </button>
      </div>

      {mode === 'search' ? (
        <div className="relative space-y-2">
          <div className="flex items-center bg-gray-900 border border-gray-700 p-3 rounded">
            <Search className="text-gray-500 mr-2" size={20} />
            <input
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              placeholder="Search Bar Name..."
              className="bg-transparent text-white w-full focus:outline-none"
            />
          </div>
          
          {searching && <div className="text-xs text-gray-500 text-center animate-pulse">Searching the atlas...</div>}

          {/* Results List */}
          {results.length > 0 && (
            <ul className="w-full bg-gray-800 border border-gray-700 rounded max-h-60 overflow-auto shadow-2xl">
              {results.map((item) => (
                <li
                  key={item.place_id}
                  onClick={() => handleSelect(item)}
                  className="p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700/50 last:border-0"
                >
                  <div className="font-bold text-white text-sm">{item.name || item.display_name.split(',')[0]}</div>
                  <div className="text-xs text-gray-400 truncate">{item.display_name}</div>
                </li>
              ))}
            </ul>
          )}
          
          {results.length === 0 && queryText.length > 3 && !searching && (
            <div className="text-center p-4 text-gray-500 text-sm">
              <span className="block mb-2">No verified location found.</span>
              <button onClick={() => setMode('create')} className="text-white underline">Create temporary listing</button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleManualCreate} className="space-y-3 animate-in fade-in">
           <div className="bg-yellow-900/20 border border-yellow-700/50 p-3 rounded text-xs text-yellow-200 flex gap-2">
            <AlertTriangle size={16} className="shrink-0" />
            <span>Temporary listings are for use until your venue is verified on OpenStreetMap.</span>
          </div>
          <input
            placeholder="Bar Name"
            value={tempName}
            onChange={e => setTempName(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 p-3 rounded text-white"
            autoFocus
          />
          <input
            placeholder="City / Area (Optional)"
            value={tempCity}
            onChange={e => setTempCity(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 p-3 rounded text-white"
          />
          <button className="w-full bg-white text-black font-bold p-3 rounded uppercase hover:bg-gray-200">
            Create Temporary Bar
          </button>
        </form>
      )}
    </div>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBarId = searchParams.get('bar') || localStorage.getItem('barId');
  const [barId, setBarId] = useState<string | null>(initialBarId);
  
  const [barName, setBarName] = useState('');
  const [requests, setRequests] = useState<Request[]>([]);
  const [buttons, setButtons] = useState<ButtonConfig[]>(DEFAULT_BUTTONS);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  // --- Auth Listeners ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        requestNotificationPermission().then(token => {
          if (token) setFcmToken(token);
        });
      }
    });

    onMessageListener().then((payload: any) => {
      if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
      new Audio('/alert.mp3').play().catch(() => {});
    });

    return () => unsubscribe();
  }, []);

  // --- Data Sync ---
  useEffect(() => {
    if (!user || !barId) return;

    setSearchParams({ bar: barId });
    localStorage.setItem('barId', barId);

    const registerToken = async () => {
      if (fcmToken) {
        await setDoc(doc(db, `bars/${barId}/tokens`, user.uid), {
          token: fcmToken,
          updated: serverTimestamp()
        });
      }
    };
    registerToken();

    const unsubBar = onSnapshot(doc(db, 'bars', barId), (doc) => {
      if (doc.exists()) {
        const data = doc.data() as Bar;
        setBarName(data.name);
        if (data.buttons) setButtons([...DEFAULT_BUTTONS, ...data.buttons]);
      }
    });

    const q = query(
      collection(db, 'requests'),
      where('barId', '==', barId),
      orderBy('timestamp', 'desc')
    );

    const unsubReq = onSnapshot(q, (snapshot) => {
      const reqs = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Request));
      setRequests(reqs);
    });

    return () => { unsubBar(); unsubReq(); };
  }, [user, barId, fcmToken, setSearchParams]);

  // --- Handlers ---

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const email = fd.get('email') as string;
    const password = fd.get('password') as string;
    
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  const joinBar = async (barInfo: Partial<Bar>) => {
    if (!barInfo.id) return;
    
    // Check if bar exists, if not create it
    const barRef = doc(db, 'bars', barInfo.id);
    const snap = await getDoc(barRef);
    
    if (!snap.exists()) {
      await setDoc(barRef, {
        name: barInfo.name,
        address: barInfo.address || '',
        osmId: barInfo.osmId || null,
        status: barInfo.status || 'temporary',
        buttons: [],
        createdAt: serverTimestamp()
      });
    }
    setBarId(barInfo.id);
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
    const currentCustom = buttons.filter(b => b.isCustom);
    await updateDoc(barRef, {
      buttons: [...currentCustom, newBtn]
    });
  };

  // --- LOGIN VIEW ---
  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-8">
        <h1 className="text-3xl font-bold uppercase tracking-[0.5em] text-center border-b border-gray-800 pb-4">
          The Well
        </h1>
        
        {authError && (
          <div className="bg-red-900/30 border border-red-500 p-4 rounded text-sm text-red-200 max-w-sm text-center">
            {authError}
          </div>
        )}

        <div className="w-full max-w-sm space-y-4">
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-3">
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              className="bg-gray-900 border border-gray-700 p-3 rounded text-white placeholder-gray-500"
              required 
            />
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              className="bg-gray-900 border border-gray-700 p-3 rounded text-white placeholder-gray-500"
              required 
            />
            <button className="bg-white text-black font-bold p-3 rounded uppercase hover:bg-gray-200 transition-colors">
              {isRegistering ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 cursor-pointer hover:text-white" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Back to Login' : 'Need an account? Register'}
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-xs">OR</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-700 p-3 rounded hover:bg-gray-800"
          >
            <Mail size={16} /> <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    );
  }

  // --- BAR SELECTION VIEW ---
  if (!barId) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-500">Select Bar</h2>
        <div className="text-sm text-gray-400">Logged in as: {user.email || 'Unknown'}</div>
        <button onClick={() => signOut(auth)} className="text-xs text-red-500 border-b border-red-900 pb-1 mb-8">
          Sign Out
        </button>

        {/* Replaced manual form with the OSM Search Component */}
        <BarSearch onJoin={joinBar} />
      </div>
    );
  }

  // --- MAIN APP VIEW ---
  const activeRequests = requests.filter(r => r.status === 'pending');
  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <div>
          <h2 className="font-bold uppercase">{barName}</h2>
          <span className="text-xs text-gray-600 flex items-center gap-1">
            <MapPin size={10} />
            {barId.startsWith('osm_') ? 'Verified' : 'Temporary'}
          </span>
        </div>
        <button onClick={() => { localStorage.removeItem('barId'); setBarId(null); }}>
          <LogOut size={20} />
        </button>
      </div>

      {/* iOS Warning */}
      <div className="bg-blue-900/30 p-2 text-xs text-center text-blue-200">
        iOS Users: Share → Add to Home Screen for Notifications
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {buttons.map(btn => {
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

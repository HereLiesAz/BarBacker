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
  getDoc
} from 'firebase/firestore';
import { 
  auth, 
  db, 
  googleProvider, 
  requestNotificationPermission, 
  onMessageListener 
} from './firebase';
import { CheckCircle, Plus, LogOut, AlertTriangle, Mail, Search, MapPin, ShieldAlert, X, ChevronRight } from 'lucide-react';

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
  children?: ButtonConfig[]; // The Recursive Nuance
}

interface Request {
  id: string;
  label: string;
  requesterId: string;
  status: 'pending' | 'claimed';
  timestamp: any;
  barId: string;
}

// --- The Nuance Grid ---
const DEFAULT_BUTTONS: ButtonConfig[] = [
  { id: 'ice', label: 'ICE' },
  { 
    id: 'glass', 
    label: 'GLASSWARE', 
    children: [
      { id: 'rocks', label: 'ROCKS' },
      { id: 'collins', label: 'COLLINS' },
      { id: 'pint', label: 'PINT' },
      { id: 'coupe', label: 'COUPE' },
      { id: 'shot', label: 'SHOT GLASS' },
      { id: 'wine', label: 'WINE GLASS' }
    ]
  },
  { 
    id: 'fruit', 
    label: 'FRUIT / GARNISH',
    children: [
      { id: 'lime', label: 'LIMES' },
      { id: 'lemon', label: 'LEMONS' },
      { id: 'orange', label: 'ORANGES' },
      { id: 'cherry', label: 'CHERRIES' },
      { id: 'olive', label: 'OLIVES' },
      { id: 'mint', label: 'MINT' }
    ] 
  },
  { 
    id: 'restock', 
    label: 'RESTOCK WELL',
    children: [
      { id: 'vodka', label: 'VODKA' },
      { id: 'gin', label: 'GIN' },
      { id: 'tequila', label: 'TEQUILA' },
      { id: 'rum', label: 'RUM' },
      { id: 'whiskey', label: 'WHISKEY' },
      { id: 'cordial', label: 'MIXERS / CORDIALS' },
      { id: 'beer', label: 'BOTTLED BEER' }
    ]
  },
  { id: 'keg', label: 'KEG KICKED' },
  { id: 'trash', label: 'TRASH / SPILL' },
  { id: 'security', label: 'SECURITY' }, // Security is always instant. No nuance in a fight.
  { id: 'manager', label: 'MANAGER' },
];

// --- Helper: OSM Search (Unchanged) ---
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
      { headers: { 'User-Agent': 'BarBackerPWA/1.0' } }
    );
    return await response.json();
  } catch (e) {
    console.error("OSM Search failed", e);
    return [];
  }
};

// --- Component: Bar Search (Unchanged) ---
const BarSearch = ({ onJoin }: { onJoin: (bar: Partial<Bar>) => void }) => {
  const [mode, setMode] = useState<'search' | 'create'>('search');
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<OSMResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [tempName, setTempName] = useState('');
  const [tempCity, setTempCity] = useState('');

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
          {results.length > 0 && (
            <ul className="w-full bg-gray-800 border border-gray-700 rounded max-h-60 overflow-auto shadow-2xl">
              {results.map((item) => (
                <li key={item.place_id} onClick={() => handleSelect(item)} className="p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700/50 last:border-0">
                  <div className="font-bold text-white text-sm">{item.name || item.display_name.split(',')[0]}</div>
                  <div className="text-xs text-gray-400 truncate">{item.display_name}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <form onSubmit={handleManualCreate} className="space-y-3 animate-in fade-in">
           <div className="bg-yellow-900/20 border border-yellow-700/50 p-3 rounded text-xs text-yellow-200 flex gap-2">
            <AlertTriangle size={16} className="shrink-0" />
            <span>Temporary listing.</span>
          </div>
          <input placeholder="Bar Name" value={tempName} onChange={e => setTempName(e.target.value)} className="w-full bg-gray-900 border border-gray-700 p-3 rounded text-white" autoFocus />
          <input placeholder="City (Optional)" value={tempCity} onChange={e => setTempCity(e.target.value)} className="w-full bg-gray-900 border border-gray-700 p-3 rounded text-white" />
          <button className="w-full bg-white text-black font-bold p-3 rounded uppercase">Create</button>
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

  // --- Navigation Stack for Nuance ---
  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Auth & Data Listeners ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) requestNotificationPermission().then(t => t && setFcmToken(t));
    });
    onMessageListener().then(() => {
      if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
      new Audio('/alert.mp3').play().catch(() => {});
    });
    return () => unsubscribe();
  }, []);

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

    const unsubReq = onSnapshot(
      query(collection(db, 'requests'), where('barId', '==', barId), orderBy('timestamp', 'desc')), 
      (snapshot) => setRequests(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Request)))
    );

    return () => { unsubBar(); unsubReq(); };
  }, [user, barId, fcmToken, setSearchParams]);

  // --- The Dead Man's Switch Logic ---
  useEffect(() => {
    // Clear existing timer whenever stack changes
    if (timerRef.current) clearTimeout(timerRef.current);

    // If we are in a sub-menu (stack has items)
    if (navStack.length > 0) {
      timerRef.current = setTimeout(() => {
        // TIMEOUT! Send request for the last item in stack + "(Ask Me)"
        const lastItem = navStack[navStack.length - 1];
        
        // Construct the full label trail (e.g., "Glassware: Rocks (Ask Me)")
        const trail = navStack.map(b => b.label).join(': ');
        const finalLabel = `${trail} (Ask Me)`;
        
        submitRequest(finalLabel);
        setNavStack([]); // Close modal
      }, 60000); // 60 Seconds
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [navStack]);


  // --- Actions ---

  const handleButtonPress = (btn: ButtonConfig) => {
    if (btn.children && btn.children.length > 0) {
      // Dive Deeper
      setNavStack([...navStack, btn]);
    } else {
      // Leaf Node - Send Request
      const trail = [...navStack, btn].map(b => b.label).join(': ');
      submitRequest(trail);
      setNavStack([]); // Reset
    }
  };

  const submitRequest = async (label: string) => {
    if (!user || !barId) return;
    
    // Optimistic Vibration
    if (navigator.vibrate) navigator.vibrate(100);

    await addDoc(collection(db, 'requests'), {
      barId,
      label: label,
      requesterId: user.uid,
      status: 'pending',
      timestamp: serverTimestamp(),
      lastNotification: serverTimestamp()
    });
  };

  const claimRequest = async (reqId: string) => {
    await updateDoc(doc(db, 'requests', reqId), {
      status: 'claimed',
      claimedBy: user?.uid
    });
  };

  const joinBar = async (barInfo: Partial<Bar>) => {
    if (!barInfo.id) return;
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

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    try {
      if (isRegistering) await createUserWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string);
      else await signInWithEmailAndPassword(auth, fd.get('email') as string, fd.get('password') as string);
    } catch (err: any) { setAuthError(err.message); }
  };

  const handleGoogleLogin = async () => {
    try { await signInWithPopup(auth, googleProvider); } catch (err: any) { setAuthError(err.message); }
  };

  const addCustomButton = async () => {
    const label = prompt("New button label?");
    if (!label || !barId) return;
    const newBtn = { id: Date.now().toString(), label, isCustom: true };
    await updateDoc(doc(db, 'bars', barId), { buttons: [...buttons.filter(b => b.isCustom), newBtn] });
  };


  // --- RENDER ---

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-8">
        <h1 className="text-3xl font-bold uppercase tracking-[0.5em] text-center border-b border-gray-800 pb-4">BarBacker</h1>
        {authError && <div className="text-red-500 text-sm border border-red-500 p-2">{authError}</div>}
        <form onSubmit={handleEmailLogin} className="w-full max-w-sm flex flex-col gap-3">
          <input name="email" type="email" placeholder="Email" className="bg-gray-900 border border-gray-700 p-3 rounded text-white" required />
          <input name="password" type="password" placeholder="Password" className="bg-gray-900 border border-gray-700 p-3 rounded text-white" required />
          <button className="bg-white text-black font-bold p-3 rounded uppercase">{isRegistering ? 'Register' : 'Sign In'}</button>
        </form>
        <div className="text-gray-500 text-xs cursor-pointer" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Back to Login' : 'Need an account? Register'}
        </div>
        <button onClick={handleGoogleLogin} className="flex gap-2 items-center text-sm text-gray-400 border border-gray-800 p-2 rounded hover:text-white"><Mail size={16}/> Sign in with Google</button>
      </div>
    );
  }

  if (!barId) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-500">Select Bar</h2>
        <button onClick={() => signOut(auth)} className="text-xs text-red-500 pb-4">Sign Out</button>
        <BarSearch onJoin={joinBar} />
      </div>
    );
  }

  const activeRequests = requests.filter(r => r.status === 'pending');
  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 

  // Determine which buttons to show (Main or Submenu)
  const currentButtons = navStack.length > 0 
    ? navStack[navStack.length - 1].children || [] 
    : buttons;

  return (
    <div className="min-h-screen bg-black text-white pb-20 relative">
      
      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800 z-0">
        <div>
          <h2 className="font-bold uppercase">{barName}</h2>
          <span className="text-xs text-gray-600 flex items-center gap-1">
            <MapPin size={10} /> {barId.startsWith('osm_') ? 'Verified' : 'Temporary'}
          </span>
        </div>
        <button onClick={() => { localStorage.removeItem('barId'); setBarId(null); }}><LogOut size={20} /></button>
      </div>

      {/* MODAL OVERLAY (The Darken Effect) */}
      {navStack.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-20 flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
            <div className="flex items-center gap-2 text-xl font-bold text-gray-200">
               {navStack.map(b => b.label).join(' > ')}
            </div>
            <button onClick={() => setNavStack([])} className="p-2 bg-gray-800 rounded-full"><X /></button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {currentButtons.map(btn => (
              <button
                key={btn.id}
                onClick={() => handleButtonPress(btn)}
                className="aspect-square flex flex-col items-center justify-center bg-gray-900 border border-gray-700 rounded-lg active:scale-95 transition-all hover:bg-gray-800"
              >
                <span className="font-bold text-lg">{btn.label}</span>
                {btn.children && <ChevronRight className="mt-2 text-gray-500" />}
              </button>
            ))}
          </div>
          
          <div className="mt-auto text-center text-gray-500 text-xs animate-pulse">
            Select option or wait for auto-send...
          </div>
        </div>
      )}

      {/* MAIN GRID */}
      <div className={`grid grid-cols-2 gap-4 p-4 transition-opacity duration-300 ${navStack.length > 0 ? 'opacity-0' : 'opacity-100'}`}>
        {buttons.map(btn => {
          const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
          return (
            <button
              key={btn.id}
              onClick={() => handleButtonPress(btn)}
              className={`grid-btn h-32 ${isPending ? 'bg-red-600 animate-pulse-fast border-red-500' : 'hover:bg-gray-800'}`}
            >
              {isPending && <AlertTriangle className="mb-2" />}
              {btn.label === 'SECURITY' && <ShieldAlert className="mb-2 text-red-500" />}
              {btn.label}
              {isPending && <span className="text-xs mt-1">PENDING</span>}
            </button>
          );
        })}
        <button onClick={addCustomButton} className="grid-btn h-32 border-dashed border-gray-600 text-gray-500"><Plus /></button>
      </div>

      {/* CLAIMS & LOGS */}
      <div className="p-4">
        {activeRequests.length > 0 && <h3 className="text-gray-500 uppercase text-xs mb-2 tracking-widest border-b border-gray-800 pb-1">Pending</h3>}
        {activeRequests.map(req => (
          <div key={req.id} onClick={() => claimRequest(req.id)} className="bg-red-900/20 border border-red-900 p-4 mb-2 rounded flex justify-between items-center cursor-pointer hover:bg-red-900/40">
            <span className="font-mono text-sm">{req.label}</span>
            <span className="text-xs bg-red-600 px-2 py-1 rounded text-white">CLAIM</span>
          </div>
        ))}

        <div className="mt-8 opacity-50">
          <h3 className="text-gray-500 uppercase text-xs mb-2 tracking-widest border-b border-gray-800 pb-1">Log</h3>
          {logRequests.map(req => (
            <div key={req.id} className="flex justify-between items-center py-2 text-sm border-b border-gray-900">
              <span className="text-gray-400">{req.label}</span>
              <span className="text-green-600 flex items-center gap-1"><CheckCircle size={12}/> Done</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

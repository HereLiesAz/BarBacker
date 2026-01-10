// @ts-nocheck
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

// Using Lucide only for specific icons not in Material Symbols, 
// otherwise defaulting to md-icon strings
import { LogOut } from 'lucide-react';

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
  icon?: string; // Material Symbol Name
  isCustom?: boolean;
  children?: ButtonConfig[];
}

interface Request {
  id: string;
  label: string;
  requesterId: string;
  status: 'pending' | 'claimed';
  timestamp: any;
  barId: string;
}

// --- The Nuance Grid (with Material Icons) ---
const DEFAULT_BUTTONS: ButtonConfig[] = [
  { id: 'ice', label: 'ICE', icon: 'ac_unit' },
  { 
    id: 'glass', 
    label: 'GLASSWARE', 
    icon: 'wine_bar',
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
    icon: 'restaurant',
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
    icon: 'liquor',
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
  { id: 'keg', label: 'KEG KICKED', icon: 'keg' },
  { id: 'trash', label: 'TRASH / SPILL', icon: 'delete' },
  { id: 'security', label: 'SECURITY', icon: 'security' },
  { id: 'manager', label: 'MANAGER', icon: 'manage_accounts' },
];

// --- Helper: OSM Search ---
interface OSMResult {
  place_id: number;
  osm_id: number;
  display_name: string;
  name: string;
  address: { city?: string; town?: string; village?: string; };
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

// --- Component: Bar Search ---
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
    onJoin({ id: randomId, name: tempName, address: tempCity, status: 'temporary' });
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      <md-chip-set>
        <md-filter-chip 
          label="Search" 
          selected={mode === 'search'} 
          onClick={() => setMode('search')}
        />
        <md-filter-chip 
          label="Create Temp" 
          selected={mode === 'create'} 
          onClick={() => setMode('create')}
        />
      </md-chip-set>

      {mode === 'search' ? (
        <div className="space-y-4">
          <md-filled-text-field
            label="Search OpenStreetMap"
            value={queryText}
            onInput={(e: any) => setQueryText(e.target.value)}
            type="search"
          >
            <md-icon slot="leading-icon">search</md-icon>
          </md-filled-text-field>
          
          {searching && <md-circular-progress indeterminate />}

          {results.length > 0 && (
            <md-list className="bg-[#1E1E1E] rounded-xl overflow-hidden">
              {results.map((item) => (
                <md-list-item 
                  key={item.place_id} 
                  type="button"
                  onClick={() => handleSelect(item)}
                >
                  <div slot="headline">{item.name || item.display_name.split(',')[0]}</div>
                  <div slot="supporting-text">{item.display_name}</div>
                  <md-icon slot="end">arrow_forward</md-icon>
                </md-list-item>
              ))}
            </md-list>
          )}
        </div>
      ) : (
        <form onSubmit={handleManualCreate} className="space-y-4">
          <div className="p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg text-yellow-200 text-sm flex gap-2 items-center">
            <md-icon>warning</md-icon>
            Temporary listings are unverified.
          </div>
          <md-filled-text-field
            label="Bar Name"
            value={tempName}
            onInput={(e: any) => setTempName(e.target.value)}
            required
          />
          <md-filled-text-field
            label="City (Optional)"
            value={tempCity}
            onInput={(e: any) => setTempCity(e.target.value)}
          />
          <md-filled-button type="submit">Create Bar</md-filled-button>
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

  // --- Navigation Stack ---
  const [navStack, setNavStack] = useState<ButtonConfig[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Listeners ---
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

  // --- Timer Logic ---
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (navStack.length > 0) {
      timerRef.current = setTimeout(() => {
        const lastItem = navStack[navStack.length - 1];
        const trail = navStack.map(b => b.label).join(': ');
        submitRequest(`${trail} (Ask Me)`);
        setNavStack([]);
      }, 60000);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [navStack]);

  // --- Actions ---
  const handleButtonPress = (btn: ButtonConfig) => {
    if (btn.children && btn.children.length > 0) {
      setNavStack([...navStack, btn]);
    } else {
      const trail = [...navStack, btn].map(b => b.label).join(': ');
      submitRequest(trail);
      setNavStack([]);
    }
  };

  const submitRequest = async (label: string) => {
    if (!user || !barId) return;
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
    const email = fd.get('email') as string;
    const pass = fd.get('password') as string;
    try {
      if (isRegistering) await createUserWithEmailAndPassword(auth, email, pass);
      else await signInWithEmailAndPassword(auth, email, pass);
    } catch (err: any) { setAuthError(err.message); }
  };

  const handleGoogleLogin = async () => {
    try { await signInWithPopup(auth, googleProvider); } catch (err: any) { setAuthError(err.message); }
  };

  const addCustomButton = async () => {
    const label = prompt("New button label?");
    if (!label || !barId) return;
    const newBtn = { id: Date.now().toString(), label, isCustom: true, icon: 'star' };
    await updateDoc(doc(db, 'bars', barId), { buttons: [...buttons.filter(b => b.isCustom), newBtn] });
  };

  // --- Views ---

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black">
        <div className="text-center space-y-2">
          <md-icon style={{ fontSize: 64, color: 'var(--md-sys-color-primary)' }}>local_bar</md-icon>
          <h1 className="text-4xl font-bold tracking-widest text-white">BARBACKER</h1>
        </div>

        {authError && <div className="text-red-400 p-2 bg-red-900/20 rounded border border-red-800">{authError}</div>}

        <form onSubmit={handleEmailLogin} className="w-full max-w-sm space-y-4">
          <md-filled-text-field label="Email" name="email" type="email" required />
          <md-filled-text-field label="Password" name="password" type="password" required />
          <md-filled-button type="submit">{isRegistering ? 'Create Account' : 'Sign In'}</md-filled-button>
        </form>

        <div className="flex gap-4 items-center">
           <md-text-button onClick={() => setIsRegistering(!isRegistering)}>
             {isRegistering ? 'Back to Login' : 'Register'}
           </md-text-button>
           <md-outlined-button onClick={handleGoogleLogin}>
             <md-icon slot="icon">mail</md-icon>
             Google
           </md-outlined-button>
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
        <BarSearch onJoin={joinBar} />
      </div>
    );
  }

  const activeRequests = requests.filter(r => r.status === 'pending');
  const logRequests = requests.filter(r => r.status !== 'pending').slice(0, 20); 
  const currentButtons = navStack.length > 0 ? navStack[navStack.length - 1].children || [] : buttons;

  return (
    <div className="min-h-screen pb-24 bg-black relative overflow-hidden">
      
      {/* App Bar */}
      <div className="flex justify-between items-center p-4 bg-[#121212] sticky top-0 z-10 border-b border-[#333]">
        <div className="flex flex-col">
          <span className="font-bold text-lg text-white tracking-wide">{barName}</span>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <md-icon style={{fontSize: 14}}>location_on</md-icon>
            {barId.startsWith('osm_') ? 'VERIFIED' : 'TEMP'}
          </div>
        </div>
        <md-icon-button onClick={() => { localStorage.removeItem('barId'); setBarId(null); }}>
          <LogOut />
        </md-icon-button>
      </div>

      {/* Drill Down Overlay */}
      {navStack.length > 0 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-4 mb-8">
            <md-icon-button onClick={() => setNavStack([])}>
              <md-icon>close</md-icon>
            </md-icon-button>
            <span className="text-xl font-medium text-gray-200">
              {navStack.map(b => b.label).join(' > ')}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {currentButtons.map(btn => (
              <md-filled-tonal-button
                key={btn.id}
                onClick={() => handleButtonPress(btn)}
                style={{ height: '100px', fontSize: '18px' }}
              >
                {btn.label}
              </md-filled-tonal-button>
            ))}
          </div>
          <div className="mt-auto text-center text-gray-500 text-sm">Auto-sending in 60s...</div>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {buttons.map(btn => {
          const isPending = activeRequests.some(r => r.label.startsWith(btn.label));
          // We use className="btn-alert" defined in index.css to handle the red pulse
          const btnClass = isPending ? 'btn-alert' : '';
          
          return (
            <md-filled-tonal-button
              key={btn.id}
              onClick={() => handleButtonPress(btn)}
              class={btnClass}
              style={{ height: '120px' }}
            >
              <div className="flex flex-col items-center gap-2">
                <md-icon style={{ fontSize: 32 }}>{btn.icon || 'circle'}</md-icon>
                <span className="text-lg font-bold leading-none">{btn.label}</span>
                {isPending && <span className="text-xs opacity-80">PENDING</span>}
              </div>
            </md-filled-tonal-button>
          );
        })}
        <md-outlined-button onClick={addCustomButton} style={{ height: '120px', borderStyle: 'dashed' }}>
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <md-icon>add</md-icon>
            <span>Custom</span>
          </div>
        </md-outlined-button>
      </div>

      {/* Active Claims */}
      <div className="px-4 mt-4">
        {activeRequests.length > 0 && <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Pending Needs</div>}
        {activeRequests.map(req => (
          <div 
            key={req.id} 
            onClick={() => claimRequest(req.id)}
            className="mb-2 p-4 bg-[#2C1A1A] border-l-4 border-red-500 rounded-r-lg flex justify-between items-center cursor-pointer active:bg-red-900/40 transition-colors"
          >
            <span className="font-medium text-red-100">{req.label}</span>
            <md-filled-button class="btn-alert" style={{ height: '32px' }}>CLAIM</md-filled-button>
          </div>
        ))}
      </div>

      {/* History Log */}
      <div className="px-4 mt-8 pb-10">
        <div className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest">Shift Log</div>
        <md-list className="bg-transparent">
          {logRequests.map(req => (
            <md-list-item key={req.id}>
              <div slot="headline" className="text-gray-400">{req.label}</div>
              <md-icon slot="start" className="text-green-800">check_circle</md-icon>
            </md-list-item>
          ))}
        </md-list>
      </div>
    </div>
  );
}

export default App;

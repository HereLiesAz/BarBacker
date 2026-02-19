// Import React hooks.
import { useState, useEffect, useRef } from 'react';
// Import Firestore functions for querying bars.
import { collection, query, getDocs, limit, orderBy, startAt, endAt } from 'firebase/firestore';
// Import the Firestore instance.
import { db } from '../firebase';
// Import Material Web components.
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/radio/radio.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
import '@material/web/progress/circular-progress.js';
// Import types.
import { Bar, OSMResult } from '../types';

// Define component props.
interface BarSearchProps {
  // Callback when a bar is selected or created.
  onJoin: (bar: Partial<Bar>) => void;
}

// Define the available modes for the component.
const MODES = [
    { id: 'search', label: 'Search' },
    { id: 'create', label: 'Create' }
] as const;

// Define the delay (in ms) for the search input debounce.
export const SEARCH_DEBOUNCE_MS = 500;

// The BarSearch component handles finding existing bars (via OSM or Firebase) and creating new ones.
const BarSearch = ({ onJoin }: BarSearchProps) => {
  // State to track the current mode ('search' vs 'create').
  const [mode, setMode] = useState<'search' | 'create'>('search');

  // --- Search State ---
  // The text typed into the search box.
  const [queryText, setQueryText] = useState('');
  // The list of search results.
  const [results, setResults] = useState<OSMResult[]>([]);
  // Boolean indicating if a search is currently in progress.
  const [isSearching, setIsSearching] = useState(false);

  // --- Create State ---
  const [createName, setCreateName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [barType, setBarType] = useState<'bar' | 'restaurant'>('bar');

  // Ref to track if the component is mounted.
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Effect to handle the search logic with debouncing.
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Only search if in search mode and query is long enough.
    if (mode === 'search' && queryText.length > 2) {
      // Set a timeout to delay execution.
      const timer = setTimeout(async () => {
        setIsSearching(true);
        try {
          // Parallel Search: Query both OpenStreetMap and local Firestore.

          // 1. OSM Search
          const osmPromise = fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryText + ' bar')}`, { signal })
            .then(res => res.json())
            .catch((e) => {
                // If aborted, rethrow to be caught by outer catch block
                if (e.name === 'AbortError') throw e;
                return []; // Fallback to empty array on other errors.
            });

          // 2. Firestore Search (Prefix match)
          // Uses 'startAt' and 'endAt' to emulate SQL 'LIKE query%'.
          const fbQuery = query(
             collection(db, 'bars'),
             orderBy('name'),
             startAt(queryText),
             endAt(queryText + '\uf8ff'),
             limit(5)
          );
          const fbPromise = getDocs(fbQuery)
            .then(snap => snap.docs.map(d => {
                const data = d.data() as Bar;
                // Map Firestore format to match OSM result structure for unified rendering.
                return {
                    place_id: d.id,
                    osm_id: d.id,
                    display_name: `${data.name}, ${data.city || ''} ${data.state || ''}`,
                    name: data.name,
                    isFirebase: true
                } as any;
            }))
            .catch(() => []);

          // Await both promises.
          const [osmData, fbData] = await Promise.all([osmPromise, fbPromise]);

          // Merge results: Prioritize Firebase results (existing bars) over OSM results.
          if (!signal.aborted && isMounted.current) {
             setResults([...fbData, ...osmData]);
          }

        } catch (e: any) {
          if (e.name !== 'AbortError') {
              console.error(e);
          }
        } finally {
          if (isMounted.current) {
              setIsSearching(false);
          }
        }
      }, SEARCH_DEBOUNCE_MS);

      // Cleanup function to clear the timeout if query changes before execution (debounce).
      return () => {
        controller.abort();
        clearTimeout(timer);
      };
    } else {
      // Clear results if query is too short.
      setResults([]);
    }
  }, [queryText, mode]);

  // Handler for creating a new bar.
  const handleCreate = (e: React.FormEvent) => {
      e.preventDefault();

      // Validation logic: Name is required.
      // Must have either a Zip Code OR (City AND State) to be valid.
      const hasLocation = (city && state) || zip;

      if (!createName || !hasLocation) {
          alert("Please enter a Business Name and either City/State or Zip Code.");
          return;
      }

      // Call the parent handler with the new bar data.
      onJoin({
          id: `bar_${Date.now()}`, // Generate a temporary timestamp-based ID.
          name: createName,
          address: address,
          city: city,
          state: state,
          zip: zip,
          phone: phone,
          status: 'verified', // Publicly available.
          type: barType
      });
  };

  return (
    <div className="w-[300px] space-y-4">
        {/* Render Search Mode */}
        {mode === 'search' ? (
             <div className="space-y-2">
                <div className="relative">
                    <md-filled-text-field
                        label="Search OpenStreetMap"
                        value={queryText}
                        onInput={(e: any) => setQueryText(e.target.value)}
                        type="search"
                        className="w-full"
                    >
                        {/* Show progress spinner if searching */}
                        {isSearching && (
                             <md-circular-progress slot="trailing-icon" indeterminate style={{ width: '24px', height: '24px' }} data-testid="search-progress"></md-circular-progress>
                        )}
                    </md-filled-text-field>
                </div>

                {/* Render Result List */}
                {results.length > 0 && (
                    <md-list className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto">
                        {results.map((r) => (
                            <md-list-item key={r.place_id} type="button" onClick={() => onJoin({
                                id: String(r.osm_id),
                                name: r.name || r.display_name.split(',')[0],
                                address: r.display_name,
                                status: 'verified',
                                osmId: String(r.osm_id)
                            })}>
                                <div slot="headline" className="text-white">{r.name || r.display_name.split(',')[0]}</div>
                                <div slot="supporting-text" className="text-gray-400 text-xs truncate">{r.display_name}</div>
                                <md-icon slot="start">location_on</md-icon>
                            </md-list-item>
                        ))}
                    </md-list>
                )}
             </div>
        ) : (
             /* Render Create Mode Form */
             <form onSubmit={handleCreate} className="space-y-4 max-h-[60vh] overflow-y-auto px-1">
                <md-filled-text-field
                    label="Business Name *"
                    value={createName}
                    onInput={(e: any) => setCreateName(e.target.value)}
                    required
                />

                <md-filled-text-field
                    label="Address"
                    value={address}
                    onInput={(e: any) => setAddress(e.target.value)}
                />

                <md-filled-text-field
                    label="City"
                    value={city}
                    onInput={(e: any) => setCity(e.target.value)}
                    className="w-full"
                />

                <div className="flex gap-2">
                    <div className="w-24">
                        <md-filled-text-field
                            label="State"
                            value={state}
                            onInput={(e: any) => setState(e.target.value)}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="flex-1">
                        <md-filled-text-field
                            label="Zip Code"
                            value={zip}
                            onInput={(e: any) => setZip(e.target.value)}
                            type="number"
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>

                <md-filled-text-field
                    label="Phone"
                    value={phone}
                    onInput={(e: any) => setPhone(e.target.value)}
                    type="tel"
                />

                {/* Bar Type Selection */}
                <div className="flex gap-6 justify-center my-2">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setBarType('bar')}>
                        <md-radio
                            name="barType"
                            value="bar"
                            checked={barType === 'bar'}
                            touch-target="wrapper"
                        ></md-radio>
                        <span className="text-white">Bar</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setBarType('restaurant')}>
                        <md-radio
                            name="barType"
                            value="restaurant"
                            checked={barType === 'restaurant'}
                            touch-target="wrapper"
                        ></md-radio>
                        <span className="text-white">Restaurant</span>
                    </div>
                </div>

             </form>
        )}

        {/* Toggle Buttons (Search vs Create) */}
        <div className="flex justify-center gap-4 pt-2">
            {MODES.map((btn) => {
                const isActive = mode === btn.id;
                // Dynamically select button component based on active state.
                const Tag = (isActive ? 'md-filled-button' : 'md-outlined-button') as any;

                const handleClick = (e: React.MouseEvent) => {
                    if (isActive && btn.id === 'create') {
                         // If already on create, submit the form.
                         handleCreate(e);
                    } else if (!isActive) {
                        // Switch mode.
                        setMode(btn.id);
                    }
                };

                return (
                    <Tag
                        key={btn.id}
                        onClick={handleClick}
                    >
                        {btn.label}
                    </Tag>
                );
            })}
        </div>
    </div>
  );
};

export default BarSearch;

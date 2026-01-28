import { useState, useEffect } from 'react';
import { collection, query, getDocs, limit, orderBy, startAt, endAt } from 'firebase/firestore';
import { db } from '../firebase';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/radio/radio.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
import '@material/web/progress/circular-progress.js';
import { Bar, OSMResult } from '../types';

interface BarSearchProps {
  onJoin: (bar: Partial<Bar>) => void;
}

const MODES = [
    { id: 'search', label: 'Search' },
    { id: 'create', label: 'Create' }
] as const;

const BarSearch = ({ onJoin }: BarSearchProps) => {
  const [mode, setMode] = useState<'search' | 'create'>('search');

  // Search State
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<OSMResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Create State
  const [createName, setCreateName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [barType, setBarType] = useState<'bar' | 'restaurant'>('bar');

  useEffect(() => {
    if (mode === 'search' && queryText.length > 2) {
      const timer = setTimeout(async () => {
        setIsSearching(true);
        try {
          // Parallel Search: OSM and Firebase
          const osmPromise = fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryText + ' bar')}`)
            .then(res => res.json())
            .catch(() => []);

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
                return {
                    place_id: d.id,
                    osm_id: d.id,
                    display_name: `${data.name}, ${data.city || ''} ${data.state || ''}`,
                    name: data.name,
                    isFirebase: true
                } as any;
            }))
            .catch(() => []);

          const [osmData, fbData] = await Promise.all([osmPromise, fbPromise]);

          // Merge: Firebase first, then OSM
          setResults([...fbData, ...osmData]);

        } catch (e) {
          console.error(e);
        } finally {
          setIsSearching(false);
        }
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [queryText, mode]);

  const handleCreate = (e: React.FormEvent) => {
      e.preventDefault();

      // Validation: Name required. Either Zip OR (City AND State) required.
      const hasLocation = (city && state) || zip;

      if (!createName || !hasLocation) {
          alert("Please enter a Business Name and either City/State or Zip Code.");
          return;
      }

      onJoin({
          id: `bar_${Date.now()}`, // Permanent ID format
          name: createName,
          address: address,
          city: city,
          state: state,
          zip: zip,
          phone: phone,
          status: 'verified', // Publicly available
          type: barType
      });
  };

  return (
    <div className="w-[300px] space-y-4">
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
                        {isSearching && (
                             <md-circular-progress slot="trailing-icon" indeterminate style={{ width: '24px', height: '24px' }}></md-circular-progress>
                        )}
                    </md-filled-text-field>
                </div>

                {isSearching && (
                    <div className="flex justify-center p-4">
                        <md-circular-progress indeterminate></md-circular-progress>
                    </div>
                )}

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

        <div className="flex justify-center gap-4 pt-2">
            {MODES.map((btn) => {
                const isActive = mode === btn.id;
                const Tag = (isActive ? 'md-filled-button' : 'md-outlined-button') as any;

                const handleClick = (e: React.MouseEvent) => {
                    if (isActive && btn.id === 'create') {
                         handleCreate(e);
                    } else if (!isActive) {
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

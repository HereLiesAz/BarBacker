import { useState, useEffect } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/icon/icon.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/progress/circular-progress.js';
import '@material/web/chips/chip-set.js';
import '@material/web/chips/filter-chip.js';
import { OSMResult, Bar } from '../types';

const searchOSM = async (query: string): Promise<OSMResult[]> => {
  if (!query || query.length < 3) return [];
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`, { headers: { 'User-Agent': 'BarBackerPWA/1.0' } });
    return await response.json();
  } catch (e) { return []; }
};

interface BarSearchProps {
  onJoin: (bar: Partial<Bar>) => void;
}

const BarSearch = ({ onJoin }: BarSearchProps) => {
  const [mode, setMode] = useState<'search' | 'create'>('search');
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<OSMResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [tempName, setTempName] = useState('');
  const [tempLocation, setTempLocation] = useState('');

  useEffect(() => {
    if (mode !== 'search') return;
    const t = setTimeout(async () => {
      if (queryText.length >= 3) {
        setSearching(true);
        setResults(await searchOSM(queryText));
        setSearching(false);
      } else setResults([]);
    }, 500);
    return () => clearTimeout(t);
  }, [queryText, mode]);

  const handleSelect = (item: OSMResult) => {
    onJoin({
      id: `osm_${item.place_id}`,
      name: item.name || item.display_name.split(',')[0],
      address: item.display_name,
      osmId: item.osm_id.toString(),
      status: 'verified'
    });
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      <md-chip-set>
        <md-filter-chip label="Search" selected={mode === 'search'} onClick={() => setMode('search')} />
        <md-filter-chip label="Create Temp" selected={mode === 'create'} onClick={() => setMode('create')} />
      </md-chip-set>
      {mode === 'search' ? (
        <div className="space-y-4">
          <md-filled-text-field label="Search OpenStreetMap" value={queryText} onInput={(e: any) => setQueryText(e.target.value)} type="search">
            <md-icon slot="leading-icon">search</md-icon>
          </md-filled-text-field>
          {searching && <md-circular-progress indeterminate />}
          {results.length > 0 && (
            <md-list className="bg-[#1E1E1E] rounded-xl overflow-hidden">
              {results.map((item) => (
                <md-list-item key={item.place_id} type="button" onClick={() => handleSelect(item)}>
                  <div slot="headline">{item.name || item.display_name.split(',')[0]}</div>
                  <div slot="supporting-text">{item.display_name}</div>
                  <md-icon slot="end">arrow_forward</md-icon>
                </md-list-item>
              ))}
            </md-list>
          )}
        </div>
      ) : (
        <form onSubmit={(e) => {
          e.preventDefault();
          if(tempName) {
            onJoin({
              id: `temp_${Date.now()}`,
              name: tempName,
              address: tempLocation,
              status: 'temporary'
            });
          }
        }} className="space-y-4">
          <md-filled-text-field
            label="Bar Name"
            value={tempName}
            onInput={(e: any) => setTempName(e.target.value)}
            required
          />
          <md-filled-text-field
            label="Location (City/Address)"
            value={tempLocation}
            onInput={(e: any) => setTempLocation(e.target.value)}
          />
          <md-filled-button type="submit">Create Bar</md-filled-button>
        </form>
      )}
    </div>
  );
};

export default BarSearch;

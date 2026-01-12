import { useState, useEffect } from 'react';
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
    { id: 'create', label: 'Create Temp' }
] as const;

const BarSearch = ({ onJoin }: BarSearchProps) => {
  const [mode, setMode] = useState<'search' | 'create'>('search');
  const [queryText, setQueryText] = useState('');
  const [barType, setBarType] = useState<'bar' | 'restaurant'>('bar');
  const [results, setResults] = useState<OSMResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (mode === 'search' && queryText.length > 2) {
      const timer = setTimeout(async () => {
        setIsSearching(true);
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryText + ' bar')}`);
          const data = await res.json();
          setResults(data);
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
      onJoin({
          id: `temp_${Date.now()}`,
          name: queryText,
          status: 'temporary',
          type: barType
      });
  };

  return (
    <div className="space-y-4">
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

                {isSearching && (
                    <div className="flex justify-center p-4">
                        <md-circular-progress indeterminate></md-circular-progress>
                    </div>
                )}

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
             <form onSubmit={handleCreate} className="space-y-4">
                <md-filled-text-field
                    label="Bar Name"
                    value={queryText}
                    onInput={(e: any) => setQueryText(e.target.value)}
                />

                <div className="flex gap-6 justify-center">
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

                <div className="flex justify-center">
                    <md-filled-button type="submit">Create Bar</md-filled-button>
                </div>
             </form>
        )}

        <div className="flex justify-center gap-4 pt-2">
            {MODES.map((btn) => {
                const isActive = mode === btn.id;
                const Tag = (isActive ? 'md-filled-button' : 'md-outlined-button') as any;
                return (
                    <Tag
                        key={btn.id}
                        onClick={() => !isActive && setMode(btn.id)}
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

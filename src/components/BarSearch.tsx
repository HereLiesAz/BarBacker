import { useState } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/radio/radio.js';
import { Bar } from '../types';

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

  const handleCreate = (e: React.FormEvent) => {
      e.preventDefault();
      onJoin({ name: queryText, status: 'temporary', type: barType });
  };

  return (
    <div className="space-y-4">
        {mode === 'search' ? (
             <md-filled-text-field
                label="Search OpenStreetMap"
                value={queryText}
                onInput={(e: Event) => setQueryText((e.target as HTMLInputElement).value)}
                type="search"
            />
        ) : (
             <form onSubmit={handleCreate} className="space-y-4">
                <md-filled-text-field
                    label="Bar Name"
                    value={queryText}
                    onInput={(e: Event) => setQueryText((e.target as HTMLInputElement).value)}
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
                const Tag = isActive ? 'md-filled-button' : 'md-outlined-button';
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

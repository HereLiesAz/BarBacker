import { useState } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/chips/chip-set.js';
import '@material/web/chips/filter-chip.js';
import { Bar } from '../types';

interface BarSearchProps {
  onJoin: (bar: Partial<Bar>) => void;
}

const BarSearch = ({ onJoin }: BarSearchProps) => {
  const [mode, setMode] = useState<'search' | 'create'>('search');
  const [queryText, setQueryText] = useState('');

  const handleCreate = (e: React.FormEvent) => {
      e.preventDefault();
      onJoin({ name: queryText, status: 'temporary' });
  };

  return (
    <div className="space-y-4">
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
             <md-filled-text-field
                label="Search OpenStreetMap"
                value={queryText}
                onInput={(e: Event) => setQueryText((e.target as HTMLInputElement).value)}
                type="search"
            />
        ) : (
             <form onSubmit={handleCreate}>
                <md-filled-text-field
                    label="Bar Name"
                    value={queryText}
                    onInput={(e: Event) => setQueryText((e.target as HTMLInputElement).value)}
                />
                <md-filled-button type="submit">Create Bar</md-filled-button>
             </form>
        )}
    </div>
  );
};

export default BarSearch;

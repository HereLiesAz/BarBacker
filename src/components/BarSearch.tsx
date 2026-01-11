import { useState } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
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

        <div className="flex justify-center gap-4">
            {mode === 'search' ? (
                <md-filled-button onClick={() => setMode('search')}>Search</md-filled-button>
            ) : (
                <md-outlined-button onClick={() => setMode('search')}>Search</md-outlined-button>
            )}

            {mode === 'create' ? (
                <md-filled-button onClick={() => setMode('create')}>Create Temp</md-filled-button>
            ) : (
                <md-outlined-button onClick={() => setMode('create')}>Create Temp</md-outlined-button>
            )}
        </div>
    </div>
  );
};

export default BarSearch;

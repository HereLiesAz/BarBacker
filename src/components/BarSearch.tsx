import { useState, useEffect, useRef } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
import '@material/web/dialog/dialog.js';
import '@material/web/progress/circular-progress.js';

import { Bar, OSMResult } from '../types';
import { db } from '../firebase';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

interface BarSearchProps {
  onJoin: (bar: Partial<Bar>) => void;
}

const BarSearch = ({ onJoin }: BarSearchProps) => {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState<OSMResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const checkDuplicates = async (name: string, city?: string, zip?: string): Promise<Bar[]> => {
      // 1. Exact name match or Prefix match (basic)
      // Since we can't do fuzzy search easily, we query for bars starting with the name
      // and then filter client-side for "similarity" and location.
      // Firestore limitation: We can't query by multiple unequal fields easily or substring.

      const q = query(
          collection(db, 'bars'),
          where('name', '>=', name),
          where('name', '<=', name + '\uf8ff')
      );

      const snapshot = await getDocs(q);
      const potentialMatches: Bar[] = [];

      snapshot.forEach(doc => {
          const data = doc.data() as Bar;
          // Client-side location check
          let locationMatch = false;
          if (zip && (data.zip === zip || data.address?.includes(zip))) locationMatch = true;
          if (city && (data.city?.toLowerCase() === city.toLowerCase() || data.address?.toLowerCase().includes(city.toLowerCase()))) locationMatch = true;

          // If no specific location info in DB bar, we might want to include it anyway if name is very similar
          if (!zip && !city) locationMatch = true; // Broad match if user didn't provide loc? No, logic says "in the same location"

          if (locationMatch) {
              potentialMatches.push({ ...data, id: doc.id });
          }
      });

      return potentialMatches;
  };

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (!queryText.trim()) {
        setResults([]);
        return;
    }

    setIsSearching(true);
    searchTimeout.current = setTimeout(async () => {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryText)}&limit=5&addressdetails=1`);
            const data = await res.json();
            setResults(data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsSearching(false);
        }
    }, 500);

    return () => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };
  }, [queryText]);

  const handleOSMSelect = async (item: OSMResult) => {
      // Check if bar exists by OSM ID
      const q = query(collection(db, 'bars'), where('osmId', '==', item.osm_id));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
          const docData = snapshot.docs[0].data() as Bar;
          onJoin({ ...docData, id: snapshot.docs[0].id });
      } else {
          // Create new temp bar from OSM
          const newBar: Partial<Bar> = {
              name: item.name || item.display_name.split(',')[0],
              address: item.display_name,
              osmId: String(item.osm_id),
              status: 'temporary',
              buttons: []
          };
          // We need to create it to get an ID, or let App handle it?
          // App handles it if ID is present. But here we don't have ID.
          // App's logic for creation relies on `b.id` being present if we want to SET it.
          // But here we want to ADD it.

          try {
             const docRef = await addDoc(collection(db, 'bars'), newBar);
             onJoin({ ...newBar, id: docRef.id });
          } catch (e) {
              console.error("Error creating bar:", e);
          }
      }
  };

  return (
    <div className="space-y-4 w-full max-w-md">
        <md-filled-text-field
            label="Search OpenStreetMap"
            value={queryText}
            onInput={(e: Event) => setQueryText((e.target as HTMLInputElement).value)}
            type="search"
            className="w-full"
        />

        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
            {isSearching && (
                <div className="p-4 flex justify-center">
                    <md-circular-progress indeterminate></md-circular-progress>
                </div>
            )}

            <md-list>
                {results.map((item) => (
                    <md-list-item key={item.place_id} type="button" onClick={() => handleOSMSelect(item)}>
                        <div slot="headline">{item.name || item.display_name.split(',')[0]}</div>
                        <div slot="supporting-text">{item.display_name}</div>
                        <md-icon slot="start">location_on</md-icon>
                    </md-list-item>
                ))}

                <md-list-item type="button" onClick={() => setShowCreateDialog(true)}>
                    <div slot="headline" className="text-blue-400 font-bold">Create Bar Listing</div>
                    <div slot="supporting-text">Can't find it? Add it manually.</div>
                    <md-icon slot="start" className="text-blue-400">add_circle</md-icon>
                </md-list-item>
            </md-list>
        </div>

        <md-dialog open={showCreateDialog} onClose={() => setShowCreateDialog(false)}>
            <div slot="headline">Create Bar Listing</div>
            <form slot="content" id="create-bar-form" method="dialog" className="flex flex-col gap-4 pt-4" ref={formRef}>
                 <md-filled-text-field
                    label="Bar Name *"
                    name="name"
                    required
                />
                 <md-filled-text-field
                    label="Address"
                    name="address"
                />
                 <md-filled-text-field
                    label="Phone"
                    name="phone"
                    type="tel"
                />
                <div className="flex gap-2">
                     <md-filled-text-field
                        label="City"
                        name="city"
                        className="flex-1"
                    />
                     <md-filled-text-field
                        label="State"
                        name="state"
                        className="w-24"
                    />
                </div>
                 <md-filled-text-field
                    label="Zip Code"
                    name="zip"
                />
                <div className="text-xs text-gray-400">
                    * Name and (City/State or Zip) are required.
                </div>
            </form>
            <div slot="actions">
                <md-text-button onClick={() => setShowCreateDialog(false)}>Cancel</md-text-button>
                <md-filled-button form="create-bar-form" onClick={async (e: React.MouseEvent) => {
                    e.preventDefault();
                    const form = formRef.current;
                    if (!form) return;
                    const formData = new FormData(form);

                    const name = formData.get('name') as string;
                    const address = formData.get('address') as string;
                    const phone = formData.get('phone') as string;
                    const city = formData.get('city') as string;
                    const state = formData.get('state') as string;
                    const zip = formData.get('zip') as string;

                    // Validation
                    if (!name || (!zip && !(city && state))) {
                        alert("Name and (City/State or Zip) are required.");
                        return;
                    }

                    // Check duplicates
                    const duplicates = await checkDuplicates(name, city, zip);
                    if (duplicates.length > 0) {
                        const confirmed = window.confirm(`Found a similar bar: ${duplicates[0].name} (${duplicates[0].address}). Do you want to join this one instead?`);
                        if (confirmed) {
                            onJoin(duplicates[0]);
                            setShowCreateDialog(false);
                            return;
                        }
                    }

                    // Create new
                    const fullAddress = address ? `${address}, ${city}, ${state} ${zip}` : `${city}, ${state} ${zip}`;
                    const newBar: Partial<Bar> = {
                        name,
                        address: fullAddress,
                        phone,
                        city,
                        state,
                        zip,
                        status: 'temporary',
                        buttons: []
                    };

                    try {
                        const docRef = await addDoc(collection(db, 'bars'), newBar);
                        onJoin({ ...newBar, id: docRef.id });
                        setShowCreateDialog(false);
                    } catch (err) {
                        console.error("Error creating bar:", err);
                        alert("Failed to create bar.");
                    }
                }}>Create</md-filled-button>
            </div>
        </md-dialog>
    </div>
  );
};

export default BarSearch;

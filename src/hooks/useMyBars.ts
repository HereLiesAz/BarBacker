import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import {
  collection,
  doc,
  documentId,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Bar } from '../types';

// Resolves the current user's list of joined bars (subscribed via the
// global users/{uid}.joinedBars array) and their display names.
// Returns:
//   - myBars: the live array of bar IDs the user has joined
//   - barDetails: a map of barId -> bar name, lazily populated via
//     chunked `in` queries (30-id limit per query)
// "Unknown Bar" is used as a fallback for any bar id that fails to
// resolve, so the UI always shows something for every entry in myBars.
export function useMyBars(user: User | null) {
  const [myBars, setMyBars] = useState<string[]>([]);
  const [barDetails, setBarDetails] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!user) return;
    const unsub = onSnapshot(doc(db, 'users', user.uid), (d) => {
      if (d.exists() && d.data().joinedBars) {
        setMyBars(d.data().joinedBars);
      } else {
        setMyBars([]);
      }
    });
    return () => unsub();
  }, [user]);

  useEffect(() => {
    const fetchBarNames = async () => {
      if (myBars.length === 0) {
        setBarDetails({});
        return;
      }

      const chunks: string[][] = [];
      for (let i = 0; i < myBars.length; i += 30) {
        chunks.push(myBars.slice(i, i + 30));
      }

      const newDetails: Record<string, string> = {};
      await Promise.all(chunks.map(async (chunk) => {
        try {
          const q = query(collection(db, 'bars'), where(documentId(), 'in', chunk));
          const snapshot = await getDocs(q);
          snapshot.forEach(d => {
            newDetails[d.id] = (d.data() as Bar).name;
          });
        } catch (e) {
          console.error('Error fetching bar names', e);
        }
      }));

      const finalDetails: Record<string, string> = {};
      myBars.forEach(bid => {
        finalDetails[bid] = newDetails[bid] || 'Unknown Bar';
      });
      setBarDetails(finalDetails);
    };

    fetchBarNames();
  }, [myBars]);

  return { myBars, barDetails };
}

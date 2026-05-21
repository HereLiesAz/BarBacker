import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import {
  collection,
  doc,
  documentId,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Bar } from '../types';

// Generate a 128-bit hex suffix for ntfy topic IDs. ntfy.sh is an
// unauthenticated pub-sub — anyone who knows the topic can subscribe,
// so we use a high-entropy random value instead of deriving from the
// Firebase UID (which leaks into every Request/Notice document).
function generateRandomTopicSuffix(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Subscribes to the global users/{uid} document and exposes:
//   - myBars: live array of bar IDs the user has joined
//   - barDetails: map of barId -> bar name, lazily populated via
//     chunked `in` queries (Firestore's 30-id limit). Fallback
//     "Unknown Bar" so the UI always has something to render.
//   - globalNtfyTopic: account-level ntfy topic. Generated once per
//     account and persisted back to users/{uid}.ntfyTopic if missing;
//     pre-existing accounts keep whatever topic they have stored.
export function useMyBars(user: User | null) {
  const [myBars, setMyBars] = useState<string[]>([]);
  const [barDetails, setBarDetails] = useState<Record<string, string>>({});
  const [globalNtfyTopic, setGlobalNtfyTopic] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    const unsub = onSnapshot(userRef, (d) => {
      const data = d.exists() ? d.data() : {};
      setMyBars(data.joinedBars || []);

      if (data.ntfyTopic) {
        setGlobalNtfyTopic(data.ntfyTopic);
      } else {
        const newTopic = `barbacker-${generateRandomTopicSuffix()}`;
        setGlobalNtfyTopic(newTopic);
        setDoc(userRef, { ntfyTopic: newTopic }, { merge: true })
          .catch(e => console.warn('Failed to persist ntfy topic', e));
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

  return { myBars, barDetails, globalNtfyTopic };
}

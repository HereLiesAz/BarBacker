import { useCallback, useEffect, useRef } from 'react';
import { doc, FieldValue, increment, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Buffers per-button click counts and flushes them to the bar's
// `buttonUsage.<btnId>` map field every 10s (and on unmount /
// beforeunload). Batching keeps the Firestore write rate down on a
// busy bar — a bartender mashing the ICE button shouldn't trigger one
// updateDoc per tap.
//
// Returns a `trackButtonUsage(btnId)` that pushes into the local
// buffer. When barId is null the buffer is silently discarded.
export function useUsageBatching(barId: string | null) {
  const bufferRef = useRef<Record<string, number>>({});

  const flushUsage = useCallback(() => {
    if (!barId) return;
    const buffer = bufferRef.current;
    if (Object.keys(buffer).length === 0) return;

    bufferRef.current = {};

    const updates: Record<string, FieldValue> = {};
    for (const [btnId, count] of Object.entries(buffer)) {
      updates[`buttonUsage.${btnId}`] = increment(count);
    }

    updateDoc(doc(db, 'bars', barId), updates)
      .catch(e => console.error('Failed to flush usage', e));
  }, [barId]);

  useEffect(() => {
    const interval = window.setInterval(flushUsage, 10000);
    const onUnload = () => flushUsage();
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener('beforeunload', onUnload);
      flushUsage();
    };
  }, [flushUsage]);

  const trackButtonUsage = (btnId: string) => {
    if (!barId) return;
    bufferRef.current[btnId] = (bufferRef.current[btnId] || 0) + 1;
  };

  return { trackButtonUsage };
}

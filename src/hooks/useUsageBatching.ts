import { useCallback, useEffect, useRef } from 'react';
import { doc, FieldValue, increment, updateDoc } from 'firebase/firestore';
import { App as CapacitorApp } from '@capacitor/app';
import { db } from '../firebase';

// Buffers per-button click counts and flushes them to the bar's
// `buttonUsage.<btnId>` map field every 10s (and on unmount /
// backgrounding). Batching keeps the Firestore write rate down on a
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

    // Clear only on success, not before the write — the previous
    // version cleared synchronously and then fired the write, so a
    // failed/offline updateDoc lost that buffer's counts permanently
    // (the .catch only logged; nothing put them back). Any tap
    // buffered locally between the clear-on-flush-start and the
    // response is merged back on top of the (still-empty-until-now)
    // buffer, rather than being able to clobber counts that arrived
    // during the in-flight write.
    bufferRef.current = {};

    const updates: Record<string, FieldValue> = {};
    for (const [btnId, count] of Object.entries(buffer)) {
      updates[`buttonUsage.${btnId}`] = increment(count);
    }

    updateDoc(doc(db, 'bars', barId), updates)
      .catch(e => {
        console.error('Failed to flush usage', e);
        const current = bufferRef.current;
        bufferRef.current = { ...buffer };
        for (const [btnId, count] of Object.entries(current)) {
          bufferRef.current[btnId] = (bufferRef.current[btnId] || 0) + count;
        }
      });
  }, [barId]);

  useEffect(() => {
    const interval = window.setInterval(flushUsage, 10000);
    // 'beforeunload' is a browser-tab-close event — it doesn't fire
    // reliably (often not at all) when a Capacitor native app is
    // backgrounded or killed, which is how the overwhelming majority
    // of mobile sessions actually end. appStateChange covers both:
    // native backgrounding/foregrounding AND, on web, the same
    // document-visibility signal Capacitor's web implementation backs
    // it with — kept alongside beforeunload rather than replacing it,
    // since desktop-web tab closes are still worth flushing on too.
    const onUnload = () => flushUsage();
    window.addEventListener('beforeunload', onUnload);
    const appStateListener = CapacitorApp.addListener('appStateChange', ({ isActive }) => {
      if (!isActive) flushUsage();
    }).catch(e => {
      console.warn('Failed to register appStateChange listener', e);
      return null;
    });
    return () => {
      window.clearInterval(interval);
      window.removeEventListener('beforeunload', onUnload);
      appStateListener.then(handle => handle?.remove());
      flushUsage();
    };
  }, [flushUsage]);

  const trackButtonUsage = (btnId: string) => {
    if (!barId) return;
    bufferRef.current[btnId] = (bufferRef.current[btnId] || 0) + 1;
  };

  return { trackButtonUsage };
}

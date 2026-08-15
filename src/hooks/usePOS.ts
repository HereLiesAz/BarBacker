import { useCallback, useEffect, useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, functions } from '../firebase';
import { POSConnectionStatus, POSMenuItem } from '../types';

interface UsePOSArgs {
  barId: string | null;
  isManagerPlus: boolean;
}

// POS integration data + actions (Phase 3). All API calls happen
// server-side (see functions/src/pos/) — this hook only talks to
// Firestore (connection status + synced menu, both read-only here)
// and the three callables that drive the connect/sync flow.
export function usePOS({ barId, isManagerPlus }: UsePOSArgs) {
  const [connections, setConnections] = useState<Record<string, POSConnectionStatus>>({});
  const [menu, setMenu] = useState<POSMenuItem[]>([]);

  useEffect(() => {
    if (!barId || !isManagerPlus) { setConnections({}); return; }
    const unsub = onSnapshot(
      collection(db, `bars/${barId}/posConnection`),
      (s) => {
        const next: Record<string, POSConnectionStatus> = {};
        s.docs.forEach((d) => { next[d.id] = { provider: d.id, ...d.data() } as POSConnectionStatus; });
        setConnections(next);
      },
      (err) => console.error('POS connection listener failed', err),
    );
    return unsub;
  }, [barId, isManagerPlus]);

  useEffect(() => {
    if (!barId || !isManagerPlus) { setMenu([]); return; }
    const unsub = onSnapshot(
      collection(db, `bars/${barId}/menu`),
      (s) => setMenu(s.docs.map((d) => ({ id: d.id, ...d.data() } as POSMenuItem))),
      (err) => console.error('POS menu listener failed', err),
    );
    return unsub;
  }, [barId, isManagerPlus]);

  const connectSquare = useCallback(async () => {
    if (!barId) return;
    const result = await httpsCallable(functions, 'posGetAuthorizeUrl')({ barId });
    const { authorizeUrl } = result.data as { authorizeUrl: string };
    window.location.href = authorizeUrl;
  }, [barId]);

  const connectToast = useCallback(async (clientId: string, clientSecret: string, restaurantGuid: string) => {
    if (!barId) return;
    await httpsCallable(functions, 'posConnectToast')({ barId, clientId, clientSecret, restaurantGuid });
  }, [barId]);

  const disconnect = useCallback(async (provider: string) => {
    if (!barId) return;
    await httpsCallable(functions, 'posDisconnect')({ barId, provider });
  }, [barId]);

  const syncMenu = useCallback(async (provider: string) => {
    if (!barId) return;
    return httpsCallable(functions, 'posSyncMenu')({ barId, provider });
  }, [barId]);

  const getSales = useCallback(async (provider: string, start: Date, end: Date) => {
    if (!barId) return null;
    const result = await httpsCallable(functions, 'posGetSales')({
      barId, provider, start: start.toISOString(), end: end.toISOString(),
    });
    return result.data as { grossCents: number; orderCount: number };
  }, [barId]);

  return { connections, menu, connectSquare, connectToast, disconnect, syncMenu, getSales };
}

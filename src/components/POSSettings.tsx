import { useState } from 'react';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/icon/icon.js';
import { POS_PROVIDERS, POS_PROVIDER_STATUS } from '../constants';
import { POSConnectionStatus, POSMenuItem } from '../types';
import { MdDialog } from './MdDialog';

interface POSSettingsProps {
  open: boolean;
  onClose: () => void;
  connections: Record<string, POSConnectionStatus>;
  menu: POSMenuItem[];
  onConnectSquare: () => Promise<void>;
  onConnectToast: (clientId: string, clientSecret: string, restaurantGuid: string) => Promise<void>;
  onDisconnect: (provider: string) => Promise<void>;
  onSyncMenu: (provider: string) => Promise<unknown>;
  onGetSales: (provider: string, start: Date, end: Date) => Promise<{ grossCents: number; orderCount: number } | null>;
}

// POS Settings dialog — Phase 3 of
// docs/plans/2026-05-21-feature-set-purr-design.md. Only Square and
// Toast are wired up; the rest render disabled per
// POS_PROVIDER_STATUS. All actual API traffic happens server-side —
// this component only calls the three callables + reads the two
// Firestore collections passed in via usePOS.
export function POSSettings({
  open, onClose, connections, menu, onConnectSquare, onConnectToast, onDisconnect, onSyncMenu, onGetSales,
}: POSSettingsProps) {
  const [toastForm, setToastForm] = useState({ clientId: '', clientSecret: '', restaurantGuid: '' });
  const [busyProvider, setBusyProvider] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [insights, setInsights] = useState<{ grossCents: number; orderCount: number } | null>(null);

  const withBusy = async (provider: string, fn: () => Promise<void>) => {
    setBusyProvider(provider);
    setStatusMessage(null);
    try {
      await fn();
    } catch (e) {
      setStatusMessage(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setBusyProvider(null);
    }
  };

  const handleSync = (provider: string) => withBusy(provider, async () => {
    const result = await onSyncMenu(provider) as { data?: { count: number } } | undefined;
    setStatusMessage(`Synced ${result?.data?.count ?? 0} items.`);
  });

  const handleInsights = (provider: string) => withBusy(provider, async () => {
    const end = new Date();
    const start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
    const sales = await onGetSales(provider, start, end);
    setInsights(sales);
  });

  return (
    <MdDialog open={open} onClose={onClose}>
      <div slot="headline">POS Integration</div>
      <div slot="content" className="flex flex-col gap-3 min-w-[320px]">
        {POS_PROVIDERS.map((provider) => {
          const status = POS_PROVIDER_STATUS[provider.id];
          const connection = connections[provider.id];
          const isConnected = connection?.connected;
          const isBusy = busyProvider === provider.id;

          if (status === 'coming_soon') {
            return (
              <div key={provider.id} className="flex items-center justify-between p-2 rounded bg-gray-900 opacity-60">
                <span className="text-gray-400">{provider.label}</span>
                <span className="text-xs text-gray-500">Coming soon — not yet available</span>
              </div>
            );
          }

          return (
            <div key={provider.id} className="border border-gray-800 rounded p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{provider.label}</span>
                {isConnected
                  ? <span className="text-xs text-green-400">✓ Connected{connection.merchantId ? ` — ${connection.merchantId}` : ''}</span>
                  : <span className="text-xs text-gray-500">Not connected</span>}
              </div>
              {connection?.error && <div className="text-xs text-red-400">{connection.error}</div>}

              {!isConnected && provider.id === 'square' && (
                <md-filled-button disabled={isBusy || undefined} onClick={() => withBusy('square', onConnectSquare)}>
                  Connect Square
                </md-filled-button>
              )}

              {!isConnected && provider.id === 'toast' && (
                <div className="flex flex-col gap-2">
                  <md-filled-text-field label="Client ID" value={toastForm.clientId}
                    onInput={(e: any) => setToastForm((f) => ({ ...f, clientId: e.target.value }))} />
                  <md-filled-text-field label="Client Secret" type="password" value={toastForm.clientSecret}
                    onInput={(e: any) => setToastForm((f) => ({ ...f, clientSecret: e.target.value }))} />
                  <md-filled-text-field label="Restaurant GUID" value={toastForm.restaurantGuid}
                    onInput={(e: any) => setToastForm((f) => ({ ...f, restaurantGuid: e.target.value }))} />
                  <md-filled-button
                    disabled={isBusy || !toastForm.clientId || !toastForm.clientSecret || !toastForm.restaurantGuid || undefined}
                    onClick={() => withBusy('toast', () => onConnectToast(toastForm.clientId, toastForm.clientSecret, toastForm.restaurantGuid))}
                  >
                    Connect Toast
                  </md-filled-button>
                </div>
              )}

              {isConnected && (
                <div className="flex gap-2 flex-wrap items-center">
                  <md-outlined-button disabled={isBusy || undefined} onClick={() => handleSync(provider.id)}>
                    Sync Menu
                  </md-outlined-button>
                  <md-outlined-button disabled={isBusy || undefined} onClick={() => handleInsights(provider.id)}>
                    View 7-Day Insights
                  </md-outlined-button>
                  <md-text-button disabled={isBusy || undefined} onClick={() => withBusy(provider.id, () => onDisconnect(provider.id))}>
                    Disconnect
                  </md-text-button>
                </div>
              )}
              {isConnected && connection.lastSyncedAt && (
                <div className="text-xs text-gray-500">
                  ✓ Connected — synced {connection.lastSyncedCount ?? menu.filter((m) => m.provider === provider.id).length} items
                </div>
              )}
            </div>
          );
        })}

        {insights && (
          <div className="border border-blue-900 rounded p-3 text-sm text-blue-300">
            Last 7 days: ${(insights.grossCents / 100).toFixed(2)} gross, {insights.orderCount} orders.
          </div>
        )}
        {statusMessage && <div className="text-xs text-gray-400">{statusMessage}</div>}
      </div>
      <div slot="actions">
        <md-text-button onClick={onClose}>Close</md-text-button>
      </div>
    </MdDialog>
  );
}

export default POSSettings;

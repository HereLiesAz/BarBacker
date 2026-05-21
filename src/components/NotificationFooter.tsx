import type { User } from 'firebase/auth';
import type { Request } from '../types';

interface NotificationFooterProps {
  activeRequests: Request[];
  ignoredIds: string[];
  user: User | null;
  showApprovals: boolean;
  pendingUsersCount: number;
  onClaim: (reqId: string) => void;
  onCancel: (reqId: string) => Promise<void>;
  onIgnore: (reqId: string) => void;
  onOpenBarManager: () => void;
  formatTime: (ts: any) => string;
}

// Fixed bottom panel that shows live active requests. Pure
// presentation — all data, formatting, and side effects flow in via
// props. The `CLAIM`/`CANCEL`/`Ignore` buttons fan out to the
// callbacks the parent owns.
export function NotificationFooter({
  activeRequests,
  ignoredIds,
  user,
  showApprovals,
  pendingUsersCount,
  onClaim,
  onCancel,
  onIgnore,
  onOpenBarManager,
  formatTime,
}: NotificationFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full max-h-[33vh] bg-[#1E1E1E] border-t border-[#333] z-20 flex flex-col shadow-2xl transition-all duration-300">
      <div className="flex-none p-2 bg-[#252525] border-b border-[#333] flex justify-between items-center px-4 sticky top-0 z-30">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Notifications ({activeRequests.length})
        </span>
        {showApprovals && (
          <md-filled-button
            onClick={onOpenBarManager}
            style={{
              height: '24px',
              fontSize: '12px',
              ...({
                '--md-filled-button-container-color': '#EAB308',
                '--md-filled-button-label-text-color': '#000',
              } as React.CSSProperties),
            }}
          >
            {pendingUsersCount} Approvals
          </md-filled-button>
        )}
      </div>
      <div className="flex-1 overflow-y-auto w-full">
        {activeRequests.map(req => {
          const isIgnored = ignoredIds.includes(req.id);
          const isMyRequest = !!user && req.requesterId === user.uid;

          return (
            <div
              key={req.id}
              className={`w-full grid grid-cols-[33vw_1fr_auto] items-center gap-2 p-3 transition-colors border-b border-[#333] ${
                isIgnored ? 'bg-[#1a1a1a] opacity-60' : 'bg-[#2C1A1A]'
              }`}
            >
              <div className="flex flex-col overflow-hidden mr-2">
                <span
                  className={`font-bold text-lg leading-tight truncate ${
                    isIgnored ? 'text-gray-400' : 'text-red-100'
                  }`}
                >
                  {req.label}
                </span>
                <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-1 truncate">
                  <span>{req.requesterName}</span>
                  <span>•</span>
                  <span>{formatTime(req.timestamp)}</span>
                </div>
              </div>

              <md-filled-button
                onClick={() => onClaim(req.id)}
                className={`w-full ${isIgnored ? '' : 'btn-alert'}`}
                style={{ height: '48px', minWidth: '100px' }}
              >
                CLAIM
              </md-filled-button>

              {isMyRequest ? (
                <md-outlined-button
                  onClick={async (e: any) => {
                    e.stopPropagation();
                    if (confirm('Cancel this request?')) {
                      await onCancel(req.id);
                    }
                  }}
                  style={{
                    height: '48px',
                    minWidth: '100px',
                    '--md-outlined-button-label-text-color': '#EF4444',
                    '--md-sys-color-outline': '#EF4444',
                  } as React.CSSProperties}
                >
                  CANCEL
                </md-outlined-button>
              ) : (
                !isIgnored && (
                  <md-outlined-button
                    onClick={(e: any) => {
                      e.stopPropagation();
                      onIgnore(req.id);
                    }}
                    style={{ height: '48px', minWidth: '100px' }}
                  >
                    Ignore
                  </md-outlined-button>
                )
              )}
            </div>
          );
        })}
        {activeRequests.length === 0 && (
          <div className="p-8 text-center text-gray-600 italic">No active requests</div>
        )}
      </div>
    </div>
  );
}

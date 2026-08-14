// Import Material Web components.
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
// Import User type.
import { BarUser } from '../types';
import { MdDialog } from './MdDialog';

// Define props.
interface WhoIsOnDialogProps {
  open: boolean;
  onClose: () => void;
  users: BarUser[];
  // Manager+ only: lets a manager approve or reject someone waiting
  // on an 'approval' joinPolicy bar. Omit (or pass isManagerPlus:
  // false) to hide the approvals section entirely.
  isManagerPlus?: boolean;
  onApprove?: (userId: string) => void;
  onReject?: (userId: string) => void;
}

// Dialog to show list of users in the current bar, and — for
// Manager+ — approve or reject anyone waiting on 'approval' joinPolicy.
// This is the other half of a policy firestore.rules already
// enforces (self-create writes status:'pending' for that policy):
// without an approve action anywhere in the app, a pending user had
// no way to ever be let in.
export const WhoIsOnDialog = ({ open, onClose, users, isManagerPlus, onApprove, onReject }: WhoIsOnDialogProps) => {
  // Filter for active users (clocked in).
  // Note: users with undefined status are treated as active for backward compatibility.
  const clockedInUsers = users.filter(u => u.status === 'active' || u.status === undefined);
  const pendingUsers = users.filter(u => u.status === 'pending');

  return (
    <MdDialog open={open} onClose={onClose}>
      <div slot="headline">Who's On</div>
      <div slot="content" className="flex flex-col gap-4 min-w-[300px]">

        {/* Section: Pending Approval (Manager+ only) */}
        {isManagerPlus && pendingUsers.length > 0 && (
          <div>
            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-2">
              Waiting for Approval ({pendingUsers.length})
            </h3>
            <div className="border border-yellow-900 rounded overflow-hidden">
              <md-list>
                {pendingUsers.map(u => (
                  <md-list-item key={u.id}>
                    <div slot="headline" className="text-white">{u.displayName || 'Unknown'}</div>
                    <div slot="supporting-text" className="text-gray-400">{u.jobTitle || u.role}</div>
                    <md-icon slot="start" className="text-yellow-500">hourglass_empty</md-icon>
                    <div slot="end" className="flex gap-2">
                      <md-outlined-button onClick={() => onReject?.(u.id)}>Reject</md-outlined-button>
                      <md-filled-button onClick={() => onApprove?.(u.id)}>Approve</md-filled-button>
                    </div>
                  </md-list-item>
                ))}
              </md-list>
            </div>
          </div>
        )}

        {/* Section: Clocked In */}
        <div>
           <h3 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-2">Clocked In ({clockedInUsers.length})</h3>
           <div className="border border-gray-800 rounded overflow-hidden">
               <md-list>
                   {clockedInUsers.map(u => (
                       <md-list-item key={u.id}>
                           <div slot="headline" className="text-white">{u.displayName || 'Unknown'}</div>
                           <div slot="supporting-text" className="text-gray-400">{u.jobTitle || u.role}</div>
                           <md-icon slot="start" className="text-green-500">fiber_manual_record</md-icon>
                       </md-list-item>
                   ))}
                   {clockedInUsers.length === 0 && <div className="p-4 text-center text-gray-500">No one is clocked in.</div>}
               </md-list>
           </div>
        </div>
      </div>
      <div slot="actions">
        <md-text-button onClick={onClose}>Close</md-text-button>
      </div>
    </MdDialog>
  );
};

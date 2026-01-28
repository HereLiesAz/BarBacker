import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
import { BarUser } from '../types';

interface WhoIsOnDialogProps {
  open: boolean;
  onClose: () => void;
  users: BarUser[];
}

export const WhoIsOnDialog = ({ open, onClose, users }: WhoIsOnDialogProps) => {
  const clockedInUsers = users.filter(u => u.status === 'active' || u.status === undefined);
  const offClockUsers = users.filter(u => u.status === 'off_clock');

  return (
    <md-dialog open={open || undefined} onClose={onClose}>
      <div slot="headline">Who's On</div>
      <div slot="content" className="flex flex-col gap-4 min-w-[300px]">

        <div>
           <h3 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-2">Clocked In ({clockedInUsers.length})</h3>
           <div className="border border-gray-800 rounded overflow-hidden">
               <md-list>
                   {clockedInUsers.map(u => (
                       <md-list-item key={u.id}>
                           <div slot="headline" className="text-white">{u.displayName || 'Unknown'}</div>
                           <div slot="supporting-text" className="text-gray-400">{u.role}</div>
                           <md-icon slot="start" className="text-green-500">fiber_manual_record</md-icon>
                       </md-list-item>
                   ))}
                   {clockedInUsers.length === 0 && <div className="p-4 text-center text-gray-500">No one is clocked in.</div>}
               </md-list>
           </div>
        </div>

        {offClockUsers.length > 0 && (
            <div>
               <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-2">Off Clock ({offClockUsers.length})</h3>
               <div className="border border-gray-800 rounded overflow-hidden bg-white/5">
                   <md-list>
                       {offClockUsers.map(u => (
                           <md-list-item key={u.id}>
                               <div slot="headline" className="text-gray-300">{u.displayName || 'Unknown'}</div>
                               <div slot="supporting-text" className="text-gray-500">{u.role}</div>
                               <md-icon slot="start" className="text-gray-600">bedtime</md-icon>
                           </md-list-item>
                       ))}
                   </md-list>
               </div>
            </div>
        )}
      </div>
      <div slot="actions">
        <md-text-button onClick={onClose}>Close</md-text-button>
      </div>
    </md-dialog>
  );
};

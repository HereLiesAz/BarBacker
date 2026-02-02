import { useState } from 'react';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

import { ButtonConfig } from '../types';

interface BarManagerProps {
  open: boolean;
  onClose: () => void;
  barName: string;
  allButtons: ButtonConfig[];
  hiddenButtonIds: string[];
  onHideButton: (id: string) => void;
  users?: any[];
  onApproveUser?: (uid: string) => void;
  onRemoveUser?: (uid: string) => void;
  currentUserRole?: string;
}

const BarManager = ({ open, onClose, barName, allButtons, hiddenButtonIds, onHideButton, users = [], onApproveUser, onRemoveUser }: BarManagerProps) => {
  const [activeTab, setActiveTab] = useState<'buttons' | 'users'>('buttons');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [confirmUserId, setConfirmUserId] = useState<string | null>(null);

  const activeButtons = allButtons.filter(b => !hiddenButtonIds.includes(b.id));
  const pendingUsers = users.filter(u => u.status === 'pending');
  const activeUsers = users.filter(u => u.status !== 'pending');

  const handleDeleteClick = (id: string) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    if (confirmDeleteId) {
      onHideButton(confirmDeleteId);
      setConfirmDeleteId(null);
    }
  };

  const handleRemoveUser = (uid: string) => {
      setConfirmUserId(uid);
  };

  const confirmRemoveUser = () => {
      if (confirmUserId && onRemoveUser) {
          onRemoveUser(confirmUserId);
          setConfirmUserId(null);
      }
  };

  return (
    <>
      <md-dialog open={open || undefined} onClose={onClose} style={{ maxHeight: '80vh' }}>
        <div slot="headline">Manage {barName}</div>
        <div slot="content" className="flex flex-col gap-4 min-w-[300px]">
           <div className="flex gap-2 border-b border-gray-800 pb-2">
               <md-text-button onClick={() => setActiveTab('buttons')} disabled={activeTab === 'buttons' || undefined} className={activeTab === 'buttons' ? 'bg-white/10' : ''}>Buttons</md-text-button>
               <md-text-button onClick={() => setActiveTab('users')} disabled={activeTab === 'users' || undefined} className={activeTab === 'users' ? 'bg-white/10' : ''}>
                   Staff {pendingUsers.length > 0 && `(${pendingUsers.length})`}
               </md-text-button>
           </div>

           {activeTab === 'buttons' && (
               <>
                <div className="text-sm text-gray-400">
                    Manage active pager buttons. Hiding a button removes it from the main dashboard but keeps it in the database.
                </div>
                <div className="border border-gray-800 rounded overflow-y-auto max-h-[50vh]">
                    <md-list>
                    {activeButtons.map(btn => (
                        <md-list-item key={btn.id}>
                        <div slot="headline">{btn.label}</div>
                        <md-icon slot="start">{btn.icon || 'circle'}</md-icon>
                        <md-icon-button slot="end" onClick={() => handleDeleteClick(btn.id)}>
                            <md-icon>close</md-icon>
                        </md-icon-button>
                        </md-list-item>
                    ))}
                    {activeButtons.length === 0 && (
                        <div className="p-4 text-center text-gray-500">No active buttons.</div>
                    )}
                    </md-list>
                </div>
               </>
           )}

           {activeTab === 'users' && (
               <div className="flex flex-col gap-6">
                   {pendingUsers.length > 0 && (
                       <div className="space-y-2">
                           <h3 className="text-yellow-500 font-bold text-sm uppercase tracking-wide">Pending Approval</h3>
                           <div className="border border-yellow-900/50 bg-yellow-900/10 rounded overflow-y-auto max-h-[30vh]">
                               <md-list>
                                   {pendingUsers.map(u => (
                                       <md-list-item key={u.id}>
                                           <div slot="headline" className="text-white">{u.displayName}</div>
                                           <div slot="supporting-text" className="text-yellow-400">{u.role}</div>
                                           <div slot="end" className="flex gap-2">
                                               <md-icon-button onClick={() => onApproveUser && onApproveUser(u.id)} className="text-green-500">
                                                   <md-icon>check_circle</md-icon>
                                               </md-icon-button>
                                               <md-icon-button onClick={() => handleRemoveUser(u.id)} className="text-red-500">
                                                   <md-icon>cancel</md-icon>
                                               </md-icon-button>
                                           </div>
                                       </md-list-item>
                                   ))}
                                   {pendingUsers.length === 0 && <div className="p-4 text-gray-500 text-center">No pending approvals.</div>}
                               </md-list>
                           </div>
                       </div>
                   )}

                   <div className="space-y-2">
                       <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wide">Active Staff</h3>
                       <div className="border border-gray-800 rounded overflow-y-auto max-h-[30vh]">
                           <md-list>
                               {activeUsers.map(u => (
                                   <md-list-item key={u.id}>
                                       <div slot="headline">{u.displayName}</div>
                                       <div slot="supporting-text" className="text-gray-400">{u.role}</div>
                                       <md-icon-button slot="end" onClick={() => handleRemoveUser(u.id)}>
                                           <md-icon>delete</md-icon>
                                       </md-icon-button>
                                   </md-list-item>
                               ))}
                           </md-list>
                       </div>
                   </div>
               </div>
           )}
        </div>
        <div slot="actions">
          <md-text-button onClick={onClose}>Close</md-text-button>
        </div>
      </md-dialog>

      <md-dialog open={!!confirmDeleteId || undefined} onClose={() => setConfirmDeleteId(null)}>
        <div slot="headline">Remove Button?</div>
        <div slot="content">
          Are you sure you want to remove this button from the dashboard?
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setConfirmDeleteId(null)}>Cancel</md-text-button>
          <md-filled-button onClick={confirmDelete} className="btn-alert">Remove</md-filled-button>
        </div>
      </md-dialog>

      <md-dialog open={!!confirmUserId || undefined} onClose={() => setConfirmUserId(null)}>
        <div slot="headline">Remove User?</div>
        <div slot="content">
          Are you sure you want to remove this user from the bar? This action cannot be undone.
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setConfirmUserId(null)}>Cancel</md-text-button>
          <md-filled-button onClick={confirmRemoveUser} className="btn-alert">Remove User</md-filled-button>
        </div>
      </md-dialog>
    </>
  );
};

export default BarManager;

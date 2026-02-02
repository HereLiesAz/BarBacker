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
}

const BarManager = ({ open, onClose, barName, allButtons, hiddenButtonIds, onHideButton }: BarManagerProps) => {
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const activeButtons = allButtons.filter(b => !hiddenButtonIds.includes(b.id));

  const handleDeleteClick = (id: string) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    if (confirmDeleteId) {
      onHideButton(confirmDeleteId);
      setConfirmDeleteId(null);
    }
  };

  return (
    <>
      <md-dialog open={open || undefined} onClose={onClose} style={{ maxHeight: '80vh' }}>
        <div slot="headline">Manage {barName}</div>
        <div slot="content" className="flex flex-col gap-4 min-w-[300px]">
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
    </>
  );
};

export default BarManager;

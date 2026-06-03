import { useState } from 'react';

import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/switch/switch.js';

import type { EightySixEntry } from '../types';

interface EightySixDialogProps {
  open: boolean;
  onClose: () => void;
  entries: EightySixEntry[];
  onAdd: (patronName: string, reason?: string, visibility?: 'public' | 'private') => Promise<void>;
  onDelete: (entryId: string) => Promise<void>;
  isPremium: boolean;
  userRole: string | null;
  currentUserId?: string;
}

const EightySixDialog = ({ open, onClose, entries, onAdd, onDelete, isPremium, userRole }: EightySixDialogProps) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [patronName, setPatronName] = useState('');
  const [reason, setReason] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const isManager = userRole === 'Owner' || userRole === 'Manager';
  const canAdd = isManager;
  const canDelete = isManager;

  const handleSubmit = async () => {
    if (!patronName.trim() || submitting) return;
    setSubmitting(true);
    try {
      const visibility = isPrivate ? 'private' : 'public';
      await onAdd(patronName.trim(), isPrivate && reason.trim() ? reason.trim() : undefined, visibility);
      setPatronName('');
      setReason('');
      setIsPrivate(false);
      setShowAddForm(false);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirmDeleteId) return;
    await onDelete(confirmDeleteId);
    setConfirmDeleteId(null);
  };

  const formatDate = (ts: any) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts.seconds * 1000);
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <>
      <md-dialog open={open || undefined} onClose={onClose} style={{ maxHeight: '85vh' }}>
        <div slot="headline" className="flex items-center gap-2">
          <md-icon>block</md-icon>
          86'd List
          <span className="text-sm text-gray-400 ml-1">({entries.length})</span>
        </div>

        <div slot="content" className="flex flex-col gap-3 min-w-[300px]">
          {/* Upsell banner for free-tier users */}
          {!isPremium && (
            <div className="bg-yellow-900/20 border border-yellow-800 rounded p-2 text-xs text-yellow-400">
              Upgrade to Premium to add private notes and reasons.
            </div>
          )}

          {/* Add button for managers */}
          {canAdd && !showAddForm && (
            <md-filled-tonal-button onClick={() => setShowAddForm(true)} style={{ width: '100%' }}>
              <md-icon slot="icon">person_add</md-icon>
              Add Person
            </md-filled-tonal-button>
          )}

          {/* Add form */}
          {canAdd && showAddForm && (
            <div className="border border-gray-700 rounded p-3 flex flex-col gap-3">
              <md-filled-text-field
                label="Patron Name"
                value={patronName}
                onInput={(e: any) => setPatronName(e.target.value)}
                style={{ width: '100%' }}
              />

              {/* Private entry options - premium only */}
              {isPremium && (
                <>
                  <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                    <md-switch
                      selected={isPrivate || undefined}
                      onInput={(e: any) => setIsPrivate(e.target.selected)}
                    />
                    Private entry (hidden from non-managers)
                  </label>

                  {isPrivate && (
                    <md-filled-text-field
                      label="Reason (private)"
                      value={reason}
                      onInput={(e: any) => setReason(e.target.value)}
                      type="textarea"
                      rows={2}
                      style={{ width: '100%' }}
                    />
                  )}
                </>
              )}

              <div className="flex gap-2 justify-end">
                <md-text-button onClick={() => { setShowAddForm(false); setPatronName(''); setReason(''); setIsPrivate(false); }}>
                  Cancel
                </md-text-button>
                <md-filled-button onClick={handleSubmit} disabled={!patronName.trim() || submitting || undefined}>
                  {submitting ? 'Adding...' : 'Add'}
                </md-filled-button>
              </div>
            </div>
          )}

          {/* Entry list */}
          <div className="border border-gray-800 rounded overflow-y-auto max-h-[50vh]">
            {entries.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No one on the 86'd list.</div>
            ) : (
              <md-list>
                {entries.map(entry => (
                  <md-list-item key={entry.id}>
                    <div slot="headline" className="flex items-center gap-2">
                      {entry.visibility === 'private' && <md-icon style={{ fontSize: '16px' }}>lock</md-icon>}
                      <span className="font-medium">{entry.patronName}</span>
                    </div>
                    <div slot="supporting-text">
                      <span>Submitted by {entry.submitterName}</span>
                      <span className="mx-1">&middot;</span>
                      <span>{formatDate(entry.timestamp)}</span>
                      {entry.visibility === 'private' && entry.reason && (
                        <div className="text-yellow-400/80 mt-1 text-xs italic">{entry.reason}</div>
                      )}
                    </div>
                    {canDelete && (
                      <md-icon-button slot="end" onClick={() => setConfirmDeleteId(entry.id)}>
                        <md-icon>close</md-icon>
                      </md-icon-button>
                    )}
                  </md-list-item>
                ))}
              </md-list>
            )}
          </div>
        </div>

        <div slot="actions">
          <md-text-button onClick={onClose}>Close</md-text-button>
        </div>
      </md-dialog>

      {/* Delete confirmation dialog */}
      <md-dialog open={!!confirmDeleteId || undefined} onClose={() => setConfirmDeleteId(null)}>
        <div slot="headline">Remove from 86'd List?</div>
        <div slot="content">
          Are you sure you want to remove this person from the 86'd list?
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setConfirmDeleteId(null)}>Cancel</md-text-button>
          <md-filled-button onClick={handleDelete} className="btn-alert">Remove</md-filled-button>
        </div>
      </md-dialog>
    </>
  );
};

export default EightySixDialog;

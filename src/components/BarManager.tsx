import { useState } from 'react';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

import { ButtonConfig } from '../types';

/**
 * Props for the BarManager component.
 */
interface BarManagerProps {
  /** Controls the visibility of the dialog. */
  open: boolean;
  /** Callback to close the dialog. */
  onClose: () => void;
  /** Name of the current bar being managed. */
  barName: string;
  /** Full list of configured buttons for the bar. */
  allButtons: ButtonConfig[];
  /** List of button IDs that are currently hidden/disabled. */
  hiddenButtonIds: string[];
  /** Callback to hide (soft delete) a button. */
  onHideButton: (id: string) => void;
}

/**
 * BarManager Component.
 *
 * Provides an administrative interface for Bar Managers/Owners to:
 * - View the list of active request buttons.
 * - Hide/Disable buttons that are not relevant to their venue (e.g., hiding 'Food' if they don't serve food).
 *
 * Note: 'Deleting' a button here actually just adds it to the 'hiddenButtonIds' list in Firestore.
 */
const BarManager = ({ open, onClose, barName, allButtons, hiddenButtonIds, onHideButton }: BarManagerProps) => {
  // State to track which button is currently selected for deletion confirmation.
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Derive the list of active buttons by filtering out the hidden ones.
  const activeButtons = allButtons.filter(b => !hiddenButtonIds.includes(b.id));

  /**
   * Handler for the delete (X) icon click.
   * Opens the confirmation dialog.
   */
  const handleDeleteClick = (id: string) => {
    setConfirmDeleteId(id);
  };

  /**
   * Confirms the deletion action.
   * Calls the prop callback and closes the confirmation dialog.
   */
  const confirmDelete = () => {
    if (confirmDeleteId) {
      // Execute the callback prop to update parent state/Firestore
      onHideButton(confirmDeleteId);
      // Reset local state
      setConfirmDeleteId(null);
    }
  };

  return (
    <>
      {/* Main Manager Dialog */}
      <md-dialog data-testid="bar-manager-dialog" open={open || undefined} onClose={onClose} style={{ maxHeight: '80vh' }}>
        {/* Header Slot */}
        <div slot="headline">Manage {barName}</div>

        {/* Content Slot */}
        <div slot="content" className="flex flex-col gap-4 min-w-[300px]">
           {/* Instructional Text */}
           <div className="text-sm text-gray-400">
                Manage active pager buttons. Hiding a button removes it from the main dashboard but keeps it in the database.
           </div>

           {/* Scrollable list of active buttons */}
           <div className="border border-gray-800 rounded overflow-y-auto max-h-[50vh]">
                <md-list>
                {/* Map over active buttons to create list items */}
                {activeButtons.map(btn => (
                    <md-list-item key={btn.id}>
                    <div slot="headline">{btn.label}</div>
                    <md-icon slot="start">{btn.icon || 'circle'}</md-icon>
                    {/* Delete Action Button */}
                    <md-icon-button slot="end" onClick={() => handleDeleteClick(btn.id)}>
                        <md-icon>close</md-icon>
                    </md-icon-button>
                    </md-list-item>
                ))}

                {/* Empty State */}
                {activeButtons.length === 0 && (
                    <div className="p-4 text-center text-gray-500">No active buttons.</div>
                )}
                </md-list>
           </div>
        </div>

        {/* Action Buttons Slot */}
        <div slot="actions">
          <md-text-button onClick={onClose} data-testid="bar-manager-close">Close</md-text-button>
        </div>
      </md-dialog>

      {/* Confirmation Dialog for Deletion */}
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

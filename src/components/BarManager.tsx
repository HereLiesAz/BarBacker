// Import the 'useState' hook for managing local state.
import { useState, useMemo } from 'react';

// Import Material Web components for UI elements.
// Note: These must be imported to register the custom elements with the browser.
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

// Import the ButtonConfig type definition.
import { ButtonConfig } from '../types';

// Define the props interface for the BarManager component.
interface BarManagerProps {
  // Boolean indicating if the dialog is open.
  open: boolean;
  // Callback function to close the dialog.
  onClose: () => void;
  // The name of the bar being managed.
  barName: string;
  // The list of all available buttons.
  allButtons: ButtonConfig[];
  // The list of IDs of buttons that are currently hidden.
  hiddenButtonIds: string[];
  // Callback function to hide a button.
  onHideButton: (id: string) => void;
  // Boolean indicating if God Mode (paid features) is enabled.
  godMode?: boolean;
  // Callback function to unhide/restore a button.
  onUnhideButton?: (id: string) => void;
}

// The BarManager component provides an interface for managers to configure which buttons are visible on the dashboard.
// Currently, it only supports "hiding" (soft deleting) buttons.
const BarManager = ({ open, onClose, barName, allButtons, hiddenButtonIds, onHideButton, godMode, onUnhideButton }: BarManagerProps) => {
  // State to track the ID of the button currently selected for deletion confirmation.
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Create a Set for O(1) lookups of hidden IDs.
  const hiddenButtonSet = useMemo(() => new Set(hiddenButtonIds), [hiddenButtonIds]);

  // Filter the list of all buttons to show only those that are NOT currently hidden.
  // Memoized to prevent re-calculation when local state (like confirmDeleteId) changes.
  const activeButtons = useMemo(() => {
    return allButtons.filter(b => !hiddenButtonSet.has(b.id));
  }, [allButtons, hiddenButtonSet]);

  // Compute the list of hidden buttons (for God Mode restoration).
  const hiddenButtons = useMemo(() => {
    return allButtons.filter(b => hiddenButtonSet.has(b.id));
  }, [allButtons, hiddenButtonSet]);

  // Handler for the delete icon click. Sets the ID to confirm.
  const handleDeleteClick = (id: string) => {
    setConfirmDeleteId(id);
  };

  // Handler to confirm the deletion. Calls the prop callback and closes the confirmation dialog.
  const confirmDelete = () => {
    if (confirmDeleteId) {
      onHideButton(confirmDeleteId);
      setConfirmDeleteId(null);
    }
  };

  return (
    <>
      {/* Main Dialog: Lists active buttons */}
      <md-dialog data-testid="bar-manager-dialog" open={open || undefined} onClose={onClose} style={{ maxHeight: '80vh' }}>
        {/* Dialog Header */}
        <div slot="headline">Manage {barName}</div>

        {/* Dialog Content */}
        <div slot="content" className="flex flex-col gap-4 min-w-[300px]">
           {/* Explanatory text */}
           <div className="text-sm text-gray-400">
                Manage active pager buttons. Hiding a button removes it from the main dashboard but keeps it in the database.
           </div>

           {/* Scrollable list of buttons */}
           <div className="border border-gray-800 rounded overflow-y-auto max-h-[50vh]">
                <md-list>
                {/* Map through active buttons and render list items */}
                {activeButtons.map(btn => (
                    <md-list-item key={btn.id}>
                    {/* Button Label */}
                    <div slot="headline">{btn.label}</div>
                    {/* Button Icon */}
                    <md-icon slot="start">{btn.icon || 'circle'}</md-icon>
                    {/* Delete Action */}
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

           {/* Hidden Buttons (God Mode Only) */}
           {godMode && hiddenButtons.length > 0 && (
               <div className="mt-4 border border-red-800 rounded overflow-y-auto max-h-[30vh]">
                   <div className="bg-red-900/20 p-2 text-xs font-bold text-red-400 uppercase">Restorable Buttons (God Mode)</div>
                   <md-list>
                       {hiddenButtons.map(btn => (
                           <md-list-item key={btn.id}>
                               <div slot="headline">{btn.label}</div>
                               <md-icon slot="start">{btn.icon || 'circle'}</md-icon>
                               <md-icon-button slot="end" onClick={() => onUnhideButton && onUnhideButton(btn.id)}>
                                   <md-icon>restore</md-icon>
                               </md-icon-button>
                           </md-list-item>
                       ))}
                   </md-list>
               </div>
           )}
        </div>

        {/* Dialog Actions */}
        <div slot="actions">
          <md-text-button onClick={onClose} data-testid="bar-manager-close">Close</md-text-button>
        </div>
      </md-dialog>

      {/* Confirmation Dialog: "Are you sure?" */}
      <md-dialog open={!!confirmDeleteId || undefined} onClose={() => setConfirmDeleteId(null)}>
        <div slot="headline">Remove Button?</div>
        <div slot="content">
          Are you sure you want to remove this button from the dashboard?
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setConfirmDeleteId(null)}>Cancel</md-text-button>
          {/* Use 'btn-alert' class for styling destructive actions */}
          <md-filled-button onClick={confirmDelete} className="btn-alert">Remove</md-filled-button>
        </div>
      </md-dialog>
    </>
  );
};

// Export the component as default.
export default BarManager;

import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';

/**
 * Props for the InputDialog component.
 */
interface InputDialogProps {
  /** Controls dialog visibility. */
  open: boolean;
  /**
   * The context/mode of the input:
   * - 'brand': Adding a new beer brand to inventory.
   * - 'type': Adding a new beer type/style.
   * - 'well': Defining a custom Well (rail) drink request.
   */
  mode: 'brand' | 'type' | 'well';
  /** Current value of the search/input field. */
  searchTerm: string;
  /** Callback for input changes. */
  onSearchChange: (value: string) => void;
  /** Callback to close the dialog. */
  onClose: () => void;
  /** Callback when an item is selected or confirmed. */
  onSelect: (value: string) => void;
  /** List of autocomplete suggestions to display (for 'brand' and 'type' modes). */
  suggestions: string[];
}

/**
 * InputDialog Component.
 *
 * A versatile dialog used for:
 * 1. Searching and selecting from a list (with "Add New" capability).
 * 2. Entering free text for custom requests (Well mode).
 */
const InputDialog = ({ open, mode, searchTerm, onSearchChange, onClose, onSelect, suggestions }: InputDialogProps) => {
  // Normalize search term for case-insensitive matching
  const term = searchTerm.toLowerCase();

  // Filter suggestions
  const matches = suggestions.filter(i => i.toLowerCase().includes(term));

  // Check if the user's input exactly matches an existing suggestion
  const exactMatch = matches.some(i => i.toLowerCase() === term);

  return (
    <md-dialog open={open || undefined} onClose={onClose}>
      <div slot="headline">
        {mode === 'brand' && 'Select or Add Brand'}
        {mode === 'type' && 'Select or Add Type'}
        {mode === 'well' && 'Add Well'}
      </div>
      <div slot="content" className="flex flex-col gap-4 min-w-[300px] h-[300px]">
         {/* Input Field */}
         <md-filled-text-field
           label={mode === 'well' ? 'Well Name' : 'Search...'}
           value={searchTerm}
           onInput={(e: any) => onSearchChange(e.target.value)}
           style={{ width: '100%' }}
         />

         {/* Mode Logic */}
         {mode !== 'well' ? (
             /* List Selection Mode */
             <div className="flex-1 overflow-y-auto border border-gray-800 rounded p-2">
               <md-list>
                 {/* Render Matches */}
                 {matches.map(item => (
                   <md-list-item key={item} type="button" onClick={() => onSelect(item)}>
                     <div slot="headline">{item}</div>
                     <md-icon slot="end">arrow_forward</md-icon>
                   </md-list-item>
                 ))}

                 {/* Render "Create New" option if no exact match exists */}
                 {searchTerm && !exactMatch && (
                   <md-list-item type="button" onClick={() => onSelect(searchTerm)}>
                     <div slot="headline" className="text-blue-400">Create "{searchTerm}"</div>
                     <md-icon slot="end" className="text-blue-400">add_circle</md-icon>
                   </md-list-item>
                 )}
               </md-list>
             </div>
         ) : (
             /* Free Text Mode (Well) */
             <div className="flex justify-center p-4">
                 <md-filled-button onClick={() => onSelect(searchTerm)}>Save & Request</md-filled-button>
             </div>
         )}
      </div>
      <div slot="actions">
        <md-text-button onClick={onClose}>Cancel</md-text-button>
      </div>
    </md-dialog>
  );
};

export default InputDialog;

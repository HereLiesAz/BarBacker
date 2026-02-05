// Import Material Web components.
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';

// Define props for the input dialog.
interface InputDialogProps {
  // Is the dialog open?
  open: boolean;
  // The context mode: searching for a brand, type, or adding a well.
  mode: 'brand' | 'type' | 'well';
  // The current text in the input field.
  searchTerm: string;
  // Callback when input changes.
  onSearchChange: (value: string) => void;
  // Callback to close.
  onClose: () => void;
  // Callback when an item is selected or submitted.
  onSelect: (value: string) => void;
  // List of suggestion strings to display.
  suggestions: string[];
}

// A reusable dialog component for text input with auto-complete suggestions.
// Used for adding brands, types, and wells.
const InputDialog = ({ open, mode, searchTerm, onSearchChange, onClose, onSelect, suggestions }: InputDialogProps) => {
  // Normalize search term for case-insensitive matching.
  const term = searchTerm.toLowerCase();
  // Filter suggestions.
  const matches = suggestions.filter(i => i.toLowerCase().includes(term));
  // Check if there is an exact match.
  const exactMatch = matches.some(i => i.toLowerCase() === term);

  return (
    <md-dialog open={open || undefined} onClose={onClose}>
      <div slot="headline">
        {/* Dynamic headline based on mode */}
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

         {/* Conditionally render suggestions list or simple action button */}
         {mode !== 'well' ? (
             <div className="flex-1 overflow-y-auto border border-gray-800 rounded p-2">
               <md-list>
                 {/* Render Matches */}
                 {matches.map(item => (
                   <md-list-item key={item} type="button" onClick={() => onSelect(item)}>
                     <div slot="headline">{item}</div>
                     <md-icon slot="end">arrow_forward</md-icon>
                   </md-list-item>
                 ))}

                 {/* "Create New" Option: Shown if text exists but doesn't exactly match an existing item */}
                 {searchTerm && !exactMatch && (
                   <md-list-item type="button" onClick={() => onSelect(searchTerm)}>
                     <div slot="headline" className="text-blue-400">Create "{searchTerm}"</div>
                     <md-icon slot="end" className="text-blue-400">add_circle</md-icon>
                   </md-list-item>
                 )}
               </md-list>
             </div>
         ) : (
             /* 'Well' mode is just simple input submission */
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

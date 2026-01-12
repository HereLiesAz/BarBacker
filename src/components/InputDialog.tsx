import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';

interface InputDialogProps {
  open: boolean;
  mode: 'brand' | 'type' | 'well';
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClose: () => void;
  onSelect: (value: string) => void;
  suggestions: string[];
}

const InputDialog = ({ open, mode, searchTerm, onSearchChange, onClose, onSelect, suggestions }: InputDialogProps) => {
  const term = searchTerm.toLowerCase();
  const matches = suggestions.filter(i => i.toLowerCase().includes(term));
  const exactMatch = matches.some(i => i.toLowerCase() === term);

  return (
    <md-dialog open={open || undefined} onClose={onClose}>
      <div slot="headline">
        {mode === 'brand' && 'Select or Add Brand'}
        {mode === 'type' && 'Select or Add Type'}
        {mode === 'well' && 'Add Well'}
      </div>
      <div slot="content" className="flex flex-col gap-4 min-w-[300px] h-[300px]">
         <md-filled-text-field
           label={mode === 'well' ? 'Well Name' : 'Search...'}
           value={searchTerm}
           onInput={(e: any) => onSearchChange(e.target.value)}
           style={{ width: '100%' }}
         />
         {mode !== 'well' ? (
             <div className="flex-1 overflow-y-auto border border-gray-800 rounded p-2">
               <md-list>
                 {matches.map(item => (
                   <md-list-item key={item} type="button" onClick={() => onSelect(item)}>
                     <div slot="headline">{item}</div>
                     <md-icon slot="end">arrow_forward</md-icon>
                   </md-list-item>
                 ))}
                 {searchTerm && !exactMatch && (
                   <md-list-item type="button" onClick={() => onSelect(searchTerm)}>
                     <div slot="headline" className="text-blue-400">Create "{searchTerm}"</div>
                     <md-icon slot="end" className="text-blue-400">add_circle</md-icon>
                   </md-list-item>
                 )}
               </md-list>
             </div>
         ) : (
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

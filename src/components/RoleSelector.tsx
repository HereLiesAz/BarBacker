import { useState } from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/icon/icon.js';
import '@material/web/radio/radio.js';
import { ROLES } from '../constants';

/**
 * Props for the RoleSelector component.
 */
interface RoleSelectorProps {
  /** Callback fired when the user completes the form. */
  onSelect: (role: string, name: string) => void;
}

/**
 * RoleSelector Component.
 *
 * Displayed during initial onboarding or after a reset.
 * Forces the user to declare their Display Name and Role (e.g., "John - Bartender").
 */
const RoleSelector = ({ onSelect }: RoleSelectorProps) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [displayName, setDisplayName] = useState('');

  return (
    <div className="w-[300px] space-y-6 animate-in fade-in slide-in-from-bottom-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Identification</h2>
        <p className="text-gray-500">Name and Rank, soldier.</p>
      </div>

      {/* Name Input */}
      <md-filled-text-field
        label="Display Name (e.g. 'Angry Steve')"
        value={displayName}
        onInput={(e: any) => setDisplayName(e.target.value)}
        required
      />

      {/* Role Selection List */}
      <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto">
        {ROLES.map((role) => (
          <div
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`p-4 flex items-center justify-between cursor-pointer border-b border-gray-800 last:border-0 hover:bg-white/5 ${selectedRole === role ? 'bg-white/10' : ''}`}
          >
            <div className="flex items-center gap-3">
              <md-icon>{role === 'Bartender' ? 'local_bar' : 'person'}</md-icon>
              <span className="font-medium text-lg">{role}</span>
            </div>
            {/* Visual Indicator of selection */}
            <md-radio checked={selectedRole === role} touch-target="wrapper"></md-radio>
          </div>
        ))}
      </div>

      {/* Submit Button - Disabled until form is valid */}
      <md-filled-button disabled={!selectedRole || !displayName || null} onClick={() => onSelect(selectedRole, displayName)}>
        Clock In
      </md-filled-button>
    </div>
  );
};

export default RoleSelector;

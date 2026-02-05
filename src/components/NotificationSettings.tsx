// Import React hooks.
import { useState, useEffect } from 'react';
// Import Material Web components.
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/switch/switch.js';
import '@material/web/icon/icon.js';
import '@material/web/textfield/filled-text-field.js';
// Import types and constants.
import { ButtonConfig } from '../types';
import { ROLE_NOTIFICATION_DEFAULTS } from '../constants';

// Define props.
interface NotificationSettingsProps {
  open: boolean;
  onClose: () => void;
  // Callback to save: returns the list of enabled button IDs and the ntfy topic.
  onSave: (preferences: string[], ntfyTopic: string) => void;
  userRole: string;
  currentPreferences: string[]; // List of enabled IDs
  currentNtfyTopic?: string | null;
  allButtons: ButtonConfig[];
}

// Dialog for configuring which notifications the user receives.
const NotificationSettings = ({
  open,
  onClose,
  onSave,
  userRole,
  currentPreferences,
  currentNtfyTopic,
  allButtons
}: NotificationSettingsProps) => {
  // Local state for the list of enabled IDs.
  const [preferences, setPreferences] = useState<string[]>([]);
  // Local state for the ntfy topic (read-only mostly, but passed back).
  const [ntfyTopic, setNtfyTopic] = useState<string>('');

  // Initialize preferences when the dialog opens or props change.
  useEffect(() => {
    if (open) {
      setPreferences(currentPreferences);
      setNtfyTopic(currentNtfyTopic || '');
    }
  }, [open, currentPreferences, currentNtfyTopic]);

  // Handler for toggling a specific button's notification.
  const handleToggle = (id: string, selected: boolean) => {
    if (selected) {
      // Add to preferences.
      setPreferences(prev => [...prev, id]);
    } else {
      // Remove from preferences.
      setPreferences(prev => prev.filter(p => p !== id));
    }
  };

  // Reset to default settings based on role.
  const handleReset = () => {
    const defaults = ROLE_NOTIFICATION_DEFAULTS[userRole] || [];
    setPreferences(defaults);
  };

  // Save changes.
  const handleSave = () => {
    onSave(preferences, ntfyTopic);
    onClose();
  };

  return (
    <md-dialog open={open || undefined} onClose={onClose}>
      <div slot="headline">Notification Settings</div>
      <div slot="content" className="flex flex-col gap-4 min-w-[300px]">
        <div className="text-sm text-gray-400">
          Enable or disable notifications for your role ({userRole}).
        </div>

        {/* iOS Notification Info Card */}
        <div className="p-4 bg-[#2D2D2D] rounded-lg border border-[#444] flex flex-col gap-3">
             <div className="flex items-center justify-between">
                 <span className="font-bold text-gray-300">iOS Alerts (ntfy)</span>
                 <span className="text-xs text-green-400 font-mono bg-green-900/30 px-2 py-1 rounded">Active</span>
             </div>

             {/* Display Topic ID */}
             <div className="text-xs text-gray-400 font-mono break-all p-2 bg-black/50 rounded select-all">
                {ntfyTopic || 'Loading...'}
             </div>

             {/* Subscribe Link (Deep Link) */}
             {ntfyTopic && (
                 <a
                    href={`ntfy://subscribe/${ntfyTopic}`}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold text-sm transition-colors text-center no-underline"
                 >
                    <md-icon style={{ fontSize: '18px' }}>notifications_active</md-icon>
                    Subscribe on iOS
                 </a>
             )}
             <div className="flex flex-col items-center gap-1">
                 <span className="text-xs text-green-400 font-bold">(It's free!)</span>
                 <p className="text-[10px] text-gray-500 text-center">
                     Requires the <a href="https://apps.apple.com/us/app/ntfy/id1625396347" target="_blank" className="text-blue-400 hover:underline">ntfy app</a> installed.
                 </p>
             </div>
        </div>

        {/* Notification Toggles List */}
        <md-list className="bg-transparent max-h-[60vh] overflow-y-auto">
          {allButtons.map(btn => {
            const isEnabled = preferences.includes(btn.id);
            return (
              <md-list-item key={btn.id}>
                <div slot="headline">{btn.label}</div>
                <md-icon slot="start">{btn.icon || 'notifications'}</md-icon>
                <md-switch
                    slot="end"
                    selected={isEnabled}
                    // md-switch handles its own state visually, but we need to track it manually.
                    // The 'selected' prop sets initial state.
                    onClick={() => handleToggle(btn.id, !isEnabled)}
                ></md-switch>
              </md-list-item>
            );
          })}
        </md-list>
      </div>
      <div slot="actions">
        <md-text-button onClick={handleReset}>Reset to Default</md-text-button>
        <div className="flex-1"></div>
        <md-text-button onClick={onClose}>Cancel</md-text-button>
        <md-filled-button onClick={handleSave}>Save</md-filled-button>
      </div>
    </md-dialog>
  );
};

export default NotificationSettings;

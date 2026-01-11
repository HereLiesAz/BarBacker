import { useState, useEffect } from 'react';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/switch/switch.js';
import '@material/web/icon/icon.js';
import { ButtonConfig } from '../types';
import { ROLE_NOTIFICATION_DEFAULTS } from '../constants';

interface NotificationSettingsProps {
  open: boolean;
  onClose: () => void;
  onSave: (preferences: string[]) => void;
  userRole: string;
  currentPreferences: string[]; // List of enabled IDs
  allButtons: ButtonConfig[];
}

const NotificationSettings = ({
  open,
  onClose,
  onSave,
  userRole,
  currentPreferences,
  allButtons
}: NotificationSettingsProps) => {
  const [preferences, setPreferences] = useState<string[]>([]);

  // Initialize preferences when the dialog opens or props change
  useEffect(() => {
    if (open) {
      setPreferences(currentPreferences);
    }
  }, [open, currentPreferences]);

  const handleToggle = (id: string, selected: boolean) => {
    if (selected) {
      setPreferences(prev => [...prev, id]);
    } else {
      setPreferences(prev => prev.filter(p => p !== id));
    }
  };

  const handleReset = () => {
    const defaults = ROLE_NOTIFICATION_DEFAULTS[userRole] || [];
    setPreferences(defaults);
  };

  const handleSave = () => {
    onSave(preferences);
    onClose();
  };

  // Filter out buttons that shouldn't be notifications?
  // For now, assume all top-level buttons are notification categories.

  return (
    <md-dialog open={open ? true : undefined} onClose={onClose}>
      <div slot="headline">Notification Settings</div>
      <div slot="content" className="flex flex-col gap-4 min-w-[300px]">
        <div className="text-sm text-gray-400">
          Enable or disable notifications for your role ({userRole}).
        </div>

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
                    onClick={() => handleToggle(btn.id, !isEnabled)} // md-switch uses 'selected' and dispatches click/change
                    // Note: accessing React event for Web Component might require standard onClick
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

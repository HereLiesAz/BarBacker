import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/icon/icon.js';
import '@material/web/progress/circular-progress.js';

import type { BarTheme } from '../types';
import { getContrastColor } from '../utils/color';

const FONT_OPTIONS = [
  { label: 'System Default', value: 'system-ui, sans-serif' },
  { label: 'Roboto', value: 'Roboto, sans-serif' },
  { label: 'Inter', value: 'Inter, sans-serif' },
  { label: 'Playfair Display', value: '"Playfair Display", serif' },
];

interface ThemeEditorProps {
  open: boolean;
  onClose: () => void;
  currentTheme: BarTheme | undefined;
  onSave: (theme: BarTheme) => Promise<void>;
  barId: string;
}

const ThemeEditor = ({ open, onClose, currentTheme, onSave, barId }: ThemeEditorProps) => {
  const [primaryColor, setPrimaryColor] = useState('#FFFFFF');
  const [accentColor, setAccentColor] = useState('#1E1E1E');
  const [fontFamily, setFontFamily] = useState('system-ui, sans-serif');
  const [logoUrl, setLogoUrl] = useState<string | undefined>(undefined);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Sync state from currentTheme when dialog opens.
  useEffect(() => {
    if (open && currentTheme) {
      setPrimaryColor(currentTheme.primaryColor || '#FFFFFF');
      setAccentColor(currentTheme.accentColor || '#1E1E1E');
      setFontFamily(currentTheme.fontFamily || 'system-ui, sans-serif');
      setLogoUrl(currentTheme.logoUrl);
    } else if (open && !currentTheme) {
      setPrimaryColor('#FFFFFF');
      setAccentColor('#1E1E1E');
      setFontFamily('system-ui, sans-serif');
      setLogoUrl(undefined);
    }
  }, [open, currentTheme]);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Logo must be under 2MB.');
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split('.').pop() || 'png';
      const storageRef = ref(storage, `bars/${barId}/logo.${ext}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setLogoUrl(url);
    } catch (err) {
      console.error('Logo upload failed:', err);
      alert('Failed to upload logo.');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave({
        primaryColor,
        accentColor,
        fontFamily,
        ...(logoUrl ? { logoUrl } : {}),
      });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!confirm('Reset theme to default? This removes all custom branding.')) return;
    setSaving(true);
    try {
      // Save an empty-ish theme to clear it. The updateDoc in App.tsx will overwrite.
      // Actually we need to delete the theme field. For now, save defaults.
      await onSave({ primaryColor: '#FFFFFF', accentColor: '#1E1E1E' });
      setPrimaryColor('#FFFFFF');
      setAccentColor('#1E1E1E');
      setFontFamily('system-ui, sans-serif');
      setLogoUrl(undefined);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const contrastColor = getContrastColor(primaryColor);

  return (
    <md-dialog open={open || undefined} onClose={onClose} style={{ maxHeight: '85vh' }}>
      <div slot="headline" className="flex items-center gap-2">
        <md-icon>palette</md-icon>
        Customize Theme
      </div>

      <div slot="content" className="flex flex-col gap-4 min-w-[300px]">
        {/* Primary Color */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Primary Color</label>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-gray-600" style={{ backgroundColor: primaryColor }} />
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-10 h-8 cursor-pointer bg-transparent border-0"
            />
          </div>
        </div>

        {/* Accent Color */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Accent Color</label>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-gray-600" style={{ backgroundColor: accentColor }} />
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-10 h-8 cursor-pointer bg-transparent border-0"
            />
          </div>
        </div>

        {/* Font Selector */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-300">Font</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
          >
            {FONT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value} style={{ fontFamily: opt.value }}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Logo Upload */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Logo</label>
          <div className="flex items-center gap-3">
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="h-12 w-12 rounded-full object-cover border border-gray-600" />
            ) : (
              <div className="h-12 w-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center">
                <md-icon style={{ fontSize: '24px', color: '#666' }}>image</md-icon>
              </div>
            )}
            <div className="flex gap-2">
              <label className="cursor-pointer">
                <md-outlined-button disabled={uploading || undefined}>
                  {uploading ? 'Uploading...' : 'Upload'}
                </md-outlined-button>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </label>
              {logoUrl && (
                <md-text-button onClick={() => setLogoUrl(undefined)}>Remove</md-text-button>
              )}
            </div>
          </div>
          <span className="text-xs text-gray-500">PNG, JPG, WebP, or SVG. Max 2MB.</span>
        </div>

        {/* Live Preview */}
        <div className="border border-gray-700 rounded p-3 mt-2">
          <div className="text-xs text-gray-500 mb-2 uppercase">Preview</div>
          <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: accentColor, fontFamily }}>
            {logoUrl && <img src={logoUrl} alt="Preview logo" className="h-8 w-8 rounded-full object-cover" />}
            <span className="font-bold" style={{ color: primaryColor }}>Your Bar Name</span>
          </div>
          <div className="mt-2 flex gap-2">
            <button
              className="px-4 py-2 rounded font-medium text-sm"
              style={{ backgroundColor: primaryColor, color: contrastColor }}
            >
              Sample Button
            </button>
            <button
              className="px-4 py-2 rounded font-medium text-sm border"
              style={{ borderColor: primaryColor, color: primaryColor, backgroundColor: 'transparent' }}
            >
              Outlined
            </button>
          </div>
        </div>
      </div>

      <div slot="actions">
        <md-text-button onClick={handleReset} disabled={saving || undefined}>Reset</md-text-button>
        <md-text-button onClick={onClose}>Cancel</md-text-button>
        <md-filled-button onClick={handleSave} disabled={saving || undefined}>
          {saving ? 'Saving...' : 'Save'}
        </md-filled-button>
      </div>
    </md-dialog>
  );
};

export default ThemeEditor;

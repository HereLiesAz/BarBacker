import { useRef, useState } from 'react';
import { Camera } from '@capacitor/camera';

import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/icon/icon.js';
import '@material/web/textfield/filled-text-field.js';

import { matchBrand, recognizeBottleText } from '../utils/bottleRecognition';
import { MdDialog } from './MdDialog';

interface BottleScannerProps {
  open: boolean;
  onClose: () => void;
  isManagerPlus: boolean;
  // Known brand names to fuzzy-match OCR'd label text against —
  // callers pass DEFAULT_SPIRITS/DEFAULT_BEERS plus this bar's own
  // beerInventory keys, so a bottle the bar already stocks matches
  // even if it isn't in the static default lists.
  candidates: string[];
  // beerInventory keys, used to decide whether "86 It" (mark an
  // existing menu item unavailable) makes sense, vs. "Add to Menu"
  // (this bottle isn't tracked yet).
  existingBrands: string[];
  onAddToMenu: (brand: string, type: string) => Promise<void>;
  onEightySix: (brand: string) => Promise<void>;
  onSendAlert: (brand: string, photo: Blob) => Promise<void>;
}

type Stage = 'idle' | 'capturing' | 'recognizing' | 'ready';
type Action = 'menu' | '86' | 'alert';

// Camera capture + on-device OCR (tesseract.js, running entirely
// client-side — the photo never leaves the device just to recognize
// the label) for premium bars. Point the camera at a bottle, confirm
// the recognized (or manually typed) brand, then either add it to
// the menu, 86 it, or send a photo-referencing alert to staff — that
// last action does upload the photo, to this bar's own Storage
// bucket (see App.tsx's sendBottleAlert), so staff can see what was
// scanned; it isn't sent anywhere outside the app's own backend.
const BottleScanner = ({
  open, onClose, isManagerPlus, candidates, existingBrands, onAddToMenu, onEightySix, onSendAlert,
}: BottleScannerProps) => {
  const [stage, setStage] = useState<Stage>('idle');
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const photoBlobRef = useRef<Blob | null>(null);
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittingAction, setSubmittingAction] = useState<Action | null>(null);
  // Bumped on every close; handleCapture snapshots it and checks it
  // after each await so a capture/OCR run still in flight when the
  // user closes the dialog mid-recognition can't land its result
  // afterward. MdDialog keeps this component mounted regardless of
  // `open` (only the attribute toggles), so without this guard the
  // async chain would resolve after reset() already ran and silently
  // repopulate stage/photo/brand with stale data — the next open
  // would show a capture the user never took.
  const closeTokenRef = useRef(0);

  const reset = () => {
    setStage('idle');
    setPhotoUrl(null);
    photoBlobRef.current = null;
    setBrand('');
    setType('');
    setError(null);
    setSubmittingAction(null);
  };

  const handleClose = () => {
    closeTokenRef.current += 1;
    reset();
    onClose();
  };

  const handleCapture = async () => {
    const token = closeTokenRef.current;
    setError(null);
    setStage('capturing');
    try {
      const result = await Camera.takePhoto({});
      if (closeTokenRef.current !== token) return;
      if (!result.webPath) throw new Error('No photo captured.');
      const blob = await (await fetch(result.webPath)).blob();
      if (closeTokenRef.current !== token) return;
      photoBlobRef.current = blob;
      setPhotoUrl(result.webPath);

      setStage('recognizing');
      const lines = await recognizeBottleText(blob);
      if (closeTokenRef.current !== token) return;
      setBrand(matchBrand(lines, candidates) ?? '');
      setStage('ready');
    } catch (e) {
      if (closeTokenRef.current !== token) return;
      console.error('Bottle capture/recognition failed', e);
      setError(e instanceof Error ? e.message : 'Failed to capture or read the bottle label.');
      setStage('idle');
    }
  };

  const trimmedBrand = brand.trim();
  // Case-insensitive existence check, but every downstream write is
  // case-sensitive — beerInventory keys in App.tsx's addBottleToMenu
  // and the `brand_${brand}` hideButton id are both looked up/built
  // by exact string match. Scanning (or manually correcting to)
  // "JAMESON" against an existing "Jameson" entry needs to resolve to
  // "Jameson" everywhere downstream, or "Add to Menu" silently
  // creates a second, disconnected "JAMESON" entry and "86 It" writes
  // a hidden-button id that matches no real button.
  const matchedExistingBrand = existingBrands.find((b) => b.toLowerCase() === trimmedBrand.toLowerCase());
  const brandExists = !!matchedExistingBrand;
  const canonicalBrand = matchedExistingBrand ?? trimmedBrand;

  const runAction = async (action: Action, fn: () => Promise<void>) => {
    if (submittingAction) return;
    setSubmittingAction(action);
    setError(null);
    try {
      await fn();
      handleClose();
    } catch (e) {
      console.error(`Bottle scanner ${action} action failed`, e);
      setError('That failed. Please try again.');
      setSubmittingAction(null);
    }
  };

  return (
    <MdDialog open={open} onClose={handleClose} style={{ maxHeight: '85vh' }}>
      <div slot="headline" className="flex items-center gap-2">
        <md-icon>photo_camera</md-icon>
        Scan Bottle
      </div>

      <div slot="content" className="flex flex-col gap-3 min-w-[300px]">
        {stage === 'idle' && (
          <md-filled-tonal-button onClick={handleCapture} style={{ width: '100%' }}>
            <md-icon slot="icon">photo_camera</md-icon>
            Take Photo
          </md-filled-tonal-button>
        )}

        {stage === 'capturing' && <div className="text-center text-gray-400 p-4">Opening camera…</div>}

        {photoUrl && (
          <img src={photoUrl} alt="Captured bottle" className="rounded max-h-48 w-full object-contain bg-black" />
        )}

        {stage === 'recognizing' && <div className="text-center text-gray-400 p-2">Reading label…</div>}

        {stage === 'ready' && (
          <>
            <md-filled-text-field
              label="Brand"
              value={brand}
              onInput={(e: any) => setBrand(e.target.value)}
              style={{ width: '100%' }}
            />
            <md-filled-text-field
              label="Type (optional)"
              value={type}
              onInput={(e: any) => setType(e.target.value)}
              style={{ width: '100%' }}
            />
            {brand.trim() && brandExists && (
              <div className="text-xs text-gray-500">Already on the menu.</div>
            )}
          </>
        )}

        {error && <div className="text-xs text-red-400">{error}</div>}
      </div>

      <div slot="actions" className="flex flex-wrap gap-2 justify-end">
        <md-text-button onClick={handleClose}>Close</md-text-button>
        {stage === 'ready' && (
          <>
            <md-outlined-button
              disabled={!brand.trim() || !!submittingAction || undefined}
              onClick={() => runAction('alert', () => {
                const photo = photoBlobRef.current;
                if (!photo) return Promise.reject(new Error('No photo captured.'));
                return onSendAlert(brand.trim(), photo);
              })}
            >
              {submittingAction === 'alert' ? 'Sending…' : 'Send Alert'}
            </md-outlined-button>
            {isManagerPlus && brandExists && (
              <md-outlined-button
                className="btn-alert"
                disabled={!!submittingAction || undefined}
                onClick={() => runAction('86', () => onEightySix(canonicalBrand))}
              >
                {submittingAction === '86' ? 'Marking…' : '86 It'}
              </md-outlined-button>
            )}
            {isManagerPlus && (
              <md-filled-button
                disabled={!brand.trim() || !!submittingAction || undefined}
                onClick={() => runAction('menu', () => onAddToMenu(canonicalBrand, type.trim()))}
              >
                {submittingAction === 'menu' ? 'Adding…' : 'Add to Menu'}
              </md-filled-button>
            )}
          </>
        )}
      </div>
    </MdDialog>
  );
};

export default BottleScanner;

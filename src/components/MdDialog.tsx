import { useEffect, useRef } from 'react';

interface MdDialogProps {
  open?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  [key: string]: any;
}

// Thin wrapper around the <md-dialog> custom element that fixes a
// real bug: React 19 binds an `onClose` JSX prop on a custom element
// (any tag containing a hyphen) by listening for an event literally
// named "Close" — capitalized, unlowercased. Only the built-in
// <dialog> tag gets special-cased lowercasing in React's custom-
// element prop handling; <md-dialog> doesn't qualify. Material's
// md-dialog dispatches a lowercase 'close' event when it closes
// itself (Escape key, clicking the scrim), so the React onClose prop
// silently never fires: the dialog closes itself but React's `open`
// state never flips back to false, and the next open attempt is a
// no-op because React sees no state change — the dialog is
// permanently stuck closed until a full page reload.
//
// This wrapper binds the real DOM 'close' event via a ref instead of
// relying on React's custom-element event mapping, so the callback
// actually fires regardless of how the dialog was dismissed.
export function MdDialog({ open, onClose, children, ...rest }: MdDialogProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Keep the latest onClose in a ref so the listener doesn't need to
  // be torn down and rebound every time the callback identity changes.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleClose = () => onCloseRef.current();
    el.addEventListener('close', handleClose);
    return () => el.removeEventListener('close', handleClose);
  }, []);

  return (
    <md-dialog ref={ref} open={open || undefined} {...rest}>
      {children}
    </md-dialog>
  );
}

export default MdDialog;

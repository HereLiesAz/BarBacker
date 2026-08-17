import { useEffect, useRef } from 'react';
import type { ButtonConfig } from '../types';

// While a sub-menu is open (navStack non-empty), auto-submit an
// "(Ask Me)" request after `timeoutMs` of inactivity so a half-tapped
// menu doesn't leave the bartender hanging.
//
// `submitRequest` is captured by ref so its identity changing on
// every render does not re-arm the timer — only navStack changes do.
// `resetNavStack` clears the stack after the timeout fires.
//
// `paused` should be true while a dialog reachable FROM a sub-menu is
// open on top of it (InputDialog's add-brand/add-type/custom actions,
// the quantity picker) — without it, a user who opens one of those
// and takes longer than timeoutMs to type/decide got hit with both an
// unwanted auto-submitted "(Ask Me)" request AND resetNavStack()
// yanking the sub-menu out from under the dialog they were still
// using, mid-input.
export function useInactivityAutoSubmit(
  navStack: ButtonConfig[],
  submitRequest: (label: string) => void,
  resetNavStack: () => void,
  timeoutMs: number = 60000,
  paused: boolean = false,
) {
  const timerRef = useRef<number | null>(null);
  const submitRef = useRef(submitRequest);
  const resetRef = useRef(resetNavStack);

  useEffect(() => { submitRef.current = submitRequest; }, [submitRequest]);
  useEffect(() => { resetRef.current = resetNavStack; }, [resetNavStack]);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);

    if (navStack.length > 0 && !paused) {
      timerRef.current = window.setTimeout(() => {
        const trail = navStack.map(b => b.label).join(': ');
        submitRef.current(`${trail} (Ask Me)`);
        resetRef.current();
      }, timeoutMs);
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [navStack, timeoutMs, paused]);
}

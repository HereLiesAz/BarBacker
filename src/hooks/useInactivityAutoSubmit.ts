import { useEffect, useRef } from 'react';
import type { ButtonConfig } from '../types';

// While a sub-menu is open (navStack non-empty), auto-submit an
// "(Ask Me)" request after `timeoutMs` of inactivity so a half-tapped
// menu doesn't leave the bartender hanging.
//
// `submitRequest` is captured by ref so its identity changing on
// every render does not re-arm the timer — only navStack changes do.
// `resetNavStack` clears the stack after the timeout fires.
export function useInactivityAutoSubmit(
  navStack: ButtonConfig[],
  submitRequest: (label: string) => void,
  resetNavStack: () => void,
  timeoutMs: number = 60000,
) {
  const timerRef = useRef<number | null>(null);
  const submitRef = useRef(submitRequest);
  const resetRef = useRef(resetNavStack);

  useEffect(() => { submitRef.current = submitRequest; }, [submitRequest]);
  useEffect(() => { resetRef.current = resetNavStack; }, [resetNavStack]);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);

    if (navStack.length > 0) {
      timerRef.current = window.setTimeout(() => {
        const trail = navStack.map(b => b.label).join(': ');
        submitRef.current(`${trail} (Ask Me)`);
        resetRef.current();
      }, timeoutMs);
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [navStack, timeoutMs]);
}

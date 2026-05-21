import { useEffect, useState } from 'react';

// Captures the browser's `beforeinstallprompt` event so the app can
// surface a custom "Install App" button in the navbar. Returns the
// stashed prompt event and a `promptInstall` action that fires
// `prompt()`, awaits the user's choice, and clears the stash on accept.
//
// The optional onInstalled callback runs after the user accepts the
// install. Callers use it to re-request notification permission, which
// would otherwise stay denied because the PWA install flow does not
// re-trigger the foreground permission request.
export function usePwaInstallPrompt(onInstalled?: () => void) {
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const promptInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      onInstalled?.();
    }
  };

  return { installPrompt, promptInstall };
}

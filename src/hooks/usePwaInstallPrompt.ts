import { useEffect, useState } from 'react';

// The browser's beforeinstallprompt event is non-standard (Chrome /
// Edge); TypeScript's lib.dom does not include it. Declare just the
// shape we use.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

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
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const promptInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      onInstalled?.();
    }
  };

  return { installPrompt, promptInstall };
}

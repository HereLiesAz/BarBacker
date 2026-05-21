import { useEffect, useRef, useState } from 'react';
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { onForegroundMessage, requestNotificationPermission } from '../firebase';

// Wires up push notifications for both native (Capacitor) and web
// (Firebase Cloud Messaging) targets. Runs once per mount and is
// device-scoped — listeners do NOT depend on the current user, so
// re-running on every auth change (the old behavior) stacked
// duplicate handlers and multiplied vibrations and audio plays.
//
// Returns the FCM token (string | null) so the caller can mirror it
// into the per-bar tokens collection from its own auto-clock-in
// effect.
//
// Audio + vibration patterns are kept identical to the prior inline
// behavior: native plays once per push, web loops the alert sound up
// to 8 times via the `onended` chain.
export function usePushNotifications() {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  // Shared Audio instance across both setup paths. Module-private —
  // do not collapse with useNag's own audioRef, those are
  // intentionally independent so the nag loop and push alert don't
  // fight over a single element.
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      let cancelled = false;

      const setup = async () => {
        try {
          // Clear any handlers from a previous mount (StrictMode, hot
          // reload). We rely on removeAllListeners for both setup and
          // teardown rather than tracking per-handle remove callbacks;
          // Capacitor's plugin registry is the source of truth.
          await PushNotifications.removeAllListeners();

          await PushNotifications.addListener('registration', token => {
            setFcmToken(token.value);
          });

          await PushNotifications.addListener('registrationError', err => {
            console.error('Registration error: ', err.error);
          });

          await PushNotifications.addListener('pushNotificationReceived', () => {
            if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
            if (!audioRef.current) audioRef.current = new Audio('/alert.wav');
            const audio = audioRef.current;
            audio.pause();
            audio.onended = null;
            audio.currentTime = 0;
            audio.play().catch(() => {});
          });

          await PushNotifications.addListener('pushNotificationActionPerformed', () => {
            // Future: open specific request from tap.
          });

          if (cancelled) return;

          let permStatus = await PushNotifications.checkPermissions();
          if (permStatus.receive === 'prompt') {
            permStatus = await PushNotifications.requestPermissions();
          }
          if (permStatus.receive === 'granted') {
            await PushNotifications.register();
          }
        } catch (e) {
          console.error('Native push setup failed', e);
        }
      };

      setup();

      return () => {
        cancelled = true;
        PushNotifications.removeAllListeners().catch(() => {});
      };
    }

    // Web (PWA) push path. Only request permission when running as a
    // standalone PWA so casual visitors don't see a permission popup.
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      // Safari iOS sets navigator.standalone but it's not in lib.dom.
      || (window.navigator as Navigator & { standalone?: boolean }).standalone;
    if (isStandalone) {
      requestNotificationPermission().then(t => t && setFcmToken(t));
    }

    const unsubscribeMessages = onForegroundMessage((payload: { notification?: { title: string; body: string } }) => {
      if (navigator.vibrate) navigator.vibrate([500, 200, 500]);

      // The Notification constructor throws under denied permission and
      // is undefined in some embedded webviews / JSDOM, so guard both.
      if (
        payload?.notification
        && typeof Notification !== 'undefined'
        && Notification.permission === 'granted'
      ) {
        try {
          new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: '/icon-192x192.png',
          });
        } catch (e) {
          console.warn('Notification display failed', e);
        }
      }

      if (!audioRef.current) audioRef.current = new Audio('/alert.wav');
      const audio = audioRef.current;
      let plays = 0;
      audio.onended = () => {
        plays++;
        if (plays < 8) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
      };
      audio.play().catch(() => {});
    });

    return () => unsubscribeMessages();
  }, []);

  return { fcmToken, setFcmToken };
}

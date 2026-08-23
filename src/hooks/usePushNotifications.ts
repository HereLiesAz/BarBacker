import { useEffect, useRef, useState } from 'react';
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor, registerPlugin } from '@capacitor/core';
import { onForegroundMessage, requestNotificationPermission } from '../firebase';

// Android-only native helper (android/app/src/main/java/com/HereLiesAz/
// BarBacker/FirebaseConfigPlugin.kt). Reports whether this APK has
// Firebase configuration compiled into it — see guardedRegister below
// for why that has to be asked before registering.
interface FirebaseConfigStatus {
  configured: boolean;
  appId: string;
}

interface FirebaseConfigPlugin {
  getStatus(): Promise<FirebaseConfigStatus>;
}

const FirebaseConfig = registerPlugin<FirebaseConfigPlugin>('FirebaseConfig');

// Registers for push, but only once the native side confirms it will not
// blow up.
//
// PushNotifications.register() calls FirebaseMessaging.getInstance() in
// Java. When the APK was built without a google-services.json there is
// no default FirebaseApp, and that call throws IllegalStateException
// ("Default FirebaseApp is not initialized in this process
// com.HereLiesAz.BarBacker"). Capacitor's Bridge rethrows it as a
// RuntimeException on a handler thread, which means it is an UNCAUGHT
// NATIVE CRASH: awaiting register() in a try/catch does not help, the
// promise never rejects, the process dies. Not calling register() is the
// only defense. android/app/build.gradle now fails the build rather than
// producing such an APK, but installed copies of older builds still
// exist and this keeps them usable (minus push) instead of unusable.
const guardedRegister = async () => {
  if (Capacitor.getPlatform() !== 'android') {
    // iOS registers against APNs, not FCM, so it never reaches
    // FirebaseMessaging.getInstance() and needs no guard.
    await PushNotifications.register();
    return;
  }

  let status: FirebaseConfigStatus;
  try {
    status = await FirebaseConfig.getStatus();
  } catch (e) {
    // The plugin only exists in builds that carry this fix. An APK old
    // enough to be missing it is exactly the kind that may also be
    // missing google-services.json, so "can't tell" has to mean "don't
    // register" — guessing wrong in the other direction crashes the app.
    console.error('FirebaseConfig plugin unavailable; skipping push registration', e);
    return;
  }

  if (!status?.configured) {
    console.error(
      'Push notifications unavailable: this build has no Firebase configuration '
      + '(google-services.json was missing when the APK was built). Skipping '
      + 'registration to avoid a native crash.'
    );
    return;
  }

  if (!status.appId.includes(':android:')) {
    // Firebase initializes happily with the project's *web* app ID, but
    // FCM rejects the token request because that ID is not bound to this
    // package. Registration below still runs and fails as a normal
    // registrationError; this line says why.
    console.warn(
      `Firebase app ID "${status.appId}" is not an Android app ID. FCM token `
      + 'requests will be rejected — the FIREBASE_ANDROID_APP_ID build secret '
      + 'is wrong or missing (see docs/DEPLOYMENT.md).'
    );
  }

  await PushNotifications.register();
};

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

          // nag-bot.js sends Android pushes with
          // android.notification.channelId: 'urgent_alerts', but on
          // Android 8+ a channel that was never created falls back to
          // a default-importance one — the message still arrives, but
          // silently, with no heads-up popup or sound. Create it once
          // up front; createChannel() is a no-op if it already exists.
          if (Capacitor.getPlatform() === 'android') {
            await PushNotifications.createChannel({
              id: 'urgent_alerts',
              name: 'Urgent Alerts',
              description: 'Reminders for pending requests nobody has claimed yet.',
              importance: 4, // HIGH: heads-up popup + sound.
              visibility: 1, // PUBLIC: shows full content on the lock screen.
              sound: 'default',
              vibration: true,
            }).catch((e) => console.error('Failed to create urgent_alerts channel', e));
          }

          // Checked before each addListener (not just once, after all
          // four) — a fast mount/unmount (React StrictMode's double-
          // invoke, hot reload) could otherwise unmount and run
          // cleanup's removeAllListeners() WHILE this sequence of
          // awaits was still partway through registering listeners;
          // anything added after that point would never get removed,
          // since cleanup only runs once per mount. This doesn't
          // retroactively unregister a listener added in the same
          // microtask as the cancellation, but it stops the leak from
          // growing any further once cancellation is observed.
          if (cancelled) return;
          await PushNotifications.addListener('registration', token => {
            setFcmToken(token.value);
          });

          if (cancelled) return;
          await PushNotifications.addListener('registrationError', err => {
            console.error('Registration error: ', err.error);
          });

          if (cancelled) return;
          await PushNotifications.addListener('pushNotificationReceived', () => {
            if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
            if (!audioRef.current) audioRef.current = new Audio(`${import.meta.env.BASE_URL}alert.wav`);
            const audio = audioRef.current;
            audio.pause();
            audio.onended = null;
            audio.currentTime = 0;
            audio.play().catch(() => {});
          });

          if (cancelled) return;
          await PushNotifications.addListener('pushNotificationActionPerformed', () => {
            // Future: open specific request from tap.
          });

          if (cancelled) return;

          let permStatus = await PushNotifications.checkPermissions();
          if (permStatus.receive === 'prompt') {
            permStatus = await PushNotifications.requestPermissions();
          }
          if (permStatus.receive === 'granted') {
            await guardedRegister();
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
            icon: `${import.meta.env.BASE_URL}icon-192x192.png`,
          });
        } catch (e) {
          console.warn('Notification display failed', e);
        }
      }

      if (!audioRef.current) audioRef.current = new Audio(`${import.meta.env.BASE_URL}alert.wav`);
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

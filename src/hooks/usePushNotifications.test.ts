import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mutable platform + native-plugin behavior, reassigned per test before
// the hook is imported-and-rendered.
let platform = 'android';
const mockRegister = vi.fn().mockResolvedValue(undefined);
const mockGetStatus = vi.fn();

vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => platform !== 'web',
    getPlatform: () => platform,
  },
  registerPlugin: () => ({ getStatus: (...args: unknown[]) => mockGetStatus(...args) }),
}));

vi.mock('@capacitor/push-notifications', () => ({
  PushNotifications: {
    removeAllListeners: vi.fn().mockResolvedValue(undefined),
    createChannel: vi.fn().mockResolvedValue(undefined),
    addListener: vi.fn().mockResolvedValue({ remove: vi.fn() }),
    checkPermissions: vi.fn().mockResolvedValue({ receive: 'granted' }),
    requestPermissions: vi.fn().mockResolvedValue({ receive: 'granted' }),
    register: (...args: unknown[]) => mockRegister(...args),
  },
}));

vi.mock('../firebase', () => ({
  onForegroundMessage: () => () => {},
  requestNotificationPermission: vi.fn().mockResolvedValue(null),
}));

import { usePushNotifications } from './usePushNotifications';

describe('usePushNotifications native registration guard', () => {
  beforeEach(() => {
    platform = 'android';
    mockRegister.mockClear();
    mockGetStatus.mockReset();
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => vi.restoreAllMocks());

  it('registers when the APK has Firebase configuration', async () => {
    mockGetStatus.mockResolvedValue({ configured: true, appId: '1:1234:android:abcd' });

    renderHook(() => usePushNotifications());

    await waitFor(() => expect(mockRegister).toHaveBeenCalled());
    expect(console.warn).not.toHaveBeenCalled();
  });

  // The bug this whole guard exists for: PushNotifications.register()
  // calls FirebaseMessaging.getInstance() natively, which throws
  // "Default FirebaseApp is not initialized in this process" when
  // google-services.json was missing at build time. Capacitor rethrows
  // that on a handler thread, so it is an uncaught crash rather than a
  // rejected promise — the only survivable behavior is to never call it.
  it('does not register when the APK has no Firebase configuration', async () => {
    mockGetStatus.mockResolvedValue({ configured: false, appId: '' });

    renderHook(() => usePushNotifications());

    await waitFor(() => expect(mockGetStatus).toHaveBeenCalled());
    expect(mockRegister).not.toHaveBeenCalled();
  });

  // Builds predating FirebaseConfigPlugin reject the call. Those are the
  // same builds that may lack google-services.json, so "unknown" must
  // fail closed.
  it('does not register when the native status check is unavailable', async () => {
    mockGetStatus.mockRejectedValue(new Error('not implemented'));

    renderHook(() => usePushNotifications());

    await waitFor(() => expect(mockGetStatus).toHaveBeenCalled());
    expect(mockRegister).not.toHaveBeenCalled();
  });

  // A web app ID initializes Firebase fine, so registration proceeds and
  // fails as an ordinary registrationError — but it is worth naming.
  it('warns but still registers when the app ID is not an Android app ID', async () => {
    mockGetStatus.mockResolvedValue({ configured: true, appId: '1:1234:web:abcd' });

    renderHook(() => usePushNotifications());

    await waitFor(() => expect(mockRegister).toHaveBeenCalled());
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('not an Android app ID'));
  });

  // iOS registers against APNs and never touches FirebaseMessaging, so
  // it must not be gated on an Android-only plugin that isn't there.
  it('registers on iOS without consulting the Android-only plugin', async () => {
    platform = 'ios';

    renderHook(() => usePushNotifications());

    await waitFor(() => expect(mockRegister).toHaveBeenCalled());
    expect(mockGetStatus).not.toHaveBeenCalled();
  });
});

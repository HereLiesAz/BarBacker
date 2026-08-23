import { describe, it, expect, afterEach } from 'vitest';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// scripts/generate-google-services.js is the only thing standing between
// a set of repository secrets and the Firebase configuration compiled
// into every APK. Both of the ways it can go wrong are silent at build
// time and fatal (or push-dead) at runtime, so they are pinned here.

const repoRoot = path.resolve(__dirname, '../..');
const script = path.join(repoRoot, 'scripts/generate-google-services.js');
const output = path.join(repoRoot, 'android/app/google-services.json');

const VALID = {
  VITE_FIREBASE_MESSAGING_SENDER_ID: '869145643734',
  VITE_FIREBASE_PROJECT_ID: 'barbacker-test',
  VITE_FIREBASE_STORAGE_BUCKET: 'barbacker-test.firebasestorage.app',
  VITE_FIREBASE_API_KEY: 'AIzaTestKey',
  FIREBASE_ANDROID_APP_ID: '1:869145643734:android:aabbccdd11223344',
};

// Runs the generator with ONLY the given vars set, so a developer's own
// .env or exported shell config can't accidentally satisfy a case that
// is meant to fail.
const run = (env: Record<string, string>) =>
  spawnSync(process.execPath, [script], {
    cwd: repoRoot,
    env: { PATH: process.env.PATH ?? '', ...env },
    encoding: 'utf8',
  });

describe('generate-google-services.js', () => {
  afterEach(() => {
    if (fs.existsSync(output)) fs.rmSync(output);
  });

  it('writes google-services.json from a complete, consistent config', () => {
    const result = run(VALID);

    expect(result.status).toBe(0);
    const json = JSON.parse(fs.readFileSync(output, 'utf8'));
    expect(json.client[0].client_info.mobilesdk_app_id).toBe(VALID.FIREBASE_ANDROID_APP_ID);
    expect(json.client[0].client_info.android_client_info.package_name)
      .toBe('com.HereLiesAz.BarBacker');
    expect(json.project_info.project_number).toBe(VALID.VITE_FIREBASE_MESSAGING_SENDER_ID);
  });

  // The shipped 0.6.502.825 APK had google_app_id
  // "1:869145643734:web:d902468d6942df6bc81777" compiled into it: the
  // project's *web* app. Firebase initializes fine with it and every FCM
  // token request is then rejected, because that ID is not bound to the
  // Android package. Nothing downstream notices, so it has to fail here.
  it('rejects the web app ID', () => {
    const result = run({
      ...VALID,
      FIREBASE_ANDROID_APP_ID: '',
      VITE_FIREBASE_APP_ID: '1:869145643734:web:d902468d6942df6bc81777',
    });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('not an Android app ID');
    expect(fs.existsSync(output)).toBe(false);
  });

  it('accepts an Android app ID supplied via VITE_FIREBASE_APP_ID', () => {
    const result = run({
      ...VALID,
      FIREBASE_ANDROID_APP_ID: '',
      VITE_FIREBASE_APP_ID: VALID.FIREBASE_ANDROID_APP_ID,
    });

    expect(result.status).toBe(0);
    expect(fs.existsSync(output)).toBe(true);
  });

  it('rejects an app ID from a different Firebase project', () => {
    const result = run({ ...VALID, FIREBASE_ANDROID_APP_ID: '1:999:android:aabbccdd' });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('must be the same Firebase project');
    expect(fs.existsSync(output)).toBe(false);
  });

  // A missing secret must never yield a partial file: the Gradle plugin
  // would compile it in, FirebaseInitProvider would find no
  // google_app_id, and PushNotifications.register() would take down the
  // app with "Default FirebaseApp is not initialized in this process".
  it('reports every missing variable at once and writes nothing', () => {
    const result = run({});

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('VITE_FIREBASE_MESSAGING_SENDER_ID is missing');
    expect(result.stderr).toContain('VITE_FIREBASE_PROJECT_ID is missing');
    expect(result.stderr).toContain('VITE_FIREBASE_API_KEY is missing');
    expect(result.stderr).toContain('FIREBASE_ANDROID_APP_ID is missing');
    expect(fs.existsSync(output)).toBe(false);
  });

  it('prefers FIREBASE_ANDROID_API_KEY over the browser key when set', () => {
    const result = run({ ...VALID, FIREBASE_ANDROID_API_KEY: 'AIzaAndroidOnlyKey' });

    expect(result.status).toBe(0);
    const json = JSON.parse(fs.readFileSync(output, 'utf8'));
    expect(json.client[0].api_key[0].current_key).toBe('AIzaAndroidOnlyKey');
  });
});

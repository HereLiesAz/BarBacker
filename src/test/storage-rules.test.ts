import { describe, it, beforeAll, afterAll, beforeEach, expect } from 'vitest';
import {
  initializeTestEnvironment,
  RulesTestEnvironment,
  assertSucceeds,
  assertFails,
} from '@firebase/rules-unit-testing';
import { ref, uploadBytes, deleteObject } from 'firebase/storage';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Regression coverage for storage.rules, which — until this file
// existed — was never actually loaded by anything in this repo (see
// firebase.json/vitest.rules.config.ts): a partial-segment wildcard
// (`logo.{ext}`) made the entire file fail to parse, so neither the
// logo rule nor the bottlePhotos rule was ever in force. `npm run
// test:rules` now starts the Storage emulator alongside Firestore
// specifically so a syntax regression here fails CI the same way one
// in firestore.rules already does.
const PROJECT_ID = 'barbacker-storage-rules-test';
const RULES_PATH = fileURLToPath(new URL('../../storage.rules', import.meta.url));

let env: RulesTestEnvironment;

const BAR_A = 'bar-a';
const BAR_B = 'bar-b';
const staffOfA = { bars: { [BAR_A]: 'Staff' } };
const managerOfA = { bars: { [BAR_A]: 'Manager' } };
const staffOfB = { bars: { [BAR_B]: 'Staff' } };
const admin = { admin: true };

const tinyJpeg = new Uint8Array([0xff, 0xd8, 0xff, 0xd9]);
const jpegMeta = { contentType: 'image/jpeg' };

describe('storage rules', () => {
  beforeAll(async () => {
    env = await initializeTestEnvironment({
      projectId: PROJECT_ID,
      storage: {
        rules: readFileSync(RULES_PATH, 'utf8'),
        host: '127.0.0.1',
        port: 9199,
      },
    });
  });

  afterAll(async () => {
    await env.cleanup();
  });

  beforeEach(async () => {
    await env.clearStorage();
  });

  describe('bar logo', () => {
    it('lets a Manager upload a logo under 2MB', async () => {
      const storage = env.authenticatedContext('mgr', managerOfA).storage();
      await assertSucceeds(uploadBytes(ref(storage, `bars/${BAR_A}/logo.jpg`), tinyJpeg, jpegMeta));
    });

    it('denies Staff (not Manager+) from uploading a logo', async () => {
      const storage = env.authenticatedContext('staff', staffOfA).storage();
      await assertFails(uploadBytes(ref(storage, `bars/${BAR_A}/logo.jpg`), tinyJpeg, jpegMeta));
    });

    it('denies a Manager of a different bar', async () => {
      const storage = env.authenticatedContext('mgr-b', { bars: { [BAR_B]: 'Manager' } }).storage();
      await assertFails(uploadBytes(ref(storage, `bars/${BAR_A}/logo.jpg`), tinyJpeg, jpegMeta));
    });

    it('lets an admin upload regardless of per-bar role', async () => {
      const storage = env.authenticatedContext('root', admin).storage();
      await assertSucceeds(uploadBytes(ref(storage, `bars/${BAR_A}/logo.png`), tinyJpeg, { contentType: 'image/png' }));
    });

    it('rejects a file over 2MB', async () => {
      const storage = env.authenticatedContext('mgr', managerOfA).storage();
      const big = new Uint8Array(2 * 1024 * 1024 + 1);
      await assertFails(uploadBytes(ref(storage, `bars/${BAR_A}/logo.jpg`), big, jpegMeta));
    });

    it('rejects a non-image contentType', async () => {
      const storage = env.authenticatedContext('mgr', managerOfA).storage();
      await assertFails(uploadBytes(ref(storage, `bars/${BAR_A}/logo.jpg`), tinyJpeg, { contentType: 'text/html' }));
    });

    it('only matches files literally named logo.<ext> — a Manager cannot write elsewhere under bars/{barId}/ via this rule', async () => {
      const storage = env.authenticatedContext('mgr', managerOfA).storage();
      await assertFails(uploadBytes(ref(storage, `bars/${BAR_A}/not-a-logo.jpg`), tinyJpeg, jpegMeta));
    });

    it('is readable by any signed-in user, including a member of a different bar', async () => {
      const uploader = env.authenticatedContext('mgr', managerOfA).storage();
      await env.withSecurityRulesDisabled(async (ctx) => {
        await uploadBytes(ref(ctx.storage(), `bars/${BAR_A}/logo.jpg`), tinyJpeg, jpegMeta);
      });
      const outsider = env.authenticatedContext('staff-b', staffOfB).storage();
      // getDownloadURL isn't emulator-friendly here; getBytes proves the read rule.
      const { getBytes } = await import('firebase/storage');
      await assertSucceeds(getBytes(ref(outsider, `bars/${BAR_A}/logo.jpg`)));
      void uploader;
    });
  });

  describe('bottlePhotos', () => {
    it('lets any bar member (not just Manager+) upload', async () => {
      const storage = env.authenticatedContext('staff', staffOfA).storage();
      await assertSucceeds(uploadBytes(ref(storage, `bottlePhotos/${BAR_A}/staff_123.jpg`), tinyJpeg, jpegMeta));
    });

    it('denies a member of a different bar from writing into bar A\'s path', async () => {
      const storage = env.authenticatedContext('staff-b', staffOfB).storage();
      await assertFails(uploadBytes(ref(storage, `bottlePhotos/${BAR_A}/staff-b_123.jpg`), tinyJpeg, jpegMeta));
    });

    it('denies a signed-in user with no role at all', async () => {
      const storage = env.authenticatedContext('nobody', {}).storage();
      await assertFails(uploadBytes(ref(storage, `bottlePhotos/${BAR_A}/nobody_123.jpg`), tinyJpeg, jpegMeta));
    });

    it('rejects a file over 5MB', async () => {
      const storage = env.authenticatedContext('staff', staffOfA).storage();
      const big = new Uint8Array(5 * 1024 * 1024 + 1);
      await assertFails(uploadBytes(ref(storage, `bottlePhotos/${BAR_A}/staff_big.jpg`), big, jpegMeta));
    });

    it('is readable by a member of that bar', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await uploadBytes(ref(ctx.storage(), `bottlePhotos/${BAR_A}/staff_1.jpg`), tinyJpeg, jpegMeta);
      });
      const reader = env.authenticatedContext('mgr', managerOfA).storage();
      const { getBytes } = await import('firebase/storage');
      await assertSucceeds(getBytes(ref(reader, `bottlePhotos/${BAR_A}/staff_1.jpg`)));
    });

    it('is NOT readable by a member of a different bar (unlike the logo, this is per-bar content)', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await uploadBytes(ref(ctx.storage(), `bottlePhotos/${BAR_A}/staff_1.jpg`), tinyJpeg, jpegMeta);
      });
      const reader = env.authenticatedContext('staff-b', staffOfB).storage();
      const { getBytes } = await import('firebase/storage');
      await assertFails(getBytes(ref(reader, `bottlePhotos/${BAR_A}/staff_1.jpg`)));
    });

    it('is not readable by a signed-in user with no bar membership at all', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await uploadBytes(ref(ctx.storage(), `bottlePhotos/${BAR_A}/staff_1.jpg`), tinyJpeg, jpegMeta);
      });
      const reader = env.authenticatedContext('nobody', {}).storage();
      const { getBytes } = await import('firebase/storage');
      await assertFails(getBytes(ref(reader, `bottlePhotos/${BAR_A}/staff_1.jpg`)));
    });
  });

  it('denies every path for an unauthenticated request', async () => {
    const storage = env.unauthenticatedContext().storage();
    await assertFails(uploadBytes(ref(storage, `bars/${BAR_A}/logo.jpg`), tinyJpeg, jpegMeta));
    await assertFails(uploadBytes(ref(storage, `bottlePhotos/${BAR_A}/x.jpg`), tinyJpeg, jpegMeta));
  });
});

// Referenced only to keep the deleteObject import intentional if a
// future rule adds delete coverage — currently write also governs
// delete (Storage has no separate `allow delete`), and no rule here
// permits it since `request.resource` is null on a delete request
// and every write rule requires `request.resource.size`/`contentType`.
void deleteObject;

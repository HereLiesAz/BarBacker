import { defineConfig } from 'vitest/config';

// Separate config for Firestore rules tests. They run in a Node
// environment against a live emulator (started by `firebase
// emulators:exec`, see the test:rules npm script) and have no need for
// jsdom, Material Web polyfills, or the React test setup.
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/test/firestore-rules.test.ts'],
    testTimeout: 15000,
  },
});

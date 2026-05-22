/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // The full set of icon sizes lives in public/icon-NxN.png. The
      // static manifest.json that used to ship with the repo was
      // overwritten by this plugin at build time and is now removed —
      // this config is the single source of truth for both
      // `public/manifest.json` (dev) and the built `dist/manifest.json`.
      includeAssets: [
        'icon-48x48.png',
        'icon-72x72.png',
        'icon-96x96.png',
        'icon-128x128.png',
        'icon-144x144.png',
        'icon-152x152.png',
        'icon-192x192.png',
        'icon-256x256.png',
        'icon-384x384.png',
        'icon-512x512.png',
      ],
      manifestFilename: 'manifest.json',
      manifest: {
        name: 'BarBacker',
        short_name: 'BarBacker',
        description: 'Bartender Paging System',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        scope: './',
        icons: [
          { src: 'icon-48x48.png', sizes: '48x48', type: 'image/png' },
          { src: 'icon-72x72.png', sizes: '72x72', type: 'image/png' },
          { src: 'icon-96x96.png', sizes: '96x96', type: 'image/png' },
          { src: 'icon-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'icon-144x144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icon-152x152.png', sizes: '152x152', type: 'image/png' },
          { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          { src: 'icon-256x256.png', sizes: '256x256', type: 'image/png' },
          { src: 'icon-384x384.png', sizes: '384x384', type: 'image/png' },
          { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // Rules tests run against the Firestore emulator and need their own
    // node environment + a live emulator process. They are excluded from
    // the default suite and invoked via `npm run test:rules`, which
    // wraps them in `firebase emulators:exec`.
    exclude: ['**/node_modules/**', '**/dist/**', '**/firestore-rules.test.ts'],
  },
})

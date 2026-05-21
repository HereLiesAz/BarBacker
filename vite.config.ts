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
      includeAssets: ['icon-192x192.png', 'icon-512x512.png'],
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
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
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

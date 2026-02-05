import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.HereLiesAz.BarBacker',
  appName: 'barbacker',
  webDir: 'dist',
  server: {
    // Note: import.meta.env is Vite specific and may fail in Capacitor CLI context if not transpiled.
    // Falling back to process.env or hardcoded for the config file.
    url: 'https://hereliesaz.github.io/BarBacker/',
    allowNavigation: ['hereliesaz.github.io']
  }
};

export default config;

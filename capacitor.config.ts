import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.HereLiesAz.BarBacker',
  appName: 'barbacker',
  webDir: 'dist',
  server: {
    url: import.meta.env.VITE_PWA_URL || 'https://hereliesaz.github.io/BarBacker/',
    allowNavigation: ['hereliesaz.github.io']
  }
};

export default config;

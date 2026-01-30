import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.HereLiesAz.BarBacker',
  appName: 'barbacker',
  webDir: 'dist',
  server: {
    url: 'https://hereliesaz.github.io/BarBacker/',
    allowNavigation: ['hereliesaz.github.io']
  }
};

export default config;

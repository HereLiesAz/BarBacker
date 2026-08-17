import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.HereLiesAz.BarBacker',
  appName: 'barbacker',
  webDir: 'dist',
  // No `server.url` — that setting tells the WebView to navigate to a
  // REMOTE origin at runtime instead of loading the bundled `webDir`
  // assets, which is exactly what it was doing here (pointed at the
  // GitHub Pages site). That made every APK content-identical
  // regardless of which commit built it — `npx cap sync android`
  // (build-mobile.yml) copied dist/ into the project for nothing,
  // since it was never actually loaded — required network
  // connectivity just to open the app at all (defeating the PWA
  // offline-caching work), and meant a bad gh-pages deploy could
  // break every already-installed APK instantly with no way to roll
  // back independently of the web deploy. The app now loads its own
  // bundled assets like a normal Capacitor app.
};

export default config;

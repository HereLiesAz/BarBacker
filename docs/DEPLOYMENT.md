# Deployment Guide

## Web Deployment (GitHub Pages)

The web application is hosted on GitHub Pages.

1.  **Build**:
    ```bash
    npm run build
    ```
    This command runs:
    *   `scripts/generate-sw.js`: Generates the Service Worker with environment variables.
    *   `tsc`: Type checks the code.
    *   `vite build`: Bundles the application into the `dist/` directory.

2.  **Deploy**:
    The project is configured to deploy via the `gh-pages` package.
    ```bash
    npm run deploy
    ```
    This pushes the `dist` folder to the `gh-pages` branch.

## Android Deployment

The Android application is a Capacitor wrapper around the web app.

### Prerequisites
*   Android Studio
*   Java 21 (JDK 21)
*   Keystore file (for signing)

### Build Process (CI/CD)
The `.github/workflows/build-mobile.yml` workflow handles this automatically on tag push or manual trigger.

1.  **Environment Setup**: Installs Node, Java 21.
2.  **Web Build**: Runs `npm run build`.
3.  **Capacitor Sync**:
    ```bash
    npx cap sync android
    ```
    Copies the web assets (`dist/`) into the Android project (`android/app/src/main/assets/public`).
4.  **Resource Generation**:
    *   `scripts/generate-google-services.js` creates `google-services.json` from secrets.
5.  **Gradle Build**:
    ```bash
    cd android && ./gradlew assembleDebug
    ```
6.  **Signing**: Signs the APK if a keystore is provided.
7.  **Release**: Uploads the APK to GitHub Releases.

### Manual Local Build
1.  Ensure `dist/` is up to date: `npm run build`.
2.  Sync Capacitor: `npx cap sync android`.
3.  Open Android Studio: `npx cap open android`.
4.  Build/Run from Android Studio.

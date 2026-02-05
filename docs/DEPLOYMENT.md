# Deployment Guide

## Web (PWA)
The web version is hosted on GitHub Pages.
1. **Build**: `npm run build`
2. **Deploy**: `npm run deploy` (which runs `gh-pages -d dist`).

## Android
1. **Prerequisites**: Android Studio, Java 21 (JDK 21).
2. **Sync**: `npx cap sync android`
3. **Build**:
   - Open `android/` in Android Studio.
   - Build > Build Bundle(s) / APK(s) > Build APK.
   - Or via CLI: `cd android && ./gradlew assembleDebug`.
4. **Release**:
   - Releases are automated via GitHub Actions (`.github/workflows/build-mobile.yml`).
   - Tags trigger builds.

## iOS
1. **Prerequisites**: Xcode, CocoaPods (Mac only).
2. **Sync**: `npx cap sync ios`
3. **Build**:
   - Open `ios/App/App.xcworkspace` in Xcode.
   - Select target device/simulator.
   - Product > Archive.

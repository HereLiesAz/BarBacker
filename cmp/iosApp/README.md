# iOS app shell

The Compose UI is shared; this directory holds the thin Swift layer that
hosts it, plus the spec the Xcode project is generated from.

## What is here

- `project.yml` — the Xcode project, as [XcodeGen](https://github.com/yonaskolb/XcodeGen)
  reads it. Capabilities, entitlements, `Info.plist`, the Firebase
  package dependencies, and the Gradle build phase all live here.
- `Config.example.xcconfig` — the Firebase project values, to be copied
  and filled in. The copy is gitignored.
- `iosApp/iOSApp.swift` — the SwiftUI `@main` entry point.
- `iosApp/ContentView.swift` — a `UIViewControllerRepresentable` wrapping
  `MainViewController()`, the Kotlin function exported by the
  `ComposeApp` framework.
- `iosApp/iosApp.debug.entitlements` / `iosApp.release.entitlements` —
  Push Notifications and Sign in with Apple. Two files because
  `aps-environment` differs, and getting it wrong means every page fails
  with `BadDeviceToken`.

## Generating the project

On a Mac with Xcode:

```sh
brew install xcodegen
cd cmp/iosApp
cp Config.example.xcconfig Config.xcconfig   # then fill it in
xcodegen generate
open iosApp.xcodeproj
```

Then set the signing team, in `Config.xcconfig` or in Xcode's
Signing & Capabilities pane.

`iosApp.xcodeproj` is gitignored, because it is a build output. Edit
`project.yml` and regenerate; edits made in Xcode's project editor are
silently reverted by the next `xcodegen generate`.

## Why the project is not committed

An `.xcodeproj` is a directory of generated XML full of opaque UUIDs. It
cannot be reviewed in a diff, and it cannot be built or verified on the
Linux hosts this repository's CI runs on — so committing one would mean
committing something nobody working here could check. `project.yml` says
the same thing in a form a person can read and a tool can turn back into
the real project deterministically.

## Caveats

**None of this has been generated or built.** There is no macOS runner
in CI and no Mac in the loop, so `project.yml`, the entitlements, and the
Swift and Kotlin iOS sources are all written blind. Treat the first real
build as a review rather than a formality. The same applies to the iOS
halves of the shared code — `ImagePicker.ios.kt`, `PhotoCapture.ios.kt`,
`BottleRecognizer.ios.kt`, and `SocialSignIn.ios.kt` are first drafts
against UIKit, Vision, and AuthenticationServices.

Simulator builds need an Apple Silicon Mac: Compose Multiplatform 1.11.x
publishes no Intel-simulator (`iosX64`) artifacts, so only
`iosSimulatorArm64` and `iosArm64` are configured.

The Firebase iOS SDK is pulled in over Swift Package Manager, and its
major version has to match the one GitLive's cinterop bindings were
generated against. A mismatch shows up as missing selectors at link
time, not as a version warning.

Push registration is driven from Kotlin (`PushTokens.ios.kt`), not from
an app delegate. FCM cannot mint a token before Firebase is configured,
and Firebase is configured in the first composition rather than at
launch — so registering in `didFinishLaunching` races with it, usually
wins, and when it loses looks like a device that simply never receives
pages.

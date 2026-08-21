# iOS app shell

The Compose UI is shared; this directory holds the thin Swift layer that
hosts it, plus the Xcode project that builds an `.ipa`.

## What is here

- `iosApp/iOSApp.swift` — the SwiftUI `@main` entry point.
- `iosApp/ContentView.swift` — a `UIViewControllerRepresentable` wrapping
  `MainViewController()`, the Kotlin function exported by the `ComposeApp`
  framework.

## What is not here

There is no `iosApp.xcodeproj` in the repository. An Xcode project file is
a large generated artifact that cannot be built or verified on a Linux CI
host, and committing an unverified one is worse than committing none —
it would look supported while failing on the first real build.

## Creating the project

On a Mac with Xcode:

1. Create a new iOS App project in this directory named `iosApp`, with
   SwiftUI as the interface. Replace its generated `iOSApp.swift` and
   `ContentView.swift` with the ones here.

2. Add a **Run Script** build phase, ordered *before* "Compile Sources":

   ```sh
   cd "$SRCROOT/.."
   ./gradlew :composeApp:embedAndSignAppleFrameworkForXcode
   ```

3. In Build Settings, add to **Framework Search Paths**:

   ```
   $(SRCROOT)/../composeApp/build/xcode-frameworks/$(CONFIGURATION)/$(SDK_NAME)
   ```

4. Add the six `VITE_FIREBASE_*` keys to `Info.plist` — the client reads
   its Firebase configuration from there. See [../../docs/CMP.md](../../docs/CMP.md).

5. Set the bundle identifier and signing team.

Simulator builds need an Apple Silicon Mac: Compose Multiplatform 1.11.x
publishes no Intel-simulator (`iosX64`) artifacts, so only
`iosSimulatorArm64` and `iosArm64` are configured.

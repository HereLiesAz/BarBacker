# Compose Multiplatform Client

`cmp/` holds a Kotlin/Compose Multiplatform client that mirrors the PWA,
targeting Android, iOS, and desktop from one codebase. It talks to the
same Firestore project, obeys the same `firestore.rules`, and is driven by
the same Cloud Functions as the web app — it is a second front end, not a
second product.

This is in progress. See [Status](#status) for what actually works today.

## Why a separate Gradle build

`cmp/` is its own Gradle build, not a module of the Capacitor project in
`android/`. Those two would otherwise fight over the root project name,
the AGP version, and the `local.properties` SDK pointer — and more
decisively, `npx cap sync android` rewrites parts of `android/` from
scratch, so nothing durable can live there.

## Target set

| Target | Status | Notes |
|---|---|---|
| Android | Builds in CI | `minSdk` 24, `compileSdk` 36 |
| Desktop (JVM) | Builds in CI | Windows, macOS, Linux via Compose Desktop |
| iOS | Configured, not built in CI | Needs a macOS runner with Xcode |
| Web | Not a target | Served by the existing PWA |

Web is deliberately absent. Compose Multiplatform's web target is
`wasmJs`, and GitLive's Firebase KMP wrappers publish
android/ios/jvm/js/macos/tvos but **no wasmJs artifact**. A Compose web
build would therefore need an entirely separate data layer — realtime
Firestore over something other than the SDK — to reach parity with a PWA
that already serves browsers well. If that changes upstream, the data
layer here is already behind interfaces and could be re-pointed.

`iosX64` is also absent: Compose Multiplatform 1.11.x publishes no
Intel-simulator variant. Apple Silicon simulators use
`iosSimulatorArm64`.

## Module layout

```
cmp/
  gradle/libs.versions.toml   Version catalog
  shared/                     Domain model, pure logic, Firebase data layer
  composeApp/                 Compose UI plus the per-platform entry points
  iosApp/                     Swift shim for hosting the Compose view
```

`shared` carries no Compose dependency, so the domain model and the
repository layer stay testable without a UI toolkit.

### Toolchain versions

Kotlin, Compose Multiplatform, and AGP are pinned together in the version
catalog. Kotlin and CMP are **version-locked to each other**: CMP 1.11.1's
runtime declares `kotlin-stdlib 2.2.20`, so bumping one without the other
produces compiler-plugin ABI errors rather than a clean failure.

## Configuration

The client reads the same six values the web build does, so one `.env`
drives every client. It never bundles a `google-services.json`; Firebase
is initialised programmatically from these:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

These are optional, and each feature reports itself unsupported rather
than failing when its value is absent:

```
VITE_ICAL_FEED_BASE_URL
VITE_GOOGLE_SERVER_CLIENT_ID
VITE_GOOGLE_DESKTOP_CLIENT_ID
VITE_GOOGLE_DESKTOP_CLIENT_SECRET
VITE_GOOGLE_IOS_CLIENT_ID
```

`VITE_ICAL_FEED_BASE_URL` names where the outbound iCal feed is actually
served from — a Cloud Function, on a different host from everything else.
Without it, Calendar Settings says the link cannot be shown rather than
constructing one that 404s.

The `VITE_GOOGLE_*` values are OAuth client ids for Google sign-in, and
which one each platform needs is not interchangeable:

| Value | Used by | Notes |
|---|---|---|
| `SERVER_CLIENT_ID` | Android | The project's **web** client id, not the Android one — it is the audience Firebase expects in the ID token, and the Android client id yields a token Firebase rejects. |
| `DESKTOP_CLIENT_ID` / `_SECRET` | Desktop | A "Desktop app" client. The secret is **not** confidential — it ships in the binary, and PKCE is what protects the flow; Google's token endpoint simply asks for it. |
| `IOS_CLIENT_ID` | iOS | Its reversed form is the redirect scheme, and must also appear under `CFBundleURLTypes` in `Info.plist`. |

With none of them set, the sign-in screen shows email and password only.

Where each platform looks for them:

| Platform | Source |
|---|---|
| Android | String resources, named as the lowercased variable (`vite_firebase_api_key`) |
| Desktop | JVM system properties first, then environment variables |
| iOS | `Info.plist` entries |

If any value is missing the app renders a "Not configured" screen naming
what is absent, rather than failing inside the Firebase SDK with a trace
that says nothing about the cause.

## Building

```bash
cd cmp

# Android debug APK
./gradlew :composeApp:assembleDebug

# Desktop — run directly
./gradlew :composeApp:run

# Desktop — native installer (.dmg / .msi / .deb)
./gradlew :composeApp:packageDistributionForCurrentOS

# Shared tests
./gradlew :shared:desktopTest
```

Running desktop against a real project:

```bash
./gradlew :composeApp:run \
  -DVITE_FIREBASE_API_KEY=... \
  -DVITE_FIREBASE_PROJECT_ID=... \
  # ...and the rest
```

iOS needs macOS with Xcode; see `cmp/iosApp/README.md`.

An `ANDROID_HOME` pointing at an SDK with platform 36 is required for the
Android target. Create `cmp/local.properties` with `sdk.dir=<path>` if the
environment variable is not set.

## Architecture

### Data layer

Every Firestore path lives in `data/Paths.kt`. Several are not where you
would guess, and are matched literally by `firestore.rules`:

- Requests are a **root** collection filtered by `barId`, not a
  subcollection of the bar.
- Membership is per-bar, so one account has an independent role, job
  title, and status in every bar it belongs to.
- Push tokens are a separate subcollection from membership, so a device
  can be de-registered without touching the membership document.

Repositories expose realtime `Flow`s and are defined as interfaces with
Firebase implementations behind them, so the UI can be driven by fakes.

**Every bar-scoped flow emits its empty value before its guard.** That
ordering is a contract, not a style choice: on a bar switch or sign-out
the previous bar's data must leave the screen immediately, even though the
new subscription routinely fails with `permission-denied` for a moment —
until the role claim reaches the ID token. Without the leading empty
emission, a shared tablet behind a bar keeps showing the last person's
floor. The same rule is why sign-out clears the selected bar rather than
only the user.

### Writes

Writes go through `@Serializable` DTOs with `encodeDefaults = false`, so
absent optional fields are omitted rather than written as explicit nulls.
This matters because `firestore.rules` uses `hasOnly()`, and because the
server-side push fanout keys off whether `buttonId` is *present* — a null
is not the same as missing.

Writes into `beerInventory` use `FieldPath` with separate segments, never
a dotted `"beerInventory.$brand"` string. Firestore splits dotted paths on
`.`, so a brand like "St. Pauli Girl" would land in a nested
`{ St: { " Pauli Girl": ... } }`.

A logo goes to `bars/{barId}/logo.<ext>` in Storage, which is not a free
choice either: `storage.rules` matches `/bars/{barId}/{fileName}` and then
narrows `fileName` with `matches('logo\\..+')`. Anything outside that shape
has no matching rule, and Storage denies by default — so a near-miss fails
as a flat permission error with nothing pointing at the path.

### Theming

Which brand colour lands where is fixed by the PWA, because the same
`theme` map is read by both clients and the two sit on the same bar:

| Field | Role |
|---|---|
| `accentColor` | The request-tile background. Its label is whichever of black/white is readable on it — never the other brand colour. |
| `primaryColor` | The M3 `primary` role: headings, filled buttons. |

`fontFamily` stores a CSS font stack, so a font chosen in either client
round-trips through the other. What this client renders from it is
narrower — no font resources are bundled, so a serif stack becomes the
platform serif and everything else the platform default.

### Roles

`BarRole` (the privilege tier) and `JobTitle` (the job function) are
distinct types rather than two `String` fields. Conflating them is the
most-repeated bug in this codebase's history; they can no longer be
assigned to each other by accident. See [DATA_MODEL.md](DATA_MODEL.md).

The join path never takes the privilege role from the picker. It re-reads
`ownerId` and `joinPolicy` from the bar document, because local state can
be stale — the join screen is interactive before the bar listener's first
snapshot lands — and because `firestore.rules` evaluates the server's
actual values and rejects a mismatch with no diagnostic.

Joining forces an ID-token refresh afterwards. The `bars` custom claim
that gates most reads is stamped asynchronously by `onUserRoleChange`;
without the refresh, every role-gated read stays denied for up to an hour.

## Testing

`./gradlew :shared:desktopTest` runs the shared suite: 123 tests covering
the ported pure logic — contrast colour, brand matching, the button label
resolver, sort order, sub-menu synthesis, tap classification, reorder
arithmetic, picked-image identity, OCR line filtering, event-time
conversion, the request visibility filter, and alert eligibility.

These are the pieces where a silent divergence from the PWA would be
hardest to notice, so each behavioural subtlety is pinned by a test that
fails if it is lost:

- The `break` bypass is an exact button-id match, not a substring — or
  free text like "BREAKAGE AT WELL 3" pages the whole bar past everyone's
  preferences.
- Unresolvable labels fail open, so free text nobody subscribed to still
  reaches the floor.
- Muted requests sort last rather than being removed, and still count in
  the footer's total.
- An explicitly empty preference list is not overwritten by job-title
  defaults.
- Brand sub-menus key off the label, not the `brand_`-prefixed id.
- The synthesised "+ ADD …" and CUSTOM tiles have no children, so any
  path that reaches the children check treats them as leaves and pages
  the floor asking for "ICE: + ADD WELL". Tap classification runs first,
  and a test pins each case.
- Muted requests stay *visible* but stop being *alert-worthy* — two
  genuinely different questions, and conflating them would either
  silently drop pages or keep making noise about ones deliberately set
  aside.
- A reorder dragged down lands *after* the tiles it passed; dragged up it
  lands *before* the target. Getting that backwards puts the button one
  slot off, which reads as a flaky gesture rather than a bug.
- The synthesised tiles are stripped from a saved order on the way to
  Firestore, not before the drag, so the indices the gesture works in
  stay aligned with what is on screen.
- An all-day calendar event arrives as a bare date. Which midnight that
  means has to be resolved against the SAME zone the display uses, or the
  event lands on the wrong day by exactly the offset between them.
- OCR emits stray single glyphs from a label's border. Each one is
  another chance for the brand matcher to find a spurious substring hit,
  so one-character lines never reach it.
- PKCE's `code_challenge` is base64url with no padding, and the platforms
  disagree enough that it is hand-rolled. Both tail cases are pinned:
  getting one wrong yields a challenge that fails only for some digests,
  which looks like an intermittent sign-in bug rather than an encoder
  one.

## Status

Working end to end:

- Email sign-in and registration, with session restore
- Bar selection: your joined bars, a debounced search across both this
  app's bars and OpenStreetMap, and a create form
- The join flow, including invite consumption and approval-pending
- The dashboard: request grid, sub-menu drill-down with synthesised
  children, sending pages, and claim / cancel / mute
- Adding wells, beer brands, and types from the grid's "+ ADD …" tiles,
  plus free-text custom requests and the quantity stepper
- Chat, with pinning, deletion, paged scrollback, the dashboard marquee,
  and an unread badge
- The 86'd list, including premium private entries
- The roster, with the Manager+ approval and ownership-claim queues
- Per-member notification preferences
- Realtime updates for bar config, membership, roster, requests, chat,
  the 86'd list, and ownership claims
- Premium bar theming, with the tile label derived from the accent colour
  it sits on
- Push registration on Android and iOS, plus the in-app alert loop that
  sounds and vibrates every minute while un-muted pages are waiting
- Bar management for Manager+: hiding grid buttons, restoring hidden ones
  on premium, and inviting staff or managers by email
- The theme editor: brand colours, font, and a logo uploaded to Storage
- Drag-to-reorder on the main grid and inside every sub-menu, held behind
  a long press so a tap still sends a page, and operable from a keyboard:
  Space or Enter picks a tile up, the arrow keys move it, Escape cancels
- The calendar: an agenda of the bar's events, Manager+ create/edit/delete,
  and the settings screen for Google, the outbound iCal feed, and inbound
  `.ics` subscriptions
- POS integration: connect Square or Toast, sync the menu, and a seven-day
  sales summary
- The bottle scanner on Android — camera, on-device OCR, and the
  add-to-menu / 86 / send-alert actions
- Remote images: the bar's logo in the theme editor, and a scanned
  bottle's photo on the request row it is attached to
- Google sign-in on Android (Credential Manager) and desktop (a loopback
  redirect with PKCE), alongside email and password
- The ntfy deep link: the notification screen mints an account topic on
  first open and hands it straight to the ntfy app

Not built yet — the PWA remains the complete client:

- **iOS push delivery.** The token code is shared with Android, but iOS
  needs an APNs capability and entitlement configured in an Xcode
  project that does not exist yet (see `cmp/iosApp/README.md`). Until
  then iOS falls back to the in-app alert loop.
- **The iOS UIKit interop is unverified.** `ImagePicker.ios.kt`,
  `PhotoCapture.ios.kt`, and `BottleRecognizer.ios.kt` are written
  against `UIDocumentPickerViewController`, `UIImagePickerController`,
  and Vision respectively, but with no macOS runner and no Xcode project
  none has ever been compiled. `SocialSignIn.ios.kt` joins them —
  `ASWebAuthenticationSession` for Google, `ASAuthorizationController` for
  Apple. Treat them all as first drafts. The camera one also needs an
  `NSCameraUsageDescription` in `Info.plist`, or iOS terminates the app
  the moment the picker opens, and Apple sign-in needs the "Sign in with
  Apple" capability on the target. Android and desktop are built in CI.
- **The bottle scanner needs a camera and OCR, so desktop has neither
  half.** ML Kit is Android-only and Vision is Apple-only; the
  alternatives were bundling a Tesseract native library per desktop
  platform or calling a cloud vision API, and the second would break the
  on-device promise the other platforms keep. The scanner reports itself
  unsupported there rather than offering a dead button.
- **Desktop push.** There is no FCM transport for a JVM app. The
  provider reports this explicitly rather than registering nothing and
  looking broken; the in-app alert loop is what pages a desktop user.
- **Apple sign-in away from iOS.** Apple's web flow needs a client
  secret that is a JWT signed with a private key — a real confidential
  credential, which an app shipped to devices has nowhere safe to keep.
  Doing it properly needs a Cloud Function to run the exchange, and that
  does not exist. The button is hidden on Android and desktop rather than
  offered and broken.

Deliberately absent, because the PWA has no such feature either:
inventory *removal*. Wells, brands, and types are added from the grid's
"+ ADD …" tiles in both clients, and a brand is taken off the floor by
hiding its tile rather than by deleting it.

One caveat worth stating plainly: the Firestore read and write paths
compile and are structured to match the rules, but have not been exercised
against a live project from this client. Decoding mismatches — a field
written by an older client with a different type — would surface at
runtime, not compile time. The snapshot mappers degrade a single bad field
to null rather than killing the listener, but that is damage control, not
a substitute for a real run.

## See also

- [ARCHITECTURE.md](ARCHITECTURE.md) — the system as a whole
- [DATA_MODEL.md](DATA_MODEL.md) — Firestore schema and security rules
- [COMPONENTS.md](COMPONENTS.md) — the PWA's component inventory

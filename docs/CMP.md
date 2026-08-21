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

`./gradlew :shared:desktopTest` runs the shared suite: 70 tests covering
the ported pure logic — contrast colour, brand matching, the button label
resolver, sort order, sub-menu synthesis, and the request visibility
filter.

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

## Status

Working end to end:

- Email sign-in and registration, with session restore
- Bar selection: your joined bars, a debounced search across both this
  app's bars and OpenStreetMap, and a create form
- The join flow, including invite consumption and approval-pending
- The dashboard: request grid, sub-menu drill-down with synthesised
  children, sending pages, and claim / cancel / mute
- Chat, with pinning, deletion, paged scrollback, the dashboard marquee,
  and an unread badge
- The 86'd list, including premium private entries
- The roster, with the Manager+ approval and ownership-claim queues
- Per-member notification preferences
- Realtime updates for bar config, membership, roster, requests, chat,
  the 86'd list, and ownership claims
- Premium bar theming, with a readability check on the branded label
  colour

Not built yet — the PWA remains the complete client:

- **Calendar, POS settings, and the bottle scanner.** The domain models
  are ported; the screens are not.
- **Push notifications.** No FCM registration, so the nag loop and
  server-side fanout do not reach this client. The notification-settings
  screen shows the ntfy topic for manual subscription but has no
  `ntfy://` deep link.
- **Drag-to-reorder.** The grid honours a saved order; it cannot write one.
- **Bar management.** No invite form, button hiding, or inventory editing.
- **Google and Apple sign-in.** Email/password only.

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

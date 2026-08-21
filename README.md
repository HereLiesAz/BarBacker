# BarBacker

**BarBacker** is a real-time operations tool for bars and restaurants — a digital paging system that replaces shouting and hand signals between bartenders, barbacks, and management, plus a growing set of shift-management features (team chat, a calendar, POS integration, and a bottle-recognition scanner) built on top of the same real-time backend.

## Documentation

*   [Architecture](docs/ARCHITECTURE.md)
*   [Data Model](docs/DATA_MODEL.md)
*   [Components](docs/COMPONENTS.md)
*   [Deployment](docs/DEPLOYMENT.md)
*   [Scripts](docs/SCRIPTS.md)
*   [Security Policy](SECURITY.md)
*   [Agent/contributor guidelines](AGENTS.md)

## What is it?

In a busy bar, bartenders often need items — ice, glassware, fruit, restocking — immediately. **BarBacker** lets bartenders send these requests with a single tap. Barbacks (and anyone else subscribed to that request type) receive them instantly and can "claim" a request to let the team know they're on it. Everything else in the app — chat, the 86'd list, the calendar, POS sync, the bottle scanner — grew out of that same core loop: get information from the person who has it to the person who needs it, as fast as possible, with everyone seeing the same state.

## Key Features

*   **⚡ Quick Requests**: Simple button grids for common needs like "ICE", "BEER", or "WELL" — some are one tap, others (picking a well, a beer brand/type, or a custom quantity) are a couple of taps deep. Buttons can be reordered by drag-and-drop and hidden/restored per bar.
*   **🔔 Real-Time Alerts**: Requests fan out server-side (a Cloud Function, not the client) to everyone subscribed to that request type and currently clocked in — FCM push on native/web, `ntfy.sh` for iOS, plus in-app sound/vibration. A scheduled job re-nags anyone who hasn't dismissed a matching request.
*   **💬 Team Chat**: A per-bar chat with infinite scrollback. Manager+ can pin messages, which drive the dashboard marquee — the same real-time channel everyone already has open, instead of a separate announcements board.
*   **🚫 86'd List**: Track patrons who shouldn't be served. Public entries are visible to any staff member; private entries (with a reason) are Manager+-only and gated behind the bar's premium subscription.
*   **📸 Bottle Scanner** *(premium)*: Point the camera at a bottle label; on-device OCR (no photo ever leaves the device for recognition) suggests a matching brand from the bar's own inventory plus a curated beer/spirits list. Add it to the menu, mark it 86'd, or flag a manager with a photo.
*   **📅 Calendar** *(premium)*: Shift scheduling and bookings, with two-way Google Calendar sync and both inbound and outbound iCal feeds. A scheduled event auto-clocks-in whoever's assigned when their shift starts.
*   **🧾 POS Integration** *(premium)*: Connect Square or Toast (more providers scaffolded, not yet wired up) to sync a live menu and pull order/sales data into the app.
*   **🎨 Custom Branding** *(premium)*: Per-bar logo, primary/accent colors, and font.
*   **👥 Role-Based Access**: Three privilege tiers — Staff, Manager, Owner — enforced server-side by Firestore/Storage security rules, independent of a member's job title (Bartender, Barback, Server, Security, Runner). Bars can require Manager approval to join, or stay open to anyone.
*   **✉️ Invites**: Manager+ can invite a specific email address at a specific role; the invite is consumed automatically the next time that person signs in.
*   **🔎 Bar Search**: Find your bar by name via OpenStreetMap, or create an entry for your venue if it isn't listed yet. If the venue is later reclaimed by its real owner, they can file an ownership claim for a Manager (or the current Owner) to approve.
*   **📱 Installable PWA + Native Android**: Works like a native app on iOS and desktop (installable PWA) and ships as a real Android app via Capacitor.

## How to Use

1.  **Open the App**: Navigate to the deployed URL, or open the Android app.
2.  **Join a Bar**: Search for your bar by name. If it isn't listed yet, you can create it — you'll automatically become its Owner.
3.  **Select Your Role**: Pick a job title (Bartender, Barback, Server, Security, or Runner). If the bar requires approval to join, you'll wait for a Manager to activate your account.
4.  **Use the dashboard**:
    *   Tap a button to send a request; anyone subscribed to it is notified instantly and can claim it.
    *   Open Chat to talk with the team, or Calendar/POS/the bottle scanner if the bar has them enabled.
5.  **Stay synced**: Every device sees the same state in real time — no duplicate work, no dropped requests.

## Local Development

```bash
npm install
npm run dev          # Vite dev server
npm test              # Vitest unit/component tests
npm run test:rules     # Firestore + Storage rules tests (spins up the Firebase emulator)
cd functions && npm install && npm test   # Cloud Functions tests
```

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for environment variables, the CI pipeline, and Android/Cloud Functions deployment.

# BarBacker

**BarBacker** is a real-time communication tool designed to bridge the gap between bartenders and barbacks in high-volume environments. It replaces shouting and hand signals with a streamlined, digital paging system.

## Documentation

*   [Architecture](docs/ARCHITECTURE.md)
*   [Data Model](docs/DATA_MODEL.md)
*   [Components](docs/COMPONENTS.md)
*   [Deployment](docs/DEPLOYMENT.md)
*   [Scripts](docs/SCRIPTS.md)

## What is it?

In a busy bar, bartenders often need items—ice, glassware, fruit, restocking—immediately. **BarBacker** allows bartenders to send these requests with a single tap. Barbacks receive these requests instantly on their device and can "claim" them to let the team know they are on it.

## Key Features

*   **⚡ Instant Requests**: One-tap buttons for common needs like "ICE", "GLASSWARE", or "RESTOCK".
*   **🔔 Real-Time Alerts**: Requests appear instantly on all connected devices.
*   **📍 Location Aware**: Uses OpenStreetMap to verify bar locations and ensure you join the right team.
*   **👥 Role-Based**: Distinct interfaces for Bartenders (sending requests) and Barbacks/Support (fulfilling requests).
*   **📱 Installable PWA**: Works like a native app on iOS and Android.

## How to Use

1.  **Open the App**: Navigate to the deployed URL.
2.  **Join a Bar**: Search for your bar by name or location. If it's your first time, you can create a temporary bar for your shift.
3.  **Select Your Role**:
    *   **Bartender**: You will see a grid of buttons. Tap to request items.
    *   **Barback**: You will see a list of incoming requests. Tap a request to claim it.
4.  **Stay synced**: The app keeps everyone on the same page, preventing duplicate work and ensuring the bar never runs dry.

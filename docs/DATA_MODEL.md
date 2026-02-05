# Data Model

BarBacker uses **Cloud Firestore**, a NoSQL document database. The data is structured into root-level collections.

## Collections

### 1. `bars` (Root)
Stores information about each bar location.

*   **Document ID**: `string` (OSM ID or generated timestamp ID)
*   **Fields**:
    *   `name`: `string` - The display name of the bar.
    *   `address`, `city`, `state`, `zip`, `phone`: `string` - Location details.
    *   `status`: `'verified' | 'temporary'` - Verification status.
    *   `type`: `'bar' | 'restaurant'` - Business type.
    *   `buttons`: `ButtonConfig[]` - Custom button configuration (overrides defaults).
    *   `beerInventory`: `Map<string, string[]>` - Map of Brand -> Types (e.g., "Bud Light" -> ["Bottle", "Draft"]).
    *   `wells`: `string[]` - List of well names (e.g., "Well 1", "Patio").
    *   `hiddenButtonIds`: `string[]` - List of IDs of buttons to hide from the dashboard.
    *   `buttonUsage`: `Map<string, number>` - Counter for button clicks (for sorting).
    *   `customOrders`: `Map<string, string[]>` - Custom sort order for buttons.

### 2. `bars/{barId}/users` (Sub-collection)
Stores user profiles specific to a bar.

*   **Document ID**: `uid` (Firebase Auth ID)
*   **Fields**:
    *   `displayName`: `string` - User's chosen name.
    *   `role`: `string` - 'Bartender', 'Barback', 'Manager', etc.
    *   `status`: `'active' | 'off_clock' | 'pending'` - Current working status.
    *   `joinedAt`: `Timestamp` - When they joined the bar.
    *   `lastSeen`: `Timestamp` - Last activity timestamp.
    *   `email`: `string` - User email.
    *   `notificationPreferences`: `string[]` - List of button IDs this user wants alerts for.
    *   `ntfyTopic`: `string` - The generated topic for iOS notifications (e.g., `barbacker-{uid}`).

### 3. `bars/{barId}/notices` (Sub-collection)
Stores bulletin board messages.

*   **Document ID**: `auto-generated`
*   **Fields**:
    *   `text`: `string` - The message content.
    *   `authorId`: `string` - UID of the poster.
    *   `authorName`: `string` - Name of the poster.
    *   `timestamp`: `Timestamp` - Creation time.

### 4. `bars/{barId}/tokens` (Sub-collection)
Stores FCM tokens for push notifications.

*   **Document ID**: `uid`
*   **Fields**:
    *   `token`: `string` - The FCM registration token.
    *   `updated`: `Timestamp` - Last update time.

### 5. `requests` (Root)
Stores all active and past requests. Note: This is a root collection to allow for easier querying across bars if needed in the future, though currently filtered by `barId`.

*   **Document ID**: `auto-generated`
*   **Fields**:
    *   `barId`: `string` - The ID of the bar this request belongs to.
    *   `label`: `string` - The text of the request (e.g., "ICE: Well 1").
    *   `requesterId`: `string` - UID of the sender.
    *   `requesterName`: `string` - Name of the sender.
    *   `requesterRole`: `string` - Role of the sender.
    *   `status`: `'pending' | 'claimed'` - Current state.
    *   `timestamp`: `Timestamp` - Creation time.
    *   `claimedBy`: `string` (optional) - UID of the claimer.
    *   `claimerName`: `string` (optional) - Name of the claimer.
    *   `claimedAt`: `Timestamp` (optional) - When it was claimed.
    *   `lastNotification`: `Timestamp` - Used to throttle repeat notifications.

## Security Rules (Implicit)

*   **Read**: Generally allowed for authenticated users who are members of the bar.
*   **Write**:
    *   `requests`: Allowed for any active user in the bar.
    *   `bars`: Restricted (mostly managed by logic or initial creation).
    *   `users`: Users can update their own status/preferences. Managers (logic-side) can approve users.

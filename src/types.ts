// Define the structure for a button configuration in the UI.
export interface ButtonConfig {
  // Unique identifier for the button. Used for logic and referencing.
  id: string;
  // The text label displayed on the button.
  label: string;
  // Optional: The name of the icon to display (Material Symbols name).
  icon?: string;
  // Optional: Boolean flag indicating if this is a custom, user-defined button.
  isCustom?: boolean;
  // Optional: Array of child buttons. If present, clicking this button opens a sub-menu of these children.
  children?: ButtonConfig[];
  // Optional: Special action trigger string (e.g., 'add_brand', 'custom_qty') to invoke specific logic handler.
  action?: 'add_brand' | 'add_type' | 'custom_qty';
}

// Define the data model for a 'Bar' document in Firestore.
export interface Bar {
  // The unique ID of the bar (matches document ID).
  id: string;
  // The display name of the bar.
  name: string;
  // The list of buttons configured for this bar.
  buttons: ButtonConfig[];
  // Optional: Physical address line.
  address?: string;
  // Optional: City.
  city?: string;
  // Optional: State.
  state?: string;
  // Optional: Zip code.
  zip?: string;
  // Optional: Phone number.
  phone?: string;
  // Optional: OpenStreetMap ID, if linked.
  osmId?: string;
  // The verification status of the bar ('verified' is public, 'temporary' is for shift-only use).
  status: 'verified' | 'temporary';
  // Optional: The type of establishment.
  type?: 'bar' | 'restaurant';
  // Optional: Inventory mapping for beer (Brand -> Array of Types).
  beerInventory?: Record<string, string[]>;
  // Optional: List of well names defined for the bar.
  wells?: string[];
  // Optional: List of button IDs that are hidden/disabled by the manager.
  hiddenButtonIds?: string[];
  // Optional: Usage statistics for buttons (Button ID -> Count).
  buttonUsage?: Record<string, number>;
  // Optional: Custom sort orders for button lists (Context ID -> Array of Button IDs).
  customOrders?: Record<string, string[]>;
}

// Define the data model for a 'Request' document in Firestore.
export interface Request {
  // The unique ID of the request (matches document ID).
  id: string;
  // The text content of the request (e.g., "ICE: Well 1").
  label: string;
  // The UID of the user who made the request.
  requesterId: string;
  // Optional: The display name of the requester (snapshot at creation time).
  requesterName?: string;
  // Optional: The role of the requester (snapshot at creation time).
  requesterRole?: string;
  // The current status of the request.
  status: 'pending' | 'claimed';
  // The timestamp when the request was created.
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  // Optional: The timestamp when the request was claimed.
  claimedAt?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  // The ID of the bar this request belongs to.
  barId: string;
  // Optional: The name of the user who claimed the request.
  claimerName?: string;
  // Optional: The timestamp of the last notification sent for this request (used for throttling).
  lastNotification?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

// Define the data model for a 'Notice' document (Bulletin Board).
export interface Notice {
  // The unique ID of the notice.
  id: string;
  // The message text of the notice.
  text: string;
  // The UID of the author.
  authorId: string;
  // The display name of the author.
  authorName: string;
  // The timestamp when the notice was posted.
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

// Define the structure of a result from the OpenStreetMap API search.
export interface OSMResult {
  // The unique Place ID from OSM.
  place_id: number;
  // The unique OSM object ID.
  osm_id: number;
  // The full display name (address).
  display_name: string;
  // The specific name of the place.
  name: string;
}

// Define the data model for a User profile within a specific Bar context.
export interface BarUser {
  // The unique ID of the user (matches Firebase Auth UID).
  id: string;
  // Optional: The user's display name.
  displayName?: string;
  // Optional: The user's role (e.g., 'Bartender', 'Barback').
  role?: string;
  // Optional: The user's current status.
  status?: 'active' | 'off_clock' | 'pending';
  // Optional: The timestamp of the user's last activity.
  lastSeen?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  // Optional: The user's email address.
  email?: string;
  // Optional: List of button IDs the user wants to be notified about.
  notificationPreferences?: string[];
  // Optional: The ntfy topic ID for iOS notifications.
  ntfyTopic?: string;
}

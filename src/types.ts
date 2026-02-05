/**
 * Represents the configuration for a request button in the UI.
 */
export interface ButtonConfig {
  /** Unique identifier for the button (e.g., 'ice', 'vodka'). */
  id: string;
  /** Display label for the button (e.g., 'ICE'). */
  label: string;
  /** Optional Material Icon name. */
  icon?: string;
  /** Whether this button was created by a user (custom) vs system default. */
  isCustom?: boolean;
  /** Nested buttons for categories (e.g., 'Mixers' -> 'Coke'). */
  children?: ButtonConfig[];
  /** Optional action type for specific UI behaviors. */
  action?: 'add_brand' | 'add_type' | 'custom_qty';
}

/**
 * Represents a physical Bar establishment.
 */
export interface Bar {
  /** Unique Firestore ID for the bar. */
  id: string;
  /** Name of the bar. */
  name: string;
  /** The configured buttons/menu for this bar. */
  buttons: ButtonConfig[];
  /** Physical address. */
  address?: string;
  /** City. */
  city?: string;
  /** State. */
  state?: string;
  /** ZIP code. */
  zip?: string;
  /** Phone number. */
  phone?: string;
  /** OpenStreetMap ID, used for geolocation linking. */
  osmId?: string;
  /** Verification status of the bar. */
  status: 'verified' | 'temporary';
  /** Type of establishment. */
  type?: 'bar' | 'restaurant';
  /** Inventory of beers available at the bar (for autocomplete). */
  beerInventory?: Record<string, string[]>;
  /** Wells configuration. */
  wells?: string[];
  /** IDs of default buttons that have been hidden/disabled. */
  hiddenButtonIds?: string[];
  /** Tracking usage counts for sorting/analytics. */
  buttonUsage?: Record<string, number>;
  /** Custom order types defined by the bar. */
  customOrders?: Record<string, string[]>;
}

/**
 * Represents a service request made by a user.
 */
export interface Request {
  /** Unique Firestore ID. */
  id: string;
  /** Label of the item requested (e.g., 'ICE'). */
  label: string;
  /** User ID of the person making the request. */
  requesterId: string;
  /** Display name of the requester. */
  requesterName?: string;
  /** Role of the requester (e.g., 'Bartender'). */
  requesterRole?: string;
  /** Current status of the request. */
  status: 'pending' | 'claimed';
  /** Firestore Timestamp of creation. */
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  /** Firestore Timestamp of when it was claimed. */
  claimedAt?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  /** ID of the bar where the request was made. */
  barId: string;
  /** Name of the user who claimed the request. */
  claimerName?: string;
  /** Timestamp of the last notification sent for this request. */
  lastNotification?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

/**
 * Represents a global or bar-wide notice/announcement.
 */
export interface Notice {
  /** Unique Firestore ID. */
  id: string;
  /** Content of the notice. */
  text: string;
  /** User ID of the author. */
  authorId: string;
  /** Display name of the author. */
  authorName: string;
  /** Creation timestamp. */
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

/**
 * Represents a result from the OpenStreetMap Nominatim API.
 */
export interface OSMResult {
  /** Nominatim Place ID. */
  place_id: number;
  /** OpenStreetMap ID. */
  osm_id: number;
  /** Full display address. */
  display_name: string;
  /** Name of the place. */
  name: string;
}

/**
 * Represents a User in the system.
 */
export interface BarUser {
  /** Firebase Auth UID. */
  id: string;
  /** User's display name. */
  displayName?: string;
  /** User's role (Bartender, Barback, etc.). */
  role?: string;
  /** Current working status. */
  status?: 'active' | 'off_clock' | 'pending';
  /** Last time the user was active in the app. */
  lastSeen?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  /** Email address. */
  email?: string;
  /** List of request types (Button IDs) the user wants to be notified about. */
  notificationPreferences?: string[];
  /** Topic ID for ntfy.sh (alternative push service). */
  ntfyTopic?: string;
}

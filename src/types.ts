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
  // Optional: Subscription tier for the bar (gates premium features
  // like custom theme and the private 86'd list).
  subscription?: 'free' | 'premium';
  // Join policy for new users. 'open' = auto-active. 'approval' =
  // pending until a Manager approves.
  joinPolicy?: 'open' | 'approval';
  // Optional: Custom branding for premium bars.
  theme?: BarTheme;
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
  status?: 'active' | 'off_clock' | 'pending' | 'rejected';
  // Optional: The timestamp of the user's last activity.
  lastSeen?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  // Optional: The user's email address.
  email?: string;
  // Optional: List of button IDs the user wants to be notified about.
  notificationPreferences?: string[];
  // Optional: The ntfy topic ID for iOS notifications.
  ntfyTopic?: string;
  // Optional: Server timestamp of the user's most recent notice
  // post. Used by firestore.rules to enforce a 5s cooldown between
  // notice creates. Bumped atomically by saveNotice (batched write).
  lastNoticeAt?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

// Define the data model for a banned-patron entry (86'd list).
export interface EightySixEntry {
  // The unique ID of the entry (matches document ID).
  id: string;
  // The name of the banned patron.
  patronName: string;
  // The UID of the staff member who submitted this entry.
  submittedBy: string;
  // The display name of the submitter (snapshot at creation time).
  submitterName: string;
  // Optional: The reason for banning (only on private entries).
  reason?: string;
  // Visibility level: 'public' is visible to all staff with a role,
  // 'private' is Owner/Manager only and gated by the bar's premium
  // subscription.
  visibility: 'public' | 'private';
  // The timestamp when the entry was created.
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

// Define the structure for custom bar branding/theming. Applied via
// useBarTheme on premium bars only.
export interface BarTheme {
  // Primary brand color (hex).
  primaryColor: string;
  // Accent color (hex).
  accentColor: string;
  // Optional: URL to the bar's logo in Firebase Storage.
  logoUrl?: string;
  // Optional: Font family from a curated list.
  fontFamily?: string;
}

// Define an invite for a specific email to join a bar at a specific
// role. Consumed via Cloud Function; client-side reads scoped to
// Managers+ or the invited address.
export interface BarInvite {
  id: string;
  email: string;            // normalized lowercase
  role: 'Staff' | 'Manager' | 'Owner';
  createdBy: string;        // uid
  createdByName: string;
  createdAt: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  consumed: boolean;
  consumedBy?: string;
  consumedAt?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

// A claim filed by a user requesting Ownership of a bar (e.g. the
// real-world owner reclaiming a temporarily-created entry). Writes
// only go through Cloud Functions.
export interface OwnershipClaim {
  id: string;
  barId: string;
  claimantId: string;
  claimantName: string;
  // Free-form justification supplied by the claimant.
  justification?: string;
  // Lifecycle status.
  status: 'pending' | 'approved' | 'rejected';
  createdAt: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

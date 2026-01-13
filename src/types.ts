export interface ButtonConfig {
  id: string;
  label: string;
  icon?: string;
  isCustom?: boolean;
  children?: ButtonConfig[];
  action?: 'add_brand' | 'add_type' | 'custom_qty';
}

export interface Bar {
  id: string;
  name: string;
  buttons: ButtonConfig[];
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  osmId?: string;
  status: 'verified' | 'temporary';
  type?: 'bar' | 'restaurant';
  beerInventory?: Record<string, string[]>;
  wells?: string[];
  hiddenButtonIds?: string[];
  buttonUsage?: Record<string, number>;
  customOrders?: Record<string, string[]>;
}

export interface Request {
  id: string;
  label: string;
  requesterId: string;
  requesterName?: string;
  requesterRole?: string;
  status: 'pending' | 'claimed';
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  claimedAt?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  barId: string;
  claimerName?: string;
  lastNotification?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

export interface Notice {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

export interface OSMResult {
  place_id: number;
  osm_id: number;
  display_name: string;
  name: string;
}

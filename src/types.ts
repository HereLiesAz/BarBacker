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
  osmId?: string;
  status: 'verified' | 'temporary';
  type?: 'bar' | 'restaurant';
  beerInventory?: Record<string, string[]>;
  wells?: string[];
}

export interface Request {
  id: string;
  label: string;
  requesterId: string;
  requesterName?: string;
  requesterRole?: string;
  status: 'pending' | 'claimed';
  timestamp: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  barId: string;
  claimerName?: string;
}

export interface OSMResult {
  place_id: number;
  osm_id: number;
  display_name: string;
  name: string;
}

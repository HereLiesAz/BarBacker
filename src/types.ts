export interface ButtonConfig {
  id: string;
  label: string;
  icon?: string;
  isCustom?: boolean;
  children?: ButtonConfig[];
}

export interface Bar {
  id: string;
  name: string;
  buttons: ButtonConfig[];
  address?: string;
  osmId?: string;
  status: 'verified' | 'temporary';
}

export interface Request {
  id: string;
  label: string;
  requesterId: string;
  requesterName?: string;
  requesterRole?: string;
  status: 'pending' | 'claimed';
  timestamp: any;
  barId: string;
  claimerName?: string;
}

export interface OSMResult {
  place_id: number;
  osm_id: number;
  display_name: string;
  name: string;
}

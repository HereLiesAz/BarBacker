// POS integration types — Phase 3 of
// docs/plans/2026-05-21-feature-set-purr-design.md. All POS API calls
// happen server-side (Cloud Functions only); the browser never sees
// provider tokens. See callables.ts for the client-facing surface.

export type POSProvider =
  | "square" | "toast"
  | "clover" | "lightspeed" | "spoton" | "touchbistro"
  | "revel" | "lavu" | "talech" | "aloha";

// Square and Toast are the only real implementations; the rest are
// scaffolding files conforming to this interface, kept for future
// implementations rather than deleted (see the "Adapter inventory"
// section of the design doc). Their status here is what the client's
// provider picker enables/disables — see src/constants.ts's
// POS_PROVIDER_STATUS, which must be kept in sync with this list.
export const AVAILABLE_POS_PROVIDERS: POSProvider[] = ["square", "toast"];

export interface MenuItem {
  id: string;
  name: string;
  price: number; // integer cents
  category?: string;
  modifiers?: { name: string; price: number }[];
}

export interface OrderLineItem {
  name: string;
  quantity: number;
  price: number; // integer cents
}

export interface Order {
  id: string;
  createdAt: string; // ISO 8601
  total: number; // integer cents
  items: OrderLineItem[];
}

export interface SalesSummary {
  grossCents: number;
  orderCount: number;
  start: string; // ISO 8601
  end: string; // ISO 8601
}

// Credentials handed to connect(). Shape varies by provider's auth
// model — Square uses an OAuth authorization code; Toast's real API
// uses client-credentials (see toast.ts's caveat comment) rather than
// a user-facing consent redirect, so `code` is Square-specific and
// `clientSecret`/`restaurantGuid` are Toast-specific. A given
// adapter only reads the fields its own connect() understands.
export interface POSCredentials {
  code?: string;
  clientId?: string;
  clientSecret?: string;
  restaurantGuid?: string;
}

export interface POSConnectResult {
  connected: boolean;
  merchantId: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number; // epoch millis
  error?: string;
}

export interface POSTokenRefreshResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number; // epoch millis
}

export interface POSClient {
  connect(creds: POSCredentials): Promise<POSConnectResult>;
  disconnect(): Promise<void>;
  syncMenu(): Promise<MenuItem[]>;
  getOrders(opts?: { since?: Date }): Promise<Order[]>;
  getSales(start: Date, end: Date): Promise<SalesSummary>;
  // Only implemented by providers whose tokens expire (Square, Toast
  // client-credentials). Absent on providers with non-expiring or
  // not-yet-implemented auth.
  refreshAccessToken?(refreshToken: string): Promise<POSTokenRefreshResult>;
}

export abstract class BasePOSClient implements POSClient {
  protected accessToken?: string;
  constructor(accessToken?: string) {
    this.accessToken = accessToken;
  }
  abstract connect(creds: POSCredentials): Promise<POSConnectResult>;
  abstract disconnect(): Promise<void>;
  abstract syncMenu(): Promise<MenuItem[]>;
  abstract getOrders(opts?: { since?: Date }): Promise<Order[]>;
  abstract getSales(start: Date, end: Date): Promise<SalesSummary>;
}

export class NotImplementedPOSClient extends BasePOSClient {
  constructor(private readonly provider: POSProvider, accessToken?: string) {
    super(accessToken);
  }
  private unsupported(): never {
    throw new Error(`${this.provider} is not yet implemented — see POS_PROVIDER_STATUS.`);
  }
  async connect(): Promise<POSConnectResult> {
    return { connected: false, merchantId: "", error: `${this.provider} is not yet implemented.` };
  }
  async disconnect(): Promise<void> { this.unsupported(); }
  async syncMenu(): Promise<MenuItem[]> { this.unsupported(); }
  async getOrders(): Promise<Order[]> { this.unsupported(); }
  async getSales(): Promise<SalesSummary> { this.unsupported(); }
}

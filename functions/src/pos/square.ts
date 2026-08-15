import { BasePOSClient, MenuItem, Order, POSConnectResult, POSCredentials, POSTokenRefreshResult, SalesSummary } from "./types";

const SQUARE_API_BASE = "https://connect.squareup.com";
const SQUARE_VERSION = "2024-10-17";

function centsFromMoney(money: { amount?: string | number } | undefined): number {
  if (!money?.amount) return 0;
  return typeof money.amount === "string" ? parseInt(money.amount, 10) : money.amount;
}

// Square's OAuth + REST API — well-documented public API, high
// confidence on these endpoint shapes. See
// https://developer.squareup.com/docs/oauth-api/overview and
// https://developer.squareup.com/reference/square for the source of
// truth; this should be sanity-checked against current docs before
// relying on it in production, since API versions do shift.
export class SquarePOSClient extends BasePOSClient {
  async connect(creds: POSCredentials): Promise<POSConnectResult> {
    if (!creds.code) return { connected: false, merchantId: "", error: "Missing authorization code." };
    const clientId = process.env.SQUARE_CLIENT_ID;
    const clientSecret = process.env.SQUARE_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      return { connected: false, merchantId: "", error: "Square OAuth is not configured (SQUARE_CLIENT_ID/SECRET)." };
    }
    const res = await fetch(`${SQUARE_API_BASE}/oauth2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Square-Version": SQUARE_VERSION },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code: creds.code, grant_type: "authorization_code" }),
    });
    const data = await res.json() as any;
    if (!res.ok) return { connected: false, merchantId: "", error: data?.message ?? `Square token exchange failed (${res.status}).` };
    this.accessToken = data.access_token;
    return {
      connected: true,
      merchantId: data.merchant_id,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: data.expires_at ? new Date(data.expires_at).getTime() : undefined,
    };
  }

  async refreshAccessToken(refreshToken: string): Promise<POSTokenRefreshResult> {
    const clientId = process.env.SQUARE_CLIENT_ID;
    const clientSecret = process.env.SQUARE_CLIENT_SECRET;
    if (!clientId || !clientSecret) throw new Error("Square OAuth is not configured.");
    const res = await fetch(`${SQUARE_API_BASE}/oauth2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Square-Version": SQUARE_VERSION },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, refresh_token: refreshToken, grant_type: "refresh_token" }),
    });
    const data = await res.json() as any;
    if (!res.ok) throw new Error(data?.message ?? `Square token refresh failed (${res.status}).`);
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: data.expires_at ? new Date(data.expires_at).getTime() : Date.now() + 24 * 60 * 60 * 1000,
    };
  }

  async disconnect(): Promise<void> {
    if (!this.accessToken) return;
    const clientId = process.env.SQUARE_CLIENT_ID;
    const clientSecret = process.env.SQUARE_CLIENT_SECRET;
    await fetch(`${SQUARE_API_BASE}/oauth2/revoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Square-Version": SQUARE_VERSION,
        "Authorization": `Client ${clientSecret}`,
      },
      body: JSON.stringify({ client_id: clientId, access_token: this.accessToken }),
    }).catch((e) => console.error("Square token revoke failed", e));
  }

  private authHeaders(): Record<string, string> {
    if (!this.accessToken) throw new Error("Not connected.");
    return {
      "Authorization": `Bearer ${this.accessToken}`,
      "Square-Version": SQUARE_VERSION,
      "Content-Type": "application/json",
    };
  }

  async syncMenu(): Promise<MenuItem[]> {
    const res = await fetch(`${SQUARE_API_BASE}/v2/catalog/list?types=ITEM`, { headers: this.authHeaders() });
    const data = await res.json() as any;
    if (!res.ok) throw new Error(data?.errors?.[0]?.detail ?? `Square catalog list failed (${res.status}).`);
    const objects: any[] = data.objects ?? [];
    const items: MenuItem[] = [];
    for (const obj of objects) {
      const itemData = obj.item_data;
      if (!itemData) continue;
      for (const variation of itemData.variations ?? []) {
        items.push({
          id: variation.id,
          name: itemData.name + (itemData.variations.length > 1 ? ` (${variation.item_variation_data?.name ?? ""})` : ""),
          price: centsFromMoney(variation.item_variation_data?.price_money),
          category: itemData.category_id,
        });
      }
    }
    return items;
  }

  async getOrders(opts?: { since?: Date }): Promise<Order[]> {
    const res = await fetch(`${SQUARE_API_BASE}/v2/orders/search`, {
      method: "POST",
      headers: this.authHeaders(),
      body: JSON.stringify({
        query: opts?.since ? { filter: { date_time_filter: { created_at: { start_at: opts.since.toISOString() } } } } : undefined,
      }),
    });
    const data = await res.json() as any;
    if (!res.ok) throw new Error(data?.errors?.[0]?.detail ?? `Square order search failed (${res.status}).`);
    return (data.orders ?? []).map((o: any) => ({
      id: o.id,
      createdAt: o.created_at,
      total: centsFromMoney(o.total_money),
      items: (o.line_items ?? []).map((li: any) => ({
        name: li.name,
        quantity: parseInt(li.quantity, 10) || 1,
        price: centsFromMoney(li.total_money),
      })),
    }));
  }

  async getSales(start: Date, end: Date): Promise<SalesSummary> {
    const orders = await this.getOrders({ since: start });
    const inRange = orders.filter((o) => {
      const t = new Date(o.createdAt).getTime();
      return t >= start.getTime() && t <= end.getTime();
    });
    return {
      grossCents: inRange.reduce((sum, o) => sum + o.total, 0),
      orderCount: inRange.length,
      start: start.toISOString(),
      end: end.toISOString(),
    };
  }
}

import { BasePOSClient, MenuItem, Order, POSConnectResult, POSCredentials, POSTokenRefreshResult, SalesSummary } from "./types";

const TOAST_API_BASE = "https://ws-api.toasttab.com";

// LOWER CONFIDENCE THAN square.ts — READ BEFORE RELYING ON THIS.
//
// Toast's real integration model does not match the uniform "OAuth
// consent redirect" flow the rest of Phase 3 assumes (see the design
// doc's "OAuth flow" section): Toast issues partner API credentials
// (client id/secret + a per-restaurant GUID) after a manual partner
// approval process, and authentication is client-credentials, not a
// user-facing authorization-code redirect. There is no
// "https://.../oauth2/authorize?..." URL for a restaurant manager to
// click through the way there is for Square.
//
// connect() here therefore takes clientId/clientSecret/restaurantGuid
// (via POSCredentials) rather than an authorization `code`, and the
// POS Settings UI's "Connect" flow for Toast should collect those
// fields directly instead of doing an OAuth redirect. Endpoint paths
// below (/authentication/v1/authentication/login, /orders/v2/orders,
// /menus/v2/menus) reflect Toast's publicly documented partner API
// shape as of this writing, but Toast's API is partner-gated and
// versioned — verify against the actual current docs (available only
// after partner approval) before deploying, and expect to adjust
// field names/paths.
export class ToastPOSClient extends BasePOSClient {
  private restaurantGuid?: string;

  async connect(creds: POSCredentials): Promise<POSConnectResult> {
    if (!creds.clientId || !creds.clientSecret || !creds.restaurantGuid) {
      return { connected: false, merchantId: "", error: "Missing clientId/clientSecret/restaurantGuid." };
    }
    this.restaurantGuid = creds.restaurantGuid;
    const res = await fetch(`${TOAST_API_BASE}/authentication/v1/authentication/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: creds.clientId, clientSecret: creds.clientSecret, userAccessType: "TOAST_MACHINE_CLIENT" }),
    });
    const data = await res.json() as any;
    if (!res.ok) return { connected: false, merchantId: "", error: data?.message ?? `Toast auth failed (${res.status}).` };
    this.accessToken = data.token?.accessToken;
    const expiresIn = data.token?.expiresIn ?? 3600;
    return {
      connected: true,
      merchantId: creds.restaurantGuid,
      accessToken: this.accessToken,
      expiresAt: Date.now() + expiresIn * 1000,
    };
  }

  // Toast's client-credentials tokens are reissued via connect(), not
  // refreshed via a refresh_token grant — rotateTokens.ts calls
  // connect() again with the stored client credentials rather than
  // this method for Toast. Present for POSClient interface
  // conformance only.
  async refreshAccessToken(): Promise<POSTokenRefreshResult> {
    throw new Error("Toast tokens are reissued via connect(), not refreshed — see comment above.");
  }

  async disconnect(): Promise<void> {
    this.accessToken = undefined;
    this.restaurantGuid = undefined;
  }

  private authHeaders(): Record<string, string> {
    if (!this.accessToken || !this.restaurantGuid) throw new Error("Not connected.");
    return {
      "Authorization": `Bearer ${this.accessToken}`,
      "Toast-Restaurant-External-ID": this.restaurantGuid,
      "Content-Type": "application/json",
    };
  }

  async syncMenu(): Promise<MenuItem[]> {
    const res = await fetch(`${TOAST_API_BASE}/menus/v2/menus`, { headers: this.authHeaders() });
    const data = await res.json() as any;
    if (!res.ok) throw new Error(data?.message ?? `Toast menu fetch failed (${res.status}).`);
    const items: MenuItem[] = [];
    for (const menu of Array.isArray(data) ? data : []) {
      for (const group of menu.menuGroups ?? []) {
        for (const item of group.menuItems ?? []) {
          items.push({
            id: item.guid,
            name: item.name,
            price: Math.round((item.price ?? 0) * 100),
            category: group.name,
          });
        }
      }
    }
    return items;
  }

  async getOrders(opts?: { since?: Date }): Promise<Order[]> {
    const params = new URLSearchParams();
    if (opts?.since) params.set("startDate", opts.since.toISOString());
    const res = await fetch(`${TOAST_API_BASE}/orders/v2/orders?${params.toString()}`, { headers: this.authHeaders() });
    const data = await res.json() as any;
    if (!res.ok) throw new Error(data?.message ?? `Toast orders fetch failed (${res.status}).`);
    return (Array.isArray(data) ? data : []).map((o: any) => ({
      id: o.guid,
      createdAt: o.openedDate,
      total: Math.round((o.totalAmount ?? 0) * 100),
      items: (o.checks ?? []).flatMap((c: any) => (c.selections ?? []).map((s: any) => ({
        name: s.displayName,
        quantity: s.quantity ?? 1,
        price: Math.round((s.price ?? 0) * 100),
      }))),
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

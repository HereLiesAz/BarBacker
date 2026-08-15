import { NotImplementedPOSClient, POSProvider } from "./types";

// Scaffolding for the eight providers not yet implemented — kept as
// real classes (rather than deleted) so a future implementation only
// has to fill in the body and flip POS_PROVIDER_STATUS, per the
// "Adapter inventory" section of
// docs/plans/2026-05-21-feature-set-purr-design.md.
export class CloverPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("clover", accessToken); } }
export class LightspeedPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("lightspeed", accessToken); } }
export class SpotOnPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("spoton", accessToken); } }
export class TouchBistroPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("touchbistro", accessToken); } }
export class RevelPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("revel", accessToken); } }
export class LavuPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("lavu", accessToken); } }
export class TalechPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("talech", accessToken); } }
export class AlohaPOSClient extends NotImplementedPOSClient { constructor(accessToken?: string) { super("aloha", accessToken); } }

export const STUB_POS_CLIENTS: Record<Exclude<POSProvider, "square" | "toast">, new (accessToken?: string) => NotImplementedPOSClient> = {
  clover: CloverPOSClient,
  lightspeed: LightspeedPOSClient,
  spoton: SpotOnPOSClient,
  touchbistro: TouchBistroPOSClient,
  revel: RevelPOSClient,
  lavu: LavuPOSClient,
  talech: TalechPOSClient,
  aloha: AlohaPOSClient,
};

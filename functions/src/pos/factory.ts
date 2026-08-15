import { POSClient, POSProvider } from "./types";
import { SquarePOSClient } from "./square";
import { ToastPOSClient } from "./toast";
import { STUB_POS_CLIENTS } from "./stubs";

export function createPOSClient(provider: POSProvider, accessToken?: string): POSClient {
  switch (provider) {
    case "square": return new SquarePOSClient(accessToken);
    case "toast": return new ToastPOSClient(accessToken);
    default: return new STUB_POS_CLIENTS[provider](accessToken);
  }
}

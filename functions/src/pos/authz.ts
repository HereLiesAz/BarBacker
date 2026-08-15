import { HttpsError } from "firebase-functions/v2/https";

export function requireManagerPlus(auth: { token: Record<string, unknown> } | undefined, barId: string) {
  if (!auth) throw new HttpsError("unauthenticated", "Must be signed in.");
  const barsClaims = (auth.token.bars as Record<string, string> | undefined) ?? {};
  const isAdmin = auth.token.admin === true;
  const role = barsClaims[barId];
  if (!isAdmin && role !== "Manager" && role !== "Owner") {
    throw new HttpsError("permission-denied", "Only a Manager or Owner of this bar can manage POS settings.");
  }
}

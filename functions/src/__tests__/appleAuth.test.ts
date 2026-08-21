import { describe, it, expect } from "vitest";
import { createHash } from "node:crypto";
import {
  buildAppleAuthorizeUrl,
  claimMatches,
  classifyAppleCallback,
  isSessionExpired,
  SESSION_TTL_MS,
} from "../appleAuth";

const NONCE = "a".repeat(64);

describe("buildAppleAuthorizeUrl", () => {
  const url = buildAppleAuthorizeUrl({
    serviceId: "com.hereliesaz.barbacker.signin",
    redirectUri: "https://us-central1-proj.cloudfunctions.net/appleAuthCallback",
    state: "b".repeat(32),
    nonce: NONCE,
  });
  const query = new URL(url).searchParams;

  it("points at Apple's authorize endpoint", () => {
    expect(url.startsWith("https://appleid.apple.com/auth/authorize?")).toBe(true);
  });

  // The reason this flow needs no .p8 private key at all. Asking for a
  // bare `code` would mean exchanging it at /auth/token, which requires
  // a client secret that is a signed JWT — and then this server would
  // have to hold and rotate that key.
  it("asks for the identity token directly, not just a code", () => {
    expect(query.get("response_type")).toBe("code id_token");
  });

  // Apple rejects an id_token response type without form_post, and the
  // POST body also keeps the token out of browser history and Referer.
  it("uses form_post, which an id_token response type requires", () => {
    expect(query.get("response_mode")).toBe("form_post");
  });

  it("passes the state and nonce through unaltered", () => {
    expect(query.get("state")).toBe("b".repeat(32));
    expect(query.get("nonce")).toBe(NONCE);
  });

  // A service id contains dots and a redirect URI contains slashes and a
  // colon; unencoded, the second one truncates every parameter after it.
  it("percent-encodes the redirect URI", () => {
    expect(url).toContain(
      "redirect_uri=https%3A%2F%2Fus-central1-proj.cloudfunctions.net%2FappleAuthCallback",
    );
    expect(query.get("redirect_uri")).toBe(
      "https://us-central1-proj.cloudfunctions.net/appleAuthCallback",
    );
  });
});

describe("classifyAppleCallback", () => {
  it("reads the identity token out of a successful post", () => {
    expect(classifyAppleCallback({ id_token: "tok", code: "c" })).toEqual({
      status: "ready",
      idToken: "tok",
    });
  });

  // Someone backing out is the flow working. Reporting it as a failure
  // shows an error dialog for having changed their mind.
  it("treats a user cancel as a cancel, not a failure", () => {
    expect(classifyAppleCallback({ error: "user_cancelled_authorize" })).toEqual({
      status: "cancelled",
    });
  });

  it("keeps other Apple errors as failures, with the reason", () => {
    const result = classifyAppleCallback({ error: "invalid_request" });
    expect(result.status).toBe("failed");
    expect(result.message).toContain("invalid_request");
  });

  // A post with neither an error nor a token is not a success with an
  // empty credential — that would sign nobody in and say nothing.
  it("fails when there is no token and no error", () => {
    expect(classifyAppleCallback({ code: "c" }).status).toBe("failed");
  });

  it("ignores a non-string id_token", () => {
    expect(classifyAppleCallback({ id_token: 42 }).status).toBe("failed");
  });
});

describe("isSessionExpired", () => {
  it("keeps a session inside the window", () => {
    expect(isSessionExpired(1_000, 1_000 + SESSION_TTL_MS - 1)).toBe(false);
  });

  it("expires one past the window", () => {
    expect(isSessionExpired(1_000, 1_000 + SESSION_TTL_MS + 1)).toBe(true);
  });

  // Clock skew between the Firestore server timestamp and the function
  // host can put createdAt slightly in the future. That is not expiry.
  it("does not expire a session stamped in the future", () => {
    expect(isSessionExpired(10_000, 9_000)).toBe(false);
  });
});

describe("claimMatches", () => {
  const secret = "c".repeat(64);
  const hash = createHash("sha256").update(secret).digest("hex");

  it("accepts the secret behind the stored hash", () => {
    expect(claimMatches(secret, hash)).toBe(true);
  });

  it("rejects a different secret", () => {
    expect(claimMatches("d".repeat(64), hash)).toBe(false);
  });

  // The presented value is hashed before comparison, so someone who
  // learned the stored hash still cannot present it as the secret.
  it("rejects the stored hash presented as the secret", () => {
    expect(claimMatches(hash, hash)).toBe(false);
  });

  // timingSafeEqual throws on a length mismatch instead of returning
  // false, so a malformed stored hash has to be rejected before it
  // reaches the comparison rather than crashing the callable.
  it("rejects a malformed stored hash without throwing", () => {
    expect(claimMatches(secret, "not-a-hash")).toBe(false);
    expect(claimMatches(secret, "")).toBe(false);
  });

  it("rejects an empty presented secret", () => {
    expect(claimMatches("", hash)).toBe(false);
  });
});

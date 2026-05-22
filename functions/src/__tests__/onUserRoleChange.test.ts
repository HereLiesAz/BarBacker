import { describe, it, expect, vi, beforeEach } from "vitest";

const setCustomUserClaims = vi.fn().mockResolvedValue(undefined);
vi.mock("firebase-admin", () => ({
  initializeApp: vi.fn(),
  auth: () => ({ setCustomUserClaims })
}));

import { computeClaimsForUser } from "../onUserRoleChange";

describe("computeClaimsForUser", () => {
  beforeEach(() => setCustomUserClaims.mockClear());

  it("aggregates roles across multiple bars", () => {
    const userDocs = [
      { barId: "bar_A", role: "Manager" },
      { barId: "bar_B", role: "Owner" },
      { barId: "bar_C", role: "Staff" }
    ];
    expect(computeClaimsForUser(userDocs)).toEqual({
      bars: { bar_A: "Manager", bar_B: "Owner", bar_C: "Staff" }
    });
  });

  it("returns empty object when user has no bars", () => {
    expect(computeClaimsForUser([])).toEqual({ bars: {} });
  });
});

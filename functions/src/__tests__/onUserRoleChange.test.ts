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

  // Security-critical: a 'pending' or 'rejected' doc must not grant
  // any claim for that bar. Before this filter existed, a self-created
  // 'pending' membership got the full Staff claim immediately — see
  // the comment on UNAPPROVED_STATUSES in onUserRoleChange.ts.
  it("excludes a bar whose doc has status 'pending'", () => {
    expect(computeClaimsForUser([
      { barId: "bar_A", role: "Staff", status: "pending" },
    ])).toEqual({ bars: {} });
  });

  it("excludes a bar whose doc has status 'rejected'", () => {
    expect(computeClaimsForUser([
      { barId: "bar_A", role: "Staff", status: "rejected" },
    ])).toEqual({ bars: {} });
  });

  it("includes a bar whose doc has status 'active'", () => {
    expect(computeClaimsForUser([
      { barId: "bar_A", role: "Staff", status: "active" },
    ])).toEqual({ bars: { bar_A: "Staff" } });
  });

  it("includes a bar whose doc has status 'off_clock' (approved, just not on shift)", () => {
    expect(computeClaimsForUser([
      { barId: "bar_A", role: "Staff", status: "off_clock" },
    ])).toEqual({ bars: { bar_A: "Staff" } });
  });

  it("includes a bar whose doc has no status at all (legacy/undefined)", () => {
    expect(computeClaimsForUser([{ barId: "bar_A", role: "Manager" }]))
      .toEqual({ bars: { bar_A: "Manager" } });
  });

  it("filters pending/rejected bars independently across a mixed set", () => {
    expect(computeClaimsForUser([
      { barId: "bar_A", role: "Staff", status: "active" },
      { barId: "bar_B", role: "Manager", status: "pending" },
      { barId: "bar_C", role: "Owner", status: "rejected" },
      { barId: "bar_D", role: "Staff", status: "off_clock" },
    ])).toEqual({ bars: { bar_A: "Staff", bar_D: "Staff" } });
  });
});

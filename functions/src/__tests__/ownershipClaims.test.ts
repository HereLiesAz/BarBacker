import { describe, it, expect } from "vitest";
import { canReviewClaim } from "../ownershipClaims";

describe("canReviewClaim", () => {
  // Security-critical: this is the fix for a real exploit — a Manager
  // could file an ownership claim against their own bar and then
  // approve it themselves, becoming Owner and demoting the real
  // Owner, with nothing else in reviewOwnershipClaim checking that
  // the reviewer and the claimant were different people.
  it("denies a Manager reviewing their own claim", () => {
    expect(canReviewClaim("mgr_1", "mgr_1", "Manager", false)).toBe(false);
  });

  it("denies an Owner reviewing their own claim", () => {
    expect(canReviewClaim("owner_1", "owner_1", "Owner", false)).toBe(false);
  });

  it("denies an admin reviewing their own claim", () => {
    expect(canReviewClaim("admin_1", "admin_1", undefined, true)).toBe(false);
  });

  it("allows a Manager reviewing someone else's claim", () => {
    expect(canReviewClaim("mgr_1", "staff_2", "Manager", false)).toBe(true);
  });

  it("allows an Owner reviewing someone else's claim", () => {
    expect(canReviewClaim("owner_1", "staff_2", "Owner", false)).toBe(true);
  });

  it("allows an admin reviewing anyone else's claim regardless of per-bar role", () => {
    expect(canReviewClaim("admin_1", "staff_2", undefined, true)).toBe(true);
  });

  it("denies Staff (not Manager+) reviewing someone else's claim", () => {
    expect(canReviewClaim("staff_1", "staff_2", "Staff", false)).toBe(false);
  });

  it("denies someone with no role at all", () => {
    expect(canReviewClaim("outsider_1", "staff_2", undefined, false)).toBe(false);
  });
});

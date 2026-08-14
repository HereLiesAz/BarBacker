import { describe, it, expect } from "vitest";
import { shouldNotifyMember } from "../notifyEligibility";

describe("shouldNotifyMember", () => {
  it("excludes the requester", () => {
    expect(shouldNotifyMember({ buttonId: "ice", label: "ICE" }, { id: "me", status: "active", notificationPreferences: ["ice"] }, "me")).toBe(false);
  });

  it("excludes off-clock members regardless of preferences", () => {
    expect(shouldNotifyMember({ buttonId: "ice", label: "ICE" }, { id: "them", status: "off_clock", notificationPreferences: ["ice"] }, "me")).toBe(false);
  });

  it("treats undefined status as active (legacy docs)", () => {
    expect(shouldNotifyMember({ buttonId: "ice", label: "ICE" }, { id: "them", notificationPreferences: ["ice"] }, "me")).toBe(true);
  });

  it("notifies everyone active on an exact BREAK match", () => {
    expect(shouldNotifyMember({ buttonId: "break", label: "BREAK" }, { id: "them", status: "active", notificationPreferences: [] }, "me")).toBe(true);
  });

  it("does not bypass preferences on a label merely containing BREAK", () => {
    expect(shouldNotifyMember({ buttonId: undefined, label: "BREAKAGE AT WELL 3" }, { id: "them", status: "active", notificationPreferences: [] }, "me")).toBe(true); // no buttonId -> safety default, not the BREAK bypass
    expect(shouldNotifyMember({ buttonId: "trash", label: "BREAKAGE AT WELL 3" }, { id: "them", status: "active", notificationPreferences: [] }, "me")).toBe(false);
  });

  it("notifies everyone on a free-text request with no resolvable buttonId (safety default)", () => {
    expect(shouldNotifyMember({ buttonId: undefined, label: "Someone spilled a tray of glasses" }, { id: "them", status: "active", notificationPreferences: [] }, "me")).toBe(true);
  });

  it("only notifies members subscribed to the resolved buttonId", () => {
    expect(shouldNotifyMember({ buttonId: "keg", label: "KEG" }, { id: "them", status: "active", notificationPreferences: ["ice"] }, "me")).toBe(false);
    expect(shouldNotifyMember({ buttonId: "keg", label: "KEG" }, { id: "them", status: "active", notificationPreferences: ["keg"] }, "me")).toBe(true);
  });

  it("falls back to ROLE_NOTIFICATION_DEFAULTS keyed by jobTitle when no explicit preferences are set", () => {
    expect(shouldNotifyMember({ buttonId: "ice", label: "ICE" }, { id: "them", status: "active", jobTitle: "Server" }, "me")).toBe(false);
    expect(shouldNotifyMember({ buttonId: "ice", label: "ICE" }, { id: "them", status: "active", jobTitle: "Bartender" }, "me")).toBe(true);
  });
});

import { describe, it, expect, beforeAll, beforeEach, afterAll } from "vitest";
import { assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { doc, setDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getTestEnv, authedAs } from "./helpers";

// Regression coverage for privilege-escalation holes found by an
// adversarial audit pass — each of these was independently confirmed
// exploitable (several emulator-verified) before this file's
// corresponding firestore.rules fix landed. One test per closed
// exploit, plus one confirming the legitimate path still works.
describe("privilege escalation regressions", () => {
  let env: Awaited<ReturnType<typeof getTestEnv>>;

  beforeAll(async () => { env = await getTestEnv(); });
  beforeEach(async () => {
    await env.clearFirestore();
    await env.withSecurityRulesDisabled(async (ctx) => {
      const db = ctx.firestore();
      await setDoc(doc(db, "bars/bar_A"), { name: "Bar A", joinPolicy: "approval", subscription: "free" });
      await setDoc(doc(db, "bars/bar_A/users/manager_alice"), { role: "Manager", status: "active", displayName: "Alice" });
      await setDoc(doc(db, "bars/bar_A/users/staff_bob"), { role: "Staff", status: "active", displayName: "Bob" });
    });
  });
  afterAll(async () => { await env.cleanup(); });

  describe("off_clock status laundering (approval-gate bypass)", () => {
    it("denies pending -> off_clock (the first half of the bypass)", async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), "bars/bar_A/users/pending_carol"), { role: "Staff", status: "pending" });
      });
      const db = authedAs(env, "pending_carol", { bars: { bar_A: "Staff" } });
      await assertFails(updateDoc(doc(db, "bars/bar_A/users/pending_carol"), { status: "off_clock" }));
    });

    it("denies rejected -> off_clock", async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), "bars/bar_A/users/rejected_dan"), { role: "Staff", status: "rejected" });
      });
      const db = authedAs(env, "rejected_dan", { bars: { bar_A: "Staff" } });
      await assertFails(updateDoc(doc(db, "bars/bar_A/users/rejected_dan"), { status: "off_clock" }));
    });

    it("still allows active -> off_clock -> active (the legitimate clock-out/in)", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertSucceeds(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), { status: "off_clock" }));
      await assertSucceeds(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), { status: "active" }));
    });
  });

  describe("bar.subscription self-upgrade", () => {
    it("denies a Manager flipping their own bar to premium", async () => {
      const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
      await assertFails(updateDoc(doc(db, "bars/bar_A"), { subscription: "premium" }));
    });

    it("still allows a Manager updating an unrelated operational field", async () => {
      const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
      await assertSucceeds(updateDoc(doc(db, "bars/bar_A"), { wells: ["Well 1"] }));
    });
  });

  describe("/requests field spoofing", () => {
    it("denies a create with a forged requesterName", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertFails(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "EVERYONE GO HOME", requesterId: "staff_bob",
        requesterName: "Alice (Manager)", requesterRole: "Manager",
        status: "pending", timestamp: serverTimestamp(), lastNotification: serverTimestamp(),
      }));
    });

    it("denies a create with an extra unlisted field", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertFails(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "ICE", requesterId: "staff_bob",
        requesterName: "Bob", requesterRole: "Staff",
        status: "pending", timestamp: serverTimestamp(), lastNotification: serverTimestamp(),
        junk: "x".repeat(1000),
      }));
    });

    it("denies a create with a client-chosen literal timestamp", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertFails(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "ICE", requesterId: "staff_bob",
        requesterName: "Bob", requesterRole: "Staff",
        status: "pending", timestamp: new Date("2099-01-01"), lastNotification: serverTimestamp(),
      }));
    });

    it("denies a non-string photoUrl", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertFails(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "ICE", requesterId: "staff_bob",
        requesterName: "Bob", requesterRole: "Staff",
        status: "pending", timestamp: serverTimestamp(), lastNotification: serverTimestamp(),
        photoUrl: { not: "a string" },
      }));
    });

    it("still allows a legitimate create with correctly-bound fields", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertSucceeds(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "ICE", requesterId: "staff_bob",
        requesterName: "Bob", requesterRole: "Staff",
        status: "pending", timestamp: serverTimestamp(), lastNotification: serverTimestamp(),
      }));
    });

    it("still allows a legitimate create with a photoUrl (bottle scanner alert)", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertSucceeds(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "BEER: Jameson", requesterId: "staff_bob",
        requesterName: "Bob", requesterRole: "Staff",
        status: "pending", timestamp: serverTimestamp(), lastNotification: serverTimestamp(),
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/some-bucket.appspot.com/o/bottlePhotos%2Fbar_A%2Fstaff_bob_123.jpg?alt=media&token=abc",
      }));
    });

    it("denies a photoUrl pointing at an external (tracking-pixel) host", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertFails(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "BEER: Jameson", requesterId: "staff_bob",
        requesterName: "Bob", requesterRole: "Staff",
        status: "pending", timestamp: serverTimestamp(), lastNotification: serverTimestamp(),
        photoUrl: "https://attacker.example/tracking-pixel.gif",
      }));
    });

    it("denies a photoUrl pointing at a different bar's bottlePhotos path", async () => {
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
      await assertFails(addDoc(collection(db, "requests"), {
        barId: "bar_A", label: "BEER: Jameson", requesterId: "staff_bob",
        requesterName: "Bob", requesterRole: "Staff",
        status: "pending", timestamp: serverTimestamp(), lastNotification: serverTimestamp(),
        photoUrl: "https://firebasestorage.googleapis.com/v0/b/some-bucket.appspot.com/o/bottlePhotos%2Fbar_B%2Fstaff_bob_123.jpg?alt=media&token=abc",
      }));
    });
  });

  describe("86'd list submitter spoofing", () => {
    it("denies a Manager attributing an entry to someone else", async () => {
      const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
      await assertFails(addDoc(collection(db, "bars/bar_A/eightySixed"), {
        patronName: "Troublemaker", submittedBy: "staff_bob", submitterName: "Bob",
        visibility: "public", timestamp: serverTimestamp(),
      }));
    });

    it("still allows a Manager creating a correctly-attributed public entry", async () => {
      const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
      await assertSucceeds(addDoc(collection(db, "bars/bar_A/eightySixed"), {
        patronName: "Troublemaker", submittedBy: "manager_alice", submitterName: "Alice",
        visibility: "public", timestamp: serverTimestamp(),
      }));
    });
  });

  describe("invite replay", () => {
    async function seedConsumedInvite() {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), "bars/bar_A/invites/inv1"), {
          email: "bob@example.com", role: "Staff", consumed: true,
          consumedBy: "staff_bob", consumedAt: new Date(),
        });
      });
    }

    it("denies flipping consumed back to false", async () => {
      await seedConsumedInvite();
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" }, email: "bob@example.com", email_verified: true });
      await assertFails(updateDoc(doc(db, "bars/bar_A/invites/inv1"), { consumed: false }));
    });

    it("denies reconsuming an already-consumed invite with a different consumedBy", async () => {
      await seedConsumedInvite();
      const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" }, email: "bob@example.com", email_verified: true });
      await assertFails(updateDoc(doc(db, "bars/bar_A/invites/inv1"), {
        consumed: true, consumedBy: "manager_alice", consumedAt: new Date(),
      }));
    });

    it("denies consuming with a consumedBy that isn't the caller's own uid", async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), "bars/bar_A/invites/inv2"), {
          email: "carol@example.com", role: "Staff", consumed: false,
        });
      });
      const db = authedAs(env, "outsider_carol", { bars: {}, email: "carol@example.com", email_verified: true });
      await assertFails(updateDoc(doc(db, "bars/bar_A/invites/inv2"), {
        consumed: true, consumedBy: "manager_alice", consumedAt: serverTimestamp(),
      }));
    });

    it("still allows a fresh invite to be consumed once by its rightful invitee", async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), "bars/bar_A/invites/inv3"), {
          email: "carol@example.com", role: "Staff", consumed: false,
        });
      });
      const db = authedAs(env, "outsider_carol", { bars: {}, email: "carol@example.com", email_verified: true });
      await assertSucceeds(updateDoc(doc(db, "bars/bar_A/invites/inv3"), {
        consumed: true, consumedBy: "outsider_carol", consumedAt: serverTimestamp(),
      }));
    });
  });

  describe("joinedBars size cap", () => {
    it("denies a self-write with more than 50 joinedBars entries", async () => {
      const db = authedAs(env, "staff_bob", {});
      const junk = Array.from({ length: 51 }, (_, i) => `bar_junk_${i}`);
      await assertFails(setDoc(doc(db, "users/staff_bob"), { joinedBars: junk }));
    });

    it("still allows a normal-sized joinedBars list", async () => {
      const db = authedAs(env, "staff_bob", {});
      await assertSucceeds(setDoc(doc(db, "users/staff_bob"), { joinedBars: ["bar_A", "bar_B"] }));
    });
  });
});

import { describe, it, expect, beforeAll, beforeEach, afterAll } from "vitest";
import { assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { getTestEnv, authedAs } from "./helpers";

describe("bar rules", () => {
  let env: Awaited<ReturnType<typeof getTestEnv>>;

  beforeAll(async () => { env = await getTestEnv(); });
  beforeEach(async () => {
    await env.clearFirestore();
    // Seed: bar_A with manager_alice (Manager), staff_bob (Staff).
    await env.withSecurityRulesDisabled(async (ctx) => {
      const db = ctx.firestore();
      await setDoc(doc(db, "bars/bar_A"), { name: "Bar A", joinPolicy: "open" });
      await setDoc(doc(db, "bars/bar_A/users/manager_alice"), { role: "Manager", status: "active" });
      await setDoc(doc(db, "bars/bar_A/users/staff_bob"), { role: "Staff", status: "active" });
    });
  });
  afterAll(async () => { await env.cleanup(); });

  it("Manager can read the bar doc", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertSucceeds(getDoc(doc(db, "bars/bar_A")));
  });

  it("Staff can read the bar doc", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertSucceeds(getDoc(doc(db, "bars/bar_A")));
  });

  it("non-member can read the bar doc (open discovery for search/join)", async () => {
    // The audit-pass merge kept main's open bar-discovery so the
    // existing search/join flow can fetch a bar by id before the
    // user has a role for it. Tightening this requires migrating
    // the join flow to invite-only first.
    const db = authedAs(env, "outsider_carol", { bars: {} });
    await assertSucceeds(getDoc(doc(db, "bars/bar_A")));
  });

  it("Manager can update operational fields", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertSucceeds(updateDoc(doc(db, "bars/bar_A"), { wells: ["Well 1"] }));
  });

  it("Staff cannot update bar doc", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A"), { wells: ["Well 1"] }));
  });

  it("Staff can bump buttonUsage alone (useUsageBatching)", async () => {
    // buttonUsage drives sort order, not privileged config — this
    // must work for every clocked-in member, not just Manager+, or
    // sort order only ever reflects a Manager's taps.
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertSucceeds(updateDoc(doc(db, "bars/bar_A"), { "buttonUsage.ice": 1 }));
  });

  it("Staff cannot slip other fields through alongside buttonUsage", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A"), {
      "buttonUsage.ice": 1,
      name: "pwned",
    }));
  });

  it("Staff cannot escalate role via combined-field self-write", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    // Attempt to set status:off_clock AND role:Manager in one update.
    await assertFails(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), {
      status: "off_clock",
      role: "Manager",
    }));
  });

  it("Staff can self-set status to off_clock alone", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertSucceeds(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), {
      status: "off_clock",
    }));
  });

  it("Staff can clock back in (self-write status active, from off_clock)", async () => {
    // A user who clocks out must be able to clock back in on their
    // own — without this, off_clock was a one-way door that silently
    // dropped them from every notification fanout forever.
    await env.withSecurityRulesDisabled(async (ctx) => {
      await setDoc(doc(ctx.firestore(), "bars/bar_A/users/staff_bob"), { role: "Staff", status: "off_clock" });
    });
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertSucceeds(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), {
      status: "active",
    }));
  });

  it("Staff cannot self-activate out of pending (still requires Manager approval)", async () => {
    // The self-write active<->off_clock toggle must not become a way
    // to skip the 'approval' joinPolicy — only a Manager+ update (or
    // starting from off_clock) may set status to 'active'.
    await env.withSecurityRulesDisabled(async (ctx) => {
      await setDoc(doc(ctx.firestore(), "bars/bar_A/users/staff_bob"), { role: "Staff", status: "pending" });
    });
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), {
      status: "active",
    }));
  });
});

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

  it("non-member cannot read the bar doc", async () => {
    const db = authedAs(env, "outsider_carol", { bars: {} });
    await assertFails(getDoc(doc(db, "bars/bar_A")));
  });

  it("Manager can update operational fields", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertSucceeds(updateDoc(doc(db, "bars/bar_A"), { wells: ["Well 1"] }));
  });

  it("Staff cannot update bar doc", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A"), { wells: ["Well 1"] }));
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

  it("Staff cannot set status to active via self-write", async () => {
    // Seed staff_bob as off_clock so that an attempted change to 'active' is a real diff.
    await env.withSecurityRulesDisabled(async (ctx) => {
      await setDoc(doc(ctx.firestore(), "bars/bar_A/users/staff_bob"), { role: "Staff", status: "off_clock" });
    });
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), {
      status: "active",
    }));
  });
});

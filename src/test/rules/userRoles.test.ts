import { describe, it, beforeAll, beforeEach, afterAll } from "vitest";
import { assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { getTestEnv, authedAs } from "./helpers";

describe("user role rules (owner immunity matrix)", () => {
  let env: Awaited<ReturnType<typeof getTestEnv>>;

  beforeAll(async () => {
    env = await getTestEnv();
  });

  beforeEach(async () => {
    await env.clearFirestore();
    await env.withSecurityRulesDisabled(async (ctx) => {
      const db = ctx.firestore();
      await setDoc(doc(db, "bars/bar_A"), { name: "Bar A", joinPolicy: "open" });
      await setDoc(doc(db, "bars/bar_A/users/owner_eve"), { role: "Owner", status: "active" });
      await setDoc(doc(db, "bars/bar_A/users/owner_frank"), { role: "Owner", status: "active" });
      await setDoc(doc(db, "bars/bar_A/users/manager_alice"), { role: "Manager", status: "active" });
      await setDoc(doc(db, "bars/bar_A/users/manager_dave"), { role: "Manager", status: "active" });
      await setDoc(doc(db, "bars/bar_A/users/staff_bob"), { role: "Staff", status: "active" });
      await setDoc(doc(db, "bars/bar_A/users/staff_carol"), { role: "Staff", status: "active" });
    });
  });

  afterAll(async () => {
    await env.cleanup();
  });

  // Case 1: Staff cannot change any role.
  it("Staff cannot change any role (Bob → Carol)", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertFails(
      updateDoc(doc(db, "bars/bar_A/users/staff_carol"), { role: "Manager" }),
    );
  });

  // Case 2: Manager can promote Staff → Manager.
  it("Manager can promote Staff → Manager (Alice promotes Bob)", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertSucceeds(
      updateDoc(doc(db, "bars/bar_A/users/staff_bob"), { role: "Manager" }),
    );
  });

  // Case 3: Manager can demote Manager → Staff.
  it("Manager can demote Manager → Staff (Alice demotes Dave)", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertSucceeds(
      updateDoc(doc(db, "bars/bar_A/users/manager_dave"), { role: "Staff" }),
    );
  });

  // Case 4: Manager cannot touch an Owner's record.
  it("Manager cannot demote an Owner (Alice → Eve)", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertFails(
      updateDoc(doc(db, "bars/bar_A/users/owner_eve"), { role: "Manager" }),
    );
  });

  // Case 5: Owner can promote Manager → Owner.
  it("Owner can promote Manager → Owner (Eve promotes Dave)", async () => {
    const db = authedAs(env, "owner_eve", { bars: { bar_A: "Owner" } });
    await assertSucceeds(
      updateDoc(doc(db, "bars/bar_A/users/manager_dave"), { role: "Owner" }),
    );
  });

  // Case 6: Owner can demote Manager → Staff.
  it("Owner can demote Manager → Staff (Eve demotes Dave)", async () => {
    const db = authedAs(env, "owner_eve", { bars: { bar_A: "Owner" } });
    await assertSucceeds(
      updateDoc(doc(db, "bars/bar_A/users/manager_dave"), { role: "Staff" }),
    );
  });

  // Case 7: Owner cannot demote another Owner.
  it("Owner cannot demote another Owner (Eve → Frank)", async () => {
    const db = authedAs(env, "owner_eve", { bars: { bar_A: "Owner" } });
    await assertFails(
      updateDoc(doc(db, "bars/bar_A/users/owner_frank"), { role: "Manager" }),
    );
  });

  // Case 8: Self can self-relinquish Owner → Manager.
  it("Owner can self-relinquish Owner → Manager (Eve demotes Eve)", async () => {
    const db = authedAs(env, "owner_eve", { bars: { bar_A: "Owner" } });
    await assertSucceeds(
      updateDoc(doc(db, "bars/bar_A/users/owner_eve"), { role: "Manager" }),
    );
  });

  // Case 9: Self can change own lastSeen without role.
  it("Staff can update own lastSeen without changing role", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertSucceeds(
      updateDoc(doc(db, "bars/bar_A/users/staff_bob"), { lastSeen: serverTimestamp() }),
    );
  });

  it("Manager cannot promote Staff to Owner", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A/users/staff_bob"), { role: "Owner" }));
  });

  it("Manager cannot promote Manager to Owner", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A/users/manager_dave"), { role: "Owner" }));
  });

  it("Manager cannot self-promote (via own doc)", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A/users/manager_alice"), { role: "Owner" }));
  });
});

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { doc, setDoc } from "firebase/firestore";
import { getTestEnv, authedAs } from "./helpers";

describe("rules sanity", () => {
  let env: Awaited<ReturnType<typeof getTestEnv>>;
  beforeAll(async () => { env = await getTestEnv(); });
  afterAll(async () => { await env.cleanup(); });

  it("unauthenticated user cannot read /users/anyone", async () => {
    const db = env.unauthenticatedContext().firestore();
    await assertFails(setDoc(doc(db, "users/anyone"), { foo: "bar" }));
  });
});

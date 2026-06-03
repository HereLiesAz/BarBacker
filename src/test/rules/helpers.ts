import {
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import * as fs from "node:fs";
import * as path from "node:path";

export async function getTestEnv(): Promise<RulesTestEnvironment> {
  return initializeTestEnvironment({
    projectId: "barbacker-test",
    firestore: {
      rules: fs.readFileSync(path.resolve(__dirname, "../../../firestore.rules"), "utf8"),
      host: "127.0.0.1",
      port: 8080,
    },
  });
}

export function authedAs(env: RulesTestEnvironment, uid: string, claims: object = {}) {
  return env.authenticatedContext(uid, claims).firestore();
}

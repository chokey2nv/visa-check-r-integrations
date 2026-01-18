import { describe, it, expect, test, beforeAll } from "vitest";
import Chance from "chance";
// import { createClient } from "./global.setup";
import { AuthService, createAuthService } from "../../src/services/user/auth.service";
import { createClient, initTestEnv } from "../testEnv";
const chance = new Chance();

describe.sequential("Auth API", () => {;
  let authService: AuthService;
  let env: Awaited<ReturnType<typeof initTestEnv>>;
  beforeAll(async () => {
    env = await initTestEnv();  
    authService = createAuthService(createClient());
  })
  it("should send contact us message", async () => {
    const res = await authService?.contactUs({
      contactMessage: {
        email: "chokey2nv@gmail.com",
        fullName: chance.name(),
        reason: chance.string(),
        message: chance.string(),
      }
    });
    console.log({ res: res?.success })
  });
});

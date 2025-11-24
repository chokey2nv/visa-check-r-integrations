import fs from "fs";
import path from "path";
import { createAuthService } from "../src/services/user/auth.service";
import { createUserService } from "../src/services/user/user.service";
import { createClient, writeCache } from "./testEnv";
import Chance from "chance";

const chance = new Chance();

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

export default async function globalSetup() {
  console.log("🌍 [global.setup.ts] Running once for all tests...");

  const publicClient = createClient();
  const authService = createAuthService(publicClient);

  const password = chance.string();
  const phone = "080" + Math.floor(10000000 + Math.random() * 90000000).toString();

  const res = await authService.signUp({
    password,
    user: {
      email: chance.email(),
      fullName: chance.name(),
      userType: "client",
      phone,
    }
  });

  const accessToken = res?.accessToken ?? "";
  const userId = res?.userId ?? "";
  if (!accessToken) throw new Error("Signup failed — no access token");

  const client = createClient(accessToken, userId);
  const userService = createUserService(client);
  const userData = await userService.me();

  if (!userData) throw new Error("No user data");

  const envData = {
    accessToken,
    password,
    userId,
    userData,
  };

  writeCache(envData)
  console.log("✅ Global setup finished, environment cached");

  // Return a cleanup function (optional)
  return async () => {
    // delete global test data and database
    console.log("🧹 [global.teardown] Cleaning up global environment...");
    if (fs.existsSync(CACHE_PATH)) fs.unlinkSync(CACHE_PATH);
  };
}


import fs from "fs";
import path from "path";
import { GraphQLClient } from "../src/client";
import { MeResponse } from "../src/services/user/types/user.type";

const CACHE_PATH = path.resolve(__dirname, ".global-env-cache.json");

export type GlobalTestEnv = {
  accessToken: string;
  userData: MeResponse;
  password: string;
  userId: string;
  client?: GraphQLClient;
};

let cachedEnv: GlobalTestEnv | null = null;
export const createClient = (accessToken?: string, userId?: string) =>
    new GraphQLClient({
        url: "http://localhost:8080/graphql",
        headersFactory: async () => ({
          "x-user-id": userId || "",
        }),
        tokenProvider: async () => accessToken || "",
    });

export async function initTestEnv(): Promise<GlobalTestEnv|null> {
  if (cachedEnv) return cachedEnv;

  if (!fs.existsSync(CACHE_PATH)) {
    throw new Error("❌ Global test environment not found. Did you run Vitest with globalSetup?");
  }

  const raw = fs.readFileSync(CACHE_PATH, "utf8");
  const envData = JSON.parse(raw) as GlobalTestEnv;
  const client = createClient(envData.accessToken, envData.userId);

  cachedEnv = {
    ...envData,
    client,
  };

  return cachedEnv;
}
export const writeCache = (data: Omit<GlobalTestEnv, "client">) => {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2));
}

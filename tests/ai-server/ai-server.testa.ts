import { beforeAll, describe, expect, it } from "vitest";
import { AIServerService, createAIServerService } from "../../src/services/ai-integration";
import { initTestEnv } from "../testEnv";


describe.sequential("AI Server API", () => {
    let aiServerService: AIServerService;

    beforeAll(async () => {
        console.log("🌍 [ai-server.test.ts] Running once for all tests...");

        const env = await initTestEnv();
        aiServerService = createAIServerService(env?.client!);
    })
    it("should get AI server auth", async () => {
        const res = await aiServerService.getAIServerAuth({
            visaProfileId: "test-profile-id",
            requestType: "readiness_score",
        });
        expect(res).not.toBeNull();
        expect(res?.aiServerAuth).not.toBeNull();
        expect(res?.aiServerAuth.accessToken).not.equal("");
    })
})
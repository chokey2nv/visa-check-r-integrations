import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { GlobalTestEnv, initTestEnv } from "../testEnv";
import { createVisaProfileService } from "../../src/services/profile/visa-profile.service";
import { VisaProfileService } from "../../src/services/profile/visa-profile.service";
const chance = new Chance();

describe.sequential("Visa Profile API", () => {
    
    let visaProfileService: VisaProfileService;
    let userId: string;

    beforeAll(async () => {
        console.log("🌍 [visa-profile.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        userId = env?.userId ?? "";
        visaProfileService = createVisaProfileService(
            env?.client!
        );
    })

    it("should create visa profile for user", async () => {
        const res = await visaProfileService.getVisaProfileCount();
        console.log({ res })
    })

   
})
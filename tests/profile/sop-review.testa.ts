import { beforeAll, describe, expect, it } from "vitest";
import { createSOPReviewService, type SOPReviewService} from "../../src/services/profile/sop-review.service";
import { initTestEnv } from "../testEnv";
import { Chance } from "chance";

const chance = new Chance();

describe.sequential("SOP Review API", () => { 
    let sopReviewService: SOPReviewService;


    beforeAll(async () => {
        console.log("🌍 [sop-review.test.ts] Running once for all tests...");

        const env = await initTestEnv();
        sopReviewService = createSOPReviewService(env?.client!);
        
    })

    it("create sop review", async () => {
        const res = await sopReviewService.createSOPReview({
            sopReview: {
                visaProfileId: "6980479155a37d9240a8beba",
                generatedSop: chance.paragraph(),
            }
        })
        console.log({ res })
        expect(res).not.toBeNull();
    })
});
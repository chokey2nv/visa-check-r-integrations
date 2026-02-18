import { beforeAll, describe, expect, it } from "vitest";
import { createSOPReviewService, type SOPReviewService} from "../../src/services/profile/sop-review.service";
import { initTestEnv } from "../testEnv";
import { Chance } from "chance";


const chance = new Chance();

describe.sequential("SOP Review API", () => { 
    let sopReviewService: SOPReviewService;


    beforeAll(async () => {
        console.log("🌍 [sop-review.test.ts] Running once for all tests...");

        // getVisaProfile();

        
    })

    
});
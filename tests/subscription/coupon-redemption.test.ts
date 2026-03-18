import { beforeAll, describe, expect, it } from "vitest";

import { initTestEnv } from "../testEnv";
import { Chance } from "chance";
import { createCouponRedemptionService, CouponRedemptionService } from "../../src/services/subscription/coupon-redemption.service";

const chance = new Chance();

describe.sequential("Credit Plan API", () => { 
    let couponRedemptionService: CouponRedemptionService;
    let couponRedemptionId: string

    beforeAll(async () => {
        console.log("🌍 [sop-review.test.ts] Running once for all tests...");

        const env = await initTestEnv();
        couponRedemptionService = createCouponRedemptionService(env?.client!);
        
    })
    it("list coupon redemption", async () => {
        const res = await couponRedemptionService.listCouponRedemptions({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.couponRedemptions.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })
});
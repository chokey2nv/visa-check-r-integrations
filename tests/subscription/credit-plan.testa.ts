import { beforeAll, describe, expect, it } from "vitest";

import { initTestEnv } from "../testEnv";
import { Chance } from "chance";
import { createCreditPlanService, CreditPlanService } from "../../src/services/subscription/credit-plan.service";

const chance = new Chance();

describe.sequential("Credit Plan API", () => { 
    let creditPlanService: CreditPlanService;
    let creditPlanId: string

    beforeAll(async () => {
        console.log("🌍 [sop-review.test.ts] Running once for all tests...");

        const env = await initTestEnv();
        creditPlanService = createCreditPlanService(env?.client!);
        
    })

    it("create credit plan", async () => {
        const res = await creditPlanService.createCreditPlan({
            creditPlan: {
                title: chance.string(),
                description: chance.string(),
                price: chance.integer({ min: 100, max: 1000 }),
            }
        })
        console.log({ res })
        expect(res).not.toBeNull();
        expect(res?.creditPlan.id).not.toBeNull();
        expect(res?.creditPlan.id).not.equal("");
        creditPlanId = res?.creditPlan.id ?? "";
    })
    it("list credit plans", async () => {
        const res = await creditPlanService.listCreditPlans({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.creditPlans.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })
    it("get credit plan", async () => {
        if(!creditPlanId) {
            throw new Error("Credit plan not created")
        }
        const res = await creditPlanService.getCreditPlan({
            creditPlan: {
                id: creditPlanId
            }
        });
        expect(res).not.toBeNull();
        expect(res?.creditPlan.id).not.equal("");
    })
    it("update credit plan", async () => {
        if(!creditPlanId) {
            throw new Error("Credit plan not created")
        }
        const res = await creditPlanService.updateCreditPlan({
            creditPlanId,
            creditPlan: {
                title: chance.string(),
                description: chance.string(),
                price: chance.integer({ min: 100, max: 1000 }),
            }
        });
        expect(res).not.toBeNull();
        expect(res?.creditPlan.id).not.equal("");
    })
    it("delete credit plan", async () => {
        if(!creditPlanId) {
            throw new Error("Credit plan not created")
        }
        const res = await creditPlanService.deleteCreditPlan({
            creditPlanId
        });
        expect(res).not.toBeNull();
        expect(res?.creditPlanId).not.toBeNull();
        expect(res?.creditPlanId).not.equal("");
    })
    it("deleted credit plan", async () => {
        try {
            await creditPlanService.getCreditPlan({
                creditPlan: {
                    id: creditPlanId
                }
            });
        } catch (error) {
            expect(error).not.toBeNull();
            expect((error as Error).message).not.toBeNull();
            expect((error as Error).message).not.equal("");
        }
    })
});
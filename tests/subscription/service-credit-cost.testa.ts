import { beforeAll, describe, expect, it } from "vitest";

import { initTestEnv } from "../testEnv";
import { Chance } from "chance";
import { createServiceCreditCostService, ServiceCreditCostService } from "../../src/services/subscription/service-credit-cost.service";

const chance = new Chance();

describe.sequential("Credit Plan API", () => { 
    let serviceCreditCostService: ServiceCreditCostService;
    let serviceCreditCostId: string

    beforeAll(async () => {
        console.log("🌍 [sop-review.test.ts] Running once for all tests...");

        const env = await initTestEnv();
        serviceCreditCostService = createServiceCreditCostService(env?.client!);
        
    })

    it("create credit plan", async () => {
        const res = await serviceCreditCostService.createServiceCreditCost({
            serviceCreditCost: {
                serviceName: "test",
                credits: chance.integer({ min: 100, max: 1000 }),
            }
        })
        console.log({ res })
        expect(res).not.toBeNull();
        expect(res?.serviceCreditCost.id).not.toBeNull();
        expect(res?.serviceCreditCost.id).not.equal("");
        serviceCreditCostId = res?.serviceCreditCost.id ?? "";
    })
    it("list credit plans", async () => {
        const res = await serviceCreditCostService.listServiceCreditCosts({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.serviceCreditCosts.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })
    it("get credit plan", async () => {
        if(!serviceCreditCostId) {
            throw new Error("Credit plan not created")
        }
        const res = await serviceCreditCostService.getServiceCreditCost({
            serviceCreditCost: {
                id: serviceCreditCostId
            }
        });
        expect(res).not.toBeNull();
        expect(res?.serviceCreditCost.id).not.equal("");
    })
    it("update credit plan", async () => {
        if(!serviceCreditCostId) {
            throw new Error("Credit plan not created")
        }
        const newServiceName = chance.name();
        const res = await serviceCreditCostService.updateServiceCreditCost({
            serviceCreditCostId,
            serviceCreditCost: {
                serviceName: newServiceName,
            }
        });
        expect(res).not.toBeNull();
        expect(res?.serviceCreditCost.id).not.equal("");
        expect(res?.serviceCreditCost?.serviceName).equal(newServiceName);
    })
    it("delete credit plan", async () => {
        if(!serviceCreditCostId) {
            throw new Error("Credit plan not created")
        }
        const res = await serviceCreditCostService.deleteServiceCreditCost({
            serviceCreditCostId
        });
        expect(res).not.toBeNull();
        expect(res?.serviceCreditCostId).not.toBeNull();
        expect(res?.serviceCreditCostId).not.equal("");
    })
    it("deleted credit plan", async () => {
        try {
            await serviceCreditCostService.getServiceCreditCost({
                serviceCreditCost: {
                    id: serviceCreditCostId
                }
            });
        } catch (error) {
            expect(error).not.toBeNull();
            expect((error as Error).message).not.toBeNull();
            expect((error as Error).message).not.equal("");
        }
    })
});
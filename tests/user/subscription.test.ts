import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createSubscriptionService, SubscriptionService } from "../../src/services/user/subscription.service"
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("Subscription API", () => {

    let subscriptionService: SubscriptionService;
    let subscriptionId: string;
    
    beforeAll(async () => {
        console.log("🌍 [subscription.test.ts] Running once for all tests...");
        const evn = await initTestEnv();
        subscriptionService = createSubscriptionService(evn?.client!)
    })
    it("should create subscription", async() =>{
        const res = await subscriptionService.createSubscription({
            subscription: {
                title: chance.name(),
                description: chance.paragraph(),
                price: chance.integer(),
                name: "free",
                rc: "no",
                rcQuantity: 0,
                rcQuantityFrequency: "daily"
            }
        })
        expect(res?.subscription.id).not.equal("");
        subscriptionId = res?.subscription.id ?? "";
    })
    it("should update subscription", async() =>{
        const res = await subscriptionService.updateSubscription({
            subscriptionId,
            subscription: {
                title: chance.name(),
                description: chance.paragraph(),
                price: chance.integer(),
                name: "gold",
            }
        })
        expect(res?.subscription.id).not.equal("");
        expect(res?.subscription.name).equal("gold");
    })
    it("should get subscription", async () => {
        const res = await subscriptionService.getSubscription({
            subscription: {
                id: subscriptionId
            }
        })
        expect(res?.subscription.id).not.equal("");
    })
    it("should list subscriptions", async () => {
        const res = await subscriptionService.listSubscriptions({
            skip: 0,
            limit: 100
        })
        expect(res?.subscriptions.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })
    it("should remove subscription", async () => {
        const res = await subscriptionService.removeSubscription({
            subscriptionId
        })
        expect(res?.subscriptionId).not.equal("");
    })

})
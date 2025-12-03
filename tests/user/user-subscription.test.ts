import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createUserSubscriptionService, UserSubscriptionService } from "../../src/services/user/user-subscription.service"
import { createSubscriptionService, SubscriptionService } from "../../src/services/user/subscription.service"
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("UserSubscription API", () => {

    let userSubscriptionService: UserSubscriptionService;
    let subscriptionService: SubscriptionService;
    let userSubscriptionId: string;
    let subscriptionId: string;
    let userId: string;
    
    beforeAll(async () => {
        console.log("🌍 [userSubscription.test.ts] Running once for all tests...");
        const evn = await initTestEnv();
        userId = evn?.userId || ""
        userSubscriptionService = createUserSubscriptionService(evn?.client!)
        subscriptionService = createSubscriptionService(evn?.client!)
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
    it("should create userSubscription", async() =>{
        const res = await userSubscriptionService.createUserSubscription({
            userSubscription: {
                subscriptionId,
                userId,
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
                monthDuration: 1,
                isActive:"yes"
            }
        })
        expect(res?.userSubscription.id).not.equal("");
        userSubscriptionId = res?.userSubscription.id ?? "";
    })
    it("should update userSubscription", async() =>{
        const res = await userSubscriptionService.updateUserSubscription({
            userSubscriptionId,
            userSubscription: {
                endDate: chance.date().toISOString(),
            }
        })
        expect(res?.userSubscription.id).not.equal("");
    })
    it("should get userSubscription", async () => {
        const res = await userSubscriptionService.getUserSubscription({
            userSubscription: {
                id: userSubscriptionId
            }
        })
        expect(res?.userSubscription.id).not.equal("");
    })
    it("should list userSubscriptions", async () => {
        const res = await userSubscriptionService.listUserSubscriptions({
            skip: 0,
            limit: 100
        })
        expect(res?.userSubscriptions.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })
    it("should remove userSubscription", async () => {
        const res = await userSubscriptionService.removeUserSubscription({
            userSubscriptionId
        })
        expect(res?.userSubscriptionId).not.equal("");
    })

})
import { beforeAll, describe, expect, it } from "vitest";

import { initTestEnv } from "../testEnv";
import { Chance } from "chance";
import { createCreditTransactionService, CreditTransactionService } from "../../src/services/subscription/credit-transaction.service";
import { createCouponService } from "../../src/services/subscription/coupon.service";

const chance = new Chance();

describe.sequential("Credit Transaction API", () => { 
    let creditTransactionService: CreditTransactionService;
    let creditTransactionId: string
    let couponCode: string

    beforeAll(async () => {
        console.log("🌍 [sop-review.test.ts] Running once for all tests...");

        const env = await initTestEnv();
        creditTransactionService = createCreditTransactionService(env?.client!);
        const couponService = await createCouponService(env?.client!);
        // const res = await couponService.createCoupon({
        //     coupon: {
        //         couponStatus: "active",
        //         value: chance.integer({ min: 10, max: 100 }),
        //         perUseLimit: 2,
        //         maxUses: 2,
        //         expiredAt: new Date().toISOString(),
        //     }
        // })
        // expect(res).not.toBeNull();
        // expect(res?.coupon.id).not.toBeNull();
        // expect(res?.coupon.id).not.equal("");
        // couponCode = res?.coupon.code ?? "";
        
    })

    // it("create tx with coupon", async () => {
    //     const res = await creditTransactionService.createCreditTransaction({
    //         creditTransaction: {
    //             price: 0,
    //             couponCode,
    //         }
    //     })
    //     console.log({ res })
    //     expect(res).not.toBeNull();
    //     expect(res?.creditTransaction.id).not.toBeNull();
    //     expect(res?.creditTransaction.id).not.equal("");
    //     creditTransactionId = res?.creditTransaction.id ?? "";
    // })
    // it("create credit transaction", async () => {
    //     const res = await creditTransactionService.createCreditTransaction({
    //         creditTransaction: {
    //             creditBalance: chance.integer({ min: 100, max: 1000 }),
    //             credits: chance.integer({ min: 100, max: 1000 }),
    //             price: chance.integer({ min: 100, max: 1000 }),
    //         }
    //     })
    //     console.log({ res })
    //     expect(res).not.toBeNull();
    //     expect(res?.creditTransaction.id).not.toBeNull();
    //     expect(res?.creditTransaction.id).not.equal("");
    //     creditTransactionId = res?.creditTransaction.id ?? "";
    // })
    it("list credit transactions", async () => {
        const res = await creditTransactionService.listCreditTransactions({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.creditTransactions.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })
//     it("get credit transaction", async () => {
//         if(!creditTransactionId) {
//             throw new Error("Credit plan not created")
//         }
//         const res = await creditTransactionService.getCreditTransaction({
//             creditTransaction: {
//                 id: creditTransactionId
//             }
//         });
//         expect(res).not.toBeNull();
//         expect(res?.creditTransaction.id).not.equal("");
//     })
//     it("update credit transaction", async () => {
//         if(!creditTransactionId) {
//             throw new Error("Credit plan not created")
//         }
//         const newCredits = chance.integer({ min: 100, max: 1000 });
//         const res = await creditTransactionService.updateCreditTransaction({
//             creditTransactionId,
//             creditTransaction: {
//                 creditBalance: chance.integer({ min: 100, max: 1000 }),
//                 credits: newCredits,
//                 price: chance.integer({ min: 100, max: 1000 }),
//             }
//         });
//         expect(res).not.toBeNull();
//         expect(res?.creditTransaction.id).not.equal("");
//         expect(res?.creditTransaction.credits).equal(newCredits);
//     })
//     it("delete credit transaction", async () => {
//         if(!creditTransactionId) {
//             throw new Error("Credit plan not created")
//         }
//         const res = await creditTransactionService.deleteCreditTransaction({
//             creditTransactionId
//         });
//         expect(res).not.toBeNull();
//         expect(res?.creditTransactionId).not.toBeNull();
//         expect(res?.creditTransactionId).not.equal("");
//     })
//     it("deleted credit transaction", async () => {
//         try {
//             await creditTransactionService.getCreditTransaction({
//                 creditTransaction: {
//                     id: creditTransactionId
//                 }
//             });
//         } catch (error) {
//             expect(error).not.toBeNull();
//             expect((error as Error).message).not.toBeNull();
//             expect((error as Error).message).not.equal("");
//         }
//     })
});
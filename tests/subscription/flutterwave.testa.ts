import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createUserService, UserService } from "../../src/services/user/user.service";
import { initTestEnv } from "../testEnv";
import { createFlutterwaveService, FlutterwaveService, encryptAES } from "../../src/services";
import { BackendTokenProvider } from "../../src/flutterwave"
import { generateRandomString } from "../../src/helpers/funcs"

const chance = new Chance();

describe.sequential("Flutter API", () => { 
    
    let userService: UserService;
    let flutterService: FlutterwaveService;
    let userId: string = "695f0e07a7c5257569707fbe"
    let chargeId: string;
    let flutterTokenProvider: BackendTokenProvider

    beforeAll(async () => {
        const client = (await initTestEnv())?.client
        console.log("🌍 [user.test.ts] Running once for all tests...");
        userService = createUserService(client!);
        flutterService = createFlutterwaveService(client!);
        flutterTokenProvider = new BackendTokenProvider(client!)
    })

    /* it("should fetch user information using access token", async () => {
        const res = await userService?.me();
        expect(res).not.toBeNull();
        expect(res?.user.fullName).not.equal("")
        // userId = res?.user.id ?? "";
    }) */
    // create user 
    /* it("should create user", async () => {
        const res = await userService.createUser({
            user: {
                fullName: chance.name(),
                userType: "client",
                email: chance.email(),
                phone: chance.phone(),
            },
        });
        console.log({ user: res })
        expect(res).not.toBeNull();
        userId = res?.user.id ?? "";
    }) */
    /* it("create flutter customer", async () => {
        const phone = chance.phone({ country_code: "234", formatted: false });
        if(!userId) return
        const res = await flutterService.createCustomerObject({
            userId, 
            customer: {
                name: {
                    last: chance.name(),
                    middle: chance.name(),
                    first: chance.name()
                },
                address: {
                    city: chance.city(),
                    state: chance.state(),
                    country: chance.country(),
                    postal_code: chance.zip(),
                    line1: chance.address(),
                    line2: chance.address()
                },
                email: chance.email(),
                phone: {
                    country_code: "234",
                    number: phone.substring(phone.length - 10)
                },
                id: ""
            }
        })
    }) */
    it("create flutter card", async () => {
        if(!userId) return
        const encryptKey = "isRlJ6Dv6YBLbvNT+53ADxIsEWmrxXAVFGKoOykyHBI="
        const nonce = generateRandomString(12)
        // 5531886652142950	09/32	564
        const encrypted_card_number = await encryptAES("5531886652142950", encryptKey, nonce)
        const encrypted_expiry_month = await encryptAES("09", encryptKey, nonce)
        const encrypted_expiry_year = await encryptAES("32", encryptKey, nonce)
        const encrypted_cvv = await encryptAES("564", encryptKey, nonce)
       
        const res = await flutterService.createCardObject({
            userId, 
            card: {
                encrypted_card_number,
                encrypted_expiry_month,
                encrypted_expiry_year,
                encrypted_cvv,
                nonce
            }
        })
        console.log({ res })
        // if(chargeId) {
            
        //     const flutterwave = new FlutterwaveClient("https://sandbox.flutterwave.com", flutterTokenProvider)
        //     const res = await flutterwave.AuthorizeCharge(userId, "12345", phone, "123456")
        //     console.log({ res })
        // }
        // console.log({ res })
    })
})
import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createUserService, UserService } from "../../src/services/user/user.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("User statistics API", () => { 
    
    let userService: UserService;
    let userId: string;

    beforeAll(async () => {
        console.log("🌍 [user.test.ts] Running once for all tests...");
        userService = createUserService((await initTestEnv())?.client!);
    })

    it("should fetch user count ", async () => {
        const res = await userService?.getUserCount();
        console.log("user count", { res })
        expect(res).not.toBeNull();
    })
    it("should fetch user type status count ", async () => {
        const res = await userService?.getUserTypeStatusCount({
            userType: "client"
        });
        console.log("user count", { res })
        expect(res).not.toBeNull();
    })
    // // create user 
    // it("should create user", async () => {
    //     const res = await userService.createUser({
    //         user: {
    //             fullName: chance.name(),
    //             userType: "client",
    //             email: chance.email(),
    //             phone: chance.phone(),
    //         },
    //     });
    //     expect(res).not.toBeNull();
    //     userId = res?.user.id ?? "";
    // })

   
})
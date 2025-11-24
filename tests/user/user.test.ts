import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createUserService, UserService } from "../../src/services/user/user.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("User API", () => { 
    
    let userService: UserService;
    let userId: string;

    beforeAll(async () => {
        console.log("🌍 [user.test.ts] Running once for all tests...");
        userService = createUserService((await initTestEnv())?.client!);
    })

    it("should fetch user information using access token", async () => {
        const res = await userService?.me();
        expect(res).not.toBeNull();
        expect(res?.user.fullName).not.equal("")
    })
    // create user 
    it("should create user", async () => {
        const res = await userService.createUser({
            user: {
                fullName: chance.name(),
                userType: "client",
                email: chance.email(),
                phone: chance.phone(),
            },
        });
        expect(res).not.toBeNull();
        userId = res?.user.id ?? "";
    })

    // update user 
    it("should update user", async () => {
        const res = await userService.updateUser({
            userId,
            user: {
                fullName: chance.name(),
                phone: chance.phone(),
            },
        });
        expect(res).not.toBeNull();
    })

    it("should delete user", async () => {
        const res = await userService.deleteUser({
            userId,
        });
        expect(res).not.toBeNull();
    })
    
    it("should list users", async () => {
        const res = await userService.listUsers({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.users.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })
    it("should get user using userId", async () => {
        const res = await userService.getUser({
            user: {
                id: userId
            },
        });
        expect(res).not.toBeNull();
    })
    it("should not update email or user type", async () => {
        try{ 
            await userService.updateUser({
                userId,
                user: {
                    email: chance.email(),
                    userType: "client",
                },
            });
        }catch(e){
            console.log(e)
            expect((e as Error).message.toLowerCase()).contains("not allowed");
        }
    })
})
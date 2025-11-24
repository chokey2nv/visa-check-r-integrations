import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createUserSettingService, UserSettingService } from "../../src/services/user/user-setting.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe("User Setting API", () => {
    let userSettingService: UserSettingService;
    let userId: string;
    let userSettingId: string;

    beforeAll(async () => {
        console.log("🌍 [user-setting.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        userId = env?.userId ?? "";
        userSettingService = createUserSettingService(
            env?.client!
        );
    })

    it("create user setting", async () => {
        const res = await userSettingService.createUserSetting({
            userSetting: {
                userId
            }
        });
        expect(res).not.toBeNull();
        if(res?.userSetting){
            userSettingId = res?.userSetting.id ?? "";
        }
    })
    
    it("should get user's settings by user id", async () => {
        const res = await userSettingService.getUserSetting({
            userSetting: {
                userId
            }
        });
        expect(res).not.toBeNull();
        if(res?.userSetting){
            userSettingId = res?.userSetting.id ?? "";
        }
    })

    it("should update user setting", async () => {
        const res = await userSettingService.updateUserSetting({
            userSettingId,
            userSetting: {
                newMessageFromClient: "yes", // change to yes/no
            }
        });
        expect(res).not.toBeNull();
    })
})
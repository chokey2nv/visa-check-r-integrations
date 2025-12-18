import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createConsultantInviteService, ConsultantInviteService } from "../../src/services/user/consultant-invite.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe("Consultant Invite API", () => {
    let consultantInviteService: ConsultantInviteService;
    let userId: string;
    let consultantInviteId: string;
    let code: string;

    beforeAll(async () => {
        console.log("🌍 [consultant-invite.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        userId = env?.userId ?? "";
        consultantInviteService = createConsultantInviteService(
            env?.client!
        );
    })

    it("create consultant invite", async () => {
        const res = await consultantInviteService.createConsultantInvite({
            consultantInvite: {
                email: "chokey2nv@gmail.com", //chance.email()
            }
        });
        expect(res).not.toBeNull();
        if(res?.consultantInvite){
            consultantInviteId = res?.consultantInvite.id ?? "";
            code = res?.consultantInvite.token;
        }
    })
    it("should verify consultant invite code", async () => {
        console.log({ code })
        const res = await consultantInviteService.verifyConsultantInviteCode({
            code: code!,
            email: "chokey2nv@gmail.com"
        });
        expect(res?.success).toBeTruthy();
    })
    
    it("should get consultant invite by id", async () => {
        const res = await consultantInviteService.getConsultantInvite({
            consultantInvite: {
                id: consultantInviteId
            }
        });
        expect(res).not.toBeNull();
        if(res?.consultantInvite){
            consultantInviteId = res?.consultantInvite.id ?? "";
        }
    })

    it("should update consultant invite", async () => {
        const res = await consultantInviteService.updateConsultantInvite({
            consultantInviteId,
            consultantInvite: {
                email: chance.email(),
            }
        });
        expect(res).not.toBeNull();
    })
    it("should update consultant invite", async () => {
        const res = await consultantInviteService.updateConsultantInvite({
            consultantInviteId,
            consultantInvite: {
                email: "chokey2nv@gmail.com", // use this on front-end, can delete later
            }
        });
        expect(res).not.toBeNull();
    })
    it("should list consultant invites", async () => {
        const res = await consultantInviteService.listConsultantInvites({
            limit: 100, skip: 0
        })
        expect(res).not.toBeNull();
        expect(res?.consultantInvites.length).greaterThan(0)
        expect(res?.total).greaterThan(0)
    })
})
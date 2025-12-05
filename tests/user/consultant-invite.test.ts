import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createConsultantInviteService, ConsultantInviteService } from "../../src/services/user/consultant-invite.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe("Consultant Invite API", () => {
    let consultantInviteService: ConsultantInviteService;
    let userId: string;
    let consultantInviteId: string;

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
                email: chance.email()
            }
        });
        console.log({ res })
        expect(res).not.toBeNull();
        if(res?.consultantInvite){
            consultantInviteId = res?.consultantInvite.id ?? "";
        }
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
    it("should list consultant invites", async () => {
        const res = await consultantInviteService.listConsultantInvites({
            limit: 100, skip: 0
        })
        expect(res).not.toBeNull();
        expect(res?.consultantInvites.length).greaterThan(0)
        expect(res?.total).greaterThan(0)
    })
})
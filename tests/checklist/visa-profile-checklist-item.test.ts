import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { VisaProfileChecklistItemService, createVisaProfileChecklistItemService } from "../../src/services/checklist/visa-profile-checklist-item.service";
import { initTestEnv } from "../testEnv";
import { createVisaProfileService, VisaProfileService } from "../../src/services/profile/visa-profile.service";
import { createChecklistItemService } from "../../src/services/checklist/checklist-item.service";

const chance = new Chance();

describe.sequential("Visa profile checklist item API", () => { 
    let visaProfileChecklistItemId: string;
    let visaProfileChecklistItemService: VisaProfileChecklistItemService;
    let visaProfileId: string;
    let checklistItemId: string

    beforeAll(async () => {
        console.log("🌍 [visa-profile-checklist-item.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        const userId = env?.userId ?? "";
        visaProfileChecklistItemService = createVisaProfileChecklistItemService(
            env?.client!
        );
        const visaProfileService = createVisaProfileService(
            env?.client!
        );
        const res = await visaProfileService.createVisaProfile({
            visaProfile: {
                countryOfBirth: chance.country(),
                dateOfBirth: chance.date().toISOString(),
                destinationCountry: chance.country(),
                userIds: [userId],
                countriesVisitedInPast5Years: [chance.country(), chance.country(), chance.country(), chance.country(), chance.country()],
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfile).not.toBeNull();
        expect(res?.visaProfile.id).not.equal("");
        visaProfileId = res?.visaProfile.id ?? "";

        const checklistItemService = createChecklistItemService(
            env?.client!
        )
        const res3 = await checklistItemService.createChecklistItem({
            checklistItem: {
                title: chance.string(),
                formLabel: chance.string(),
                description: chance.string(),
                visaType: "study",
                inputType: "text",
                category: "program",
                isRequired: "yes",
            }
        })

        expect(res3).not.toBeNull();
        expect(res3?.checklistItem).not.toBeNull();
        expect(res3?.checklistItem.id).not.equal("");
        checklistItemId = res3?.checklistItem.id ?? "";

    });
    it("should create visa profile checklist item", async () => {
        const res = await visaProfileChecklistItemService.createVisaProfileChecklistItem({
            visaProfileChecklistItem: {
                checklistItemId,
                visaProfileId,
                value: chance.string(),
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileChecklistItem).not.toBeNull();
        expect(res?.visaProfileChecklistItem.id).not.equal("");
        visaProfileChecklistItemId = res?.visaProfileChecklistItem.id ?? "";
    })

    it("should get visa profile checklist item", async () => {
        const res = await visaProfileChecklistItemService.getVisaProfileChecklistItem({
            visaProfileChecklistItem: {
                id: visaProfileChecklistItemId
            },
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileChecklistItem).not.toBeNull();
    })

    it("should list visa profile checklist items", async () => {
        const res = await visaProfileChecklistItemService.listVisaProfileChecklistItems({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileChecklistItems.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })

    it("should update visa profile checklist item", async () => {
        const res = await visaProfileChecklistItemService.updateVisaProfileChecklistItem({
            visaProfileChecklistItemId,
            visaProfileChecklistItem: {
                value: chance.string(),
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileChecklistItem).not.toBeNull();
        expect(res?.visaProfileChecklistItem.id).not.equal("");
    })

    it("should delete visa profile checklist item", async () => {
        const res = await visaProfileChecklistItemService.deleteVisaProfileChecklistItem({
            visaProfileChecklistItemId
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileChecklistItemId).not.toBeNull();
        expect(res?.visaProfileChecklistItemId).not.equal("");
    })
});
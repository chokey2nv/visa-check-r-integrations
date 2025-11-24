import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { initTestEnv } from "../testEnv";
import { ChecklistItemService, createChecklistItemService } from "../../src/services/checklist/checklist-item.service";

const chance = new Chance();

describe.sequential("Checklist Item API", () => {
    let userId: string;
    let checklistItemId: string;
    let checklistItemService: ChecklistItemService;
    beforeAll(async () => {
        console.log("🌍 [checklist-item.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        userId = env?.userId ?? "";
        checklistItemService = createChecklistItemService(
            env?.client!
        );
    })

    it("should create checklist item for user", async () => {
        const res = await checklistItemService.createChecklistItem({
            checklistItem: {
                title: chance.string(),
                formLabel: chance.string(),
                description: chance.string(),
                visaType: "study",
                inputType: "text",
                category: "program",
                isRequired: "yes",
            }
        });
        expect(res).not.toBeNull();
        expect(res?.checklistItem).not.toBeNull();
        expect(res?.checklistItem.id).not.equal("");
        checklistItemId = res?.checklistItem.id ?? "";
    })

    it("should get checklist item", async () => {
        const res = await checklistItemService.getChecklistItem({
            checklistItem: {
                id: checklistItemId
            },
        });
        expect(res).not.toBeNull();
        expect(res?.checklistItem.id).not.equal("");
    })

    it("should update checklist item", async () => {
        const res = await checklistItemService.updateChecklistItem({
            checklistItemId,
            checklistItem: {
                title: chance.string(),
                formLabel: chance.string(),
                description: chance.string(),
                visaType: "study",
                inputType: "text",
                category: "program",
                isRequired: "yes",
            }
        });
        expect(res).not.toBeNull();
        expect(res?.checklistItem).not.toBeNull();
        expect(res?.checklistItem.id).not.equal("");
    })

    it("should list checklist items", async () => {
        const res = await checklistItemService.listChecklistItems({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.checklistItems.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })

    it("should delete checklist item", async () => {
        const res = await checklistItemService.deleteChecklistItem({
            checklistItemId
        });
        expect(res).not.toBeNull();
        expect(res?.checklistItemId).not.toBeNull();
        expect(res?.checklistItemId).not.equal("");
    })

    it("should not find deleted checklist item", async () => {
        const res = await checklistItemService.getChecklistItem({
            checklistItem: {
                id: checklistItemId
            },
        });
        expect(res?.checklistItem).toBeNull();
    })
});
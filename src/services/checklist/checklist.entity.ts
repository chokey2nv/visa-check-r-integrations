import { ChecklistItem, VisaProfileChecklistItem } from "../../types";

export type ChecklistItemFields = (keyof ChecklistItem)[];
export type VisaProfileChecklistItemFields = (keyof VisaProfileChecklistItem)[];

export const checklistItemQuery: ChecklistItemFields = [
    "id",
    "title",
    "formLabel",
    "description",
    "visaType",
    "inputType",
    "category",
    "isRequired",
    "createdAt",
];
export const visaProfileChecklistItemQuery: VisaProfileChecklistItemFields = [
    "id",
    "visaProfileId",
    "checklistItemId",
    "value",
    "isApproved",
    "createdAt",
];
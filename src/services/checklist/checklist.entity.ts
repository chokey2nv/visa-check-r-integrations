import { ChecklistItem, VisaProfileChecklistItem } from "../../types";

export type ChecklistItemFields = (keyof ChecklistItem)[];
export type VisaProfileChecklistItemFields = (keyof VisaProfileChecklistItem)[];
export type FileInfoFields = (keyof VisaProfileChecklistItem["fileInfo"])[];


export const fileInfoQuery: FileInfoFields = ["name", "url", "mimeType", "size"];

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
    "status",
];
export const visaProfileChecklistItemQuery: VisaProfileChecklistItemFields = [
    "id",
    "visaProfileId",
    "checklistItemId",
    "value",
    "isApproved",
    "createdAt",
    "checklistItem",
    "fileInfo"
];
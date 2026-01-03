import { VisaType } from "./profile";
import { BooleanLiteral } from "./shared";

export interface ChecklistItem {
    id: string;
    title: string;
    formLabel: string;
    formShortName: string;
    description: string;
    visaType: VisaType | "universal";
    inputType:  "text"|"file";
    category: "program"|"finance";
    isRequired: BooleanLiteral;
    createdAt?: string;
    status: "active"|"inactive";
}

export interface FileInfo {
    url: string;
    name: string;
    size: number;
    mimeType: string
}
export interface VisaProfileChecklistItem {
    id: string;
    visaProfileId: string;
    checklistItemId: string;
    value: string;
    visaProfileChecklistItemStatus: "pending"|"approved"|"rejected";
    createdAt: string;
    checklistItem?: ChecklistItem;
    fileInfo: FileInfo
}


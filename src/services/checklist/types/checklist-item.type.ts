import { ChecklistItem } from "../../../types";
import { ChecklistItemFields, checklistItemQuery } from "../checklist.entity";

export interface GetChecklistItemRequest {
    checklistItem: Partial<ChecklistItem>;
}
export interface GetChecklistItemResponse {
    checklistItem: ChecklistItem;
}
export const getChecklistItemResponse: (keyof GetChecklistItemResponse)[] = ["checklistItem"]
export interface GetChecklistItemResponseNestedFields {
    checklistItem: ChecklistItemFields;
}
export const getChecklistItemResponseNestedFields: GetChecklistItemResponseNestedFields = {
    checklistItem: checklistItemQuery
}

// list 
export interface ListChecklistItemsRequest {
    limit: number;
    skip: number;
    search?: string;
    checklistItemIds?: string[];
    checklistItem?: Partial<ChecklistItem>;
}
export interface ListChecklistItemsResponse {
    checklistItems: ChecklistItem[];
    total: number;
}
export const listChecklistItemResponse:(keyof ListChecklistItemsResponse)[] = [
    "checklistItems",
]
export interface ListChecklistItemsResponseNestedFields {
    checklistItems: ChecklistItemFields;
}
export const listChecklistItemResponseNestedFields: ListChecklistItemsResponseNestedFields = {
    checklistItems: checklistItemQuery
}

// create 
export type CreateChecklistItemRequest = GetChecklistItemRequest
export type CreateChecklistItemResponse = GetChecklistItemResponse;
export const createChecklistItemResponse = getChecklistItemResponse;
export type CreateChecklistItemResponseNestedFields = GetChecklistItemResponseNestedFields;
export const createChecklistItemResponseNestedFields: CreateChecklistItemResponseNestedFields = getChecklistItemResponseNestedFields

// update
export interface UpdateChecklistItemRequest {
    checklistItemId: string;
    checklistItem: Partial<ChecklistItem>;
}
export type UpdateChecklistItemResponse = GetChecklistItemResponse;
export const updateChecklistItemResponse = getChecklistItemResponse;
export type UpdateChecklistItemResponseNestedFields = GetChecklistItemResponseNestedFields;
export const updateChecklistItemResponseNestedFields: UpdateChecklistItemResponseNestedFields = getChecklistItemResponseNestedFields

// delete
export interface DeleteChecklistItemRequest {
    checklistItemId: string;
}
export type DeleteChecklistItemResponse = DeleteChecklistItemRequest
export const deleteChecklistItemResponse: (keyof DeleteChecklistItemResponse)[] = ["checklistItemId"]

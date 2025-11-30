import { ChecklistItem, VisaProfileChecklistItem } from "../../../types";
import { ChecklistItemFields, checklistItemQuery, FileInfoFields, fileInfoQuery, VisaProfileChecklistItemFields, visaProfileChecklistItemQuery } from "../checklist.entity";

export interface GetVisaProfileChecklistItemRequest {
    visaProfileChecklistItem: Partial<VisaProfileChecklistItem>;
}
export interface GetVisaProfileChecklistItemResponse {
    visaProfileChecklistItem: VisaProfileChecklistItem;
}
export const getVisaProfileChecklistItemResponse: (keyof GetVisaProfileChecklistItemResponse)[] = ["visaProfileChecklistItem"]
export interface GetVisaProfileChecklistItemResponseNestedFields {
    visaProfileChecklistItem: VisaProfileChecklistItemFields;
    checklistItem: ChecklistItemFields;
    fileInfo: FileInfoFields
}
export const _getVisaProfileChecklistItemResponseNestedFields: Omit<GetVisaProfileChecklistItemResponseNestedFields, "visaProfileChecklistItem"> = {
    checklistItem: checklistItemQuery,
    fileInfo: fileInfoQuery
}
export const getVisaProfileChecklistItemResponseNestedFields: GetVisaProfileChecklistItemResponseNestedFields = {
    ..._getVisaProfileChecklistItemResponseNestedFields,
    visaProfileChecklistItem: visaProfileChecklistItemQuery,
}

// list 
export interface ListVisaProfileChecklistItemsRequest {
    limit: number;
    skip: number;
    search?: string;
    visaProfileChecklistItemIds?: string[];
    visaProfileChecklistItem?: Partial<VisaProfileChecklistItem>;
}
export interface ListVisaProfileChecklistItemsResponse {
    visaProfileChecklistItems: VisaProfileChecklistItem[];
    total: number;
}
export const listVisaProfileChecklistItemResponse:(keyof ListVisaProfileChecklistItemsResponse)[] = [
    "visaProfileChecklistItems",
]
export interface ListVisaProfileChecklistItemsResponseNestedFields extends Omit<GetVisaProfileChecklistItemResponseNestedFields, "visaProfileChecklistItem"> {
    visaProfileChecklistItems: VisaProfileChecklistItemFields;
}
export const listVisaProfileChecklistItemResponseNestedFields: ListVisaProfileChecklistItemsResponseNestedFields = {
    ..._getVisaProfileChecklistItemResponseNestedFields,
    visaProfileChecklistItems: visaProfileChecklistItemQuery
}
// get visa profile checklist items by checklist item
export interface GetVisaProfileChecklistItemsByChecklistRequest {
    checklistItem?: Partial<ChecklistItem>;
    search?: string;
    skip: number;
    limit: number;
}
export type GetVisaProfileChecklistItemsByChecklistResponse = ListVisaProfileChecklistItemsResponse;
export const getVisaProfileChecklistItemsByChecklistResponse = listVisaProfileChecklistItemResponse;
export type GetVisaProfileChecklistItemsByChecklistResponseNestedFields = ListVisaProfileChecklistItemsResponseNestedFields;
export const getVisaProfileChecklistItemsByChecklistResponseNestedFields = listVisaProfileChecklistItemResponseNestedFields;

// create items 
export interface CreateVisaProfileChecklistItemsRequest {
    visaProfileChecklistItems: Partial<VisaProfileChecklistItem>[]
}
export interface CreateVisaProfileChecklistItemsResponse {
    visaProfileChecklistItems: VisaProfileChecklistItem[]
}
export const createVisaProfileChecklistItemsResponse:(keyof CreateVisaProfileChecklistItemsResponse)[] = [
    "visaProfileChecklistItems",
]
export interface CreateVisaProfileChecklistItemsResponseNestedFields extends Omit<GetVisaProfileChecklistItemResponseNestedFields, "visaProfileChecklistItem"> {
    visaProfileChecklistItems: VisaProfileChecklistItemFields;
}
export const createVisaProfileChecklistItemsResponseNestedFields: CreateVisaProfileChecklistItemsResponseNestedFields = {
    ..._getVisaProfileChecklistItemResponseNestedFields,
    visaProfileChecklistItems: visaProfileChecklistItemQuery
}

// create 
export type CreateVisaProfileChecklistItemRequest = GetVisaProfileChecklistItemRequest
export type CreateVisaProfileChecklistItemResponse = GetVisaProfileChecklistItemResponse;
export const createVisaProfileChecklistItemResponse = getVisaProfileChecklistItemResponse;
export type CreateVisaProfileChecklistItemResponseNestedFields = GetVisaProfileChecklistItemResponseNestedFields;
export const createVisaProfileChecklistItemResponseNestedFields: CreateVisaProfileChecklistItemResponseNestedFields = getVisaProfileChecklistItemResponseNestedFields

// update
export interface UpdateVisaProfileChecklistItemRequest {
    visaProfileChecklistItemId: string;
    visaProfileChecklistItem: Partial<VisaProfileChecklistItem>;
}
export type UpdateVisaProfileChecklistItemResponse = GetVisaProfileChecklistItemResponse;
export const updateVisaProfileChecklistItemResponse = getVisaProfileChecklistItemResponse;
export type UpdateVisaProfileChecklistItemResponseNestedFields = GetVisaProfileChecklistItemResponseNestedFields;
export const updateVisaProfileChecklistItemResponseNestedFields: UpdateVisaProfileChecklistItemResponseNestedFields = getVisaProfileChecklistItemResponseNestedFields

// delete
export interface DeleteVisaProfileChecklistItemRequest {
    visaProfileChecklistItemId: string;
}
export type DeleteVisaProfileChecklistItemResponse = DeleteVisaProfileChecklistItemRequest
export const deleteVisaProfileChecklistItemResponse: (keyof DeleteVisaProfileChecklistItemResponse)[] = ["visaProfileChecklistItemId"]

import { VisaProfileChecklistItem } from "../../../types";
import { VisaProfileChecklistItemFields, visaProfileChecklistItemQuery } from "../checklist.entity";

export interface GetVisaProfileChecklistItemRequest {
    visaProfileChecklistItem: Partial<VisaProfileChecklistItem>;
}
export interface GetVisaProfileChecklistItemResponse {
    visaProfileChecklistItem: VisaProfileChecklistItem;
}
export const getVisaProfileChecklistItemResponse: (keyof GetVisaProfileChecklistItemResponse)[] = ["visaProfileChecklistItem"]
export interface GetVisaProfileChecklistItemResponseNestedFields {
    visaProfileChecklistItem: VisaProfileChecklistItemFields;
}
export const getVisaProfileChecklistItemResponseNestedFields: GetVisaProfileChecklistItemResponseNestedFields = {
    visaProfileChecklistItem: visaProfileChecklistItemQuery
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
export interface ListVisaProfileChecklistItemsResponseNestedFields {
    visaProfileChecklistItems: VisaProfileChecklistItemFields;
}
export const listVisaProfileChecklistItemResponseNestedFields: ListVisaProfileChecklistItemsResponseNestedFields = {
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

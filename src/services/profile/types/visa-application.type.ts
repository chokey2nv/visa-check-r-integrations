import { VisaApplication, VisaProfile } from "../../../types";
import { VisaApplicationFields, visaApplicationQuery } from "../profile.entity";

export interface GetVisaApplicationRequest {
    visaApplication: Partial<VisaApplication>;
}
export interface GetVisaApplicationResponse {
    visaApplication: VisaApplication;
}
export const getVisaApplicationResponseFields: (keyof GetVisaApplicationResponse)[] = ["visaApplication"];
export interface GetVisaApplicationResponseNestedFields {
    visaApplication: VisaApplicationFields
}
export const getVisaApplicationResponseNestedFields: GetVisaApplicationResponseNestedFields = {
    visaApplication: visaApplicationQuery
}

// list visaApplications 
export interface ListVisaApplicationsRequest {
    limit: number;
    skip: number;
    search?: string;
    visaApplicationIds?: string[];
    visaApplication?: Partial<VisaApplication>;
}
export interface ListVisaApplicationsResponse {
    visaApplications: VisaApplication[];
    total: number;
}
export const listVisaApplicationsResponseFields: (keyof ListVisaApplicationsResponse)[] = ["visaApplications", "total"];
export interface ListVisaApplicationsResponseNestedFields {
    visaApplications: VisaApplicationFields
}
export const listVisaApplicationsResponseNestedFields: ListVisaApplicationsResponseNestedFields = {
    visaApplications: visaApplicationQuery
}

// create visaApplication 
export type CreateVisaApplicationRequest = GetVisaApplicationRequest
export type CreateVisaApplicationResponse = GetVisaApplicationResponse
export const createVisaApplicationResponseFields = getVisaApplicationResponseFields;
export type CreateVisaApplicationResponseNestedFields = GetVisaApplicationResponseNestedFields
export const createVisaApplicationResponseNestedFields = getVisaApplicationResponseNestedFields

// update visaApplication 
export interface UpdateVisaApplicationRequest {
    visaApplicationId: string;
    visaApplication: Partial<VisaApplication>;
}
export type UpdateVisaApplicationResponse = GetVisaApplicationResponse
export const updateVisaApplicationResponseFields = getVisaApplicationResponseFields;
export type UpdateVisaApplicationResponseNestedFields = GetVisaApplicationResponseNestedFields
export const updateVisaApplicationResponseNestedFields = getVisaApplicationResponseNestedFields

// delete visaApplication 
export interface DeleteVisaApplicationRequest {
    visaApplicationId: string;
}
export type DeleteVisaApplicationResponse = DeleteVisaApplicationRequest
export const deleteVisaApplicationResponseFields: (keyof DeleteVisaApplicationResponse)[] = ["visaApplicationId"];
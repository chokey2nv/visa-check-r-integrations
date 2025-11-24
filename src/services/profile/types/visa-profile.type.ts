import { VisaProfile } from "../../../types";
import { VisaProfileFields, visaProfileQuery } from "../profile.entity";
import { getConsultantAssignmentResponseNestedFields, GetConsultantAssignmentResponseNestedFields } from "./consultant-assignment.type";
import { getReadinessScoreReviewResponseNestedFields, GetReadinessScoreReviewResponseNestedFields } from "./rs-review.type";
import { GetVisaApplicationResponseNestedFields, getVisaApplicationResponseNestedFields } from "./visa-application.type";

export interface GetVisaProfileRequest {
    visaProfile: Partial<VisaProfile>;
}
export interface GetVisaProfileResponse {
    visaProfile: VisaProfile;
}
export const getVisaProfileResponse: (keyof GetVisaProfileResponse)[] = ["visaProfile"];
export interface GetVisaProfileResponseNestedFields extends 
    GetVisaApplicationResponseNestedFields,
    GetReadinessScoreReviewResponseNestedFields
{
    visaProfile: VisaProfileFields
}
export const _getVisaProfileResponseNestedFields: Omit<GetVisaProfileResponseNestedFields, "visaProfile"> = {
    ...getVisaApplicationResponseNestedFields,
    ...getConsultantAssignmentResponseNestedFields,
    ...getReadinessScoreReviewResponseNestedFields
}
export const getVisaProfileResponseNestedFields: GetVisaProfileResponseNestedFields = {
    ..._getVisaProfileResponseNestedFields,
    visaProfile: visaProfileQuery,
}

// list visaProfiles 
export interface ListVisaProfilesRequest {
    search?: string;
    visaProfileIds?: string[];
    visaProfile?: Partial<VisaProfile>;
    limit: number;
    skip: number;
}
export interface ListVisaProfilesResponse {
    visaProfiles: VisaProfile[];
    total: number;
}
export const listVisaProfilesResponse: (keyof ListVisaProfilesResponse)[] = ["visaProfiles", "total"];
export interface ListVisaProfilesResponseNestedFields extends Omit<GetVisaProfileResponseNestedFields, "visaProfile"> {
    visaProfiles: VisaProfileFields
}
export const listVisaProfilesResponseNestedFields: ListVisaProfilesResponseNestedFields = {
    visaProfiles: visaProfileQuery,
    ..._getVisaProfileResponseNestedFields
}

// create visaProfile 
export type CreateVisaProfileRequest = GetVisaProfileRequest
export type CreateVisaProfileResponse = GetVisaProfileResponse
export const createVisaProfileResponse = getVisaProfileResponse;
export type CreateVisaProfileResponseNestedFields = GetVisaProfileResponseNestedFields
export const createVisaProfileResponseNestedFields = getVisaProfileResponseNestedFields

// update visaProfile 
export interface UpdateVisaProfileRequest {
    visaProfileId: string;
    visaProfile: Partial<VisaProfile>;
}
export type UpdateVisaProfileResponse = GetVisaProfileResponse
export const updateVisaProfileResponseFields = getVisaProfileResponse;
export type UpdateVisaProfileResponseNestedFields = GetVisaProfileResponseNestedFields
export const updateVisaProfileResponseNestedFields = getVisaProfileResponseNestedFields

// delete visaProfile 
export interface DeleteVisaProfileRequest {
    visaProfileId: string;
}
export type DeleteVisaProfileResponse = DeleteVisaProfileRequest
export const deleteVisaProfileResponse: (keyof DeleteVisaProfileResponse)[] = ["visaProfileId"];
import { ConsultantAssignment, VisaApplicationStatus, VisaProfile } from "../../../types";
import { UserFields, userQuery } from "../../user/user.entity";
import { ConsultantAssignmentFields, consultantAssignmentQuery, ReadinessScoreReviewFields, readinessScoreReviewQuery, VisaApplicationFields, visaApplicationQuery, VisaProfileFields, visaProfileQuery } from "../profile.entity";


export interface GetConsultantAssignmentCountRequest {
    consultantAssignment: Partial<ConsultantAssignment>;
}
export interface GetConsultantAssignmentCountResponse {
    count: number;
}
export const getConsultantAssignmentCountResponseFields: (keyof GetConsultantAssignmentCountResponse)[] = ["count"];

export interface GetVisaProfileRequest {
    visaProfile: Partial<VisaProfile>;
}
export interface GetVisaProfileResponse {
    visaProfile: VisaProfile;
}
export const getVisaProfileResponse: (keyof GetVisaProfileResponse)[] = ["visaProfile"];
export interface GetVisaProfileResponseNestedFields {
    visaProfile: VisaProfileFields
    visaApplication: VisaApplicationFields;
    readinessScoreReview: ReadinessScoreReviewFields;
    consultantAssignment: ConsultantAssignmentFields;
    consultant: UserFields;
}
export const _getVisaProfileResponseNestedFields: Omit<GetVisaProfileResponseNestedFields, "visaProfile"> = {
    visaApplication: visaApplicationQuery,
    readinessScoreReview: readinessScoreReviewQuery,
    consultantAssignment: consultantAssignmentQuery,
    consultant: userQuery
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
    visaApplicationStatus?: VisaApplicationStatus[];
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
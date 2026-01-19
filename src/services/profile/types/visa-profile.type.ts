import { ConsultantAssignment, SOPReview, VisaApplication, VisaApplicationStatus, VisaProfile, VisaProfileCount } from "../../../types";
import { Job } from "../../../types/app/job";
import { GetUserResponseNestedFields } from "../../user";
import { userCreditQuery, UserFields, userQuery } from "../../user/user.entity";
import { ConsultantAssignmentFields, consultantAssignmentQuery, DocumentReviewFields, documentReviewQuery, JobFields, jobQuery, ReadinessScoreReviewFields, readinessScoreReviewQuery, SOPAnswerFields, sopAnswerQuery, SOPReviewFields, sopReviewQuery, VisaApplicationFields, visaApplicationQuery, VisaProfileCountFields, visaProfileCountQuery, VisaProfileFields, visaProfileQuery } from "../profile.entity";


export interface GetVisaProfileCountByFilterRequest {
    visaProfile: Partial<VisaProfile>;
}
export interface GetVisaProfileCountByFilterResponse {
    count: number;
}
export const getVisaProfileCountByFilterResponse:(keyof GetVisaProfileCountByFilterResponse)[] = [
    "count"
]


export interface GetVisaProfileCountRequest {
    visaProfile: Partial<VisaProfile>
}
export interface GetVisaProfileCountResponse {
    visaProfileCount: VisaProfileCount;
}
export const getVisaProfileCountResponse: (keyof GetVisaProfileCountResponse)[] = ["visaProfileCount"];
export interface GetVisaProfileCountResponseNestedFields {
    visaProfileCount: VisaProfileCountFields;
}
export const getVisaProfileCountResponseNestedFields: GetVisaProfileCountResponseNestedFields = {
    visaProfileCount: visaProfileCountQuery
}

// job 
export interface GetJobRequest {
    job: Partial<Job>;
}
export interface GetJobResponse {
    job: Job;
}
export const getJobResponse: (keyof GetJobResponse)[] = ["job"];
export interface GetJobResponseNestedFields {
    job: JobFields;
}
export const getJobResponseNestedFields: GetJobResponseNestedFields = {
    job: jobQuery
}

// sop 
export interface GenerateSOPRequest {
    sopReview: Partial<SOPReview>;
}
export interface GenerateSOPResponse {
    sopReview: SOPReview;
    jobId?: string;
}
export const generateSOPResponse: (keyof GenerateSOPResponse)[] = ["sopReview", "jobId"];
export interface GenerateSOPResponseNestedFields {
    sopReview: SOPReviewFields;
    answeredQuestions: SOPAnswerFields;
    unansweredQuestions: SOPAnswerFields;
}
export const _generateSOPResponseNestedFields: Omit<GenerateSOPResponseNestedFields, "sopReview"> = {
    answeredQuestions: sopAnswerQuery,
    unansweredQuestions: sopAnswerQuery
}
export const generateSOPResponseNestedFields: GenerateSOPResponseNestedFields = {
    ..._generateSOPResponseNestedFields,
    sopReview: sopReviewQuery
}

// get generated sop 
export type GetGeneratedSOPRequest = GenerateSOPRequest
export type GetGeneratedSOPResponse = GenerateSOPResponse
export const getGeneratedSOPResponse = generateSOPResponse;
export type GetGeneratedSOPResponseNestedFields = GenerateSOPResponseNestedFields
export const getGeneratedSOPResponseNestedFields = generateSOPResponseNestedFields


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
export interface GetVisaProfileResponseNestedFields extends Omit<GetUserResponseNestedFields, "user"> {
    visaProfile: VisaProfileFields
    visaApplication: VisaApplicationFields;
    readinessScoreReview: ReadinessScoreReviewFields;
    documents: DocumentReviewFields;
    consultantAssignment: ConsultantAssignmentFields;
    consultant: UserFields;

}
export const _getVisaProfileResponseNestedFields: Omit<GetVisaProfileResponseNestedFields, "visaProfile"> = {
    visaApplication: visaApplicationQuery,
    readinessScoreReview: readinessScoreReviewQuery,
    documents: documentReviewQuery,
    consultantAssignment: consultantAssignmentQuery,
    consultant: userQuery,
    userCredit: userCreditQuery
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
    VisaApplication?: Partial<VisaApplication>;
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
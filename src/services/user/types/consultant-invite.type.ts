import { ConsultantInvite } from "../../../types";
import { ConsultantInviteFields, consultantInviteQuery } from "../user.entity";

export interface VerifyConsultantInviteCodeRequest {
    code: string;
    email: string;
}
export interface VerifyConsultantInviteCodeResponse {
    success: boolean;
}
export const verifyConsultantInviteCodeResponseFields: (keyof VerifyConsultantInviteCodeResponse)[] = ["success"];

// get consultantInvite
export interface GetConsultantInviteRequest {
    consultantInvite: Partial<ConsultantInvite>;
}
export interface GetConsultantInviteResponse {
    consultantInvite: ConsultantInvite;
}
export const getConsultantInviteResponseFields: (keyof GetConsultantInviteResponse)[] = ["consultantInvite"];
export interface GetConsultantInviteResponseNestedFields {
    consultantInvite: ConsultantInviteFields
}
export const getConsultantInviteResponseNestedFields: GetConsultantInviteResponseNestedFields = {
    consultantInvite: consultantInviteQuery
}

// list consultantInvites 
export interface ListConsultantInvitesRequest {
    search?: string;
    consultantInviteIds?: string[];
    consultantInvite?: Partial<ConsultantInvite>;
    limit: number;
    skip: number;
}
export interface ListConsultantInvitesResponse {
    consultantInvites: ConsultantInvite[];
    total: number;
}
export const listConsultantInvitesResponseFields: (keyof ListConsultantInvitesResponse)[] = ["consultantInvites", "total"];
export interface ListConsultantInvitesResponseNestedFields {
    consultantInvites: ConsultantInviteFields
}
export const listConsultantInvitesResponseNestedFields: ListConsultantInvitesResponseNestedFields = {
    consultantInvites: consultantInviteQuery
}

// create consultantInvite 
export type CreateConsultantInviteRequest = GetConsultantInviteRequest
export type CreateConsultantInviteResponse = GetConsultantInviteResponse & {
    registrationCode: string;
}
export const createConsultantInviteResponseFields: (keyof CreateConsultantInviteResponse)[] = [
    "consultantInvite", "registrationCode"
];
export type CreateConsultantInviteResponseNestedFields = GetConsultantInviteResponseNestedFields
export const createConsultantInviteResponseNestedFields = getConsultantInviteResponseNestedFields

// update consultantInvite 
export interface UpdateConsultantInviteRequest {
    consultantInviteId: string;
    consultantInvite: Partial<ConsultantInvite>;
}
export type UpdateConsultantInviteResponse = GetConsultantInviteResponse
export const updateConsultantInviteResponseFields = getConsultantInviteResponseFields;
export type UpdateConsultantInviteResponseNestedFields = GetConsultantInviteResponseNestedFields
export const updateConsultantInviteResponseNestedFields = getConsultantInviteResponseNestedFields

// delete consultantInvite 
export interface DeleteConsultantInviteRequest {
    consultantInviteId: string;
}
export type DeleteConsultantInviteResponse = DeleteConsultantInviteRequest
export const deleteConsultantInviteResponseFields: (keyof DeleteConsultantInviteResponse)[] = ["consultantInviteId"];
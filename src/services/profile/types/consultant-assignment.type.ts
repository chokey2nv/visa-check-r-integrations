import { ConsultantAssignment } from "../../../types"
import { getUserResponseNestedFields, GetUserResponseNestedFields } from "../../user";
import { UserFields, userQuery } from "../../user/user.entity";
import { ConsultantAssignmentFields, consultantAssignmentQuery } from "../profile.entity";
import { getVisaProfileResponseNestedFields, GetVisaProfileResponseNestedFields } from "./visa-profile.type";


export interface GetConsultantAssignmentRequest {
    consultantAssignment: Partial<ConsultantAssignment>;
}
export interface GetConsultantAssignmentResponse {
    consultantAssignment: ConsultantAssignment;
}
export const getConsultantAssignmentResponseFields: (keyof GetConsultantAssignmentResponse)[] = ["consultantAssignment"];
export interface GetConsultantAssignmentResponseNestedFields extends 
Omit<GetUserResponseNestedFields, "user">,
GetVisaProfileResponseNestedFields
{
    consultantAssignment: ConsultantAssignmentFields
    consultant: UserFields
}
export const _getConsultantAssignmentResponseNestedFields: Omit<GetConsultantAssignmentResponseNestedFields, "consultantAssignment"> = {
    ...{...getVisaProfileResponseNestedFields, consultantAssignment: null },
    ...{...getUserResponseNestedFields, user: null },
    consultant: userQuery,
}
export const getConsultantAssignmentResponseNestedFields: GetConsultantAssignmentResponseNestedFields = {
    ..._getConsultantAssignmentResponseNestedFields,
    consultantAssignment: consultantAssignmentQuery,
}

// list consultantAssignments 
export interface ListConsultantAssignmentsRequest {
    search?: string;
    consultantAssignmentIds?: string[];
    consultantAssignment?: Partial<ConsultantAssignment>;
    limit: number;
    skip: number;
}
export interface ListConsultantAssignmentsResponse {
    consultantAssignments: ConsultantAssignment[];
    total: number;
}
export const listConsultantAssignmentsResponseFields: (keyof ListConsultantAssignmentsResponse)[] = ["consultantAssignments", "total"];
export interface ListConsultantAssignmentsResponseNestedFields extends Omit<GetConsultantAssignmentResponseNestedFields, "consultantAssignment"> {
    consultantAssignments: ConsultantAssignmentFields
}
export const listConsultantAssignmentsResponseNestedFields: ListConsultantAssignmentsResponseNestedFields = {
    consultantAssignments: consultantAssignmentQuery,
    ..._getConsultantAssignmentResponseNestedFields,
}

// create consultantAssignment 
export type CreateConsultantAssignmentRequest = GetConsultantAssignmentRequest
export type CreateConsultantAssignmentResponse = GetConsultantAssignmentResponse
export const createConsultantAssignmentResponseFields = getConsultantAssignmentResponseFields;
export type CreateConsultantAssignmentResponseNestedFields = GetConsultantAssignmentResponseNestedFields
export const createConsultantAssignmentResponseNestedFields = getConsultantAssignmentResponseNestedFields

// update consultantAssignment 
export interface UpdateConsultantAssignmentRequest {
    consultantAssignmentId: string;
    consultantAssignment: Partial<ConsultantAssignment>;
}
export type UpdateConsultantAssignmentResponse = GetConsultantAssignmentResponse
export const updateConsultantAssignmentResponseFields = getConsultantAssignmentResponseFields;
export type UpdateConsultantAssignmentResponseNestedFields = GetConsultantAssignmentResponseNestedFields
export const updateConsultantAssignmentResponseNestedFields = getConsultantAssignmentResponseNestedFields

// delete consultantAssignment 
export interface DeleteConsultantAssignmentRequest {
    consultantAssignmentId: string;
}
export type DeleteConsultantAssignmentResponse = DeleteConsultantAssignmentRequest
export const deleteConsultantAssignmentResponseFields: (keyof DeleteConsultantAssignmentResponse)[] = ["consultantAssignmentId"];
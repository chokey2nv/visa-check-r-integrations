import { VisaProfileReviewComment } from "../../../types";
import { VisaProfileReviewCommentFields, visaProfileReviewCommentQuery } from "../profile.entity";

export interface GetVisaProfileReviewCommentRequest {
    visaProfileReviewComment: Partial<VisaProfileReviewComment>;
}
export interface GetVisaProfileReviewCommentResponse {
    visaProfileReviewComment: VisaProfileReviewComment;
}
export const getVisaProfileReviewCommentResponseFields: (keyof GetVisaProfileReviewCommentResponse)[] = ["visaProfileReviewComment"];
export interface GetVisaProfileReviewCommentResponseNestedFields {
    visaProfileReviewComment: VisaProfileReviewCommentFields
}
export const getVisaProfileReviewCommentResponseNestedFields: GetVisaProfileReviewCommentResponseNestedFields = {
    visaProfileReviewComment: visaProfileReviewCommentQuery
}

// list visaProfileReviewComments 
export interface ListVisaProfileReviewCommentsRequest {
    search?: string;
    visaProfileReviewCommentIds?: string[];
    visaProfileReviewComment?: Partial<VisaProfileReviewComment>;
    limit: number;
    skip: number;
}
export interface ListVisaProfileReviewCommentsResponse {
    visaProfileReviewComments: VisaProfileReviewComment[];
    total: number;
}
export const listVisaProfileReviewCommentsResponseFields: (keyof ListVisaProfileReviewCommentsResponse)[] = ["visaProfileReviewComments", "total"];
export interface ListVisaProfileReviewCommentsResponseNestedFields {
    visaProfileReviewComments: VisaProfileReviewCommentFields
}
export const listVisaProfileReviewCommentsResponseNestedFields: ListVisaProfileReviewCommentsResponseNestedFields = {
    visaProfileReviewComments: visaProfileReviewCommentQuery
}

// create visaProfileReviewComment 
export type CreateVisaProfileReviewCommentRequest = GetVisaProfileReviewCommentRequest
export type CreateVisaProfileReviewCommentResponse = GetVisaProfileReviewCommentResponse
export const createVisaProfileReviewCommentResponseFields = getVisaProfileReviewCommentResponseFields;
export type CreateVisaProfileReviewCommentResponseNestedFields = GetVisaProfileReviewCommentResponseNestedFields
export const createVisaProfileReviewCommentResponseNestedFields = getVisaProfileReviewCommentResponseNestedFields

// update visaProfileReviewComment 
export interface UpdateVisaProfileReviewCommentRequest {
    visaProfileReviewCommentId: string;
    visaProfileReviewComment: Partial<VisaProfileReviewComment>;
}
export type UpdateVisaProfileReviewCommentResponse = GetVisaProfileReviewCommentResponse
export const updateVisaProfileReviewCommentResponseFields = getVisaProfileReviewCommentResponseFields;
export type UpdateVisaProfileReviewCommentResponseNestedFields = GetVisaProfileReviewCommentResponseNestedFields
export const updateVisaProfileReviewCommentResponseNestedFields = getVisaProfileReviewCommentResponseNestedFields

// delete visaProfileReviewComment 
export interface DeleteVisaProfileReviewCommentRequest {
    visaProfileReviewCommentId: string;
}
export type DeleteVisaProfileReviewCommentResponse = DeleteVisaProfileReviewCommentRequest
export const deleteVisaProfileReviewCommentResponseFields: (keyof DeleteVisaProfileReviewCommentResponse)[] = ["visaProfileReviewCommentId"];
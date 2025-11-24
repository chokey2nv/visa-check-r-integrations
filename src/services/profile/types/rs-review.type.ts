import { ReadinessScoreReview } from "../../../types";
import { getChecklistItemResponseNestedFields, GetChecklistItemResponseNestedFields } from "../../checklist";
import { ReadinessScoreReviewFields, readinessScoreReviewQuery } from "../profile.entity";

export interface GetReadinessScoreReviewRequest {
    readinessScoreReview: Partial<ReadinessScoreReview>;
}
export interface GetReadinessScoreReviewResponse {
    readinessScoreReview: ReadinessScoreReview;
}
export const getReadinessScoreReviewResponseFields: (keyof GetReadinessScoreReviewResponse)[] = ["readinessScoreReview"];
export interface GetReadinessScoreReviewResponseNestedFields extends GetChecklistItemResponseNestedFields {
    readinessScoreReview: ReadinessScoreReviewFields
}
const _getReadinessScoreReviewResponseNestedFields: Omit<GetReadinessScoreReviewResponseNestedFields, "readinessScoreReview"> = {
    ...getChecklistItemResponseNestedFields
}
export const getReadinessScoreReviewResponseNestedFields: GetReadinessScoreReviewResponseNestedFields = {
    readinessScoreReview: readinessScoreReviewQuery,
    ..._getReadinessScoreReviewResponseNestedFields
}

// list readinessScoreReviews 
export interface ListReadinessScoreReviewsRequest {
    search?: string;
    readinessScoreReviewIds?: string[];
    readinessScoreReview?: Partial<ReadinessScoreReview>;
    limit: number;
    skip: number;
}
export interface ListReadinessScoreReviewsResponse {
    readinessScoreReviews: ReadinessScoreReview[];
    total: number;
}
export const listReadinessScoreReviewsResponseFields: (keyof ListReadinessScoreReviewsResponse)[] = ["readinessScoreReviews", "total"];
export interface ListReadinessScoreReviewsResponseNestedFields extends Omit<GetReadinessScoreReviewResponseNestedFields, "readinessScoreReview"> {
    readinessScoreReviews: ReadinessScoreReviewFields
}
export const listReadinessScoreReviewsResponseNestedFields: ListReadinessScoreReviewsResponseNestedFields = {
    readinessScoreReviews: readinessScoreReviewQuery,
    ..._getReadinessScoreReviewResponseNestedFields,
}

// create readinessScoreReview 
export type CreateReadinessScoreReviewRequest = GetReadinessScoreReviewRequest
export type CreateReadinessScoreReviewResponse = GetReadinessScoreReviewResponse
export const createReadinessScoreReviewResponseFields = getReadinessScoreReviewResponseFields;
export type CreateReadinessScoreReviewResponseNestedFields = GetReadinessScoreReviewResponseNestedFields
export const createReadinessScoreReviewResponseNestedFields = getReadinessScoreReviewResponseNestedFields

// update readinessScoreReview 
export interface UpdateReadinessScoreReviewRequest {
    readinessScoreReviewId: string;
    readinessScoreReview: Partial<ReadinessScoreReview>;
}
export type UpdateReadinessScoreReviewResponse = GetReadinessScoreReviewResponse
export const updateReadinessScoreReviewResponseFields = getReadinessScoreReviewResponseFields;
export type UpdateReadinessScoreReviewResponseNestedFields = GetReadinessScoreReviewResponseNestedFields
export const updateReadinessScoreReviewResponseNestedFields = getReadinessScoreReviewResponseNestedFields

// delete readinessScoreReview 
export interface DeleteReadinessScoreReviewRequest {
    readinessScoreReviewId: string;
}
export type DeleteReadinessScoreReviewResponse = DeleteReadinessScoreReviewRequest
export const deleteReadinessScoreReviewResponseFields: (keyof DeleteReadinessScoreReviewResponse)[] = ["readinessScoreReviewId"];
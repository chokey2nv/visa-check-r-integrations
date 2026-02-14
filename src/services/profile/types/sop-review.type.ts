import { SOPAnswer, SOPReview } from "../../../types";
import { SOPAnswerFields, sopAnswerQuery, SOPReviewFields, sopReviewQuery } from "../profile.entity";

export interface GetSOPReviewRequest {
    sopReview: Partial<SOPReview>
}
export interface GetSOPReviewResponse {
    sopReview: SOPReview
}
export const getSOPReviewResponseFields: (keyof GetSOPReviewResponse)[] = ["sopReview"];
export interface GetSOPReviewResponseNestedFields {
    sopReview: SOPReviewFields;
    answeredQuestions: SOPAnswerFields;
    unansweredQuestions: SOPAnswerFields;
}
export const _getSOPReviewResponseNestedFields: Omit<GetSOPReviewResponseNestedFields, "sopReview"> = {
    answeredQuestions: sopAnswerQuery,
    unansweredQuestions: sopAnswerQuery
}
export const getSOPReviewResponseNestedFields: GetSOPReviewResponseNestedFields = {
    ..._getSOPReviewResponseNestedFields,
    sopReview: sopReviewQuery
}

export type CreateSOPReviewRequest = GetSOPReviewRequest;
export type CreateSOPReviewResponse = GetSOPReviewResponse;
export const createSOPReviewResponseFields: (keyof CreateSOPReviewResponse)[] = getSOPReviewResponseFields;
export type CreateSOPReviewResponseNestedFields = GetSOPReviewResponseNestedFields;
export const createSOPReviewResponseNestedFields:CreateSOPReviewResponseNestedFields = getSOPReviewResponseNestedFields;

export type UpdateSOPReviewRequest = {
    sopReview: Partial<SOPReview>;
    sopReviewId: string;
};
export type UpdateSOPReviewResponse = GetSOPReviewResponse;
export const updateSOPReviewResponseFields: (keyof UpdateSOPReviewResponse)[] = getSOPReviewResponseFields;
export type UpdateSOPReviewResponseNestedFields = GetSOPReviewResponseNestedFields;
export const updateSOPReviewResponseNestedFields:UpdateSOPReviewResponseNestedFields = getSOPReviewResponseNestedFields;
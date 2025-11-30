import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { visaProfileReviewCommentSchema } from "./schemas/review-comment.schema";
import { 
    CreateVisaProfileReviewCommentRequest, CreateVisaProfileReviewCommentResponse, 
    createVisaProfileReviewCommentResponseFields, createVisaProfileReviewCommentResponseNestedFields, 
    CreateVisaProfileReviewCommentResponseNestedFields, 
    DeleteVisaProfileReviewCommentRequest, deleteVisaProfileReviewCommentResponseFields, 
    DeleteVisaProfileReviewCommentResponse, GetVisaProfileReviewCommentRequest, 
    GetVisaProfileReviewCommentResponse, getVisaProfileReviewCommentResponseFields, getVisaProfileReviewCommentResponseNestedFields, 
    GetVisaProfileReviewCommentResponseNestedFields, 
    ListVisaProfileReviewCommentsRequest, ListVisaProfileReviewCommentsResponse, 
    listVisaProfileReviewCommentsResponseFields, 
    listVisaProfileReviewCommentsResponseNestedFields, 
    ListVisaProfileReviewCommentsResponseNestedFields, UpdateVisaProfileReviewCommentRequest, 
    UpdateVisaProfileReviewCommentResponse,
    updateVisaProfileReviewCommentResponseFields,
    UpdateVisaProfileReviewCommentResponseNestedFields,
    updateVisaProfileReviewCommentResponseNestedFields
} from "./types/review-comment.type";

export const createVisaProfileReviewCommentService = (client: GraphQLClient) => ({
    async deleteVisaProfileReviewComment(
        input: DeleteVisaProfileReviewCommentRequest,
        fetchFields?: {
            root?: (keyof DeleteVisaProfileReviewCommentResponse)[],
        },
        option?: RequestOption
    ):Promise<DeleteVisaProfileReviewCommentResponse|undefined> {
        const res = await client.request<{ deleteVisaProfileReviewComment: DeleteVisaProfileReviewCommentResponse }>(
            visaProfileReviewCommentSchema.deleteVisaProfileReviewComment(
                gqlQueryStringBuilder<DeleteVisaProfileReviewCommentResponse>(
                    fetchFields?.root ?? deleteVisaProfileReviewCommentResponseFields
                )
            ),
            input,
            option
        );
        return res.data?.deleteVisaProfileReviewComment;
    },
    // update 
    async updateVisaProfileReviewComment(
        input: UpdateVisaProfileReviewCommentRequest,
        fetchFields?: {
            root?: (keyof UpdateVisaProfileReviewCommentResponse)[],
            nestedFields?: UpdateVisaProfileReviewCommentResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateVisaProfileReviewCommentResponse|undefined> {
        const res = await client.request<{ updateVisaProfileReviewComment: UpdateVisaProfileReviewCommentResponse }>(
            visaProfileReviewCommentSchema.updateVisaProfileReviewComment(
                gqlQueryStringBuilder<UpdateVisaProfileReviewCommentResponse, GetVisaProfileReviewCommentResponseNestedFields>(
                    fetchFields?.root ?? updateVisaProfileReviewCommentResponseFields,
                    fetchFields?.nestedFields ?? updateVisaProfileReviewCommentResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.updateVisaProfileReviewComment;
    },
    async createVisaProfileReviewComment(
        input: CreateVisaProfileReviewCommentRequest,
        fetchFields?: {
            root?: (keyof CreateVisaProfileReviewCommentResponse)[],
            nestedFields?: CreateVisaProfileReviewCommentResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateVisaProfileReviewCommentResponse|undefined> {
        const res = await client.request<{ createVisaProfileReviewComment: CreateVisaProfileReviewCommentResponse }>(
            visaProfileReviewCommentSchema.createVisaProfileReviewComment(
                gqlQueryStringBuilder<CreateVisaProfileReviewCommentResponse, CreateVisaProfileReviewCommentResponseNestedFields>(
                    fetchFields?.root ?? createVisaProfileReviewCommentResponseFields,
                    fetchFields?.nestedFields ?? createVisaProfileReviewCommentResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.createVisaProfileReviewComment;
    },
    async getVisaProfileReviewComment(
        input: GetVisaProfileReviewCommentRequest,
        fetchFields?: {
            root?: (keyof GetVisaProfileReviewCommentResponse)[],
            nestedFields?: GetVisaProfileReviewCommentResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetVisaProfileReviewCommentResponse|undefined> {
        const res = await client.request<{ getVisaProfileReviewComment: GetVisaProfileReviewCommentResponse }>(
            visaProfileReviewCommentSchema.getVisaProfileReviewComment(
                gqlQueryStringBuilder<GetVisaProfileReviewCommentResponse, GetVisaProfileReviewCommentResponseNestedFields>(
                    fetchFields?.root ?? getVisaProfileReviewCommentResponseFields,
                    fetchFields?.nestedFields ?? getVisaProfileReviewCommentResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getVisaProfileReviewComment;
    },
    async listVisaProfileReviewComments(
        input: ListVisaProfileReviewCommentsRequest,
        fetchFields?: {
            root?: (keyof ListVisaProfileReviewCommentsResponse)[],
            nestedFields?: ListVisaProfileReviewCommentsResponseNestedFields
        },
        option?: RequestOption
    ):Promise<ListVisaProfileReviewCommentsResponse|undefined> {
        const res = await client.request<{ listVisaProfileReviewComments: ListVisaProfileReviewCommentsResponse }>(
            visaProfileReviewCommentSchema.listVisaProfileReviewComments(
                gqlQueryStringBuilder<ListVisaProfileReviewCommentsResponse, ListVisaProfileReviewCommentsResponseNestedFields>(
                    fetchFields?.root ?? listVisaProfileReviewCommentsResponseFields,
                    fetchFields?.nestedFields ?? listVisaProfileReviewCommentsResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listVisaProfileReviewComments;
    }
})

export type VisaProfileReviewCommentService = ReturnType<typeof createVisaProfileReviewCommentService>
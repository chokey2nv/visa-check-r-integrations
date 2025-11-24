import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { readinessScoreReviewSchema } from "./schemas/readiness-score-review.schema";
import { 
    CreateReadinessScoreReviewRequest, CreateReadinessScoreReviewResponse, 
    createReadinessScoreReviewResponseFields, createReadinessScoreReviewResponseNestedFields, 
    CreateReadinessScoreReviewResponseNestedFields, 
    DeleteReadinessScoreReviewRequest, deleteReadinessScoreReviewResponseFields, 
    DeleteReadinessScoreReviewResponse, GetReadinessScoreReviewRequest, 
    GetReadinessScoreReviewResponse, getReadinessScoreReviewResponseFields, 
    getReadinessScoreReviewResponseNestedFields, 
    GetReadinessScoreReviewResponseNestedFields, 
    ListReadinessScoreReviewsRequest, ListReadinessScoreReviewsResponse, 
    listReadinessScoreReviewsResponseFields, 
    listReadinessScoreReviewsResponseNestedFields, 
    ListReadinessScoreReviewsResponseNestedFields, UpdateReadinessScoreReviewRequest, 
    UpdateReadinessScoreReviewResponse,
    updateReadinessScoreReviewResponseFields,
    UpdateReadinessScoreReviewResponseNestedFields,
    updateReadinessScoreReviewResponseNestedFields,
} from "./types/rs-review.type";

export const createReadinessScoreReviewService = (client: GraphQLClient) => ({
    async deleteReadinessScoreReview(
        input: DeleteReadinessScoreReviewRequest,
        fetchFields?: {
            root?: (keyof DeleteReadinessScoreReviewResponse)[],
        },
        option?: RequestOption
    ):Promise<DeleteReadinessScoreReviewResponse|undefined> {
        const res = await client.request<{ deleteReadinessScoreReview: DeleteReadinessScoreReviewResponse }>(
            readinessScoreReviewSchema.deleteReadinessScoreReview(
                gqlQueryStringBuilder<DeleteReadinessScoreReviewResponse>(
                    fetchFields?.root ?? deleteReadinessScoreReviewResponseFields
                )
            ),
            input,
            option
        );
        return res.data?.deleteReadinessScoreReview;
    },
    // update 
    async updateReadinessScoreReview(
        input: UpdateReadinessScoreReviewRequest,
        fetchFields?: {
            root?: (keyof UpdateReadinessScoreReviewResponse)[],
            nestedFields?: UpdateReadinessScoreReviewResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateReadinessScoreReviewResponse|undefined> {
        const res = await client.request<{ updateReadinessScoreReview: UpdateReadinessScoreReviewResponse }>(
            readinessScoreReviewSchema.updateReadinessScoreReview(
                gqlQueryStringBuilder<UpdateReadinessScoreReviewResponse, GetReadinessScoreReviewResponseNestedFields>(
                    fetchFields?.root ?? updateReadinessScoreReviewResponseFields,
                    fetchFields?.nestedFields ?? updateReadinessScoreReviewResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.updateReadinessScoreReview;
    },
    async createReadinessScoreReview(
        input: CreateReadinessScoreReviewRequest,
        fetchFields?: {
            root?: (keyof CreateReadinessScoreReviewResponse)[],
            nestedFields?: CreateReadinessScoreReviewResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateReadinessScoreReviewResponse|undefined> {
        const res = await client.request<{ createReadinessScoreReview: CreateReadinessScoreReviewResponse }>(
            readinessScoreReviewSchema.createReadinessScoreReview(
                gqlQueryStringBuilder<CreateReadinessScoreReviewResponse, CreateReadinessScoreReviewResponseNestedFields>(
                    fetchFields?.root ?? createReadinessScoreReviewResponseFields,
                    fetchFields?.nestedFields ?? createReadinessScoreReviewResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.createReadinessScoreReview;
    },
    async getReadinessScoreReview(
        input: GetReadinessScoreReviewRequest,
        fetchFields?: {
            root?: (keyof GetReadinessScoreReviewResponse)[],
            nestedFields?: GetReadinessScoreReviewResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetReadinessScoreReviewResponse|undefined> {
        const res = await client.request<{ getReadinessScoreReview: GetReadinessScoreReviewResponse }>(
            readinessScoreReviewSchema.getReadinessScoreReview(
                gqlQueryStringBuilder<GetReadinessScoreReviewResponse, GetReadinessScoreReviewResponseNestedFields>(
                    fetchFields?.root ?? getReadinessScoreReviewResponseFields,
                    fetchFields?.nestedFields ?? getReadinessScoreReviewResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getReadinessScoreReview;
    },
    async listReadinessScoreReviews(
        input: ListReadinessScoreReviewsRequest,
        fetchFields?: {
            root?: (keyof ListReadinessScoreReviewsResponse)[],
            nestedFields?: ListReadinessScoreReviewsResponseNestedFields
        },
        option?: RequestOption
    ):Promise<ListReadinessScoreReviewsResponse|undefined> {
        const res = await client.request<{ listReadinessScoreReviews: ListReadinessScoreReviewsResponse }>(
            readinessScoreReviewSchema.listReadinessScoreReviews(
                gqlQueryStringBuilder<ListReadinessScoreReviewsResponse, ListReadinessScoreReviewsResponseNestedFields>(
                    fetchFields?.root ?? listReadinessScoreReviewsResponseFields,
                    fetchFields?.nestedFields ?? listReadinessScoreReviewsResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listReadinessScoreReviews;
    }
})

export type ReadinessScoreReviewService = ReturnType<typeof createReadinessScoreReviewService>;
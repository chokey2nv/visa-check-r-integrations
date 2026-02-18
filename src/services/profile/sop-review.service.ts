import { GraphQLClient, RequestOption } from "../../client";
import { createOperationExecutor } from "../../helpers/service.factory";
import { sopReviewSchema } from "./schemas/sop-review.schema";
import { CreateSOPReviewRequest, CreateSOPReviewResponse, createSOPReviewResponseFields, createSOPReviewResponseNestedFields, CreateSOPReviewResponseNestedFields, GetSOPReviewRequest, GetSOPReviewResponse, getSOPReviewResponseFields, getSOPReviewResponseNestedFields, GetSOPReviewResponseNestedFields, UpdateSOPReviewRequest, UpdateSOPReviewResponse, updateSOPReviewResponseFields, updateSOPReviewResponseNestedFields, UpdateSOPReviewResponseNestedFields } from "./types/sop-review.type";

export const createSOPReviewService = (client: GraphQLClient) => ({
    updateSOPReview: createOperationExecutor<
        "updateSOPReview", 
        UpdateSOPReviewRequest, 
        UpdateSOPReviewResponse, 
        UpdateSOPReviewResponseNestedFields
    >(
        client, 
        "updateSOPReview", 
        {
            schema: sopReviewSchema.updateSOPReview,
            defaultRootFields: updateSOPReviewResponseFields,
            defaultNestedFields: updateSOPReviewResponseNestedFields,
        }
    ),
    getSOPReview: createOperationExecutor<
        "getSOPReview", 
        GetSOPReviewRequest, 
        GetSOPReviewResponse, 
        GetSOPReviewResponseNestedFields
    >(
        client, 
        "getSOPReview", 
        {
            schema: sopReviewSchema.getSOPReview,
            defaultRootFields: getSOPReviewResponseFields,
            defaultNestedFields: getSOPReviewResponseNestedFields,
        }
    ),
    createSOPReview: createOperationExecutor<
        "createSOPReview", 
        CreateSOPReviewRequest, 
        CreateSOPReviewResponse, 
        CreateSOPReviewResponseNestedFields
    >(
        client, 
        "createSOPReview", 
        {
            schema: sopReviewSchema.createSOPReview,
            defaultRootFields: createSOPReviewResponseFields,
            defaultNestedFields: createSOPReviewResponseNestedFields,
        }
    ),
})

export type SOPReviewService = ReturnType<typeof createSOPReviewService>;

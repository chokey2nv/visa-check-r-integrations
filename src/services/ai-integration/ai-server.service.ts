import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { aiServerSchema } from "./schema/ai-server.schema";
import { GetAIServerAuthRequest, getAIServerAuthResponse, GetAIServerAuthResponse, getAIServerAuthResponseNestedFields, GetAIServerAuthResponseNestedFields } from "./types/ai-server-auth.type";

export const createAIServerService = (client: GraphQLClient) => {
    return {
        async getAIServerAuth(
            input: GetAIServerAuthRequest,
            fetchFields?: {
                root?: (keyof GetAIServerAuthResponse)[],
                nestedFields?: GetAIServerAuthResponseNestedFields
            },
            option?: RequestOption
        ): Promise<GetAIServerAuthResponse|undefined> {

            const res = await client.request<{ getAIServerAuth: GetAIServerAuthResponse }>(
                aiServerSchema.getAIServerAuth(
                    gqlQueryStringBuilder<GetAIServerAuthResponse, GetAIServerAuthResponseNestedFields>(
                        fetchFields?.root ?? getAIServerAuthResponse,
                        fetchFields?.nestedFields ?? getAIServerAuthResponseNestedFields
                    )
                ),
                input,
                option
            );
            return res.data?.getAIServerAuth;

        }
    }

}

export type AIServerService = ReturnType<typeof createAIServerService>;
import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { flutterSchema } from "./schemas/flutter-customer.schema";
import { CreateCardObjectRequest, createCardObjectResponse, CreateCardObjectResponse, CreateCustomerObjectRequest, createCustomerObjectResponse, CreateCustomerObjectResponse, GetFlutterAccessTokenRequest, getFlutterAccessTokenResponse, GetFlutterAccessTokenResponse } from "./types/flutter";

export const createFlutterwaveService = (client: GraphQLClient) => ({
    async getFlutterAccessToken(
        input: GetFlutterAccessTokenRequest,
        fetchFields?: {
            root?: (keyof GetFlutterAccessTokenResponse)[],
        },
        option?: RequestOption
    ):Promise<GetFlutterAccessTokenResponse|undefined> {
        const res = await client.request<{ getFlutterAccessToken: GetFlutterAccessTokenResponse }>(
            flutterSchema.getFlutterAccessToken(
                gqlQueryStringBuilder<GetFlutterAccessTokenResponse>(
                    fetchFields?.root ?? getFlutterAccessTokenResponse
                )
            ),
            input,
            option
        );
        return res.data?.getFlutterAccessToken;
    },
    async createCardObject(
        input: CreateCardObjectRequest,
        fetchFields?: {
            root?: (keyof CreateCardObjectResponse)[],
        },
        option?: RequestOption
    ):Promise<CreateCardObjectResponse|undefined> {
        const res = await client.request<{ createCardObject: CreateCardObjectResponse }>(
            flutterSchema.createCardObject(
                gqlQueryStringBuilder<CreateCardObjectResponse>(
                    fetchFields?.root ?? createCardObjectResponse
                )
            ),
            input,
            option
        );
        return res.data?.createCardObject;
    },
    async createCustomerObject(
        input: CreateCustomerObjectRequest,
        fetchFields?: {
            root?: (keyof CreateCustomerObjectResponse)[],
        },
        option?: RequestOption
    ):Promise<CreateCustomerObjectResponse|undefined> {
        const res = await client.request<{ createCustomerObject: CreateCustomerObjectResponse }>(
            flutterSchema.createCustomerObject(
                gqlQueryStringBuilder<CreateCustomerObjectResponse>(
                    fetchFields?.root ?? createCustomerObjectResponse
                )
            ),
            input,
            option
        );
        return res.data?.createCustomerObject;
    }
})
export type FlutterwaveService = ReturnType<typeof createFlutterwaveService>
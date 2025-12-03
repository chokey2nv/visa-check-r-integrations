import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { userSubscriptionSchema } from "./schemas/user-subscription.schema";
import { CreateUserSubscriptionRequest, CreateUserSubscriptionResponse, createUserSubscriptionResponseFields, createUserSubscriptionResponseNestedFields, CreateUserSubscriptionResponseNestedFields, DeleteUserSubscriptionRequest, DeleteUserSubscriptionResponse, deleteUserSubscriptionResponseFields, GetUserSubscriptionRequest, GetUserSubscriptionResponse, getUserSubscriptionResponseFields, getUserSubscriptionResponseNestedFields, GetUserSubscriptionResponseNestedFields, ListUserSubscriptionsRequest, ListUserSubscriptionsResponse, listUserSubscriptionsResponseFields, listUserSubscriptionsResponseNestedFields, ListUserSubscriptionsResponseNestedFields, UpdateUserSubscriptionRequest, UpdateUserSubscriptionResponse, updateUserSubscriptionResponseFields, updateUserSubscriptionResponseNestedFields, UpdateUserSubscriptionResponseNestedFields } from "./types/user-subscription.type";

export const createUserSubscriptionService = (client: GraphQLClient) => ({
    // create 
     async createUserSubscription(
        input: CreateUserSubscriptionRequest,
        fetchFields?: {
          root?: (keyof CreateUserSubscriptionResponse)[],
          nestedFields?: CreateUserSubscriptionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateUserSubscriptionResponse|undefined> {
        const res = await client.request<{ createUserSubscription: CreateUserSubscriptionResponse }>(
          userSubscriptionSchema.createUserSubscription(
            gqlQueryStringBuilder<CreateUserSubscriptionResponse, CreateUserSubscriptionResponseNestedFields>(
              fetchFields?.root ?? createUserSubscriptionResponseFields,
              fetchFields?.nestedFields ?? createUserSubscriptionResponseNestedFields
            )
          ), 
          input,
          option
        );
        return res.data?.createUserSubscription
    },
    // update 
    async updateUserSubscription(
        input: UpdateUserSubscriptionRequest,
        fetchFields?: {
          root?: (keyof UpdateUserSubscriptionResponse)[],
          nestedFields?: UpdateUserSubscriptionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateUserSubscriptionResponse|undefined> {
        const res = await client.request<{ updateUserSubscription: UpdateUserSubscriptionResponse }>(
          userSubscriptionSchema.updateUserSubscription(
            gqlQueryStringBuilder<UpdateUserSubscriptionResponse, UpdateUserSubscriptionResponseNestedFields>(
              fetchFields?.root ?? updateUserSubscriptionResponseFields,
              fetchFields?.nestedFields ?? updateUserSubscriptionResponseNestedFields
            )
          ), 
          input,
          option
        );
        return res.data?.updateUserSubscription
    },
    // remove 
    async removeUserSubscription(
        input: DeleteUserSubscriptionRequest,
        fetchFields?: {
          root?: (keyof DeleteUserSubscriptionResponse)[],
        },
        option?: RequestOption
    ): Promise<DeleteUserSubscriptionResponse|undefined> {
        const res = await client.request<{ removeUserSubscription: DeleteUserSubscriptionResponse }>(
          userSubscriptionSchema.removeUserSubscription(
            gqlQueryStringBuilder<DeleteUserSubscriptionResponse>(
              fetchFields?.root ?? deleteUserSubscriptionResponseFields,
            )
          ), 
          input,
          option
        );
        return res.data?.removeUserSubscription
    },
    // get subscription 
    async getUserSubscription(
        input: GetUserSubscriptionRequest,
        fetchFields?: {
            root?: (keyof GetUserSubscriptionResponse)[],
            nestedFields?: GetUserSubscriptionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetUserSubscriptionResponse|undefined> {
        const res = await client.request<{ getUserSubscription: GetUserSubscriptionResponse }>(
            userSubscriptionSchema.getUserSubscription(
                gqlQueryStringBuilder<GetUserSubscriptionResponse, GetUserSubscriptionResponseNestedFields>(
                    fetchFields?.root ?? getUserSubscriptionResponseFields,
                    fetchFields?.nestedFields ?? getUserSubscriptionResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getUserSubscription
    },
    // list subscription
    async listUserSubscriptions(
        input: ListUserSubscriptionsRequest,
        fetchFields?: {
            root?: (keyof ListUserSubscriptionsResponse)[],
            nestedFields?: ListUserSubscriptionsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ListUserSubscriptionsResponse|undefined> {
        const res = await client.request<{ listUserSubscriptions: ListUserSubscriptionsResponse }>(
            userSubscriptionSchema.listUserSubscriptions(
                gqlQueryStringBuilder<ListUserSubscriptionsResponse, ListUserSubscriptionsResponseNestedFields>(
                    fetchFields?.root ?? listUserSubscriptionsResponseFields,
                    fetchFields?.nestedFields ?? listUserSubscriptionsResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listUserSubscriptions
    },
})

export type UserSubscriptionService = ReturnType<typeof createUserSubscriptionService>;
import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { subscriptionSchema } from "./schemas/subscription.schema";
import { CreateSubscriptionRequest, CreateSubscriptionResponse, createSubscriptionResponseFields, createSubscriptionResponseNestedFields, CreateSubscriptionResponseNestedFields, DeleteSubscriptionRequest, DeleteSubscriptionResponse, deleteSubscriptionResponseFields, GetSubscriptionRequest, GetSubscriptionResponse, getSubscriptionResponseFields, getSubscriptionResponseNestedFields, GetSubscriptionResponseNestedFields, ListSubscriptionsRequest, ListSubscriptionsResponse, listSubscriptionsResponseFields, listSubscriptionsResponseNestedFields, ListSubscriptionsResponseNestedFields, UpdateSubscriptionRequest, UpdateSubscriptionResponse, updateSubscriptionResponseFields, updateSubscriptionResponseNestedFields, UpdateSubscriptionResponseNestedFields } from "./types/subscription.type";

export const createSubscriptionService = (client: GraphQLClient) => ({
    // create 
     async createSubscription(
        input: CreateSubscriptionRequest,
        fetchFields?: {
          root?: (keyof CreateSubscriptionResponse)[],
          nestedFields?: CreateSubscriptionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateSubscriptionResponse|undefined> {
        const res = await client.request<{ createSubscription: CreateSubscriptionResponse }>(
          subscriptionSchema.createSubscription(
            gqlQueryStringBuilder<CreateSubscriptionResponse, CreateSubscriptionResponseNestedFields>(
              fetchFields?.root ?? createSubscriptionResponseFields,
              fetchFields?.nestedFields ?? createSubscriptionResponseNestedFields
            )
          ), 
          input,
          option
        );
        return res.data?.createSubscription
    },
    // update 
    async updateSubscription(
        input: UpdateSubscriptionRequest,
        fetchFields?: {
          root?: (keyof UpdateSubscriptionResponse)[],
          nestedFields?: UpdateSubscriptionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateSubscriptionResponse|undefined> {
        const res = await client.request<{ updateSubscription: UpdateSubscriptionResponse }>(
          subscriptionSchema.updateSubscription(
            gqlQueryStringBuilder<UpdateSubscriptionResponse, UpdateSubscriptionResponseNestedFields>(
              fetchFields?.root ?? updateSubscriptionResponseFields,
              fetchFields?.nestedFields ?? updateSubscriptionResponseNestedFields
            )
          ), 
          input,
          option
        );
        return res.data?.updateSubscription
    },
    // remove 
    async removeSubscription(
        input: DeleteSubscriptionRequest,
        fetchFields?: {
          root?: (keyof DeleteSubscriptionResponse)[],
        },
        option?: RequestOption
    ): Promise<DeleteSubscriptionResponse|undefined> {
        const res = await client.request<{ removeSubscription: DeleteSubscriptionResponse }>(
          subscriptionSchema.removeSubscription(
            gqlQueryStringBuilder<DeleteSubscriptionResponse>(
              fetchFields?.root ?? deleteSubscriptionResponseFields,
            )
          ), 
          input,
          option
        );
        return res.data?.removeSubscription
    },
    // get subscription 
    async getSubscription(
        input: GetSubscriptionRequest,
        fetchFields?: {
            root?: (keyof GetSubscriptionResponse)[],
            nestedFields?: GetSubscriptionResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetSubscriptionResponse|undefined> {
        const res = await client.request<{ getSubscription: GetSubscriptionResponse }>(
            subscriptionSchema.getSubscription(
                gqlQueryStringBuilder<GetSubscriptionResponse, GetSubscriptionResponseNestedFields>(
                    fetchFields?.root ?? getSubscriptionResponseFields,
                    fetchFields?.nestedFields ?? getSubscriptionResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getSubscription
    },
    // list subscription
    async listSubscriptions(
        input: ListSubscriptionsRequest,
        fetchFields?: {
            root?: (keyof ListSubscriptionsResponse)[],
            nestedFields?: ListSubscriptionsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ListSubscriptionsResponse|undefined> {
        const res = await client.request<{ listSubscriptions: ListSubscriptionsResponse }>(
            subscriptionSchema.listSubscriptions(
                gqlQueryStringBuilder<ListSubscriptionsResponse, ListSubscriptionsResponseNestedFields>(
                    fetchFields?.root ?? listSubscriptionsResponseFields,
                    fetchFields?.nestedFields ?? listSubscriptionsResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listSubscriptions
    },
})

export type SubscriptionService = ReturnType<typeof createSubscriptionService>;
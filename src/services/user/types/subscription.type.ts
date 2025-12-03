import { Subscription } from "../../../types";
import { SubscriptionFields, subscriptionQuery } from "../user.entity";


export interface GetSubscriptionRequest {
    subscription: Partial<Subscription>;
}
export interface GetSubscriptionResponse {
    subscription: Subscription;
}
export const getSubscriptionResponseFields: (keyof GetSubscriptionResponse)[] = ["subscription"];
export interface GetSubscriptionResponseNestedFields {
    subscription: SubscriptionFields
}
export const getSubscriptionResponseNestedFields: GetSubscriptionResponseNestedFields = {
    subscription: subscriptionQuery
}

// list subscriptions 
export interface ListSubscriptionsRequest {
    search?: string;
    subscriptionIds?: string[];
    subscription?: Partial<Subscription>;
    limit: number;
    skip: number;
}
export interface ListSubscriptionsResponse {
    subscriptions: Subscription[];
    total: number;
}
export const listSubscriptionsResponseFields: (keyof ListSubscriptionsResponse)[] = ["subscriptions", "total"];
export interface ListSubscriptionsResponseNestedFields {
    subscriptions: SubscriptionFields
}
export const listSubscriptionsResponseNestedFields: ListSubscriptionsResponseNestedFields = {
    subscriptions: subscriptionQuery
}

// create subscription 
export type CreateSubscriptionRequest = GetSubscriptionRequest
export type CreateSubscriptionResponse = GetSubscriptionResponse
export const createSubscriptionResponseFields = getSubscriptionResponseFields;
export type CreateSubscriptionResponseNestedFields = GetSubscriptionResponseNestedFields
export const createSubscriptionResponseNestedFields = getSubscriptionResponseNestedFields

// update subscription 
export interface UpdateSubscriptionRequest {
    subscriptionId: string;
    subscription: Partial<Subscription>;
}
export type UpdateSubscriptionResponse = GetSubscriptionResponse
export const updateSubscriptionResponseFields = getSubscriptionResponseFields;
export type UpdateSubscriptionResponseNestedFields = GetSubscriptionResponseNestedFields
export const updateSubscriptionResponseNestedFields = getSubscriptionResponseNestedFields

// delete subscription 
export interface DeleteSubscriptionRequest {
    subscriptionId: string;
}
export type DeleteSubscriptionResponse = DeleteSubscriptionRequest
export const deleteSubscriptionResponseFields: (keyof DeleteSubscriptionResponse)[] = ["subscriptionId"];
import { UserSubscription } from "../../../types";
import { SubscriptionFields, subscriptionQuery, UserFields, userQuery, UserSubscriptionFields, userSubscriptionQuery } from "../user.entity";


export interface GetUserSubscriptionRequest {
    userSubscription: Partial<UserSubscription>;
}
export interface GetUserSubscriptionResponse {
    userSubscription: UserSubscription;
}
export const getUserSubscriptionResponseFields: (keyof GetUserSubscriptionResponse)[] = ["userSubscription"];
export interface GetUserSubscriptionResponseNestedFields {
    userSubscription: UserSubscriptionFields
    subscriber: UserFields;
    subscription: SubscriptionFields;
}
export const _getUserSubscriptionResponseNestedFields: Omit<GetUserSubscriptionResponseNestedFields, "userSubscription"> = {
    subscriber: userQuery,
    subscription: subscriptionQuery,
}
export const getUserSubscriptionResponseNestedFields: GetUserSubscriptionResponseNestedFields = {
    ..._getUserSubscriptionResponseNestedFields,
    userSubscription: userSubscriptionQuery
}

// list userSubscriptions 
export interface ListUserSubscriptionsRequest {
    search?: string;
    userSubscriptionIds?: string[];
    userSubscription?: Partial<UserSubscription>;
    limit: number;
    skip: number;
}
export interface ListUserSubscriptionsResponse {
    userSubscriptions: UserSubscription[];
    total: number;
}
export const listUserSubscriptionsResponseFields: (keyof ListUserSubscriptionsResponse)[] = ["userSubscriptions", "total"];
export interface ListUserSubscriptionsResponseNestedFields extends Omit<GetUserSubscriptionResponseNestedFields, "userSubscription"> {
    userSubscriptions: UserSubscriptionFields
}
export const listUserSubscriptionsResponseNestedFields: ListUserSubscriptionsResponseNestedFields = {
    ..._getUserSubscriptionResponseNestedFields,
    userSubscriptions: userSubscriptionQuery
}

// create userSubscription 
export type CreateUserSubscriptionRequest = GetUserSubscriptionRequest
export type CreateUserSubscriptionResponse = GetUserSubscriptionResponse
export const createUserSubscriptionResponseFields = getUserSubscriptionResponseFields;
export type CreateUserSubscriptionResponseNestedFields = GetUserSubscriptionResponseNestedFields
export const createUserSubscriptionResponseNestedFields = getUserSubscriptionResponseNestedFields

// update userSubscription 
export interface UpdateUserSubscriptionRequest {
    userSubscriptionId: string;
    userSubscription: Partial<UserSubscription>;
}
export type UpdateUserSubscriptionResponse = GetUserSubscriptionResponse
export const updateUserSubscriptionResponseFields = getUserSubscriptionResponseFields;
export type UpdateUserSubscriptionResponseNestedFields = GetUserSubscriptionResponseNestedFields
export const updateUserSubscriptionResponseNestedFields = getUserSubscriptionResponseNestedFields

// delete userSubscription 
export interface DeleteUserSubscriptionRequest {
    userSubscriptionId: string;
}
export type DeleteUserSubscriptionResponse = DeleteUserSubscriptionRequest
export const deleteUserSubscriptionResponseFields: (keyof DeleteUserSubscriptionResponse)[] = ["userSubscriptionId"];
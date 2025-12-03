import { User, UserSetting } from "../../../types";
import { UserFields, userQuery, UserSettingFields, userSettingQuery } from "../user.entity";

export interface MeRequest {}
export interface MeResponse {
    user: User;
    userSetting: UserSetting;
}
export const meResponseFields: (keyof MeResponse)[] = ["user", "userSetting"];
export interface MeResponseNestedFields {
    user: UserFields
    userSetting: UserSettingFields
}
export const meResponseNestedFields: MeResponseNestedFields = {
    user: userQuery,
    userSetting: userSettingQuery
}

export interface GetUserRequest {
    user: Partial<User>;
}
export interface GetUserResponse {
    user: User;
}
export const getUserResponseFields: (keyof GetUserResponse)[] = ["user"];
export interface GetUserResponseNestedFields {
    user: UserFields
}
export const getUserResponseNestedFields: GetUserResponseNestedFields = {
    user: userQuery
}

// list users 
export interface ListUsersRequest {
    search?: string;
    userIds?: string[];
    user?: Partial<User>;
    limit: number;
    skip: number;
    subscriptionIds?: string[]
}
export interface ListUsersResponse {
    users: User[];
    total: number;
}
export const listUsersResponseFields: (keyof ListUsersResponse)[] = ["users", "total"];
export interface ListUsersResponseNestedFields {
    users: UserFields
}
export const listUsersResponseNestedFields: ListUsersResponseNestedFields = {
    users: userQuery
}

// create user 
export type CreateUserRequest = GetUserRequest
export type CreateUserResponse = GetUserResponse
export const createUserResponseFields = getUserResponseFields;
export type CreateUserResponseNestedFields = GetUserResponseNestedFields
export const createUserResponseNestedFields = getUserResponseNestedFields

// update user 
export interface UpdateUserRequest {
    userId: string;
    user: Partial<User>;
}
export type UpdateUserResponse = GetUserResponse
export const updateUserResponseFields = getUserResponseFields;
export type UpdateUserResponseNestedFields = GetUserResponseNestedFields
export const updateUserResponseNestedFields = getUserResponseNestedFields

// delete user 
export interface DeleteUserRequest {
    userId: string;
}
export type DeleteUserResponse = DeleteUserRequest
export const deleteUserResponseFields: (keyof DeleteUserResponse)[] = ["userId"];
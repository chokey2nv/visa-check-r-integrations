import { User, UserCount, UserSetting, UserType, UserTypeStatusCount } from "../../../types";
import { UserCountFields, userCountQuery, UserCreditFields, userCreditQuery, UserFields, userQuery, UserSettingFields, userSettingQuery, UserTypeStatusCountFields, userTypeStatusCountQuery } from "../user.entity";


export interface GetUserTypeStatusCountRequest {
    userType: UserType;
}
export interface GetUserTypeStatusCountResponse {
    userTypeStatusCount: UserTypeStatusCount;
}
export const getUserTypeStatusCountResponse:(keyof GetUserTypeStatusCountResponse)[] = [
    "userTypeStatusCount"
]
export interface GetUserTypeStatusCountResponseNestedFields {
    userTypeStatusCount: UserTypeStatusCountFields;
}
export const getUserTypeStatusCountResponseNestedFields:GetUserTypeStatusCountResponseNestedFields = {
    userTypeStatusCount: userTypeStatusCountQuery
}



export interface GetUserCountResponse {
    userCount: UserCount;
}
export const getUserCountResponse:(keyof GetUserCountResponse)[] = [
    "userCount"
]
export interface GetUserCountResponseNestedFields {
    userCount: UserCountFields;
}
export const getUserCountResponseNestedFields:GetUserCountResponseNestedFields = {
    userCount: userCountQuery
}

export interface MeRequest {}
export interface MeResponse {
    user: User;
    userSetting: UserSetting;
    visaProfileCount: number
}
export const meResponseFields: (keyof MeResponse)[] = ["user", "userSetting", "visaProfileCount"];
export interface MeResponseNestedFields extends GetUserResponseNestedFields {
    user: UserFields
    userSetting: UserSettingFields
}
export const meResponseNestedFields: MeResponseNestedFields = {
    user: userQuery,
    userSetting: userSettingQuery,
    userCredit: userCreditQuery,
}

export interface GetUserRequest {
    user: Partial<User>;
}
export interface GetUserResponse {
    user: User;
}
export const getUserResponseFields: (keyof GetUserResponse)[] = ["user"];
export interface GetUserResponseNestedFields {
    user: UserFields;
    userCredit: UserCreditFields;
}
export const _getUserResponseNestedFields: Omit<GetUserResponseNestedFields, "user"> = {
    userCredit: userCreditQuery,
}
export const getUserResponseNestedFields: GetUserResponseNestedFields = {
    ..._getUserResponseNestedFields,
    user: userQuery,
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
export interface ListUsersResponseNestedFields extends Omit<GetUserResponseNestedFields, "user"> {
    users: UserFields
}
export const listUsersResponseNestedFields: ListUsersResponseNestedFields = {
    ..._getUserResponseNestedFields,
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
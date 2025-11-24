import { UserSetting } from "../../../types";
import { UserSettingFields, userSettingQuery } from "../user.entity";

export interface GetUserSettingRequest {
    userSetting: Partial<UserSetting>;
}
export interface GetUserSettingResponse {
    userSetting: UserSetting;
}
export const getUserSettingResponseFields: (keyof GetUserSettingResponse)[] = ["userSetting"];
export interface GetUserSettingResponseNestedFields {
    userSetting: UserSettingFields;
}
export const getUserSettingResponseNestedFields:GetUserSettingResponseNestedFields = {
    userSetting: userSettingQuery
}

// create user setting 
export type CreateUserSettingRequest = GetUserSettingRequest;
export type CreateUserSettingResponse = GetUserSettingResponse;
export const createUserSettingResponseFields = getUserSettingResponseFields;
export type CreateUserSettingResponseNestedFields = GetUserSettingResponseNestedFields;
export const createUserSettingResponseNestedFields = getUserSettingResponseNestedFields;

// update user setting 
export interface UpdateUserSettingRequest {
    userSettingId: string;
    userSetting: Partial<UserSetting>;
}
export type UpdateUserSettingResponse = GetUserSettingResponse;
export const updateUserSettingResponseFields = getUserSettingResponseFields;
export type UpdateUserSettingResponseNestedFields = GetUserSettingResponseNestedFields;
export const updateUserSettingResponseNestedFields = getUserSettingResponseNestedFields;

// delete user setting 
export interface DeleteUserSettingRequest {
    userSettingId: string;
}
export type DeleteUserSettingResponse = DeleteUserSettingRequest;
export const deleteUserSettingResponseFields: (keyof DeleteUserSettingResponse)[] = ["userSettingId"];
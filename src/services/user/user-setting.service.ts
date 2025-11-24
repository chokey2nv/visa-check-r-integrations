import type { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { userSettingSchema } from "./schemas/user-setting.schema";
import { 
  CreateUserSettingRequest, CreateUserSettingResponse, 
  createUserSettingResponseFields, createUserSettingResponseNestedFields, 
  CreateUserSettingResponseNestedFields, 
  GetUserSettingRequest, GetUserSettingResponse, 
  getUserSettingResponseFields, getUserSettingResponseNestedFields, 
  GetUserSettingResponseNestedFields, UpdateUserSettingRequest, 
  UpdateUserSettingResponse, updateUserSettingResponseFields, updateUserSettingResponseNestedFields,
  UpdateUserSettingResponseNestedFields } from "./types/user-setting.type";

export const createUserSettingService = (client: GraphQLClient) => ({  
  async createUserSetting(
    input: CreateUserSettingRequest,
    fetchFields?: {
      root?: (keyof CreateUserSettingResponse)[],
      nestedFields?: CreateUserSettingResponseNestedFields
    },
    option?: RequestOption
  ): Promise<CreateUserSettingResponse|undefined> {
    const res = await client.request<{ createUserSetting: CreateUserSettingResponse }>(
      userSettingSchema.createUserSetting(
        gqlQueryStringBuilder<CreateUserSettingResponse, CreateUserSettingResponseNestedFields>(
          fetchFields?.root ?? createUserSettingResponseFields,
          fetchFields?.nestedFields ?? createUserSettingResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.createUserSetting
  },
  async updateUserSetting(
    input: UpdateUserSettingRequest,
    fetchFields?: {
      root?: (keyof UpdateUserSettingResponse)[],
      nestedFields?: UpdateUserSettingResponseNestedFields
    },
    option?: RequestOption
  ): Promise<UpdateUserSettingResponse|undefined> {
    const res = await client.request<{ updateUserSetting: UpdateUserSettingResponse }>(
      userSettingSchema.updateUserSetting(
        gqlQueryStringBuilder<UpdateUserSettingResponse, UpdateUserSettingResponseNestedFields>(
          fetchFields?.root ?? updateUserSettingResponseFields,
          fetchFields?.nestedFields ?? updateUserSettingResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.updateUserSetting
  },
  async getUserSetting(
    input: GetUserSettingRequest,
    fetchFields?: {
      root?: (keyof GetUserSettingResponse)[],
      nestedFields?: GetUserSettingResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetUserSettingResponse|undefined> {
    const res = await client.request<{ getUserSetting: GetUserSettingResponse }>(
      userSettingSchema.getUserSetting(
        gqlQueryStringBuilder<GetUserSettingResponse, GetUserSettingResponseNestedFields>(
          fetchFields?.root ?? getUserSettingResponseFields,
          fetchFields?.nestedFields ?? getUserSettingResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.getUserSetting
  }
});

export type UserSettingService = ReturnType<typeof createUserSettingService>
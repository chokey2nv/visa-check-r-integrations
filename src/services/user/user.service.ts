import type { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { userSchema } from "./schemas/user.schema";
import { CreateUserRequest, CreateUserResponse, createUserResponseFields, createUserResponseNestedFields, CreateUserResponseNestedFields, DeleteUserRequest, DeleteUserResponse, deleteUserResponseFields, getUserCountResponse, GetUserCountResponse, getUserCountResponseNestedFields, GetUserCountResponseNestedFields, GetUserRequest, GetUserResponse, getUserResponseFields, getUserResponseNestedFields, GetUserResponseNestedFields, GetUserTypeStatusCountRequest, getUserTypeStatusCountResponse, GetUserTypeStatusCountResponse, getUserTypeStatusCountResponseNestedFields, GetUserTypeStatusCountResponseNestedFields, ListUsersRequest, ListUsersResponse, listUsersResponseFields, listUsersResponseNestedFields, ListUsersResponseNestedFields, MeResponse, meResponseFields, meResponseNestedFields, MeResponseNestedFields, UpdateUserRequest, UpdateUserResponse, updateUserResponseFields, updateUserResponseNestedFields, UpdateUserResponseNestedFields } from "./types/user.type";

export const createUserService = (client: GraphQLClient) => ({  

  async getUserTypeStatusCount(
    input: GetUserTypeStatusCountRequest,
    fetchFields?: {
      root?: (keyof GetUserTypeStatusCountResponse)[],
      nestedFields?: GetUserTypeStatusCountResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetUserTypeStatusCountResponse|undefined> {
    const res = await client.request<{ getUserTypeStatusCount: GetUserTypeStatusCountResponse }>(
      userSchema.getUserTypeStatusCount(
        gqlQueryStringBuilder<GetUserTypeStatusCountResponse, GetUserTypeStatusCountResponseNestedFields>(
          fetchFields?.root ?? getUserTypeStatusCountResponse,
          fetchFields?.nestedFields ?? getUserTypeStatusCountResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.getUserTypeStatusCount
  },
  async getUserCount(
    fetchFields?: {
      root?: (keyof GetUserCountResponse)[],
      nestedFields?: GetUserCountResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetUserCountResponse|undefined>{
    const res = await client.request<{ getUserCount: GetUserCountResponse }>(
      userSchema.getUserCount(
        gqlQueryStringBuilder<GetUserCountResponse, GetUserCountResponseNestedFields>(
          fetchFields?.root ?? getUserCountResponse,
          fetchFields?.nestedFields ?? getUserCountResponseNestedFields
        )
      ), 
      {},
      option
    );
    return res.data?.getUserCount
  },
  async me(
    fetchFields?: {
      root?: (keyof MeResponse)[],
      nestedFields?: MeResponseNestedFields
    },
    option?: RequestOption
  ): Promise<MeResponse|undefined> {
    const res = await client.request<{ me: MeResponse }>(
      userSchema.me(
        gqlQueryStringBuilder<MeResponse, MeResponseNestedFields>(
          fetchFields?.root ?? meResponseFields,
          fetchFields?.nestedFields ?? meResponseNestedFields
        )
      ), 
      {},
      option
    );
    return res.data?.me
  },
  async createUser(
    input: CreateUserRequest,
    fetchFields?: {
      root?: (keyof CreateUserResponse)[],
      nestedFields?: CreateUserResponseNestedFields
    },
    option?: RequestOption
  ): Promise<CreateUserResponse|undefined> {
    const res = await client.request<{ createUser: CreateUserResponse }>(
      userSchema.createUser(
        gqlQueryStringBuilder<CreateUserResponse, CreateUserResponseNestedFields>(
          fetchFields?.root ?? createUserResponseFields,
          fetchFields?.nestedFields ?? createUserResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.createUser
  },
  async deleteUser(
    input: DeleteUserRequest,
    fetchFields?: {
      root?: (keyof DeleteUserResponse)[],
    },
    option?: RequestOption
  ): Promise<DeleteUserResponse|undefined> {
    const res = await client.request<{ deleteUser: DeleteUserResponse }>(
      userSchema.deleteUser(
        gqlQueryStringBuilder<DeleteUserResponse>(
          fetchFields?.root ?? deleteUserResponseFields
        )
      ),
      input,
      option
    )
    return res.data?.deleteUser
  },
  async updateUser(
    input: UpdateUserRequest,
    fetchFields?: {
      root?: (keyof UpdateUserResponse)[],
      nestedFields?: UpdateUserResponseNestedFields
    },
    option?: RequestOption
  ): Promise<UpdateUserResponse|undefined> {
    const res = await client.request<{ updateUser: UpdateUserResponse }>(
      userSchema.updateUser(
        gqlQueryStringBuilder<UpdateUserResponse, UpdateUserResponseNestedFields>(
          fetchFields?.root ?? updateUserResponseFields,
          fetchFields?.nestedFields ?? updateUserResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.updateUser
  },
  async listUsers(
    input: ListUsersRequest,
    fetchFields?: {
      root?: (keyof ListUsersResponse)[],
      nestedFields?: ListUsersResponseNestedFields
    },
    option?: RequestOption
  ): Promise<ListUsersResponse|undefined> {
    const res = await client.request<{ listUsers: ListUsersResponse }>(
      userSchema.listUsers(
        gqlQueryStringBuilder<ListUsersResponse, ListUsersResponseNestedFields>(
          fetchFields?.root ?? listUsersResponseFields,
          fetchFields?.nestedFields ?? listUsersResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.listUsers
  },
  async getUser(
    input: GetUserRequest,
    fetchFields?: {
      root?: (keyof GetUserResponse)[],
      nestedFields?: GetUserResponseNestedFields
    },
    option?: RequestOption
  ): Promise<GetUserResponse|undefined> {
    const res = await client.request<{ getUser: GetUserResponse }>(
      userSchema.getUser(
        gqlQueryStringBuilder<GetUserResponse, GetUserResponseNestedFields>(
          fetchFields?.root ?? getUserResponseFields,
          fetchFields?.nestedFields ?? getUserResponseNestedFields
        )
      ), 
      input,
      option
    );
    return res.data?.getUser
  }
});

export type UserService = ReturnType<typeof createUserService>
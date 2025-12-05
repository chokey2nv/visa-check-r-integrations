import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { consultantInviteSchema } from "./schemas/consultant-invite";
import { CreateConsultantInviteRequest, CreateConsultantInviteResponse, createConsultantInviteResponseFields, createConsultantInviteResponseNestedFields, CreateConsultantInviteResponseNestedFields, DeleteConsultantInviteRequest, DeleteConsultantInviteResponse, deleteConsultantInviteResponseFields, GetConsultantInviteRequest, GetConsultantInviteResponse, getConsultantInviteResponseFields, getConsultantInviteResponseNestedFields, GetConsultantInviteResponseNestedFields, ListConsultantInvitesRequest, ListConsultantInvitesResponse, listConsultantInvitesResponseFields, listConsultantInvitesResponseNestedFields, ListConsultantInvitesResponseNestedFields, UpdateConsultantInviteRequest, UpdateConsultantInviteResponse, updateConsultantInviteResponseFields, updateConsultantInviteResponseNestedFields, UpdateConsultantInviteResponseNestedFields } from "./types/consultant-invite.type";

export const createConsultantInviteService = (client: GraphQLClient) => ({
    // create 
     async createConsultantInvite(
        input: CreateConsultantInviteRequest,
        fetchFields?: {
          root?: (keyof CreateConsultantInviteResponse)[],
          nestedFields?: CreateConsultantInviteResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateConsultantInviteResponse|undefined> {
        const res = await client.request<{ createConsultantInvite: CreateConsultantInviteResponse }>(
          consultantInviteSchema.createConsultantInvite(
            gqlQueryStringBuilder<CreateConsultantInviteResponse, CreateConsultantInviteResponseNestedFields>(
              fetchFields?.root ?? createConsultantInviteResponseFields,
              fetchFields?.nestedFields ?? createConsultantInviteResponseNestedFields
            )
          ), 
          input,
          option
        );
        return res.data?.createConsultantInvite
    },
    // update 
    async updateConsultantInvite(
        input: UpdateConsultantInviteRequest,
        fetchFields?: {
          root?: (keyof UpdateConsultantInviteResponse)[],
          nestedFields?: UpdateConsultantInviteResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateConsultantInviteResponse|undefined> {
        const res = await client.request<{ updateConsultantInvite: UpdateConsultantInviteResponse }>(
          consultantInviteSchema.updateConsultantInvite(
            gqlQueryStringBuilder<UpdateConsultantInviteResponse, UpdateConsultantInviteResponseNestedFields>(
              fetchFields?.root ?? updateConsultantInviteResponseFields,
              fetchFields?.nestedFields ?? updateConsultantInviteResponseNestedFields
            )
          ), 
          input,
          option
        );
        return res.data?.updateConsultantInvite
    },
    // remove 
    async removeConsultantInvite(
        input: DeleteConsultantInviteRequest,
        fetchFields?: {
          root?: (keyof DeleteConsultantInviteResponse)[],
        },
        option?: RequestOption
    ): Promise<DeleteConsultantInviteResponse|undefined> {
        const res = await client.request<{ removeConsultantInvite: DeleteConsultantInviteResponse }>(
          consultantInviteSchema.removeConsultantInvite(
            gqlQueryStringBuilder<DeleteConsultantInviteResponse>(
              fetchFields?.root ?? deleteConsultantInviteResponseFields,
            )
          ), 
          input,
          option
        );
        return res.data?.removeConsultantInvite
    },
    // get subscription 
    async getConsultantInvite(
        input: GetConsultantInviteRequest,
        fetchFields?: {
            root?: (keyof GetConsultantInviteResponse)[],
            nestedFields?: GetConsultantInviteResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetConsultantInviteResponse|undefined> {
        const res = await client.request<{ getConsultantInvite: GetConsultantInviteResponse }>(
            consultantInviteSchema.getConsultantInvite(
                gqlQueryStringBuilder<GetConsultantInviteResponse, GetConsultantInviteResponseNestedFields>(
                    fetchFields?.root ?? getConsultantInviteResponseFields,
                    fetchFields?.nestedFields ?? getConsultantInviteResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getConsultantInvite
    },
    // list subscription
    async listConsultantInvites(
        input: ListConsultantInvitesRequest,
        fetchFields?: {
            root?: (keyof ListConsultantInvitesResponse)[],
            nestedFields?: ListConsultantInvitesResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ListConsultantInvitesResponse|undefined> {
        const res = await client.request<{ listConsultantInvites: ListConsultantInvitesResponse }>(
            consultantInviteSchema.listConsultantInvites(
                gqlQueryStringBuilder<ListConsultantInvitesResponse, ListConsultantInvitesResponseNestedFields>(
                    fetchFields?.root ?? listConsultantInvitesResponseFields,
                    fetchFields?.nestedFields ?? listConsultantInvitesResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listConsultantInvites
    },
})

export type ConsultantInviteService = ReturnType<typeof createConsultantInviteService>;
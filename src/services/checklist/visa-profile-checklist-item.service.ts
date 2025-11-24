import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { visaProfileChecklistItemSchema } from "./schemas/visaprofile-checklist-item.schema";
import { CreateVisaProfileChecklistItemRequest, createVisaProfileChecklistItemResponse, CreateVisaProfileChecklistItemResponse, createVisaProfileChecklistItemResponseNestedFields, CreateVisaProfileChecklistItemResponseNestedFields, DeleteVisaProfileChecklistItemRequest, deleteVisaProfileChecklistItemResponse, DeleteVisaProfileChecklistItemResponse, GetVisaProfileChecklistItemRequest, getVisaProfileChecklistItemResponse, GetVisaProfileChecklistItemResponse, getVisaProfileChecklistItemResponseNestedFields, GetVisaProfileChecklistItemResponseNestedFields, listVisaProfileChecklistItemResponse, listVisaProfileChecklistItemResponseNestedFields, ListVisaProfileChecklistItemsRequest, ListVisaProfileChecklistItemsResponse, ListVisaProfileChecklistItemsResponseNestedFields, UpdateVisaProfileChecklistItemRequest, updateVisaProfileChecklistItemResponse, UpdateVisaProfileChecklistItemResponse, updateVisaProfileChecklistItemResponseNestedFields, UpdateVisaProfileChecklistItemResponseNestedFields } from "./types/visaprofile-checklist-item.type";

export const createVisaProfileChecklistItemService = (client: GraphQLClient) => ({
    async deleteVisaProfileChecklistItem(
        input: DeleteVisaProfileChecklistItemRequest,
        fetchFields?: {
            root?: (keyof DeleteVisaProfileChecklistItemResponse)[],
        },
        option?: RequestOption
    ):Promise<DeleteVisaProfileChecklistItemResponse|undefined> {
        const res = await client.request<{ deleteVisaProfileChecklistItem: DeleteVisaProfileChecklistItemResponse }>(
            visaProfileChecklistItemSchema.deleteVisaProfileChecklistItem(
                gqlQueryStringBuilder<DeleteVisaProfileChecklistItemResponse>(
                    fetchFields?.root ?? deleteVisaProfileChecklistItemResponse
                )
            ),
            input,
            option
        );
        return res.data?.deleteVisaProfileChecklistItem;
    },
    // update 
    async updateVisaProfileChecklistItem(
        input: UpdateVisaProfileChecklistItemRequest,
        fetchFields?: {
            root?: (keyof UpdateVisaProfileChecklistItemResponse)[],
            nestedFields?: UpdateVisaProfileChecklistItemResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateVisaProfileChecklistItemResponse|undefined> {
        const res = await client.request<{ updateVisaProfileChecklistItem: UpdateVisaProfileChecklistItemResponse }>(
            visaProfileChecklistItemSchema.updateVisaProfileChecklistItem(
                gqlQueryStringBuilder<UpdateVisaProfileChecklistItemResponse, GetVisaProfileChecklistItemResponseNestedFields>(
                    fetchFields?.root ?? updateVisaProfileChecklistItemResponse,
                    fetchFields?.nestedFields ?? updateVisaProfileChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.updateVisaProfileChecklistItem;
    },
    async createVisaProfileChecklistItem(
        input: CreateVisaProfileChecklistItemRequest,
        fetchFields?: {
            root?: (keyof CreateVisaProfileChecklistItemResponse)[],
            nestedFields?: CreateVisaProfileChecklistItemResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateVisaProfileChecklistItemResponse|undefined> {
        const res = await client.request<{ createVisaProfileChecklistItem: CreateVisaProfileChecklistItemResponse }>(
            visaProfileChecklistItemSchema.createVisaProfileChecklistItem(
                gqlQueryStringBuilder<CreateVisaProfileChecklistItemResponse, CreateVisaProfileChecklistItemResponseNestedFields>(
                    fetchFields?.root ?? createVisaProfileChecklistItemResponse,
                    fetchFields?.nestedFields ?? createVisaProfileChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.createVisaProfileChecklistItem;
    },
    async getVisaProfileChecklistItem(
        input: GetVisaProfileChecklistItemRequest,
        fetchFields?: {
            root?: (keyof GetVisaProfileChecklistItemResponse)[],
            nestedFields?: GetVisaProfileChecklistItemResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetVisaProfileChecklistItemResponse|undefined> {
        const res = await client.request<{ getVisaProfileChecklistItem: GetVisaProfileChecklistItemResponse }>(
            visaProfileChecklistItemSchema.getVisaProfileChecklistItem(
                gqlQueryStringBuilder<GetVisaProfileChecklistItemResponse, GetVisaProfileChecklistItemResponseNestedFields>(
                    fetchFields?.root ?? getVisaProfileChecklistItemResponse,
                    fetchFields?.nestedFields ?? getVisaProfileChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getVisaProfileChecklistItem;
    },
    async listVisaProfileChecklistItems(
        input: ListVisaProfileChecklistItemsRequest,
        fetchFields?: {
            root?: (keyof ListVisaProfileChecklistItemsResponse)[],
            nestedFields?: ListVisaProfileChecklistItemsResponseNestedFields
        },
        option?: RequestOption
    ):Promise<ListVisaProfileChecklistItemsResponse|undefined> {
        const res = await client.request<{ listVisaProfileChecklistItems: ListVisaProfileChecklistItemsResponse }>(
            visaProfileChecklistItemSchema.listVisaProfileChecklistItems(
                gqlQueryStringBuilder<ListVisaProfileChecklistItemsResponse, ListVisaProfileChecklistItemsResponseNestedFields>(
                    fetchFields?.root ?? listVisaProfileChecklistItemResponse,
                    fetchFields?.nestedFields ?? listVisaProfileChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listVisaProfileChecklistItems;
    }
})

export type VisaProfileChecklistItemService = ReturnType<typeof createVisaProfileChecklistItemService>
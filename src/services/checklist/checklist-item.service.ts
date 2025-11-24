import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { checklistItemSchema } from "./schemas/checklist-item.schema";
import { CreateChecklistItemRequest, createChecklistItemResponse, CreateChecklistItemResponse, createChecklistItemResponseNestedFields, CreateChecklistItemResponseNestedFields, DeleteChecklistItemRequest, deleteChecklistItemResponse, DeleteChecklistItemResponse, GetChecklistItemRequest, getChecklistItemResponse, GetChecklistItemResponse, getChecklistItemResponseNestedFields, GetChecklistItemResponseNestedFields, listChecklistItemResponse, listChecklistItemResponseNestedFields, ListChecklistItemsRequest, ListChecklistItemsResponse, ListChecklistItemsResponseNestedFields, UpdateChecklistItemRequest, updateChecklistItemResponse, UpdateChecklistItemResponse, updateChecklistItemResponseNestedFields, UpdateChecklistItemResponseNestedFields } from "./types/checklist-item.type";

export const createChecklistItemService = (client: GraphQLClient) => ({
    async deleteChecklistItem(
        input: DeleteChecklistItemRequest,
        fetchFields?: {
            root?: (keyof DeleteChecklistItemResponse)[],
        },
        option?: RequestOption
    ):Promise<DeleteChecklistItemResponse|undefined> {
        const res = await client.request<{ deleteChecklistItem: DeleteChecklistItemResponse }>(
            checklistItemSchema.deleteChecklistItem(
                gqlQueryStringBuilder<DeleteChecklistItemResponse>(
                    fetchFields?.root ?? deleteChecklistItemResponse
                )
            ),
            input,
            option
        );
        return res.data?.deleteChecklistItem;
    },
    // update 
    async updateChecklistItem(
        input: UpdateChecklistItemRequest,
        fetchFields?: {
            root?: (keyof UpdateChecklistItemResponse)[],
            nestedFields?: UpdateChecklistItemResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateChecklistItemResponse|undefined> {
        const res = await client.request<{ updateChecklistItem: UpdateChecklistItemResponse }>(
            checklistItemSchema.updateChecklistItem(
                gqlQueryStringBuilder<UpdateChecklistItemResponse, GetChecklistItemResponseNestedFields>(
                    fetchFields?.root ?? updateChecklistItemResponse,
                    fetchFields?.nestedFields ?? updateChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.updateChecklistItem;
    },
    async createChecklistItem(
        input: CreateChecklistItemRequest,
        fetchFields?: {
            root?: (keyof CreateChecklistItemResponse)[],
            nestedFields?: CreateChecklistItemResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateChecklistItemResponse|undefined> {
        const res = await client.request<{ createChecklistItem: CreateChecklistItemResponse }>(
            checklistItemSchema.createChecklistItem(
                gqlQueryStringBuilder<CreateChecklistItemResponse, CreateChecklistItemResponseNestedFields>(
                    fetchFields?.root ?? createChecklistItemResponse,
                    fetchFields?.nestedFields ?? createChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.createChecklistItem;
    },
    async getChecklistItem(
        input: GetChecklistItemRequest,
        fetchFields?: {
            root?: (keyof GetChecklistItemResponse)[],
            nestedFields?: GetChecklistItemResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetChecklistItemResponse|undefined> {
        const res = await client.request<{ getChecklistItem: GetChecklistItemResponse }>(
            checklistItemSchema.getChecklistItem(
                gqlQueryStringBuilder<GetChecklistItemResponse, GetChecklistItemResponseNestedFields>(
                    fetchFields?.root ?? getChecklistItemResponse,
                    fetchFields?.nestedFields ?? getChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getChecklistItem;
    },
    async listChecklistItems(
        input: ListChecklistItemsRequest,
        fetchFields?: {
            root?: (keyof ListChecklistItemsResponse)[],
            nestedFields?: ListChecklistItemsResponseNestedFields
        },
        option?: RequestOption
    ):Promise<ListChecklistItemsResponse|undefined> {
        const res = await client.request<{ listChecklistItems: ListChecklistItemsResponse }>(
            checklistItemSchema.listChecklistItems(
                gqlQueryStringBuilder<ListChecklistItemsResponse, ListChecklistItemsResponseNestedFields>(
                    fetchFields?.root ?? listChecklistItemResponse,
                    fetchFields?.nestedFields ?? listChecklistItemResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listChecklistItems;
    }
})

export type ChecklistItemService = ReturnType<typeof createChecklistItemService>
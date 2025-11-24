import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { visaApplicationSchema } from "./schemas/visa-application.schema";
import { 
    CreateVisaApplicationRequest, CreateVisaApplicationResponse, 
    createVisaApplicationResponseFields, 
    createVisaApplicationResponseNestedFields, 
    CreateVisaApplicationResponseNestedFields, 
    DeleteVisaApplicationRequest, 
    DeleteVisaApplicationResponse, deleteVisaApplicationResponseFields, GetVisaApplicationRequest, 
    GetVisaApplicationResponse, getVisaApplicationResponseFields, getVisaApplicationResponseNestedFields, 
    GetVisaApplicationResponseNestedFields, 
    ListVisaApplicationsRequest, ListVisaApplicationsResponse, 
    listVisaApplicationsResponseFields, 
    listVisaApplicationsResponseNestedFields, 
    ListVisaApplicationsResponseNestedFields, UpdateVisaApplicationRequest, 
    UpdateVisaApplicationResponse,
    updateVisaApplicationResponseFields,
    updateVisaApplicationResponseNestedFields,
    UpdateVisaApplicationResponseNestedFields
} from "./types/visa-application.type";

export const createVisaApplicationService = (client: GraphQLClient) => ({
    async deleteVisaApplication(
        input: DeleteVisaApplicationRequest,
        fetchFields?: {
            root?: (keyof DeleteVisaApplicationResponse)[],
        },
        option?: RequestOption
    ):Promise<DeleteVisaApplicationResponse|undefined> {
        const res = await client.request<{ deleteVisaApplication: DeleteVisaApplicationResponse }>(
            visaApplicationSchema.deleteVisaApplication(
                gqlQueryStringBuilder<DeleteVisaApplicationResponse>(
                    fetchFields?.root ?? deleteVisaApplicationResponseFields
                )
            ),
            input,
            option
        );
        return res.data?.deleteVisaApplication;
    },
    // update 
    async updateVisaApplication(
        input: UpdateVisaApplicationRequest,
        fetchFields?: {
            root?: (keyof UpdateVisaApplicationResponse)[],
            nestedFields?: UpdateVisaApplicationResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateVisaApplicationResponse|undefined> {
        const res = await client.request<{ updateVisaApplication: UpdateVisaApplicationResponse }>(
            visaApplicationSchema.updateVisaApplication(
                gqlQueryStringBuilder<UpdateVisaApplicationResponse, GetVisaApplicationResponseNestedFields>(
                    fetchFields?.root ?? updateVisaApplicationResponseFields,
                    fetchFields?.nestedFields ?? updateVisaApplicationResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.updateVisaApplication;
    },
    async createVisaApplication(
        input: CreateVisaApplicationRequest,
        fetchFields?: {
            root?: (keyof CreateVisaApplicationResponse)[],
            nestedFields?: CreateVisaApplicationResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateVisaApplicationResponse|undefined> {
        const res = await client.request<{ createVisaApplication: CreateVisaApplicationResponse }>(
            visaApplicationSchema.createVisaApplication(
                gqlQueryStringBuilder<CreateVisaApplicationResponse, CreateVisaApplicationResponseNestedFields>(
                    fetchFields?.root ?? createVisaApplicationResponseFields,
                    fetchFields?.nestedFields ?? createVisaApplicationResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.createVisaApplication;
    },
    async getVisaApplication(
        input: GetVisaApplicationRequest,
        fetchFields?: {
            root?: (keyof GetVisaApplicationResponse)[],
            nestedFields?: GetVisaApplicationResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetVisaApplicationResponse|undefined> {
        const res = await client.request<{ getVisaApplication: GetVisaApplicationResponse }>(
            visaApplicationSchema.getVisaApplication(
                gqlQueryStringBuilder<GetVisaApplicationResponse, GetVisaApplicationResponseNestedFields>(
                    fetchFields?.root ?? getVisaApplicationResponseFields,
                    fetchFields?.nestedFields ?? getVisaApplicationResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getVisaApplication;
    },
    async listVisaApplications(
        input: ListVisaApplicationsRequest,
        fetchFields?: {
            root?: (keyof ListVisaApplicationsResponse)[],
            nestedFields?: ListVisaApplicationsResponseNestedFields
        },
        option?: RequestOption
    ):Promise<ListVisaApplicationsResponse|undefined> {
        const res = await client.request<{ listVisaApplications: ListVisaApplicationsResponse }>(
            visaApplicationSchema.listVisaApplications(
                gqlQueryStringBuilder<ListVisaApplicationsResponse, ListVisaApplicationsResponseNestedFields>(
                    fetchFields?.root ?? listVisaApplicationsResponseFields,
                    fetchFields?.nestedFields ?? listVisaApplicationsResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listVisaApplications;
    }
})

export type VisaApplicationService = ReturnType<typeof createVisaApplicationService>
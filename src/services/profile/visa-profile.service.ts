import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { visaProfileSchema } from "./schemas/visa-profile.schema";
import { 
    CreateVisaProfileRequest, CreateVisaProfileResponse, 
    createVisaProfileResponse, createVisaProfileResponseNestedFields, 
    CreateVisaProfileResponseNestedFields, 
    DeleteVisaProfileRequest, deleteVisaProfileResponse, 
    DeleteVisaProfileResponse, GenerateSOPRequest, GenerateSOPResponse, generateSOPResponse, generateSOPResponseNestedFields, GenerateSOPResponseNestedFields, GetGeneratedSOPRequest, getGeneratedSOPResponse, GetGeneratedSOPResponse, getGeneratedSOPResponseNestedFields, GetGeneratedSOPResponseNestedFields, GetVisaProfileRequest, 
    GetVisaProfileResponse, getVisaProfileResponse, getVisaProfileResponseNestedFields, 
    GetVisaProfileResponseNestedFields, 
    ListVisaProfilesRequest, ListVisaProfilesResponse, 
    listVisaProfilesResponse, 
    listVisaProfilesResponseNestedFields, 
    ListVisaProfilesResponseNestedFields, UpdateVisaProfileRequest, 
    UpdateVisaProfileResponse,
    updateVisaProfileResponseFields,
    updateVisaProfileResponseNestedFields,
    UpdateVisaProfileResponseNestedFields
} from "./types/visa-profile.type";


export const createVisaProfileService = (client: GraphQLClient) => ({
    // sop 
    async getGeneratedSOP(
        input: GetGeneratedSOPRequest,
        fetchFields?: {
            root?: (keyof GetGeneratedSOPResponse)[],
            nestedFields?: GetGeneratedSOPResponseNestedFields,
        },
        option?: RequestOption
    ):Promise<GetGeneratedSOPResponse|undefined> {
        const res = await client.request<{ getGeneratedSOP: GetGeneratedSOPResponse }>(
            visaProfileSchema.getGeneratedSOP(
                gqlQueryStringBuilder<GetGeneratedSOPResponse, GetGeneratedSOPResponseNestedFields>(
                    fetchFields?.root ?? getGeneratedSOPResponse,
                    fetchFields?.nestedFields ?? getGeneratedSOPResponseNestedFields
                )
            ),
            input,
            option
        );
        return res.data?.getGeneratedSOP;
    },
    async generateSOP(
        input: GenerateSOPRequest,
        fetchFields?: {
            root?: (keyof GenerateSOPResponse)[],
            nestedFields?: GenerateSOPResponseNestedFields,
        },
        option?: RequestOption
    ):Promise<GenerateSOPResponse|undefined> {
        const res = await client.request<{ generateSOP: GenerateSOPResponse }>(
            visaProfileSchema.generateSOP(
                gqlQueryStringBuilder<GenerateSOPResponse, GenerateSOPResponseNestedFields>(
                    fetchFields?.root ?? generateSOPResponse,
                    fetchFields?.nestedFields ?? generateSOPResponseNestedFields
                )
            ),
            input,
            option
        );
        return res.data?.generateSOP;
    },

    // visa profile
    
    async deleteVisaProfile(
        input: DeleteVisaProfileRequest,
        fetchFields?: {
            root?: (keyof DeleteVisaProfileResponse)[],
        },
        option?: RequestOption
    ):Promise<DeleteVisaProfileResponse|undefined> {
        const res = await client.request<{ deleteVisaProfile: DeleteVisaProfileResponse }>(
            visaProfileSchema.deleteVisaProfile(
                gqlQueryStringBuilder<DeleteVisaProfileResponse>(
                    fetchFields?.root ?? deleteVisaProfileResponse
                )
            ),
            input,
            option
        );
        return res.data?.deleteVisaProfile;
    },
    // update 
    async updateVisaProfile(
        input: UpdateVisaProfileRequest,
        fetchFields?: {
            root?: (keyof UpdateVisaProfileResponse)[],
            nestedFields?: UpdateVisaProfileResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateVisaProfileResponse|undefined> {
        const res = await client.request<{ updateVisaProfile: UpdateVisaProfileResponse }>(
            visaProfileSchema.updateVisaProfile(
                gqlQueryStringBuilder<UpdateVisaProfileResponse, UpdateVisaProfileResponseNestedFields>(
                    fetchFields?.root ?? updateVisaProfileResponseFields,
                    fetchFields?.nestedFields ?? updateVisaProfileResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.updateVisaProfile;
    },
    async createVisaProfile(
        input: CreateVisaProfileRequest,
        fetchFields?: {
            root?: (keyof CreateVisaProfileResponse)[],
            nestedFields?: CreateVisaProfileResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateVisaProfileResponse|undefined> {
        const res = await client.request<{ createVisaProfile: CreateVisaProfileResponse }>(
            visaProfileSchema.createVisaProfile(
                gqlQueryStringBuilder<CreateVisaProfileResponse, CreateVisaProfileResponseNestedFields>(
                    fetchFields?.root ?? createVisaProfileResponse,
                    fetchFields?.nestedFields ?? createVisaProfileResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.createVisaProfile;
    },
    async getVisaProfile(
        input: GetVisaProfileRequest,
        fetchFields?: {
            root?: (keyof GetVisaProfileResponse)[],
            nestedFields?: GetVisaProfileResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetVisaProfileResponse|undefined> {
        const res = await client.request<{ getVisaProfile: GetVisaProfileResponse }>(
            visaProfileSchema.getVisaProfile(
                gqlQueryStringBuilder<GetVisaProfileResponse, GetVisaProfileResponseNestedFields>(
                    fetchFields?.root ?? getVisaProfileResponse,
                    fetchFields?.nestedFields ?? getVisaProfileResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getVisaProfile;
    },
    async listVisaProfiles(
        input: ListVisaProfilesRequest,
        fetchFields?: {
            root?: (keyof ListVisaProfilesResponse)[],
            nestedFields?: ListVisaProfilesResponseNestedFields
        },
        option?: RequestOption
    ):Promise<ListVisaProfilesResponse|undefined> {
        const res = await client.request<{ listVisaProfiles: ListVisaProfilesResponse }>(
            visaProfileSchema.listVisaProfiles(
                gqlQueryStringBuilder<ListVisaProfilesResponse, ListVisaProfilesResponseNestedFields>(
                    fetchFields?.root ?? listVisaProfilesResponse,
                    fetchFields?.nestedFields ?? listVisaProfilesResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listVisaProfiles;
    }
})

export type VisaProfileService = ReturnType<typeof createVisaProfileService>
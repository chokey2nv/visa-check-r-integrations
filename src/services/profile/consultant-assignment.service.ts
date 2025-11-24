import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { consultantAssignmentSchema } from "./schemas/consultant-assignment.schema";
import { 
    CreateConsultantAssignmentRequest, CreateConsultantAssignmentResponse, 
    createConsultantAssignmentResponseFields, createConsultantAssignmentResponseNestedFields, 
    CreateConsultantAssignmentResponseNestedFields, 
    DeleteConsultantAssignmentRequest, deleteConsultantAssignmentResponseFields, 
    DeleteConsultantAssignmentResponse, GetConsultantAssignmentRequest, 
    GetConsultantAssignmentResponse, getConsultantAssignmentResponseFields, getConsultantAssignmentResponseNestedFields, 
    GetConsultantAssignmentResponseNestedFields, 
    ListConsultantAssignmentsRequest, ListConsultantAssignmentsResponse, 
    listConsultantAssignmentsResponseFields, 
    listConsultantAssignmentsResponseNestedFields, 
    ListConsultantAssignmentsResponseNestedFields, UpdateConsultantAssignmentRequest, 
    UpdateConsultantAssignmentResponse,
    updateConsultantAssignmentResponseFields,
    UpdateConsultantAssignmentResponseNestedFields,
    updateConsultantAssignmentResponseNestedFields
} from "./types/consultant-assignment.type";

export const createConsultantAssignmentService = (client: GraphQLClient) => ({
    async deleteConsultantAssignment(
        input: DeleteConsultantAssignmentRequest,
        fetchFields?: {
            root?: (keyof DeleteConsultantAssignmentResponse)[],
        },
        option?: RequestOption
    ):Promise<DeleteConsultantAssignmentResponse|undefined> {
        const res = await client.request<{ deleteConsultantAssignment: DeleteConsultantAssignmentResponse }>(
            consultantAssignmentSchema.deleteConsultantAssignment(
                gqlQueryStringBuilder<DeleteConsultantAssignmentResponse>(
                    fetchFields?.root ?? deleteConsultantAssignmentResponseFields
                )
            ),
            input,
            option
        );
        return res.data?.deleteConsultantAssignment;
    },
    // update 
    async updateConsultantAssignment(
        input: UpdateConsultantAssignmentRequest,
        fetchFields?: {
            root?: (keyof UpdateConsultantAssignmentResponse)[],
            nestedFields?: UpdateConsultantAssignmentResponseNestedFields
        },
        option?: RequestOption
    ): Promise<UpdateConsultantAssignmentResponse|undefined> {
        const res = await client.request<{ updateConsultantAssignment: UpdateConsultantAssignmentResponse }>(
            consultantAssignmentSchema.updateConsultantAssignment(
                gqlQueryStringBuilder<UpdateConsultantAssignmentResponse, GetConsultantAssignmentResponseNestedFields>(
                    fetchFields?.root ?? updateConsultantAssignmentResponseFields,
                    fetchFields?.nestedFields ?? updateConsultantAssignmentResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.updateConsultantAssignment;
    },
    async createConsultantAssignment(
        input: CreateConsultantAssignmentRequest,
        fetchFields?: {
            root?: (keyof CreateConsultantAssignmentResponse)[],
            nestedFields?: CreateConsultantAssignmentResponseNestedFields
        },
        option?: RequestOption
    ): Promise<CreateConsultantAssignmentResponse|undefined> {
        const res = await client.request<{ createConsultantAssignment: CreateConsultantAssignmentResponse }>(
            consultantAssignmentSchema.createConsultantAssignment(
                gqlQueryStringBuilder<CreateConsultantAssignmentResponse, CreateConsultantAssignmentResponseNestedFields>(
                    fetchFields?.root ?? createConsultantAssignmentResponseFields,
                    fetchFields?.nestedFields ?? createConsultantAssignmentResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.createConsultantAssignment;
    },
    async getConsultantAssignment(
        input: GetConsultantAssignmentRequest,
        fetchFields?: {
            root?: (keyof GetConsultantAssignmentResponse)[],
            nestedFields?: GetConsultantAssignmentResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetConsultantAssignmentResponse|undefined> {
        const res = await client.request<{ getConsultantAssignment: GetConsultantAssignmentResponse }>(
            consultantAssignmentSchema.getConsultantAssignment(
                gqlQueryStringBuilder<GetConsultantAssignmentResponse, GetConsultantAssignmentResponseNestedFields>(
                    fetchFields?.root ?? getConsultantAssignmentResponseFields,
                    fetchFields?.nestedFields ?? getConsultantAssignmentResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getConsultantAssignment;
    },
    async listConsultantAssignments(
        input: ListConsultantAssignmentsRequest,
        fetchFields?: {
            root?: (keyof ListConsultantAssignmentsResponse)[],
            nestedFields?: ListConsultantAssignmentsResponseNestedFields
        },
        option?: RequestOption
    ):Promise<ListConsultantAssignmentsResponse|undefined> {
        const res = await client.request<{ listConsultantAssignments: ListConsultantAssignmentsResponse }>(
            consultantAssignmentSchema.listConsultantAssignments(
                gqlQueryStringBuilder<ListConsultantAssignmentsResponse, ListConsultantAssignmentsResponseNestedFields>(
                    fetchFields?.root ?? listConsultantAssignmentsResponseFields,
                    fetchFields?.nestedFields ?? listConsultantAssignmentsResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listConsultantAssignments;
    }
})

export type ConsultantAssignmentService = ReturnType<typeof createConsultantAssignmentService>
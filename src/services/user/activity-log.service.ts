import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { GraphQLResponse } from "../../types";
import { activityLogSchema } from "./schemas/activity-log";
import { GetActivityLogRequest, GetActivityLogResponse, getActivityLogResponseFields, getActivityLogResponseNestedFields, GetActivityLogResponseNestedFields, ListActivityLogsRequest, ListActivityLogsResponse, listActivityLogsResponseFields, listActivityLogsResponseNestedFields, ListActivityLogsResponseNestedFields } from "./types/activity-log.type";

export const createActivityLogService = (client: GraphQLClient) => ({
    async getActivityLog(
        input: GetActivityLogRequest,
        fetchFields?: {
            root?: (keyof GetActivityLogResponse)[],
            nestedFields?: GetActivityLogResponseNestedFields
        },
        option?: RequestOption
    ): Promise<GetActivityLogResponse|undefined> {
        const res = await client.request<{ getActivityLog: GetActivityLogResponse }>(
            activityLogSchema.getActivityLog(
                gqlQueryStringBuilder<GetActivityLogResponse, GetActivityLogResponseNestedFields>(
                    fetchFields?.root ?? getActivityLogResponseFields,
                    fetchFields?.nestedFields ?? getActivityLogResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.getActivityLog
    },
    async listActivityLogs(
        input: ListActivityLogsRequest,
        fetchFields?: {
            root?: (keyof ListActivityLogsResponse)[],
            nestedFields?: ListActivityLogsResponseNestedFields
        },
        option?: RequestOption
    ): Promise<ListActivityLogsResponse|undefined> {
        const res = await client.request<{ listActivityLogs: ListActivityLogsResponse }>(
            activityLogSchema.listActivityLogs(
                gqlQueryStringBuilder<ListActivityLogsResponse, ListActivityLogsResponseNestedFields>(
                    fetchFields?.root ?? listActivityLogsResponseFields,
                    fetchFields?.nestedFields ?? listActivityLogsResponseNestedFields
                )
            ), 
            input,
            option
        );
        return res.data?.listActivityLogs
    },
});
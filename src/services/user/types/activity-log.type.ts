import { UserActivityLog } from "../../../types";
import { ActivityLogFields, activityLogQuery } from "../user.entity";

export interface GetActivityLogRequest {
    activityLog: Partial<UserActivityLog>
}
export interface GetActivityLogResponse {
    activityLog: UserActivityLog;
}
export const getActivityLogResponseFields: (keyof GetActivityLogResponse)[] = ["activityLog"];
export interface GetActivityLogResponseNestedFields {
    activityLog: ActivityLogFields;
}
export const getActivityLogResponseNestedFields:GetActivityLogResponseNestedFields = {
    activityLog: activityLogQuery
}

// list activity logs
export interface ListActivityLogsRequest {
    limit: number;
    skip: number;
    search?: string;
    activityLogIds?: string[];
    activityLog?: Partial<UserActivityLog>;
}
export interface ListActivityLogsResponse {
    activityLogs: UserActivityLog[];
}
export const listActivityLogsResponseFields: (keyof ListActivityLogsResponse)[] = ["activityLogs"];
export interface ListActivityLogsResponseNestedFields {
    activityLogs: ActivityLogFields;
}
export const listActivityLogsResponseNestedFields: ListActivityLogsResponseNestedFields = {
    activityLogs: activityLogQuery
}
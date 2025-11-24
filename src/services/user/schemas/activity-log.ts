export const activityLogSchema = {
    createActivityLog: (query: string) => `
        mutation createActivityLog($activityLog: ActivityLogInput!) {
            createActivityLog(activityLog: $activityLog) {
                ${query}
            }
        }
    `,
    getActivityLog: (query: string) => `
        query getActivityLog($activityLog: ActivityLogInput!) {
            getActivityLog(activityLog: $activityLog) {
                ${query}
            }
        }
    `,
    listActivityLogs: (query: string) => `
        query listActivityLogs($limit: Int!, $skip: Int!, $search: String, $activityLogIds: [String], $activityLog: ActivityLogInput) {
            listActivityLogs(limit: $limit, skip: $skip, search: $search, activityLogIds: $activityLogIds, activityLog: $activityLog) {
                ${query}
            }
        }
    `,
}
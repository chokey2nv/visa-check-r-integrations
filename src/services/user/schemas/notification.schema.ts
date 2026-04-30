import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";

export const notificationSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getNotification",
        variables: "($notification: NotificationInput!)",
        field: "(notification: $notification)",
    },
    list: {
        operation: "query",
        name: "listNotifications",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $notification: NotificationInput, $notificationIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, notification: $notification, notificationIds: $notificationIds)",
    },
    create: {
        operation: "mutation",
        name: "createNotification",
        variables: "($notification: NotificationInput!)",
        field: "(notification: $notification)",
    },
    update: {
        operation: "mutation",
        name: "updateNotification",
        variables: "($notificationId: String!, $notification: NotificationInput!)",
        field: "(notificationId: $notificationId, notification: $notification)",
    },
    delete: {
        operation: "mutation",
        name: "deleteNotification",
        variables: "($notificationId: String!)",
        field: "(notificationId: $notificationId)",
    },
}
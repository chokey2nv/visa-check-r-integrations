import { GraphQLClient } from "../../client";
import { buildSchema } from "../../helpers/schema-builder";
import { createOperationExecutor } from "../../helpers/service.factory";
import { notificationSchema } from "./schemas/notification.schema";
import { NotificationCRUD, notificationDeleteIntegration, notificationIntegration, notificationListIntegration } from "./types/notification.type";

export const createNotificationService = (client: GraphQLClient) => ({
    // get notification
    getNotification: createOperationExecutor<
        "getNotification",
        NotificationCRUD["GetRequest"],
        NotificationCRUD["GetResponse"],
        typeof notificationIntegration.get.nestedFields
    >(
        client,
        "getNotification",
        {
            schema: buildSchema(notificationSchema.get),
            defaultRootFields: notificationIntegration.get.responseFields,
            defaultNestedFields: notificationIntegration.get.nestedFields,
        }
    ),
    // list notifications
    listNotifications: createOperationExecutor<
        "listNotifications",
        NotificationCRUD["ListRequest"],
        NotificationCRUD["ListResponse"],
        typeof notificationListIntegration.nestedFields
    >(
        client,
        "listNotifications",
        {
            schema: buildSchema(notificationSchema.list),
            defaultRootFields: [...notificationListIntegration.responseFields],
            defaultNestedFields: notificationListIntegration.nestedFields,
        }
    ),
    // create notification
    createNotification: createOperationExecutor<
            "createNotification",
        NotificationCRUD["CreateRequest"],
        NotificationCRUD["CreateResponse"],
        typeof notificationIntegration.create.nestedFields
    >(
        client,
        "createNotification",
        {
            schema: buildSchema(notificationSchema.create),
            defaultRootFields: notificationIntegration.create.responseFields,
            defaultNestedFields: notificationIntegration.create.nestedFields,
        }
    ),
    // update notification
    updateNotification: createOperationExecutor<
            "updateNotification",
        NotificationCRUD["UpdateRequest"],
        NotificationCRUD["UpdateResponse"],
        typeof notificationIntegration.update.nestedFields
    >(
        client,
        "updateNotification",
        {
            schema: buildSchema(notificationSchema.update),
            defaultRootFields: notificationIntegration.update.responseFields,
            defaultNestedFields: notificationIntegration.update.nestedFields,
        }
    ),
    // delete notification
    deleteNotification: createOperationExecutor<
            "deleteNotification",
        NotificationCRUD["DeleteRequest"],
        NotificationCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteNotification",
        {
            schema: buildSchema(notificationSchema.delete),
            defaultRootFields: notificationDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
})
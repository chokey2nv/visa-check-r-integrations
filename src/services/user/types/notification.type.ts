import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { Notification } from "../../../types";
import { notificationQuery } from "../user.entity";

const ENTITY = "notification" as const;

export type NotificationCRUD =
  EntityCRUD<Notification, typeof ENTITY>;

export const notificationIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: notificationQuery,
  });


export const notificationListIntegration =
  createListIntegration({
    key: "notifications",
    fields: notificationQuery,
  });

export const notificationDeleteIntegration =
  createDeleteIntegration(ENTITY);

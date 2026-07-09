import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { AppConfig } from "../../../types";
import { appConfigQuery } from "../user.entity";

const ENTITY = "appConfig" as const;

export type AppConfigCRUD =
  EntityCRUD<AppConfig, typeof ENTITY>;

export const appConfigIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: appConfigQuery,
  });


export const appConfigListIntegration =
  createListIntegration({
    key: "appConfigs",
    fields: appConfigQuery,
  });

export const appConfigDeleteIntegration =
  createDeleteIntegration(ENTITY);

export interface ValidateAppConfigRequest {
  userId: string;
  code: string;
}
export type ValidateAppConfigResponse = AppConfigCRUD["GetResponse"];
import { AppConfigCRUD, appConfigDeleteIntegration, appConfigIntegration, appConfigListIntegration, ValidateAppConfigRequest, ValidateAppConfigResponse } from "./types/app-config.type";
import { GraphQLClient } from "../../client";
import { appConfigSchema } from "./schemas/app-config.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createAppConfigService = (client: GraphQLClient) =>  ({
    createAppConfig: createOperationExecutor<
        "createAppConfig",
        AppConfigCRUD["CreateRequest"],
        AppConfigCRUD["CreateResponse"],
        typeof appConfigIntegration.create.nestedFields
    >(
        client,
        "createAppConfig",
        {
            schema: buildSchema(appConfigSchema.create),
            defaultRootFields: appConfigIntegration.create.responseFields,
            defaultNestedFields: appConfigIntegration.create.nestedFields,
        }
    ),
    updateAppConfig: createOperationExecutor<
        "updateAppConfig",
        AppConfigCRUD["UpdateRequest"],
        AppConfigCRUD["UpdateResponse"],
        typeof appConfigIntegration.update.nestedFields
    >(
        client,
        "updateAppConfig",
        {
            schema: buildSchema(appConfigSchema.update),
            defaultRootFields: appConfigIntegration.update.responseFields,
            defaultNestedFields: appConfigIntegration.update.nestedFields,
        }
    ),
    getAppConfig: createOperationExecutor<
        "getAppConfig",
        AppConfigCRUD["GetRequest"],
        AppConfigCRUD["GetResponse"],
        typeof appConfigIntegration.get.nestedFields
    >(
        client,
        "getAppConfig",
        {
            schema: buildSchema(appConfigSchema.get),
            defaultRootFields: appConfigIntegration.get.responseFields,
            defaultNestedFields: appConfigIntegration.get.nestedFields,
        }
    ),
    deleteAppConfig: createOperationExecutor<
        "deleteAppConfig",
        AppConfigCRUD["DeleteRequest"],
        AppConfigCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteAppConfig",
        {
            schema: buildSchema(appConfigSchema.delete),
            defaultRootFields: appConfigDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    listAppConfigs: createOperationExecutor<
        "listAppConfigs",
        AppConfigCRUD["ListRequest"],
        AppConfigCRUD["ListResponse"],
        typeof appConfigListIntegration.nestedFields
    >(
        client,
        "listAppConfigs",
        {
            schema: buildSchema(appConfigSchema.list),
            defaultRootFields: [...appConfigListIntegration.responseFields],
            defaultNestedFields: appConfigListIntegration.nestedFields,
        }
    ),    
})

export type AppConfigService = ReturnType<typeof createAppConfigService>;
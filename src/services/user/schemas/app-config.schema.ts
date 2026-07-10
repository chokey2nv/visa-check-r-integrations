import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";

export const appConfigSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getAppConfig",
        variables: "($appConfig: AppConfigInput!)",
        field: "(appConfig: $appConfig)",
    },
    list: {
        operation: "query",
        name: "listAppConfigs",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $appConfig: AppConfigInput, $appConfigIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, appConfig: $appConfig, appConfigIds: $appConfigIds)",
    },
    create: {
        operation: "mutation",
        name: "createAppConfig",
        variables: "($appConfig: AppConfigInput!)",
        field: "(appConfig: $appConfig)",
    },
    update: {
        operation: "mutation",
        name: "updateAppConfig",
        variables: "($appConfigId: String!, $appConfig: AppConfigInput!)",
        field: "(appConfigId: $appConfigId, appConfig: $appConfig)",
    },
    delete: {
        operation: "mutation",
        name: "deleteAppConfig",
        variables: "($appConfigId: String!)",
        field: "(appConfigId: $appConfigId)",
    },
}
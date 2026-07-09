import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";

export const appConfigSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getAppConfig",
        variables: "($coupon: AppConfigInput!)",
        field: "(coupon: $coupon)",
    },
    list: {
        operation: "query",
        name: "listAppConfigs",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $coupon: AppConfigInput, $couponIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, coupon: $coupon, couponIds: $couponIds)",
    },
    create: {
        operation: "mutation",
        name: "createAppConfig",
        variables: "($coupon: AppConfigInput!)",
        field: "(coupon: $coupon)",
    },
    update: {
        operation: "mutation",
        name: "updateAppConfig",
        variables: "($couponId: String!, $coupon: AppConfigInput!)",
        field: "(couponId: $couponId, coupon: $coupon)",
    },
    delete: {
        operation: "mutation",
        name: "deleteAppConfig",
        variables: "($couponId: String!)",
        field: "(couponId: $couponId)",
    },
}
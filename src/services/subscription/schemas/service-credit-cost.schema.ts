import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const serviceCreditCostSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getServiceCreditCost",
        variables: "($serviceCreditCost: ServiceCreditCostInput!)",
        field: "(serviceCreditCost: $serviceCreditCost)",
    },
    list: {
        operation: "query",
        name: "listServiceCreditCosts",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $serviceCreditCost: ServiceCreditCostInput, $serviceCreditCostIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, serviceCreditCost: $serviceCreditCost, serviceCreditCostIds: $serviceCreditCostIds)",
    },
    create: {
        operation: "mutation",
        name: "createServiceCreditCost",
        variables: "($serviceCreditCost: ServiceCreditCostInput!)",
        field: "(serviceCreditCost: $serviceCreditCost)",
    },
    update: {
        operation: "mutation",
        name: "updateServiceCreditCost",
        variables: "($serviceCreditCostId: String!, $serviceCreditCost: ServiceCreditCostInput!)",
        field: "(serviceCreditCostId: $serviceCreditCostId, serviceCreditCost: $serviceCreditCost)",
    },
    delete: {
        operation: "mutation",
        name: "deleteServiceCreditCost",
        variables: "($serviceCreditCostId: String!)",
        field: "(serviceCreditCostId: $serviceCreditCostId)",
    },
}
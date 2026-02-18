import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const creditPlanSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getCreditPlan",
        variables: "($creditPlan: CreditPlanInput!)",
        field: "(creditPlan: $creditPlan)",
    },
    list: {
        operation: "query",
        name: "listCreditPlans",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $creditPlan: CreditPlanInput, $creditPlanIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, creditPlan: $creditPlan, creditPlanIds: $creditPlanIds)",
    },
    create: {
        operation: "mutation",
        name: "createCreditPlan",
        variables: "($creditPlan: CreditPlanInput!)",
        field: "(creditPlan: $creditPlan)",
    },
    update: {
        operation: "mutation",
        name: "updateCreditPlan",
        variables: "($creditPlanId: String!, $creditPlan: CreditPlanInput!)",
        field: "(creditPlanId: $creditPlanId, creditPlan: $creditPlan)",
    },
    delete: {
        operation: "mutation",
        name: "deleteCreditPlan",
        variables: "($creditPlanId: String!)",
        field: "(creditPlanId: $creditPlanId)",
    },
}
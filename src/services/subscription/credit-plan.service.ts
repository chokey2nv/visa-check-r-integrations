import { CreditPlanCRUD, creditPlanDeleteIntegration, creditPlanIntegration, creditPlanListIntegration } from "./types/credit-plan.type";
import { GraphQLClient } from "../../client";
import { creditPlanSchema } from "./schemas/credit-plan.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createCreditPlanService = (client: GraphQLClient) =>  ({
    createCreditPlan: createOperationExecutor<
        "createCreditPlan",
        CreditPlanCRUD["CreateRequest"],
        CreditPlanCRUD["CreateResponse"],
        typeof creditPlanIntegration.create.nestedFields
    >(
        client,
        "createCreditPlan",
        {
            schema: buildSchema(creditPlanSchema.create),
            defaultRootFields: creditPlanIntegration.create.responseFields,
            defaultNestedFields: creditPlanIntegration.create.nestedFields,
        }
    ),
    updateCreditPlan: createOperationExecutor<
        "updateCreditPlan",
        CreditPlanCRUD["UpdateRequest"],
        CreditPlanCRUD["UpdateResponse"],
        typeof creditPlanIntegration.update.nestedFields
    >(
        client,
        "updateCreditPlan",
        {
            schema: buildSchema(creditPlanSchema.update),
            defaultRootFields: creditPlanIntegration.update.responseFields,
            defaultNestedFields: creditPlanIntegration.update.nestedFields,
        }
    ),
    getCreditPlan: createOperationExecutor<
        "getCreditPlan",
        CreditPlanCRUD["GetRequest"],
        CreditPlanCRUD["GetResponse"],
        typeof creditPlanIntegration.get.nestedFields
    >(
        client,
        "getCreditPlan",
        {
            schema: buildSchema(creditPlanSchema.get),
            defaultRootFields: creditPlanIntegration.get.responseFields,
            defaultNestedFields: creditPlanIntegration.get.nestedFields,
        }
    ),
    deleteCreditPlan: createOperationExecutor<
        "deleteCreditPlan",
        CreditPlanCRUD["DeleteRequest"],
        CreditPlanCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteCreditPlan",
        {
            schema: buildSchema(creditPlanSchema.delete),
            defaultRootFields: creditPlanDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    listCreditPlans: createOperationExecutor<
        "listCreditPlans",
        CreditPlanCRUD["ListRequest"],
        CreditPlanCRUD["ListResponse"],
        typeof creditPlanListIntegration.nestedFields
    >(
        client,
        "listCreditPlans",
        {
            schema: buildSchema(creditPlanSchema.list),
            defaultRootFields: [...creditPlanListIntegration.responseFields],
            defaultNestedFields: creditPlanListIntegration.nestedFields,
        }
    ),
    
})

export type CreditPlanService = ReturnType<typeof createCreditPlanService>;
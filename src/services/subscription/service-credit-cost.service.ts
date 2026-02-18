import { ServiceCreditCostCRUD, serviceCreditCostDeleteIntegration, serviceCreditCostIntegration, serviceCreditCostListIntegration } from "./types/service-credit-cost.type";
import { GraphQLClient } from "../../client";
import { serviceCreditCostSchema } from "./schemas/service-credit-cost.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createServiceCreditCostService = (client: GraphQLClient) =>  ({
    createServiceCreditCost: createOperationExecutor<
        "createServiceCreditCost",
        ServiceCreditCostCRUD["CreateRequest"],
        ServiceCreditCostCRUD["CreateResponse"],
        typeof serviceCreditCostIntegration.create.nestedFields
    >(
        client,
        "createServiceCreditCost",
        {
            schema: buildSchema(serviceCreditCostSchema.create),
            defaultRootFields: serviceCreditCostIntegration.create.responseFields,
            defaultNestedFields: serviceCreditCostIntegration.create.nestedFields,
        }
    ),
    updateServiceCreditCost: createOperationExecutor<
        "updateServiceCreditCost",
        ServiceCreditCostCRUD["UpdateRequest"],
        ServiceCreditCostCRUD["UpdateResponse"],
        typeof serviceCreditCostIntegration.update.nestedFields
    >(
        client,
        "updateServiceCreditCost",
        {
            schema: buildSchema(serviceCreditCostSchema.update),
            defaultRootFields: serviceCreditCostIntegration.update.responseFields,
            defaultNestedFields: serviceCreditCostIntegration.update.nestedFields,
        }
    ),
    getServiceCreditCost: createOperationExecutor<
        "getServiceCreditCost",
        ServiceCreditCostCRUD["GetRequest"],
        ServiceCreditCostCRUD["GetResponse"],
        typeof serviceCreditCostIntegration.get.nestedFields
    >(
        client,
        "getServiceCreditCost",
        {
            schema: buildSchema(serviceCreditCostSchema.get),
            defaultRootFields: serviceCreditCostIntegration.get.responseFields,
            defaultNestedFields: serviceCreditCostIntegration.get.nestedFields,
        }
    ),
    deleteServiceCreditCost: createOperationExecutor<
        "deleteServiceCreditCost",
        ServiceCreditCostCRUD["DeleteRequest"],
        ServiceCreditCostCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteServiceCreditCost",
        {
            schema: buildSchema(serviceCreditCostSchema.delete),
            defaultRootFields: serviceCreditCostDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    listServiceCreditCosts: createOperationExecutor<
        "listServiceCreditCosts",
        ServiceCreditCostCRUD["ListRequest"],
        ServiceCreditCostCRUD["ListResponse"],
        typeof serviceCreditCostListIntegration.nestedFields
    >(
        client,
        "listServiceCreditCosts",
        {
            schema: buildSchema(serviceCreditCostSchema.list),
            defaultRootFields: [...serviceCreditCostListIntegration.responseFields],
            defaultNestedFields: serviceCreditCostListIntegration.nestedFields,
        }
    ),
    
})

export type ServiceCreditCostService = ReturnType<typeof createServiceCreditCostService>;
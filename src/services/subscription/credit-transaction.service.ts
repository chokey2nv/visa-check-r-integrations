import { CreditTransactionCRUD, creditTransactionDeleteIntegration, creditTransactionIntegration, creditTransactionListIntegration } from "./types/credit-transaction.type";
import { GraphQLClient } from "../../client";
import { creditTransactionSchema } from "./schemas/credit-transaction.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createCreditTransactionService = (client: GraphQLClient) =>  ({
    createCreditTransaction: createOperationExecutor<
        "createCreditTransaction",
        CreditTransactionCRUD["CreateRequest"],
        CreditTransactionCRUD["CreateResponse"],
        typeof creditTransactionIntegration.create.nestedFields
    >(
        client,
        "createCreditTransaction",
        {
            schema: buildSchema(creditTransactionSchema.create),
            defaultRootFields: creditTransactionIntegration.create.responseFields,
            defaultNestedFields: creditTransactionIntegration.create.nestedFields,
        }
    ),
    updateCreditTransaction: createOperationExecutor<
        "updateCreditTransaction",
        CreditTransactionCRUD["UpdateRequest"],
        CreditTransactionCRUD["UpdateResponse"],
        typeof creditTransactionIntegration.update.nestedFields
    >(
        client,
        "updateCreditTransaction",
        {
            schema: buildSchema(creditTransactionSchema.update),
            defaultRootFields: creditTransactionIntegration.update.responseFields,
            defaultNestedFields: creditTransactionIntegration.update.nestedFields,
        }
    ),
    getCreditTransaction: createOperationExecutor<
        "getCreditTransaction",
        CreditTransactionCRUD["GetRequest"],
        CreditTransactionCRUD["GetResponse"],
        typeof creditTransactionIntegration.get.nestedFields
    >(
        client,
        "getCreditTransaction",
        {
            schema: buildSchema(creditTransactionSchema.get),
            defaultRootFields: creditTransactionIntegration.get.responseFields,
            defaultNestedFields: creditTransactionIntegration.get.nestedFields,
        }
    ),
    deleteCreditTransaction: createOperationExecutor<
        "deleteCreditTransaction",
        CreditTransactionCRUD["DeleteRequest"],
        CreditTransactionCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteCreditTransaction",
        {
            schema: buildSchema(creditTransactionSchema.delete),
            defaultRootFields: creditTransactionDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    listCreditTransactions: createOperationExecutor<
        "listCreditTransactions",
        CreditTransactionCRUD["ListRequest"],
        CreditTransactionCRUD["ListResponse"],
        typeof creditTransactionListIntegration.nestedFields
    >(
        client,
        "listCreditTransactions",
        {
            schema: buildSchema(creditTransactionSchema.list),
            defaultRootFields: [...creditTransactionListIntegration.responseFields],
            defaultNestedFields: creditTransactionListIntegration.nestedFields,
        }
    ),
    
})

export type CreditTransactionService = ReturnType<typeof createCreditTransactionService>;
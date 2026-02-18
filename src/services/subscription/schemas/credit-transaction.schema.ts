import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const creditTransactionSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getCreditTransaction",
        variables: "($creditTransaction: CreditTransactionInput!)",
        field: "(creditTransaction: $creditTransaction)",
    },
    list: {
        operation: "query",
        name: "listCreditTransactions",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $creditTransaction: CreditTransactionInput, $creditTransactionIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, creditTransaction: $creditTransaction, creditTransactionIds: $creditTransactionIds)",
    },
    create: {
        operation: "mutation",
        name: "createCreditTransaction",
        variables: "($creditTransaction: CreditTransactionInput!)",
        field: "(creditTransaction: $creditTransaction)",
    },
    update: {
        operation: "mutation",
        name: "updateCreditTransaction",
        variables: "($creditTransactionId: String!, $creditTransaction: CreditTransactionInput!)",
        field: "(creditTransactionId: $creditTransactionId, creditTransaction: $creditTransaction)",
    },
    delete: {
        operation: "mutation",
        name: "deleteCreditTransaction",
        variables: "($creditTransactionId: String!)",
        field: "(creditTransactionId: $creditTransactionId)",
    },
}
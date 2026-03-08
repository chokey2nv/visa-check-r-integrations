import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";

export const userCreditSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getUserCredit",
        variables: "($userCredit: UserCreditInput!)",
        field: "(userCredit: $userCredit)",
    },
    list: {
        operation: "query",
        name: "listUserCredits",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $userCredit: UserCreditInput, $userCreditIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, userCredit: $userCredit, userCreditIds: $userCreditIds)",
    },
    create: {
        operation: "mutation",
        name: "createUserCredit",
        variables: "($userCredit: UserCreditInput!)",
        field: "(userCredit: $userCredit)",
    },
    update: {
        operation: "mutation",
        name: "updateUserCredit",
        variables: "($userCreditId: String!, $userCredit: UserCreditInput!)",
        field: "(userCreditId: $userCreditId, userCredit: $userCredit)",
    },
    delete: {
        operation: "mutation",
        name: "deleteUserCredit",
        variables: "($userCreditId: String!)",
        field: "(userCreditId: $userCreditId)",
    },
}
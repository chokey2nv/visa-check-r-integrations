import { GraphQLClient } from "../../client";
import { buildSchema } from "../../helpers/schema-builder";
import { createOperationExecutor } from "../../helpers/service.factory";
import { userCreditSchema } from "./schemas/user-credit.schema";
import { UserCreditCRUD, userCreditIntegration } from "./types/user-credit.type";

export const createUserCreditService = (client: GraphQLClient) => ({
    getUserCredit: createOperationExecutor<
            "getUserCredit",
        UserCreditCRUD["GetRequest"],
        UserCreditCRUD["GetResponse"],
        typeof userCreditIntegration.get.nestedFields
    >(
        client,
        "getUserCredit",
        {
            schema: buildSchema(userCreditSchema.get),
            defaultRootFields: userCreditIntegration.get.responseFields,
            defaultNestedFields: userCreditIntegration.get.nestedFields,
        }
    ),
})

export type UserCreditService = ReturnType<typeof createUserCreditService>
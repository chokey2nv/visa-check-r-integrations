import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { CreditTransaction } from "../../../types";
import { getUserResponseNestedFields } from "../../user";
import { creditTransactionQuery } from "../subscription.entity";

const ENTITY = "creditTransaction" as const;

export type CreditTransactionCRUD =
  EntityCRUD<CreditTransaction, typeof ENTITY>;

export const creditTransactionIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: creditTransactionQuery,
    nested: {
      ...getUserResponseNestedFields
    }
  });


export const creditTransactionListIntegration =
  createListIntegration({
    key: "creditTransactions",
    fields: creditTransactionQuery,
    nested: {
      ...getUserResponseNestedFields
    }
  });

export const creditTransactionDeleteIntegration =
  createDeleteIntegration(ENTITY);

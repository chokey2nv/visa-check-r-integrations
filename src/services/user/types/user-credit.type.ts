import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { UserCredit } from "../../../types";
import { userCreditQuery } from "../user.entity";

const ENTITY = "userCredit" as const;

export type UserCreditCRUD =
  EntityCRUD<UserCredit, typeof ENTITY>;

export const userCreditIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: userCreditQuery,
  });


export const userCreditListIntegration =
  createListIntegration({
    key: "userCredits",
    fields: userCreditQuery,
  });

export const userCreditDeleteIntegration =
  createDeleteIntegration(ENTITY);

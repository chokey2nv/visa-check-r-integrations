import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { CreditPlan } from "../../../types";
import { creditPlanQuery } from "../subscription.entity";

const ENTITY = "creditPlan" as const;

export type CreditPlanCRUD =
  EntityCRUD<CreditPlan, typeof ENTITY>;

export const creditPlanIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: creditPlanQuery,
  });


export const creditPlanListIntegration =
  createListIntegration({
    key: "creditPlans",
    fields: creditPlanQuery,
  });

export const creditPlanDeleteIntegration =
  createDeleteIntegration(ENTITY);

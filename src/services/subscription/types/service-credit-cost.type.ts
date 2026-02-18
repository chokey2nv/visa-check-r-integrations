import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { ServiceCreditCost } from "../../../types";
import { serviceCreditCostQuery } from "../subscription.entity";

const ENTITY = "serviceCreditCost" as const;

export type ServiceCreditCostCRUD =
  EntityCRUD<ServiceCreditCost, typeof ENTITY>;

export const serviceCreditCostIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: serviceCreditCostQuery,
  });


export const serviceCreditCostListIntegration =
  createListIntegration({
    key: "serviceCreditCosts",
    fields: serviceCreditCostQuery,
  });

export const serviceCreditCostDeleteIntegration =
  createDeleteIntegration(ENTITY);

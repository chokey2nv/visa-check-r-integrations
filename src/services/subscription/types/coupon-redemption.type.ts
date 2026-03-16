import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { CouponRedemption } from "../../../types";
import { couponRedemptionQuery } from "../subscription.entity";

const ENTITY = "couponRedemption" as const;

export type CouponRedemptionCRUD =
  EntityCRUD<CouponRedemption, typeof ENTITY>;

export const couponRedemptionIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: couponRedemptionQuery,
  });


export const couponRedemptionListIntegration =
  createListIntegration({
    key: "couponRedemptions",
    fields: couponRedemptionQuery,
  });

export const couponRedemptionDeleteIntegration =
  createDeleteIntegration(ENTITY);

export interface ValidateCouponRedemptionRequest {
  userId: string;
  code: string;
}
export type ValidateCouponRedemptionResponse = CouponRedemptionCRUD["GetResponse"];
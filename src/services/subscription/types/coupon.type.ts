import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { Coupon } from "../../../types";
import { couponQuery } from "../subscription.entity";

const ENTITY = "coupon" as const;

export type CouponCRUD =
  EntityCRUD<Coupon, typeof ENTITY>;

export const couponIntegration =
  createStandardEntityIntegration({
    key: ENTITY,
    fields: couponQuery,
  });


export const couponListIntegration =
  createListIntegration({
    key: "coupons",
    fields: couponQuery,
  });

export const couponDeleteIntegration =
  createDeleteIntegration(ENTITY);

export interface ValidateCouponRequest {
  userId: string;
  code: string;
}
export type ValidateCouponResponse = CouponCRUD["GetResponse"];
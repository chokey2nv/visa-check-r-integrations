import { Coupon, CouponRedemption, CreditPlan, CreditTransaction, ServiceCreditCost } from "../../types";

export type CreditPlanFields = (keyof CreditPlan)[]
export type CreditTransactionFields = (keyof CreditTransaction)[];
export type ServiceCreditCostFields = (keyof ServiceCreditCost)[];
export type CouponFields = (keyof Coupon)[];
export type CouponRedemptionFields = (keyof CouponRedemption)[]



export const couponRedemptionQuery: CouponRedemptionFields = [
    "coupon",
    "couponId",
    "createdAt",
    "id",
    "planId",
    "transactionAmount",
    "usedAt",
    "userId",
    "valueUsed",
]
export const couponQuery: CouponFields = [
    "code",
    "couponType",
    "createdAt",
    "expiredAt",
    "id",
    "maxUses",
    "perUseLimit",
    "couponStatus",
    "usedCount",
    "value",
]
export const creditPlanQuery: CreditPlanFields = [
    "createdAt", 
    "credits",
    "description",
    "id",
    "price",
    "title",
]
export const creditTransactionQuery: CreditTransactionFields = [
    "createdAt",
    "creditBalance",
    "credits",
    "id",
    "metaJson",
    "price",
    "transactionId",
    "userId",
    "planId",
    "creditTransactionType",
    "couponCode",
    "couponAmount",
    "user",
]
export const serviceCreditCostQuery: ServiceCreditCostFields = [
    "createdAt",
    "credits",
    "id",
    "serviceName",
    "code"
]
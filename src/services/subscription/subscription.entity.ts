import { CreditPlan, CreditTransaction, ServiceCreditCost } from "../../types";

export type CreditPlanFields = (keyof CreditPlan)[]
export type CreditTransactionFields = (keyof CreditTransaction)[];
export type ServiceCreditCostFields = (keyof ServiceCreditCost)[];



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
]
export const serviceCreditCostQuery: ServiceCreditCostFields = [
    "createdAt",
    "credits",
    "id",
    "serviceName",
]
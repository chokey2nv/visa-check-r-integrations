import { CouponRedemptionCRUD, couponRedemptionDeleteIntegration, couponRedemptionIntegration, couponRedemptionListIntegration, ValidateCouponRedemptionRequest, ValidateCouponRedemptionResponse } from "./types/coupon-redemption.type";
import { GraphQLClient } from "../../client";
import { couponRedemptionSchema } from "./schemas/coupon-redemption.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createCouponRedemptionService = (client: GraphQLClient) =>  ({
    createCouponRedemption: createOperationExecutor<
        "createCouponRedemption",
        CouponRedemptionCRUD["CreateRequest"],
        CouponRedemptionCRUD["CreateResponse"],
        typeof couponRedemptionIntegration.create.nestedFields
    >(
        client,
        "createCouponRedemption",
        {
            schema: buildSchema(couponRedemptionSchema.create),
            defaultRootFields: couponRedemptionIntegration.create.responseFields,
            defaultNestedFields: couponRedemptionIntegration.create.nestedFields,
        }
    ),
    updateCouponRedemption: createOperationExecutor<
        "updateCouponRedemption",
        CouponRedemptionCRUD["UpdateRequest"],
        CouponRedemptionCRUD["UpdateResponse"],
        typeof couponRedemptionIntegration.update.nestedFields
    >(
        client,
        "updateCouponRedemption",
        {
            schema: buildSchema(couponRedemptionSchema.update),
            defaultRootFields: couponRedemptionIntegration.update.responseFields,
            defaultNestedFields: couponRedemptionIntegration.update.nestedFields,
        }
    ),
    getCouponRedemption: createOperationExecutor<
        "getCouponRedemption",
        CouponRedemptionCRUD["GetRequest"],
        CouponRedemptionCRUD["GetResponse"],
        typeof couponRedemptionIntegration.get.nestedFields
    >(
        client,
        "getCouponRedemption",
        {
            schema: buildSchema(couponRedemptionSchema.get),
            defaultRootFields: couponRedemptionIntegration.get.responseFields,
            defaultNestedFields: couponRedemptionIntegration.get.nestedFields,
        }
    ),
    deleteCouponRedemption: createOperationExecutor<
        "deleteCouponRedemption",
        CouponRedemptionCRUD["DeleteRequest"],
        CouponRedemptionCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteCouponRedemption",
        {
            schema: buildSchema(couponRedemptionSchema.delete),
            defaultRootFields: couponRedemptionDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    listCouponRedemptions: createOperationExecutor<
        "listCouponRedemptions",
        CouponRedemptionCRUD["ListRequest"],
        CouponRedemptionCRUD["ListResponse"],
        typeof couponRedemptionListIntegration.nestedFields
    >(
        client,
        "listCouponRedemptions",
        {
            schema: buildSchema(couponRedemptionSchema.list),
            defaultRootFields: [...couponRedemptionListIntegration.responseFields],
            defaultNestedFields: couponRedemptionListIntegration.nestedFields,
        }
    ),    
})

export type CouponRedemptionService = ReturnType<typeof createCouponRedemptionService>;
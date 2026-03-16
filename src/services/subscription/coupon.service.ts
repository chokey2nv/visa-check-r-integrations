import { CouponCRUD, couponDeleteIntegration, couponIntegration, couponListIntegration, ValidateCouponRequest, ValidateCouponResponse } from "./types/coupon.type";
import { GraphQLClient } from "../../client";
import { couponSchema } from "./schemas/coupon.schema";
import { createOperationExecutor } from "../../helpers/service.factory";
import { buildSchema } from "../../helpers/schema-builder";

export const createCouponService = (client: GraphQLClient) =>  ({
    createCoupon: createOperationExecutor<
        "createCoupon",
        CouponCRUD["CreateRequest"],
        CouponCRUD["CreateResponse"],
        typeof couponIntegration.create.nestedFields
    >(
        client,
        "createCoupon",
        {
            schema: buildSchema(couponSchema.create),
            defaultRootFields: couponIntegration.create.responseFields,
            defaultNestedFields: couponIntegration.create.nestedFields,
        }
    ),
    updateCoupon: createOperationExecutor<
        "updateCoupon",
        CouponCRUD["UpdateRequest"],
        CouponCRUD["UpdateResponse"],
        typeof couponIntegration.update.nestedFields
    >(
        client,
        "updateCoupon",
        {
            schema: buildSchema(couponSchema.update),
            defaultRootFields: couponIntegration.update.responseFields,
            defaultNestedFields: couponIntegration.update.nestedFields,
        }
    ),
    getCoupon: createOperationExecutor<
        "getCoupon",
        CouponCRUD["GetRequest"],
        CouponCRUD["GetResponse"],
        typeof couponIntegration.get.nestedFields
    >(
        client,
        "getCoupon",
        {
            schema: buildSchema(couponSchema.get),
            defaultRootFields: couponIntegration.get.responseFields,
            defaultNestedFields: couponIntegration.get.nestedFields,
        }
    ),
    deleteCoupon: createOperationExecutor<
        "deleteCoupon",
        CouponCRUD["DeleteRequest"],
        CouponCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteCoupon",
        {
            schema: buildSchema(couponSchema.delete),
            defaultRootFields: couponDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    listCoupons: createOperationExecutor<
        "listCoupons",
        CouponCRUD["ListRequest"],
        CouponCRUD["ListResponse"],
        typeof couponListIntegration.nestedFields
    >(
        client,
        "listCoupons",
        {
            schema: buildSchema(couponSchema.list),
            defaultRootFields: [...couponListIntegration.responseFields],
            defaultNestedFields: couponListIntegration.nestedFields,
        }
    ),
    validateCoupon: createOperationExecutor<
        "validateCoupon",
        ValidateCouponRequest,
        ValidateCouponResponse,
        typeof couponIntegration.get.nestedFields
    >(
        client,
        "validateCoupon",
        {
            schema: buildSchema(couponSchema.validate),
            defaultRootFields: couponIntegration.get.responseFields,
            defaultNestedFields: couponIntegration.get.nestedFields,
        }
    ),
    
})

export type CouponService = ReturnType<typeof createCouponService>;
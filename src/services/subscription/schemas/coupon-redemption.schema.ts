import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const couponRedemptionSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getCouponRedemption",
        variables: "($couponRedemption: CouponRedemptionInput!)",
        field: "(couponRedemption: $couponRedemption)",
    },
    list: {
        operation: "query",
        name: "listCouponRedemptions",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $couponRedemption: CouponRedemptionInput, $couponRedemptionIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, couponRedemption: $couponRedemption, couponRedemptionIds: $couponRedemptionIds)",
    },
    create: {
        operation: "mutation",
        name: "createCouponRedemption",
        variables: "($couponRedemption: CouponRedemptionInput!)",
        field: "(couponRedemption: $couponRedemption)",
    },
    update: {
        operation: "mutation",
        name: "updateCouponRedemption",
        variables: "($couponRedemptionId: String!, $couponRedemption: CouponRedemptionInput!)",
        field: "(couponRedemptionId: $couponRedemptionId, couponRedemption: $couponRedemption)",
    },
    delete: {
        operation: "mutation",
        name: "deleteCouponRedemption",
        variables: "($couponRedemptionId: String!)",
        field: "(couponRedemptionId: $couponRedemptionId)",
    },
}
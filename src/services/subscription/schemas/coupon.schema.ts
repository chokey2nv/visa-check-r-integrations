import { DefaultSchemaFields, SchemaConfig } from "../../../helpers/schema-builder";


export const couponSchema:Record<DefaultSchemaFields|"validate", SchemaConfig> = {
    get: {
        operation: "query",
        name: "getCoupon",
        variables: "($coupon: CouponInput!)",
        field: "(coupon: $coupon)",
    },
    list: {
        operation: "query",
        name: "listCoupons",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $coupon: CouponInput, $couponIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, coupon: $coupon, couponIds: $couponIds)",
    },
    create: {
        operation: "mutation",
        name: "createCoupon",
        variables: "($coupon: CouponInput!)",
        field: "(coupon: $coupon)",
    },
    update: {
        operation: "mutation",
        name: "updateCoupon",
        variables: "($couponId: String!, $coupon: CouponInput!)",
        field: "(couponId: $couponId, coupon: $coupon)",
    },
    delete: {
        operation: "mutation",
        name: "deleteCoupon",
        variables: "($couponId: String!)",
        field: "(couponId: $couponId)",
    },
    validate: {
        operation: "mutation",
        name: "validateCoupon",
        variables: "($userId: String!, $code: String!)",
        field: "(userId: $userId, code: $code)",
    },
}
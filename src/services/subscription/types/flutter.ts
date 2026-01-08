import { Card, FlutterwaveCustomer } from "../../../types/app/subscription";



export interface CreateCardObjectRequest {
    userId: string;
    card: Card;
}
export interface CreateCardObjectResponse {
    cardObjectId: string;
    chargeId: string;
}
export const createCardObjectResponse:(keyof CreateCardObjectResponse)[] = ["cardObjectId", "chargeId"];


export interface GetFlutterAccessTokenRequest {
    userId: string;
}
export interface GetFlutterAccessTokenResponse {
    accessToken: string;
}
export const getFlutterAccessTokenResponse:(keyof GetFlutterAccessTokenResponse)[] = ["accessToken"];


export interface CreateCustomerObjectRequest {
    userId: string;
    customer: FlutterwaveCustomer;
}
export interface CreateCustomerObjectResponse {
    customerObjectId: string;
}
export const createCustomerObjectResponse:(keyof CreateCustomerObjectResponse)[] = ["customerObjectId"];

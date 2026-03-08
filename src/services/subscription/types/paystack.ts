export interface PaystackInitializePaymentRequest{
    userId: string;
    planId: string;
    amount: number;
}
export interface PaystackInitializePaymentResponse{
    authorization_url: string;
    access_code: string;
    reference: string;
}
export const paystackInitializePaymentResponse:(keyof PaystackInitializePaymentResponse)[] = [
    "access_code", 
    "authorization_url", 
    "reference"
]
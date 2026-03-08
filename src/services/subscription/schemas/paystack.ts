export const paystackSchema = {
    paystackInitializePayment: (query: string) => `
        mutation paystackInitializePayment($userId: String! $planId: String! $amount: Int!) {
            paystackInitializePayment(userId: $userId, planId: $planId, amount: $amount) {
                ${query}
            }
        }
    `
}
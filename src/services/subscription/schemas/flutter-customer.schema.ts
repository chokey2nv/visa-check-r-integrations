export const flutterSchema = {
    createCardObject: (query: string) => `
        mutation createCardObject($userId: String!, $card: CardInput!) {
            createCardObject(userId: $userId, card: $card) {
                ${query}
            }
        }
    `,
    getFlutterAccessToken: (query: string) => `
        query getFlutterAccessToken($userId: String!) {
            getFlutterAccessToken(userId: $userId) {
                ${query}
            }
        }
    `,
    createCustomerObject: (query: string) => `
        mutation createCustomerObject($userId: String!, $customer: CustomerInput!) {
            createCustomerObject(userId: $userId, customer: $customer) {
                ${query}
            }
        }
    `,
    // GetFlutterAccessToken
}
export const subscriptionSchema = {
    createSubscription: (query: string) => `
        mutation createSubscription($subscription: SubscriptionInput!) {
            createSubscription(subscription: $subscription) {
                ${query}
            }
        }
    `,
    updateSubscription: (query: string) => `
        mutation updateSubscription($subscriptionId: String!, $subscription: SubscriptionInput!) {
            updateSubscription(subscriptionId: $subscriptionId, subscription: $subscription) {
                ${query}
            }
        }
    `,
    removeSubscription: (query: string) => `
        mutation removeSubscription($subscriptionId: String!) {
            removeSubscription(subscriptionId: $subscriptionId) {
                ${query}
            }
        }
    `,
    // get subscription (subscription)
    getSubscription: (query: string) => `
        query getSubscription($subscription: SubscriptionInput!) {
            getSubscription(subscription: $subscription) {
                ${query}
            }
        }
    `,
    listSubscriptions: (query: string) => `
        query listSubscriptions($search: String, $subscriptionIds: [String], $subscription: SubscriptionInput, $limit: Int!, $skip: Int!) {
            listSubscriptions(search: $search, subscriptionIds: $subscriptionIds, subscription: $subscription, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
}
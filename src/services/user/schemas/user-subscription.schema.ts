export const userSubscriptionSchema = {
    // create 
    createUserSubscription: (query: string) => `
        mutation createUserSubscription($userSubscription: UserSubscriptionInput!) {
            createUserSubscription(userSubscription: $userSubscription) {
                ${query}
            }
        }
    `,
    // update 
    updateUserSubscription: (query: string) => `
        mutation updateUserSubscription($userSubscriptionId: String!, $userSubscription: UserSubscriptionInput!) {
            updateUserSubscription(userSubscriptionId: $userSubscriptionId, userSubscription: $userSubscription) {
                ${query}
            }
        }
    `,
    // remove 
    removeUserSubscription: (query: string) => `
        mutation removeUserSubscription($userSubscriptionId: String!) {
            removeUserSubscription(userSubscriptionId: $userSubscriptionId) {
                ${query}
            }
        }
    `,
    // get 
    getUserSubscription: (query: string) => `
        query getUserSubscription($userSubscription: UserSubscriptionInput!) {
            getUserSubscription(userSubscription: $userSubscription) {
                ${query}
            }
        }
    `,
    // list 
    listUserSubscriptions: (query: string) => `
        query listUserSubscriptions($search: String, $userSubscriptionIds: [String], $userSubscription: UserSubscriptionInput, $limit: Int!, $skip: Int!) {
            listUserSubscriptions(search: $search, userSubscriptionIds: $userSubscriptionIds, userSubscription: $userSubscription, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
}
export const aiServerSchema = {
    getAIServerAuth: (query: string) => `
        query getAIServerAuth($visaProfileId: String!, $requestType: String!) {
            getAIServerAuth(visaProfileId: $visaProfileId, requestType: $requestType) {
                ${query}
            }
        }
    `
}
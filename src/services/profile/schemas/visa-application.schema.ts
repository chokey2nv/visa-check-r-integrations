export const visaApplicationSchema = {


    deleteVisaApplication: (query: string) => `
        mutation deleteVisaApplication($visaApplicationId: String!) {
            deleteVisaApplication(visaApplicationId: $visaApplicationId) {
                ${query}
            }
        }
    `,
    updateVisaApplication: (query: string) => `
        mutation updateVisaApplication($visaApplicationId: String!, $visaApplication: VisaApplicationInput!) {
            updateVisaApplication(visaApplicationId: $visaApplicationId, visaApplication: $visaApplication) {
                ${query}
            }
        }
    `,
    createVisaApplication: (query: string) => `
        mutation createVisaApplication($visaApplication: VisaApplicationInput!) {
            createVisaApplication(visaApplication: $visaApplication) {
                ${query}
            }
        }
    `,
    listVisaApplications: (query: string) => `
        query listVisaApplications($limit: Int!, $skip: Int!, $search: String, $visaApplicationIds: [String], $visaApplication: VisaApplicationInput, $visaProfile: VisaProfileInput) {
            listVisaApplications(limit: $limit, skip: $skip, search: $search, visaApplicationIds: $visaApplicationIds, visaApplication: $visaApplication, visaProfile: $visaProfile) {
                ${query}
            }
        }
    `,
    getVisaApplication: (query: string) => `
        query getVisaApplication($visaApplication: VisaApplicationInput!) {
            getVisaApplication(visaApplication: $visaApplication) {
                ${query}
            }
        }
    `
}
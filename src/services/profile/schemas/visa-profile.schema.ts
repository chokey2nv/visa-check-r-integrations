export const visaProfileSchema = {
    listVisaProfiles: (query: string) => `
        query listVisaProfiles($limit: Int!, $skip: Int!, $search: String, $visaProfileIds: [String], $visaProfile: VisaProfileInput) {
            listVisaProfiles(limit: $limit, skip: $skip, search: $search, visaProfileIds: $visaProfileIds, visaProfile: $visaProfile) {
                ${query}
            }
        }
    `,
    getVisaProfile: (query: string) => `
        query getVisaProfile($visaProfile: VisaProfileInput!) {
            getVisaProfile(visaProfile: $visaProfile) {
                ${query}
            }
        }
    `,
    deleteVisaProfile: (query: string) => `
        mutation deleteVisaProfile($visaProfileId: String!) {
            deleteVisaProfile(visaProfileId: $visaProfileId) {
                ${query}
            }
        }
    `,
    updateVisaProfile: (query: string) => `
        mutation updateVisaProfile($visaProfileId: String!, $visaProfile: VisaProfileInput!) {
            updateVisaProfile(visaProfileId: $visaProfileId, visaProfile: $visaProfile) {
                ${query}
            }
        }
    `,
    createVisaProfile: (query: string) => `
        mutation createVisaProfile($visaProfile: VisaProfileInput!) {
            createVisaProfile(visaProfile: $visaProfile) {
                ${query}
            }
        }
    `
}
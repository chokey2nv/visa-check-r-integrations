export const visaProfileSchema = {
    getVisaProfileCountByFilter: (query: string) => `
        query getVisaProfileCountByFilter($visaProfile: VisaProfileInput!) {
            getVisaProfileCountByFilter(visaProfile: $visaProfile) {
                ${query}
            }
        }
    `,
    getVisaProfileCount: (query: string) => `
        query getVisaProfileCount {
            getVisaProfileCount {
                ${query}
            }
        }
    `,
    // get job 
    getJob: (query: string) => `
        query getJob($job: JobInput!) {
            getJob(job: $job) {
                ${query}
            }
        }
    `,

    // get generated sop 
    getGeneratedSOP: (query: string) => `
        query getGeneratedSOP($sopReview: SopReviewInput!) {
            getGeneratedSOP(sopReview: $sopReview) {
                ${query}
            }
        }
    `,
    // generate sop 
    generateSOP: (query: string) => `
        mutation generateSOP($sopReview: SopReviewInput!) {
            generateSOP(sopReview: $sopReview) {
                ${query}
            }
        }
    `,
    listVisaProfiles: (query: string) => `
        query listVisaProfiles($limit: Int!, $skip: Int!, $search: String, $visaProfileIds: [String], $visaProfile: VisaProfileInput, $visaApplicationStatus: [VisaApplicationStatusEnum], $visaApplication: VisaApplicationInput) {
            listVisaProfiles(limit: $limit, skip: $skip, search: $search, visaProfileIds: $visaProfileIds, visaProfile: $visaProfile, visaApplicationStatus: $visaApplicationStatus, visaApplication: $visaApplication) {
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
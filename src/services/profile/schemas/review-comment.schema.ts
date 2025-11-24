export const visaProfileReviewCommentSchema = {
    listVisaProfileReviewComments: (query: string) => `
        query listVisaProfileReviewComments($limit: Int!, $skip: Int!, $search: String, $visaProfileReviewCommentIds: [String], $visaProfileReviewComment: VisaProfileReviewCommentInput) {
            listVisaProfileReviewComments(limit: $limit, skip: $skip, search: $search, visaProfileReviewCommentIds: $visaProfileReviewCommentIds, visaProfileReviewComment: $visaProfileReviewComment) {
                ${query}
            }
        }
    `,
    getVisaProfileReviewComment: (query: string) => `
        query getVisaProfileReviewComment($visaProfileReviewComment: VisaProfileReviewCommentInput!) {
            getVisaProfileReviewComment(visaProfileReviewComment: $visaProfileReviewComment) {
                ${query}
            }
        }
    `,
    deleteVisaProfileReviewComment: (query: string) => `
        mutation deleteVisaProfileReviewComment($visaProfileReviewCommentId: String!) {
            deleteVisaProfileReviewComment(visaProfileReviewCommentId: $visaProfileReviewCommentId) {
                ${query}
            }
        }
    `,
    updateVisaProfileReviewComment: (query: string) => `
        mutation updateVisaProfileReviewComment($visaProfileReviewCommentId: String!, $visaProfileReviewComment: VisaProfileReviewCommentInput!) {
            updateVisaProfileReviewComment(visaProfileReviewCommentId: $visaProfileReviewCommentId, visaProfileReviewComment: $visaProfileReviewComment) {
                ${query}
            }
        }
    `,
    createVisaProfileReviewComment: (query: string) => `
        mutation createVisaProfileReviewComment($visaProfileReviewComment: VisaProfileReviewCommentInput!) {
            createVisaProfileReviewComment(visaProfileReviewComment: $visaProfileReviewComment) {
                ${query}
            }
        }
    `
}
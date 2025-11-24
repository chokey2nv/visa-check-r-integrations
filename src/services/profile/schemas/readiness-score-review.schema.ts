export const readinessScoreReviewSchema = {

    listReadinessScoreReviews: (query: string) => `
        query listReadinessScoreReviews($limit: Int!, $skip: Int!, $search: String, $readinessScoreReviewIds: [String], $readinessScoreReview: ReadinessScoreReviewInput) {
            listReadinessScoreReviews(limit: $limit, skip: $skip, search: $search, readinessScoreReviewIds: $readinessScoreReviewIds, readinessScoreReview: $readinessScoreReview) {
                ${query}
            }
        }
    `,
    getReadinessScoreReview: (query: string) => `
        query getReadinessScoreReview($readinessScoreReview: ReadinessScoreReviewInput!) {
            getReadinessScoreReview(readinessScoreReview: $readinessScoreReview) {
                ${query}
            }
        }
    `,

    deleteReadinessScoreReview: (query: string) => `
        mutation deleteReadinessScoreReview($readinessScoreReviewId: String!) {
            deleteReadinessScoreReview(readinessScoreReviewId: $readinessScoreReviewId) {
                ${query}
            }
        }
    `,
    updateReadinessScoreReview: (query: string) => `
        mutation updateReadinessScoreReview($readinessScoreReviewId: String!, $readinessScoreReview: ReadinessScoreReviewInput!) {
            updateReadinessScoreReview(readinessScoreReviewId: $readinessScoreReviewId, readinessScoreReview: $readinessScoreReview) {
                ${query}
            }
        }
    `,
    createReadinessScoreReview: (query: string) => `
        mutation createReadinessScoreReview($readinessScoreReview: ReadinessScoreReviewInput!) {
            createReadinessScoreReview(readinessScoreReview: $readinessScoreReview) {
                ${query}
            }
        }
    `,
}
export const sopReviewSchema = {
    getSOPReview: (query: string) => `
        query getSOPReview($sopReview: SopReviewInput!) {
            getSOPReview(sopReview: $sopReview) {
                ${query}
            }
        }
    `,
    updateSOPReview: (query: string) => `
        mutation updateSOPReview($sopReviewId: String!, $sopReview: SopReviewInput!) {
            updateSOPReview(sopReviewId: $sopReviewId, sopReview: $sopReview) {
                ${query}
            }
        }
    `,
    createSOPReview: (query: string) => `
        mutation createSOPReview($sopReview: SopReviewInput!) {
            createSOPReview(sopReview: $sopReview) {
                ${query}
            }
        }
    `,
}
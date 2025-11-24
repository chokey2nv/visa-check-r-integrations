export const consultantAssignmentSchema = {
    listConsultantAssignments: (query: string) => `
        query listConsultantAssignments($limit: Int!, $skip: Int!, $search: String, $consultantAssignmentIds: [String], $consultantAssignment: ConsultantAssignmentInput) {
            listConsultantAssignments(limit: $limit, skip: $skip, search: $search, consultantAssignmentIds: $consultantAssignmentIds, consultantAssignment: $consultantAssignment) {
                ${query}
            }
        }
    `,
    getConsultantAssignment: (query: string) => `
        query getConsultantAssignment($consultantAssignment: ConsultantAssignmentInput!) {
            getConsultantAssignment(consultantAssignment: $consultantAssignment) {
                ${query}
            }
        }
    `,
    deleteConsultantAssignment: (query: string) => `
        mutation deleteConsultantAssignment($consultantAssignmentId: String!) {
            deleteConsultantAssignment(consultantAssignmentId: $consultantAssignmentId) {
                ${query}
            }
        }
    `,
    updateConsultantAssignment: (query: string) => `
        mutation updateConsultantAssignment($consultantAssignmentId: String!, $consultantAssignment: ConsultantAssignmentInput!) {
            updateConsultantAssignment(consultantAssignmentId: $consultantAssignmentId, consultantAssignment: $consultantAssignment) {
                ${query}
            }
        }
    `,
    createConsultantAssignment: (query: string) => `
        mutation createConsultantAssignment($consultantAssignment: ConsultantAssignmentInput!) {
            createConsultantAssignment(consultantAssignment: $consultantAssignment) {
                ${query}
            }
        }
    `
}
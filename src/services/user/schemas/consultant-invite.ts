export const consultantInviteSchema = {
    createConsultantInvite: (query: string) => `
        mutation createConsultantInvite($consultantInvite: ConsultantInviteInput!) {
            createConsultantInvite(consultantInvite: $consultantInvite) {
                ${query}
            }
        }
    `,
    updateConsultantInvite: (query: string) => `
        mutation updateConsultantInvite($consultantInviteId: String!, $consultantInvite: ConsultantInviteInput!) {
            updateConsultantInvite(consultantInviteId: $consultantInviteId, consultantInvite: $consultantInvite) {
                ${query}
            }
        }
    `,
    removeConsultantInvite: (query: string) => `
        mutation removeConsultantInvite($consultantInviteId: String!) {
            removeConsultantInvite(consultantInviteId: $consultantInviteId) {
                ${query}
            }
        }
    `,
    // get consultantInvite (consultantInvite)
    getConsultantInvite: (query: string) => `
        query getConsultantInvite($consultantInvite: ConsultantInviteInput!) {
            getConsultantInvite(consultantInvite: $consultantInvite) {
                ${query}
            }
        }
    `,
    listConsultantInvites: (query: string) => `
        query listConsultantInvites($search: String, $consultantInviteIds: [String], $consultantInvite: ConsultantInviteInput, $limit: Int!, $skip: Int!) {
            listConsultantInvites(search: $search, consultantInviteIds: $consultantInviteIds, consultantInvite: $consultantInvite, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `,
}
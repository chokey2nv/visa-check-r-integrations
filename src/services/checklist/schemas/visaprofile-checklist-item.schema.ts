export const visaProfileChecklistItemSchema = {
    createVisaProfileChecklistItem: (query: string) => `
        mutation createVisaProfileChecklistItem($visaProfileChecklistItem: VisaProfileChecklistItemInput!) {
            createVisaProfileChecklistItem(visaProfileChecklistItem: $visaProfileChecklistItem) {
                ${query}
            }
        }
    `,
    updateVisaProfileChecklistItem: (query: string) => `
        mutation updateVisaProfileChecklistItem($visaProfileChecklistItemId: String!, $visaProfileChecklistItem: VisaProfileChecklistItemInput!) {
            updateVisaProfileChecklistItem(visaProfileChecklistItemId: $visaProfileChecklistItemId, visaProfileChecklistItem: $visaProfileChecklistItem) {
                ${query}
            }
        }
    `,
    deleteVisaProfileChecklistItem: (query: string) => `
        mutation deleteVisaProfileChecklistItem($visaProfileChecklistItemId: String!) {
            deleteVisaProfileChecklistItem(visaProfileChecklistItemId: $visaProfileChecklistItemId) {
                ${query}
            }
        }
    `,
    getVisaProfileChecklistItem: (query: string) => `
        query getVisaProfileChecklistItem($visaProfileChecklistItem: VisaProfileChecklistItemInput!) {
            getVisaProfileChecklistItem(visaProfileChecklistItem: $visaProfileChecklistItem) {
                ${query}
            }
        }
    `,
    listVisaProfileChecklistItems: (query: string) => `
        query listVisaProfileChecklistItems($limit: Int!, $skip: Int!, $search: String, $visaProfileChecklistItemIds: [String], $visaProfileChecklistItem: VisaProfileChecklistItemInput) {
            listVisaProfileChecklistItems(limit: $limit, skip: $skip, search: $search, visaProfileChecklistItemIds: $visaProfileChecklistItemIds, visaProfileChecklistItem: $visaProfileChecklistItem) {
                ${query}
            }
        }
    `,
}
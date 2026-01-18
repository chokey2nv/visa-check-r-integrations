export const visaProfileChecklistItemSchema = {
    createVisaProfileChecklistItems: (query: string) => `
        mutation createVisaProfileChecklistItems($visaProfileChecklistItems: [VisaProfileChecklistItemsInput]!) {
            createVisaProfileChecklistItems(visaProfileChecklistItems: $visaProfileChecklistItems) {
                ${query}
            }
        }
    `,
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
    getVisaProfileChecklistItemsByChecklist: (query: string) => `
       query getVisaProfileChecklistItemsByChecklist($search: String, $visaProfile: VisaProfileInput, $visaProfileChecklistItem: VisaProfileChecklistItemInput, $checklistItem: ChecklistItemInput, $limit: Int!, $skip: Int!) {
           getVisaProfileChecklistItemsByChecklist(search: $search, visaProfile: $visaProfile, visaProfileChecklistItem: $visaProfileChecklistItem, checklistItem: $checklistItem, limit: $limit, skip: $skip) {
               ${query}
           }     
       }
    `
}
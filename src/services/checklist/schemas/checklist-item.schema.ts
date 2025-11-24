export const checklistItemSchema = {
    getChecklistItem: (query: string) => `
        query getChecklistItem($checklistItem: ChecklistItemInput!) {
            getChecklistItem(checklistItem: $checklistItem) {
                ${query}
            }
        }
    `,
    listChecklistItems: (query: string) => `
        query listChecklistItems($limit: Int!, $skip: Int!, $search: String, $checklistItemIds: [String], $checklistItem: ChecklistItemInput) {
            listChecklistItems(limit: $limit, skip: $skip, search: $search, checklistItemIds: $checklistItemIds, checklistItem: $checklistItem) {
                ${query}
            }
        }
    `,
    createChecklistItem: (query: string) => `
        mutation createChecklistItem($checklistItem: ChecklistItemInput!) {
            createChecklistItem(checklistItem: $checklistItem) {
                ${query}
            }
        }
    `,
    updateChecklistItem: (query: string) => `
        mutation updateChecklistItem($checklistItemId: String!, $checklistItem: ChecklistItemInput!) {
            updateChecklistItem(checklistItemId: $checklistItemId, checklistItem: $checklistItem) {
                ${query}
            }
        }
    `,
    deleteChecklistItem: (query: string) => `
        mutation deleteChecklistItem($checklistItemId: String!) {
            deleteChecklistItem(checklistItemId: $checklistItemId) {
                ${query}
            }
        }
    `,
}
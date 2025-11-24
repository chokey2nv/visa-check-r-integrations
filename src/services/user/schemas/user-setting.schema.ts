export const userSettingSchema = {
    //getUserSetting(userSetting: UserSettingInput!)
    getUserSetting: (query: string) => `
        query getUserSetting($userSetting: UserSettingInput!) {
            getUserSetting(userSetting: $userSetting) {
                ${query}
            }
        }
    `,
    updateUserSetting: (query: string) => `
        mutation updateUserSetting($userSettingId: String!, $userSetting: UserSettingInput!) {
            updateUserSetting(userSettingId: $userSettingId, userSetting: $userSetting) {
                ${query}
            }
        }
    `,
    createUserSetting: (query: string) => `
        mutation createUserSetting($userSetting: UserSettingInput!) {
            createUserSetting(userSetting: $userSetting) {
                ${query}
            }
        }
    `,
    // deleteUserSetting: (query: string) => `
    //     mutation deleteUserSetting($userSettingId: String!) {
    //         deleteUserSetting(userSettingId: $userSettingId) {
    //             ${query}
    //         }
    //     }
    // `,
}
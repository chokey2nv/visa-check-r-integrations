export const userSchema = {
    me: (query: string) => `
        query me {
          me {
            ${query}
          }
        }
      `,
    updateUser: (query: string) => `
        mutation updateUser($userId: String!, $user: UserInput!) {
          updateUser(userId: $userId, user: $user) {
            ${query}
          }
        }
      `,
    listUsers: (query: string) => `
        query listUsers($limit: Int!, $skip: Int!, $search: String, $userIds: [String], $user: UserInput) {
          listUsers(limit: $limit, skip: $skip, search: $search, userIds: $userIds, user: $user) {
            ${query}
          }
        }
    `,
    getUser: (query: string) => `
        mutation getUser($user: UserInput!) {
          getUser(user: $user) {
            ${query}
          }
        }
      `,
    deleteUser: (query: string) => `
        mutation deleteUser($userId: String!) {
          deleteUser(userId: $userId) {
            ${query}
          }
        }
      `,
    createUser(query: string) {
      return `
        mutation createUser($user: UserInput!) {
          createUser(user: $user) {
            ${query}
          }
        }
      `;
    },
}
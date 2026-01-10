export const userSchema = {
    getUserTypeStatusCount: (query: string) => `
      query getUserTypeStatusCount($userType:  UserTypeEnum!){
        getUserTypeStatusCount(userType: $userType) {
          ${query}
        } 
      }
    `,
    getUserCount: (query: string) => `
      query getUserCount {
        getUserCount {
          ${query}
        }
      }
    `,
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
        query listUsers($limit: Int!, $skip: Int!, $search: String, $userIds: [String], $user: UserInput, $subscriptionIds: [String]) {
          listUsers(limit: $limit, skip: $skip, search: $search, userIds: $userIds, user: $user, subscriptionIds: $subscriptionIds) {
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
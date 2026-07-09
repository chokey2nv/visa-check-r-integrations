import { SchemaConfig } from "../../../helpers/schema-builder";

export const userSchema = {
    listPartnerClients: (query: string) => `
      query listPartnerClients($referenceCode: String!, $limit: Int!, $skip: Int!) {
        listPartnerClients(referenceCode: $referenceCode, limit: $limit, skip: $skip) {
          ${query}
        }
      }
    `,
    getPartnerMatrices: (query: string) => `
      query getPartnerMatrices($partnerId: String!, $referenceCode: String!) {
        getPartnerMatrices(partnerId: $partnerId, referenceCode: $referenceCode) {
          ${query}
        }
      }
    `,
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
export const authSchema = {
    contactUs: (query: string) => `
      mutation contactUs($contactMessage: ContactMessageInput!) {
        contactUs(contactMessage: $contactMessage) {
          ${query}
        }
      }
    `,
    sendOTP: (query: string) => `
        mutation sendOTP($email: String!) {
          sendOTP(email: $email) {
            ${query}
          }
        }
    `,
    verifyOTP: (query: string) => `
        mutation verifyOTP($email: String!, $otp: String!) {
          verifyOTP(email: $email, otp: $otp) {
            ${query}
          }
        }
    `,
    resetPassword: (query: string) => `
        mutation resetPassword($email: String!, $password: String!) {
          resetPassword(email: $email, password: $password) {
            ${query}
          }
        }
    `,
    // updatePassword (email: String!, oldPassword: String!, newPassword: String!)
    updatePassword: (query: string) => `
        mutation updatePassword($email: String!, $oldPassword: String!, $newPassword: String!) {
          updatePassword(email: $email, oldPassword: $oldPassword, newPassword: $newPassword) {
            ${query}
          }
        }
    `,
    login: (query: string) => `
       mutation login($email: String!, $password: String!, $userType: UserTypeEnum) {
         login(email: $email, password: $password, userType: $userType) {
           ${query}
         }
       }
    `,
    signUp: (query: string) => `
        mutation signUp($user: UserInput!, $password: String!, $partnerReferenceCode: String, $consultantCode: String) {
          signUp(user: $user, password: $password, partnerReferenceCode: $partnerReferenceCode, consultantCode: $consultantCode) {
            ${query}
          }
        }
    `,
}
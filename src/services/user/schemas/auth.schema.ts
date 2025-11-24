export const authSchema = {
    // sendOTP(email: String!)
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
    login: (query: string) => `
       mutation login($email: String!, $password: String!, $userType: UserTypeEnum) {
         login(email: $email, password: $password, userType: $userType) {
           ${query}
         }
       }
    `,
    signUp: (query: string) => `
        mutation signUp($user: UserInput!, $password: String!) {
          signUp(user: $user, password: $password) {
            ${query}
          }
        }
    `,
}
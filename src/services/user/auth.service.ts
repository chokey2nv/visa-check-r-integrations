import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import {authSchema} from "./schemas/auth.schema";
import { 
  ContactUsRequest,
  ContactUsResponse,
  contactUsResponseFields,
  LoginRequest, LoginResponse, 
  loginResponseFields, ResetPasswordRequest, ResetPasswordResponse, resetPasswordResponseFields, SendOTPRequest, SendOTPResponse, sendOTPResponseFields, SignUpRequest, 
  SignUpResponse, 
  signUpResponseFields, 
  UpdatePasswordRequest, 
  UpdatePasswordResponse, 
  updatePasswordResponseFields, 
  VerifyOTPRequest,
  VerifyOTPResponse,
  verifyOTPResponseFields
} from "./types/auth.type";


export const createAuthService = (client: GraphQLClient) => ({
  async contactUs(
    input: ContactUsRequest,
    fetchFields?: {
      root?: (keyof ContactUsResponse)[],
    },
    option?: RequestOption
  ): Promise<ContactUsResponse|undefined> {
    const res = await client.request<{ contactUs: ContactUsResponse }>(
      authSchema.contactUs(
        gqlQueryStringBuilder<ContactUsResponse>(
          fetchFields?.root ?? contactUsResponseFields
        )
      ), 
      input,
      option
    );
    return res.data?.contactUs
  },
  async changePassword(
    input: UpdatePasswordRequest,
    fetchFields?: {
      root?: (keyof UpdatePasswordResponse)[],
    },
    option?: RequestOption
  ): Promise<UpdatePasswordResponse|undefined> {
    const res = await client.request<{ updatePassword: UpdatePasswordResponse }>(authSchema.updatePassword(
        gqlQueryStringBuilder<UpdatePasswordResponse>(
          fetchFields?.root ?? updatePasswordResponseFields
        )
      ), 
      input,
      option
    );
    return res.data?.updatePassword
  },
  async resetPassword(
    input: ResetPasswordRequest,
    fetchFields?: {
      root?: (keyof ResetPasswordResponse)[],
    },
    option?: RequestOption
  ): Promise<ResetPasswordResponse|undefined> {
    const res = await client.request<{ resetPassword: ResetPasswordResponse }>(authSchema.resetPassword(
        gqlQueryStringBuilder<ResetPasswordResponse>(
          fetchFields?.root ?? resetPasswordResponseFields
        )
      ), 
      input,
      option
    );
    return res.data?.resetPassword
  },
  async verifyOTP(
    input: VerifyOTPRequest,
    fetchFields?: {
      root?: (keyof VerifyOTPResponse)[],
    },
    option?: RequestOption
  ): Promise< VerifyOTPResponse|undefined> {
    const res = await client.request<{ verifyOTP: VerifyOTPResponse }>(authSchema.verifyOTP(
        gqlQueryStringBuilder<VerifyOTPResponse>(
          fetchFields?.root ?? verifyOTPResponseFields,
        )
      ), 
      input,
      option
    );
    return res.data?.verifyOTP
  },
  async sendOTP(
    input: SendOTPRequest,
    fetchFields?: {
      root?: (keyof SendOTPResponse)[],
    },
    option?: RequestOption
  ): Promise<SendOTPResponse|undefined> {
    const res = await client.request<{ sendOTP: SendOTPResponse }>(authSchema.sendOTP(
        gqlQueryStringBuilder<SendOTPResponse>(
          fetchFields?.root ?? sendOTPResponseFields,
        )
      ), 
      input,
      option
    );
    return res.data?.sendOTP
  },
  async signUp(
    input: SignUpRequest,
    fetchFields?: {
      root?: (keyof SignUpResponse)[],
    },
    option?: RequestOption
  ): Promise<SignUpResponse|undefined> {
    const res = await client.request<{ signUp: SignUpResponse }>(authSchema.signUp(
        gqlQueryStringBuilder<SignUpResponse>(
          fetchFields?.root ?? signUpResponseFields,
        )
      ), 
      input,
      option
    );
    return res.data?.signUp
  },
  async login(
    input: LoginRequest,
    fetchFields?: {
      root?: (keyof LoginResponse)[],
    },
    option?: RequestOption
  ): Promise<LoginResponse|undefined> {
    const res = await client.request<{ login: LoginResponse }>(
      authSchema.login(
        gqlQueryStringBuilder<LoginResponse>(
          fetchFields?.root ?? loginResponseFields,
        )
      ), 
      input,
      option
    );
    return res.data?.login
  }
})

export type AuthService = ReturnType<typeof createAuthService>
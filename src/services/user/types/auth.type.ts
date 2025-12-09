import { User, UserType } from "../../../types";

export interface LoginRequest {
    email: string;
    password: string;
    userType: UserType;
}
export interface LoginResponse {
    accessToken: string;
    userId: string;
}
export const loginResponseFields: (keyof LoginResponse)[] = ["accessToken", "userId"];

// sign up 
export interface SignUpRequest {
    user: Partial<User>;
    password: string;
    partnerReferenceCode?: string;
    consultantCode?: string;
}
export type SignUpResponse = LoginResponse;
export const signUpResponseFields = loginResponseFields;

// send otp 
export interface SendOTPRequest {
    email: string;
}
export type SendOTPResponse = {
    successful: boolean;
    otp: string;
}
export const sendOTPResponseFields: (keyof SendOTPResponse)[] = ["successful", "otp"];

// verify otp 
export interface VerifyOTPRequest {
    email: string;
    otp: string;
}
export type VerifyOTPResponse = {
    otpVerifiedAccessToken: string;
    userId: string;
}
export const verifyOTPResponseFields: (keyof VerifyOTPResponse)[] = ["otpVerifiedAccessToken", "userId"];

// reset password 
export interface ResetPasswordRequest {
    email: string;
    password: string;
}
export type ResetPasswordResponse = {
    success: boolean;
}
export const resetPasswordResponseFields: (keyof ResetPasswordResponse)[] = ["success"];


// update password 
export interface UpdatePasswordRequest {
    email: string;
    oldPassword: string;
    newPassword: string;
}
export type UpdatePasswordResponse = {
    success: boolean;
}
export const updatePasswordResponseFields: (keyof UpdatePasswordResponse)[] = ["success"];
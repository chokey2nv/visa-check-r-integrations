import { describe, it, expect, test, beforeAll } from "vitest";
import { createUserService } from "../../src/services/user/user.service";
import Chance from "chance";
// import { createClient } from "./global.setup";
import { AuthService, createAuthService } from "../../src/services/user/auth.service";
import { createClient, initTestEnv } from "../testEnv";
import { UserType } from "../../src/types";
const chance = new Chance();

describe.sequential("Auth API", () => {
  let otp: string = "";
  let email = chance.email();
  let phone = chance.phone();
  let userType: UserType = "client"
  let password = chance.string();
  let newPassword = chance.string();
  let authService: AuthService;
  let userId: string|undefined;
  let env: Awaited<ReturnType<typeof initTestEnv>>;
  const headers: { 
    "X-Otp-Verified-Access-Token": string;
    Authorization?: string;  
  } = {
    "X-Otp-Verified-Access-Token": "",
  };
  beforeAll(async () => {
    env = await initTestEnv();  
    authService = createAuthService(createClient());
  })
  it("should not login with none user credentials", async () => {
    try {
      await authService?.login({
        email, password, userType: "client"
      });
    }catch(e){
      expect((e as Error).message.toLowerCase()).contains("user not found");
    }
  });
  it("should sign up with user credentials", async () => {
    const res = await authService?.signUp({
      password,
      user: {
        email,
        fullName: chance.name(),
        userType,
        phone,
      }
    });
    expect(res).not.toBeNull();
    userId = res?.userId
  })
  it("should login with user credentials", async () => {
    const res = await authService?.login({
      password, 
      email,
      userType
    });
    if(res?.accessToken){
      headers.Authorization = `Bearer ${res?.accessToken}`;
    }
    expect(res).not.toBeNull();
  })

  it("should be fetch user information using access token", async () => {
    const client = createClient(headers.Authorization || "")
    const userService = createUserService(client)
    const res = await userService?.me({}, {headers})
    expect(res).not.toBeNull();
    expect(res?.user.fullName).not.equal("")
  })
  it("change login password", async () => {
    const res = await authService.changePassword({
      email, oldPassword: password, newPassword,
    }, {}, { headers });
    expect(res?.success).toBeTruthy();
  })
  it("login with new password", async () => {
    const res = await authService?.login({
      password: newPassword,
      email, userType
    });
    if(res?.accessToken){
      headers.Authorization = `Bearer ${res?.accessToken}`;
    }
    expect(res).not.toBeNull();
  })
  it("should not sign up with already user credentials", async () => {
    try {
      const res = await authService?.signUp({
        user: {
          fullName: chance.name(),
          userType,
          email, 
          phone
        },
        password,
      });
    }catch(e){
      expect((e as Error).message).include("exists");
    }
  })
  it("send otp", async () => {
    const res = await authService?.sendOTP({
      email,
    },{}, {headers});
    if(res?.otp){
      otp = res?.otp;
    }
    expect(res).not.toBeNull();
  })
  it("should verify otp", async () => {
    const res = await authService?.verifyOTP({
      email, otp,
    }, {}, {headers});
    if(res?.otpVerifiedAccessToken){
      headers["X-Otp-Verified-Access-Token"] = res.otpVerifiedAccessToken;
    }
    expect(res).not.toBeNull();
  })
  it("should reset password", async () => {
    const res = await authService?.resetPassword({
      password: chance.string(), 
      email
    }, {}, {
      headers
    });
    expect(res).not.toBeNull();
  })
});

import { TokenProvider } from "./token-provider"
import { AuthorizeChargeRequest, AuthorizeChargeResponse } from "./types"

export class FlutterwaveClient {
  private baseURL: string
  private tokenProvider: TokenProvider

  constructor(baseURL: string, tokenProvider: TokenProvider) {
    this.baseURL = baseURL.replace(/\/$/, "")
    this.tokenProvider = tokenProvider
  }

    private async request<T>(
        path: string,
        method: string,
        userId: string,
        body?: unknown,
        headers: Record<string, string> = {}
    ): Promise<T> {
        const token = await this.tokenProvider.getToken(userId)

        if(!token) {
            throw new Error("Flutterwave token not found")
        }

        const res = await fetch(`${this.baseURL}${path}`, {
            method,
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        })

        if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Flutterwave error ${res.status}: ${errorText}`)
        }

        return res.json()
    }

    async AuthorizeCharge(
        userId: string,
        pin: string,
        nonce: string,
        traceId: string,
    ): Promise<AuthorizeChargeResponse> {
        const req: AuthorizeChargeRequest = {
            authorization: {
                type: "pin",
                pin: {
                    nonce,
                    encrypted_pin: pin
                }
            }
        }
        const headers: Record<string, string> = {
            "X-Trace-Id": traceId,
            "X-Scenario-Key": "scenario:auth_3ds&issuer:approved"
        }


        return this.request(
            "/charges",
            "POST",
            userId,
            req,
            headers
        )
    }

}

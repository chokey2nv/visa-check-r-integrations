import { GraphQLClient } from "../client"
import { createFlutterwaveService } from "../services"

export interface TokenProvider {
  getToken(userId: string): Promise<string|undefined>
}


export class BackendTokenProvider implements TokenProvider {
  private graphqlClient: GraphQLClient

  constructor(client: GraphQLClient) {
    this.graphqlClient = client
  }


  async getToken(userId: string): Promise<string|undefined> {
    const flutterService = createFlutterwaveService(this.graphqlClient)
    const token = await flutterService.getFlutterAccessToken({ userId })
    return token?.accessToken
  }
}

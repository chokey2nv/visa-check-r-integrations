import { GraphQLClient } from "../src/client";
import { MeResponse } from "../src/services/user/types/user.type";

declare global {
  // Attach your global test data type
  var __GLOBAL_TEST_DATA__: {
    accessToken: string;
    userData: MeResponse;
    password: string;
    storeClient: GraphQLClient;
    publicClient: GraphQLClient;
  };
}

// This makes the file a module (so it’s not treated as a script)
export {};

import { AIServerAuth } from "../../../types/app/ai-integration";
import { AIServerAuthFields, aiServerAuthQuery } from "./ai-server.entity";

export interface GetAIServerAuthRequest {
    visaProfileId: string;
    requestType: "readiness_score" | "sop_review"; // TODO: enum
}

export interface GetAIServerAuthResponse {
    aiServerAuth: AIServerAuth;
}

export const getAIServerAuthResponse: (keyof GetAIServerAuthResponse)[] = [
    "aiServerAuth"
];
export interface GetAIServerAuthResponseNestedFields {
    aiServerAuth: AIServerAuthFields;
}

export const getAIServerAuthResponseNestedFields: GetAIServerAuthResponseNestedFields = {
    aiServerAuth: aiServerAuthQuery
};

import { AIServerAuth } from "../../../types/app/ai-integration";
import { AIServerAuthFields, aiServerAuthQuery } from "./ai-server.entity";

export interface GetAIServerAuthRequest {
    visaProfileId: string;
    requestType: "readiness_score" | "readiness_score_v2" | "sop_review" | "sop_answer_review"; // TODO: enum
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

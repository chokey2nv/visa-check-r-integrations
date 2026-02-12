import { AIServerAuth } from "../../../types/app/ai-integration";

export type AIServerAuthFields = (keyof AIServerAuth)[];


export const aiServerAuthQuery: AIServerAuthFields = [
    "visaProfileId",
    "accessToken",
    "url"
];
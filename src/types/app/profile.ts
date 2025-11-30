import { VisaProfileChecklistItem } from "./checklist";
import { BooleanLiteral } from "./shared";
import { User } from "./user";


export type VisaType = "study"|"visit"|"work"|"extendVisa"|"relocate"
export type VisaApplicationMetricKey = "total" | VisaApplicationStatus
export type VisaApplicationStatus = "approved" | "rejected" | "incomplete" | "inProgress" | "submitted"

export interface UserApplicationMetric {
    key: VisaApplicationMetricKey, value: number
}
export interface ConsultantRequest {
    id: string;
    requestStatus: "pending"|"declined"|"approved"
    visaProfileId: string;
    createdAt: string;
}
export interface ConsultantAssignment {
    id: string;
    visaProfileId: string;
    consultantId: string;
    changeRequest?: BooleanLiteral;
    createdAt: string;

    assignmentStatus: "decline"|"accept"

    finalReview?: string;
    finalReviewDate?: string;
    adminApproval?: BooleanLiteral;

    consultant?: User;
}
export interface VisaProfileReviewComment {
    id: string;
    visaProfileId: string;
    isRoot?: BooleanLiteral;
    replyTo?: string;
    consultantAssignmentId: string;
    comment: string;
    adminComment: string;
    adminCommentDate: string;
    createdAt: string;
    visaProfileChecklistItemId?: string;
    visaProfileChecklistItem?: VisaProfileChecklistItem;
}
export interface VisaApplication {
    id: string;
    visaProfileId: string;
    applicationStatus: VisaApplicationStatus;
    createdAt: string;
    updatedAt: string;
    adminComment?: string;
}
export interface EducationalBackground {
    levelOfEnglishProficiency: "basic"|"native"|"professional"
}

export interface VisaProfileDetails {
    dateOfBirth: string;
    countryOfBirth: string;
    maritalStatus: "married"| "single";
    highestLevelOfEducation: "primary" | "secondary" | "tertiary" | "post-secondary" | "masters" | "doctorate";
    nationality: string;
    countryOfResidence: string;
    destinationCountry: string;
    countriesVisitedInPast5Years: string[];
}
export interface VisaProfileProgram {
    purpose: VisaType; // visaType
    fieldOfStudy?: string;
    preferredLevelOfEducation?: string;
    modeOfStudy: "online"|"offline";
    startDate: string;
    durationInMonths?: number;
    budgetPerYear?: number;
    institution?: string;
    letterOfAcceptanceReceived?: BooleanLiteral;
    comment?: string;
}
export interface VisaProfile extends /*  EducationalBackground, VisaProfileProgram, */ VisaProfileDetails {
    id: string;
    userIds: string[];
    fullName: string;
    email: string;
    applicationId?: string;
    purpose: VisaType; // visaType, in program
    destinationCountry: string; // in detail 
    visaApplication?: VisaApplication
    phone: string;

    consultantAssignmentId?: string;
    consultantAssignment?: ConsultantAssignment;
    readinessScore?: number;
    readinessScoreReview?: ReadinessScoreReview;
    createdAt: string;
}
export interface ReadinessScoreReview {
    id: string;
    visaProfileId: string;
    score: number;
    review: string;
    // checklistItem?: VisaProfileChecklistItem;
    createdAt: string;
}
export interface ReadinessScore {
    id: string;
    visaProfileId: string;
    percentageScore: number;
    reviews: ReadinessScoreReview[];
    createdAt: string;
    updatedAt: string;
}
export interface VisaProfileActivityLog {
    id: string;
    logType: 'visaProfile' | 'user';
    userIdOrVisaProfileId?: string;
    description: string;
    createdAt: string;
}
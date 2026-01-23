import { VisaProfileChecklistItem } from "./checklist";
import { BooleanLiteral } from "./shared";
import { User } from "./user";


export interface ConsultantClientStats {
    consultantId: string;
    total: number;
    awaitingReview: number;
    completedReview: number;
    pendingAdminReview: number;
    newReview: number;
}
export interface VisaProfileCount {
    total: number;
    assigned: number;
    consultantRequests: number;
    acceptedByConsultant: number;
    rejectedByConsultant: number;
}
export interface SOPAnswer {
    questionId: number,
    answer: string,
    reason?: string
}
export interface SOPReview {
    id: string,
    visaProfileId: string,
    visaProfileChecklistItemId: string,
    generatedSop: string,
    answeredQuestions: SOPAnswer[],
    unansweredQuestions: SOPAnswer[],
    reviewedAt: string,
    createdAt: string
}

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
    consultantAcceptance: BooleanLiteral;
    consultantRejection: BooleanLiteral;
    changeRequest?: BooleanLiteral;
    createdAt: string;

    assignmentStatus: "decline"|"accept"

    finalReview?: string;
    finalReviewDate?: string;

    adminApproval?: BooleanLiteral;
    adminComment?: string;
    adminCommentDate?: string;

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
    userId: string;
    user?: User
}
// dev-user 
// Connecthive!@Ogabai!#Production!$
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
    purpose: VisaType; // client, partner, consultant
    destinationCountry: string; // in detail 
    visaApplication?: VisaApplication
    phone: string;

    consultantAssignmentId?: string;
    consultantAssignment?: ConsultantAssignment;
    readinessScore?: number;
    readinessScoreReview?: ReadinessScoreReview;
    createdAt: string;

    ownerId?: string;
    referenceCode?: string;
}

export interface DocumentReview {
    title: string;
    score: number;
    review: string;
    feedback?: string;
    examples?: string[];
}

export interface ReadinessScoreReview {
    id: string;
    visaProfileId: string;
    overallScore: number;
    overallAssessment: string;
    documents: DocumentReview[];
    createdAt: string;
    dateOfReview: string;
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
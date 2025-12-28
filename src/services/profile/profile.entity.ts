import { ReadinessScoreReview, VisaApplication, VisaProfile, ConsultantAssignment, VisaProfileReviewComment } from "../../types";

export type ReadinessScoreReviewFields = (keyof ReadinessScoreReview)[];
export type VisaProfileFields = (keyof VisaProfile)[];
export type VisaApplicationFields = (keyof VisaApplication)[];
export type ConsultantAssignmentFields = (keyof ConsultantAssignment)[]
export type VisaProfileReviewCommentFields = (keyof VisaProfileReviewComment)[]


export const readinessScoreReviewQuery: ReadinessScoreReviewFields = [
    "createdAt",
    "id",
    "review",
    "feedback",
    "visaProfileId",
    "score",
];
export const visaProfileQuery: VisaProfileFields = [
    "visaApplication",
    "applicationId", 
    "consultantAssignmentId",
    "countriesVisitedInPast5Years",
    "countryOfBirth",
    "countryOfResidence", 
    "createdAt", 
    "dateOfBirth", 
    "destinationCountry",
    "email",
    "fullName",
    "highestLevelOfEducation",
    "id",
    "maritalStatus",
    "nationality",
    "phone",
    "purpose",
    "readinessScore",
    "readinessScoreReview",
    "consultantAssignment",
    "ownerId",
];

export const visaApplicationQuery: VisaApplicationFields = [
    "adminComment", 
    "applicationStatus", 
    "createdAt", 
    "id", 
    "updatedAt", 
    "visaProfileId"
];
export const consultantAssignmentQuery: ConsultantAssignmentFields = [
    "adminApproval",
    "adminComment",
    "adminCommentDate",
    "assignmentStatus",
    "changeRequest",
    "consultant",
    "consultantId",
    "consultantAcceptance",
    "consultantRejection",
    "createdAt",
    "finalReview",
    "finalReview",
    "finalReviewDate",
    "id",
    "visaProfileId",
]
export const visaProfileReviewCommentQuery: VisaProfileReviewCommentFields = [
    "visaProfileChecklistItem",
    "visaProfileChecklistItemId",
    "comment",
    "consultantAssignmentId",
    "createdAt",
    "id",
    "isRoot",
    "replyTo",
]

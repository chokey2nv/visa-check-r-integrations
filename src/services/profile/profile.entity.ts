import { ReadinessScoreReview, VisaApplication, VisaProfile, ConsultantAssignment, VisaProfileReviewComment, DocumentReview, SOPAnswer, SOPReview, VisaProfileCount, ConsultantClientStats } from "../../types";
import { Job } from "../../types/app/job";

export type ReadinessScoreReviewFields = (keyof ReadinessScoreReview)[];
export type VisaProfileFields = (keyof VisaProfile)[];
export type VisaApplicationFields = (keyof VisaApplication)[];
export type ConsultantAssignmentFields = (keyof ConsultantAssignment)[]
export type VisaProfileReviewCommentFields = (keyof VisaProfileReviewComment)[]
export type DocumentReviewFields = (keyof DocumentReview)[]

export type SOPAnswerFields = (keyof SOPAnswer)[]
export type SOPReviewFields = (keyof SOPReview)[]

export type JobFields = (keyof Job)[]

export type VisaProfileCountFields = (keyof VisaProfileCount)[]
export type ConsultantClientStatsFields = (keyof ConsultantClientStats)[]




export const consultantClientStatsQuery: ConsultantClientStatsFields = [
    "awaitingReview",
    "completedReview",
    "consultantId",
    "newReview",
    "pendingAdminReview",
    "total"
]

export const visaProfileCountQuery: VisaProfileCountFields = [
    "acceptedByConsultant",
    "assigned",
    "consultantRequests",
    "rejectedByConsultant",
    "total"
]

export const jobQuery: JobFields = [
    "createdAt",
    "error",
    "id",
    "message",
    "progress",
    "result",
    "status",
    "type",
    "updatedAt",
]


export const sopAnswerQuery: SOPAnswerFields = [
    "answer",
    "questionId",
    "reason"
]
export const sopReviewQuery: SOPReviewFields = [
    "answeredQuestions",
    "createdAt",
    "generatedSop",
    "id",
    "reviewedAt",
    "unansweredQuestions",
    "visaProfileChecklistItemId",
    "visaProfileId",
]


export const documentReviewQuery: DocumentReviewFields = [
    "title", 
    "examples", 
    "review", 
    "score", 
    "feedback"
]
export const readinessScoreReviewQuery: ReadinessScoreReviewFields = [
    "createdAt",
    "dateOfReview",
    "documents",
    "id",
    "overallAssessment",
    "overallScore",
    "visaProfileId",
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
    "assignmentDate",
]
export const visaProfileReviewCommentQuery: VisaProfileReviewCommentFields = [
    "adminComment",
    "adminCommentDate",
    "comment",
    "consultantAssignmentId",
    "createdAt",
    "id",
    "isRoot",
    "replyTo",
    "user",
    "userId",
    "visaProfileChecklistItem",
    "visaProfileChecklistItemId",
    "visaProfileId",
]

import { AllUserNotificationSettingKey, User, UserActivityLog, UserSetting } from "../../types";

export type UserFields = (keyof User)[];
export type UserSettingFields = (keyof UserSetting)[]
export type ActivityLogFields = (keyof UserActivityLog)[]



export const activityLogQuery: ActivityLogFields = [
    "createdAt",
    "description",
    "id", 
    "logType",
    "userIdOrVisaProfileId"
]
export const userSettingQuery: UserSettingFields = [
    "applicationStatus",
    "checklistIncompleteReminder",
    "clientUpdate",
    "docReviewFeedback",
    "id",
    "newMessageFromClient",
    "newMessageFromConsultant",
    "notificationChannels",
    "submissionConfirmation",
    "userId"
       
]
export const userQuery: UserFields = [
    "country", 
    "createdAt",
    "defaultVisaProfileId",
    "email",
    "fullName",
    "id",
    "loginAt",
    "phone",
    "totalRC",
    "usedRC",
    "userStatus",
    "userType",
]
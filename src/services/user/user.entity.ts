import { AllUserNotificationSettingKey, Subscription, User, UserActivityLog, UserSetting, UserSubscription } from "../../types";

export type UserFields = (keyof User)[];
export type UserSettingFields = (keyof UserSetting)[]
export type ActivityLogFields = (keyof UserActivityLog)[]
export type SubscriptionFields = (keyof Subscription)[]
export type UserSubscriptionFields = (keyof UserSubscription)[]



export const subscriptionQuery: SubscriptionFields = [
    "createdAt",
    "description",
    "id",
    "name",
    "price",
    "rc",
    "rcQuantity",
    "rcQuantityFrequency",
    "title",
]
export const userSubscriptionQuery: UserSubscriptionFields = [
    "id",
    "userId",
    "subscriptionId",
    "startDate",
    "endDate",
    "isActive",
    "monthDuration",
    "subscription",
    "subscriber",
    "createdAt"
]
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
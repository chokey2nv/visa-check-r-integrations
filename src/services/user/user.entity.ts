import { ConsultantInvite, ContactMessage, Subscription, User, UserActivityLog, UserCount, UserSetting, UserSubscription, UserTypeStatusCount } from "../../types";

export type UserFields = (keyof User)[];
export type UserSettingFields = (keyof UserSetting)[]
export type ActivityLogFields = (keyof UserActivityLog)[]
export type SubscriptionFields = (keyof Subscription)[]
export type UserSubscriptionFields = (keyof UserSubscription)[]
export type ConsultantInviteFields = (keyof ConsultantInvite)[]
export type UserCountFields = (keyof UserCount)[];
export type UserTypeStatusCountFields = (keyof UserTypeStatusCount)[]
export type ContactMessageFields = (keyof ContactMessage)[]




export const contactMessageQuery: ContactMessageFields = [
    "email",
    "message",
    "fullName",
    "reason",
]
export const userTypeStatusCountQuery: UserTypeStatusCountFields = [
    "active",
    "inactive",
    "total",
    "userType"
]
export const userCountQuery:UserCountFields = [
    "applications",
    "clients",
    "consultants",
    "partners"
]


export const consultantInviteQuery: ConsultantInviteFields = [
    "createdAt",
    "token",
    "email",
    "expirationDate",
    "id",
    "updatedAt"
]
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
    "referenceCode",
    "userSubscriptionId",
    "referralCode"
]
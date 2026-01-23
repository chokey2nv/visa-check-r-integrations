import { VisaProfileActivityLog } from "./profile";
import { BooleanLiteral } from "./shared";


export type SettingNotificationChannelKey = "push" | "sms" | "email"
export type UserNotificationSettingKey = 
    "userSettingApplicationStatus"|
    "userSettingDocReviewFeedback"|
    "userSettingSubmissionConfirmation"|
    "userSettingChecklistIncompleteReminder"|
    "userSettingNewMessageFromConsultant"
export type ConsultantNotificationSettingKey = 
    "userSettingClientUpdate"|
    "userSettingDocReviewFeedback"|
    "userSettingNewMessageFromClient"
export type AllUserNotificationSettingKey = UserNotificationSettingKey | ConsultantNotificationSettingKey
export type Plan = "free" | "silver" | "gold"
export type PartnerDashboardMatrixKey = "totalClients"|"submittedApplications"|"approvedApplications"|"rejectedApplications"|"inProgressApplications"
export type PartnerDashboardMatrix = Record<PartnerDashboardMatrixKey, number>;
export type ConsultantDashboardMetricCountKey = "totalClient"|"completedReview"|"awaitingReview"|"newReview"|"pendingAdminReview";
export type ConsultantDashboardMetricCount = Record<ConsultantDashboardMetricCountKey, number>
export type AdminDashboardMatrixKey = "visaProfileCount"|"partnerCount"|"consultantCount"|"pendingReviewCount"
export type AdminDashboardMatrix = Record<AdminDashboardMatrixKey, number>;

export interface UserCredit {
    id: string;
    userId: string;
    amount: number;
    createdAt: string
}

export type HtmlString = string;

export interface ContactMessage {
    // name email reason message 
    fullName: string;
    email: string;
    reason: string;
    message: string;
}

export interface UserTypeStatusCount {
    userType: UserType;
    total: number;
    active: number;
    inactive: number;
}

export interface UserCount {
    clients: number;
    partners: number;
    consultants: number;
    applications: number;
}

export interface ConsultantInvite {
    id: string;
    email: string;
    token: string;
    expirationDate: string;
    createdAt: string;
    updatedAt: string;
}
export interface Help {
    id: string;
    title: string;
    description: string;
    content: HtmlString;
    createdAt: string
}
export interface UserSetting extends Record<AllUserNotificationSettingKey, BooleanLiteral> {
    id: string;
    userId: string;
    notificationChannels: SettingNotificationChannelKey[];
}
export interface SubscriptionPackage {
    id: string;
    title: string;
    description?: string;
}
export interface Subscription {
    id: string;
    title: string;
    name: Plan;
    description: string;
    price: number;
    // packages?: SubscriptionPackage[];
    rc: BooleanLiteral;
    rcQuantity: number;
    rcQuantityFrequency: "daily"|"weekly"|"monthly"|"yearly"
    createdAt: string;
}
export interface UserSubscription {
    id: string;
    userId: string;
    subscriptionId: string;
    startDate: string;
    endDate: string;
    isActive: BooleanLiteral;
    monthDuration: number;

    subscription?: Subscription; // remove this when fetching for all subscribers, HOC will already have such
    subscriber?: User;
    createdAt: string;
}

export type UserStatus = "active"|"inactive"|"suspended"|"pendingInvite"
export type UserType = "admin" | "client" | "partner" | "consultant"
export interface User {
    id: string;
    fullName: string;
    email: string;
    country: string;
    phone: string;
    createdAt: string;
    loginAt: string;
    totalRC: number;
    usedRC: number;
    userType: UserType;
    userStatus: UserStatus;
    defaultVisaProfileId: string;
    referralCode: string;
    userSubscriptionId?: string;
    // visaProfile?: VisaProfile;
    referenceCode: string;
    userCredit: UserCredit;
}
export type UserActivityLog = VisaProfileActivityLog;
export interface Notification {
    title: string;
    message: string;
    createdAt: string;
    data: any; // use the type to determine the data
    type: "consultant";
    status: "read"|"unread";
}
export interface RegisterForm {
    fullName: string;
    phone: string;
    email: string;
    password: string;
    country: string;
    referralCode: string;
}
export interface ServiceCreditCost {
    id: string;
    serviceName: string;
    credits: number;
    createdAt: string;
}
export interface CreditTransaction {
    id: string;
    userId: string;
    price: number;
    planId: string;
    credits: number;
    creditBalance: number;
    transactionId: string;
    metaJson: string;
    createdAt: string;
}
export interface CreditPlan {
    id: string;
    title: string;
    description: string;
    credits: number;
    price: number;
    creditPlanStatus: "active" | "inactive";
    createdAt: string;
}


/* ----------------------------------
 * Base API Response
 * ---------------------------------- */

export interface FlutterApiResponse<T = any, E = any> {
  status: string;
  message: string;
  data: T;
  next_action: E;
}

/* ----------------------------------
 * Customer
 * ---------------------------------- */

export interface FlutterCustomerAddress {
  city: string;
  country: string;
  line1: string;
  line2: string;
  postal_code: string;
  state: string;
}

export interface FlutterCustomerName {
  first: string;
  middle: string;
  last: string;
}

export interface FlutterCustomerPhone {
  country_code: string;
  number: string;
}


// export interface Customer {
//     id?: string;
//     address: FlutterCustomerAddress;
//     name: FlutterCustomerName;
//     phone: FlutterCustomerPhone;
//     email: string;
//     meta: Record<string, string>;
//     created_datetime: string;
// }

export interface FlutterwaveCustomer {
    id: string;
    email: string;
    address: FlutterCustomerAddress;
    name: FlutterCustomerName;
    phone: FlutterCustomerPhone;
}

// export type CreateCustomerObjectResponse =
//   FlutterApiResponse<FlutterwaveCustomer>;

/* ----------------------------------
 * Card
 * ---------------------------------- */

export interface Card {
  encrypted_card_number: string;
  encrypted_expiry_month: string;
  encrypted_expiry_year: string;
  encrypted_cvv: string;
  nonce: string;
}

// export interface CreateCardObjectRequest {
//   type: "card";
//   card: Card;
// }

export interface CardProcessed {
  expiry_month: number;
  expiry_year: number;
  first6: string;
  last4: string;
  network: string; // mastercard, visa, etc
}

export interface CardObject {
  type: "card";
  card: CardProcessed;
  id: string;
  meta: Record<string, string>;
  created_datetime: string;
}

// export type CreateCardObjectResponse =
//   FlutterApiResponse<CardObject>;

/* ----------------------------------
 * Charge Card
 * ---------------------------------- */

// export interface ChargeCardRequest {
//   reference: string;
//   currency: string;
//   customer_id: string;
//   payment_method_id: string;
//   redirect_url: string;
//   amount: number;
//   meta: Record<string, string>;
// }

// export interface ChargeCardNextAction {
//   type: "authorize";
//   authorization: {
//     type: "pin";
//   };
// }

// export type ChargeCardResponse =
//   FlutterApiResponse<any, ChargeCardNextAction>;

/* ----------------------------------
 * PIN Authorization
 * ---------------------------------- */

// export interface PinRequest {
//   authorization: {
//     type: "pin";
//     pin: {
//       nonce: string;
//       encrypted_pin: string;
//     };
//   };
// }

// export interface PinResponse {
//   id: string;
//   status: "pending" | "successful" | "failed";
//   next_action: {
//     type: "redirect_url";
//     redirect_url: {
//       url: string;
//     };
//   };
//   payment_method_details: any;
// }

/* ----------------------------------
 * Payment Method
 * ---------------------------------- */

export interface PaymentMethod {
  type: "card";
  card: Card;
  id: string;
  customer_id: string;
  meta: any;
  device_fingerprint: any;
  client_ip: any;
  created_datetime: string;
}

/* ----------------------------------
 * Processor
 * ---------------------------------- */

// export interface ProcessorResponse {
//   type: "approved" | "declined";
//   code: string; // "00"
// }

/* ----------------------------------
 * Webhook Events
 * ---------------------------------- */

// export interface SuccessEventHookData {
//   id: string;
//   amount: number;
//   currency: string;
//   customer: FlutterwaveCustomer;
//   description: string;
//   meta: any;
//   payment_method: PaymentMethod;
//   redirect_url: string;
//   reference: string;
//   status: string;
//   processor_response: ProcessorResponse;
//   created_datetime: string;
// }

// export interface SuccessEventHook {
//   webhook_id: string;
//   timestamp: number;
//   type: "charge.completed";
//   data: any;
//   signature: string;
//   secret: string;
//   is_live_mode: boolean;
// }

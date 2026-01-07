export interface FlutterResponse<T = any> {
  status: string
  message: string
  data: T;
}

export interface AuthorizeChargeRequest {
  authorization: {
    type: "pin",
    pin: {
      nonce: string
      encrypted_pin: string
    }
  }
}


export interface AuthorizeChargeResponse {
  data: {
    status: string;
    payment_method_details: any;
    next_action: {
      type: "redirect_url" | any,
      redirect_url: {
        url: string
      }
    }
  }
}
/*
 * This file was automatically generated.
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator.js";
import { PaymentContext, SdkContext, SdkResponse } from "../../model/index.js";
import { CancelPaymentRequest, CancelPaymentResponse, ErrorResponse } from "../model/domain/index.js";

import requestSchema from "../../../schemas/CancelPaymentRequest.js";

export function cancelPayment(
  sdkContext: SdkContext
): (merchantId: string, paymentId: string, body: CancelPaymentRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<CancelPaymentResponse, ErrorResponse>> {
  return function(merchantId, paymentId, body, paymentContext): Promise<SdkResponse<CancelPaymentResponse, ErrorResponse>> {
    // validate body
    const isValidRequest = validate(body, requestSchema);
    if (!isValidRequest.valid) {
      const logger = sdkContext.getLogger();
      if (sdkContext.isLoggingEnabled()) {
        logger("error", isValidRequest.errors);
      }
      throw new Error(isValidRequest.errors.toString());
    }
    return json(
      {
        method: "POST",
        modulePath: `/v2/${merchantId}/payments/${paymentId}/cancel`,
        body,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CancelPaymentResponse, ErrorResponse>>;
  };
}

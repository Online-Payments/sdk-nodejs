/*
 * This file was automatically generated.
 */
import { validate } from "jsonschema";
import { json } from "../../utils/communicator.js";
import { PaymentContext, SdkContext, SdkResponse } from "../../model/index.js";
import { CreateTokenRequest, CreatedTokenResponse, ErrorResponse } from "../model/domain/index.js";

import requestSchema from "../../../schemas/CreateTokenRequest.js";

export function createToken(
  sdkContext: SdkContext
): (merchantId: string, body: CreateTokenRequest, paymentContext?: PaymentContext | null) => Promise<SdkResponse<CreatedTokenResponse, ErrorResponse>> {
  return function(merchantId, body, paymentContext): Promise<SdkResponse<CreatedTokenResponse, ErrorResponse>> {
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
        modulePath: `/v2/${merchantId}/tokens`,
        body,
        paymentContext: paymentContext
      },
      sdkContext
    ) as Promise<SdkResponse<CreatedTokenResponse, ErrorResponse>>;
  };
}

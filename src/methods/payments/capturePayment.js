/*
 * This class was auto-generated.
 */
const communicator = require('../../utils/communicator');
const requestSchema = require('../../schemas/CapturePaymentRequest.json');
const validator = require('../../utils/validator');

const capturePayment = (merchantId, paymentId, postData, paymentContext, cb) => {
  // validate postData
  validator.validatePostData(postData, requestSchema);

  communicator.json({
    method: 'POST',
    modulePath: `/v2/${merchantId}/payments/${paymentId}/capture`,
    body: postData,
    paymentContext,
    cb,
  });
};

module.exports = capturePayment;

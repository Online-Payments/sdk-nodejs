/* This file was auto-generated. */
const communicator = require('../../utils/communicator');

module.exports = (sdkContext) => {
  return function (merchantId, uniqueMandateReference, paymentContext, cb = null) {
    communicator.json(
      {
        method: 'POST',
        modulePath: `/v2/${merchantId}/mandates/${uniqueMandateReference}/unblock`,
        body: null,
        paymentContext,
        cb,
      },
      sdkContext
    );
  };
};

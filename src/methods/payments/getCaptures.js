/*
 * This class was auto-generated.
 */
const communicator = require('../../utils/communicator');

const getCaptures = (merchantId, paymentId, paymentContext, cb) => {
  communicator.json({
    method: 'GET',
    modulePath: `/v2/${merchantId}/payments/${paymentId}/captures`,
    body: null,
    paymentContext,
    cb,
  });
};

module.exports = getCaptures;

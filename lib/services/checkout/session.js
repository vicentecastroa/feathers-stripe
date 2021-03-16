const errorHandler = require('../../error-handler');
const Base = require('../base');

module.exports = class Service extends Base {
  create (data) {
    return this.stripe.checkout.sessions.create(data).catch(errorHandler);
  }
};

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');
const Base = require('./base');

module.exports = class Service extends Base {
  find (params) {
    const query = normalizeQuery(params);
    return this.stripe.prices.list(query).catch(errorHandler);
  }

  get (id) {
    return this.stripe.prices.retrieve(id).catch(errorHandler);
  }

  create (data) {
    return this.stripe.prices.create(data).catch(errorHandler);
  }

  patch (...args) {
    return this.update(...args);
  }

  update (id, data) {
    return this.stripe.prices.update(id, data).catch(errorHandler);
  }

  remove (id) {
    return this.stripe.prices.del(id).catch(errorHandler);
  }
};

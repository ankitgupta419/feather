// Initializes the `myService` service on path `/my-service`
const createService = require('./my-service.class.js');
const hooks = require('./my-service.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/my-service', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('my-service');

  service.hooks(hooks);
};

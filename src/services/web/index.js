'use strict';

const hooks = require('./hooks');

class Service {
  constructor(options = {}) {
    this.options = options;
  }

  find(params) {
    return Promise.resolve([]);
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  app.set('view engine', 'jade');

  // Initialize our service with any options it requires
  app.get('/', function (req, res) {
    req.app.service('api/v1/tutorials').find({}).then(tutorials =>
      res.render('homepage/index', {
        tutorials
      })
    );
  });


  app.get('/:platform/:name', function (req, res) {
    let slug = req.params.platform + '/' + req.params.name
    req.app.service('api/v1/projects').get(slug).then(project =>
      res.render('projects/show', {
        project
      })
    );
  });
};

module.exports.Service = Service;

const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');

module.exports = {
  "aws": require('./lib/aws'),
  "dateHelper": require('./lib/date-helper'),
  "db": require('./lib/db'),
  "logger": require('./lib/logger'),
  "routeHelper": require('./lib/route-helper'),
  "urlHelper"; require('./lib/url-helper'),
  "uuidv1": function() {
    return uuidv1();
  },
  "uuidv4": function() {
    return uuidv4();
  }
};
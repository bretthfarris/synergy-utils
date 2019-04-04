const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');

module.exports = {
  "aws": require('./lib/aws'),
  "date": require('./lib/date'),
  "db": require('./lib/db'),
  "logger": require('./lib/logger'),
  "routeHelper": require('./lib/route-helper'),
  "uuidv1": function() {
    return uuidv1();
  },
  "uuidv4": function() {
    return uuidv4();
  }
};
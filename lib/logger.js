const debug = require('debug');
const winston = require('winston');
winston.level = process.env.LOG_LEVEL;

module.exports = {
  debug: debug,
  winston: winston
}
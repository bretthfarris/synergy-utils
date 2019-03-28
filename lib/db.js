const mongoose = require('mongoose');

// Import the environment configuration values
const dotenv = require('dotenv');
dotenv.config();


function connect(database, errCallback) {
  mongoose.connect('mongodb+srv://' + process.env.MONGODB_SERVER + '/' + database, {
    auth: {
      user: process.env.MONGODB_USERNAME,
      password: process.env.MONGODB_PASSWORD
    },
    useNewUrlParser: true
  }).catch((err) => errCallback(err));
}

module.exports = {
  connect,
  connection: mongoose.connection,
  model: mongoose.model,
  schema: mongoose.Schema
}
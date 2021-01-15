const mongo = require('mongoose');

const User = new mongo.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongo.model('User', User);

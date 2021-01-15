const User = require('../models/User');

class UserController {
  async create(req, res) {
    return res.json('Hello');
  }
}

module.exports = new UserController();

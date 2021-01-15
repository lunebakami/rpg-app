const mongo = require('mongoose');

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongo.Connection(
      'mongodb+srv://lune:bakami@database.ffovn.mongodb.net/rpgapp?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

module.exports = new Database();

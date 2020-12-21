const { MongoMemoryServer } = require('mongodb-memory-server');

class MemoryDatabaseServer {
  constructor() {
    this.mongod = new MongoMemoryServer({
      binary: {
        version: '4.0.3'
      },
      autoStart: false
    });
  }

  start() {
    return this.mongod.start();
  }

  stop() {
    return this.mongod.stop();
  }

  getUri() {
    return this.mongod.getUri();
  }
}

module.exports = new MemoryDatabaseServer();

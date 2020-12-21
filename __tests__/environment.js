// eslint-disable-next-line node/no-unpublished-require
const NodeEnvironment = require('jest-environment-node');

const MemoryDatabaseServer = require('../test/MemoryDatabaseServer');

class CustomEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    this.global.__DB_URL__ = await MemoryDatabaseServer.getUri();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;

const MemoryDatabaseServer = require('../test/MemoryDatabaseServer');

module.exports = async () => {
  await MemoryDatabaseServer.stop();
};

const logger = {
  info: (...args) => console.info(...args),
  warn: (...args) => console.warn(...args),
  error: (...args) => console.error(...args),
  debug: (...args) => console.debug(...args),
  trace: (...args) => console.log(...args),
};

class Client {
  constructor(options = {}) {
    this.options = options;
    this.instance = null;
  }

  async connect() {
    const legacyClient = require('./legacy_client');

    if (typeof legacyClient.connect === 'function') {
      this.instance = await legacyClient.connect(this.options);
      return this.instance;
    }

    return this.instance;
  }

  async close() {
    if (this.instance && typeof this.instance.close === 'function') {
      return this.instance.close();
    }

    return undefined;
  }
}

module.exports = {
  Client,
  logger,
};

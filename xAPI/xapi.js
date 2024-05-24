const XAPI = require("@xapi/xapi");

class XAPISingleton {
  static #instance = null;

  constructor() {
    if (!XAPISingleton.#instance) {
      const endpoint = process.env.ENV_LRS_ENDPOINT;
      const username = process.env.ENV_LRS_USERNAME;
      const password = process.env.ENV_LRS_PASSWORD;

      const auth = XAPI.toBasicAuth(username, password);
      XAPISingleton.#instance = new XAPI({
        endpoint: endpoint,
        auth: auth
      });
    }
    return XAPISingleton.#instance;
  }

  static getInstance() {
    if (!XAPISingleton.#instance) {
      XAPISingleton.#instance = new XAPISingleton();
    }
    return XAPISingleton.#instance;
  }

  static async sendStatement(statement) {
    await XAPISingleton.getInstance().sendStatement({
      statement
    });
  }
}

module.exports = XAPISingleton;

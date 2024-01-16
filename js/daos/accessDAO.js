"use strict";

const sequelize = require("../../database/configuration");

class accessDAO {
  access;

  constructor() {
    this.access = sequelize.models.access;
  }

  async getAccess() {
    await this.access.sync();
    return await this.access.findAll();
  }
}

module.exports = accessDAO;

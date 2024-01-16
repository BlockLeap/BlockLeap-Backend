"use strict";

const sequelize = require("../../database/configuration");

class groupDAO {
  group;

  constructor() {
    this.group = sequelize.models.group;
  }

  async getGroups() {
    await this.group.sync();
    return await this.group.findAll();
  }
}

module.exports = groupDAO;

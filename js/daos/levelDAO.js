"use strict";

const sequelize = require("../../database/configuration");

class levelDAO {
  level;

  constructor() {
    this.level = sequelize.models.level;
  }

  async getLevels() {
    await this.level.sync();
    return await this.level.findAll();
  }
}

module.exports = levelDAO;

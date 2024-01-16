"use strict";

const sequelize = require("../../database/configuration");

class setDAO {
  set;

  constructor() {
    this.set = sequelize.models.set;
  }

  async getSets() {
    await this.set.sync();
    return await this.set.findAll();
  }
}

module.exports = setDAO;

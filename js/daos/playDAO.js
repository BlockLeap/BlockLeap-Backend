"use strict";

const sequelize = require("../../database/configuration");

class playDAO {
  play;

  constructor() {
    this.play = sequelize.models.play;
  }

  async getPlays() {
    await this.play.sync();
    return await this.play.findAll();
  }
}

module.exports = playDAO;

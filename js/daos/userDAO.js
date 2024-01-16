"use strict";

const sequelize = require("../../database/configuration");

class userDAO {
  user;

  constructor() {
    this.user = sequelize.models.user;
  }

  async getUsers() {
    await this.user.sync();
    return await this.user.findAll();
  }
}

module.exports = userDAO;

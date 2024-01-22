"use strict";

class userDAO {
  user;

  constructor(sequelize) {
    this.user = sequelize.models.user;
  }

  async getUsers() {
    await this.user.sync();
    return await this.user.findAll();
  }
}

module.exports = userDAO;

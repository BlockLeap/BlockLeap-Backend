"use strict";

const userQueries = require("./queries/userQueries");

class userDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }

  async getUserById(id) {
    return await this.query(userQueries.getUserById, [id]);
  }

  async createUser(user) {
    return await this.query(userQueries.createUser, [
      user.name,
      user.role,
      user.password,
    ]);
  }
}

module.exports = userDAO;

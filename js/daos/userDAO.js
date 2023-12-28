"use strict";

const BaseDAO = require("./baseDAO");
const userQueries = require("./queries/userQueries");

class userDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }

  async getUserById(id) {
    return await this.query(userQueries.getUserById, [id]);
  }

  async createUser(user){
    return await this.query(userQueries.createUser, [user.name, user.role, user.password]);
  }

}

module.exports = userDAO;

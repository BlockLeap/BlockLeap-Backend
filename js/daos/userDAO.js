"use strict";

const BaseDAO = require("./baseDAO");
const userQueries = require("./queries/userQueries");

class userDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }
}

module.exports = userDAO;

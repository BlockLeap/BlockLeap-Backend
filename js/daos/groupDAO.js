"use strict";

const groupQueries = require("./queries/groupQueries");

class groupDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }
}

module.exports = groupDAO;

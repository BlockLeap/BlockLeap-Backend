"use strict";

const playQueries = require("./queries/playQueries");

class playDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }
}

module.exports = playDAO;

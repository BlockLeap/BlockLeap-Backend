"use strict";

const setQueries = require("./queries/setQueries");

class setDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }
}

module.exports = setDAO;

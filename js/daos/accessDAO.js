"use strict";

const accessQueries = require("./queries/accessQueries");

class accessDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }
}

module.exports = accessDAO;

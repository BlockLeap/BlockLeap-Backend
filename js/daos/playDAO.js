"use strict";

const BaseDAO = require("./baseDAO");
const playQueries = require("./queries/playQueries");

class playDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }
}

module.exports = playDAO;

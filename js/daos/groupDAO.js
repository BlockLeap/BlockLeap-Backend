"use strict";

const BaseDAO = require("./baseDAO");
const groupQueries = require("./queries/groupQueries");

class groupDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }
}

module.exports = groupDAO;

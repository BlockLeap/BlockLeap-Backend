"use strict";

const BaseDAO = require("./baseDAO");
const accessQueries = require("./queries/accessQueries");

class accessDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }
}

module.exports = accessDAO;

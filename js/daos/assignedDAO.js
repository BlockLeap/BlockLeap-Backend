"use strict";

const BaseDAO = require("./baseDAO");
const assignedQueries = require("./queries/assignedQueries");

class assignedDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }
}

module.exports = assignedDAO;

"use strict";

const BaseDAO = require("./baseDAO");
const setQueries = require("./queries/setQueries");

class setDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }
}

module.exports = setDAO;

"use strict";

const BaseDAO = require("./baseDAO");
const levelQueries = require("./queries/levelQueries");

class levelDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }

  async createLevel(data, category) {
    return await this.query(levelQueries.createLevel, [data, category]);
  }

  async getLevelsByCategory(id) {
    return await this.query(levelQueries.getLevelsByCategory, [id]);
  }
}

module.exports = levelDAO;

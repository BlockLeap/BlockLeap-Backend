"use strict";

const BaseDAO = require("./baseDAO");
const levelQueries = require("./queries/levelQueries");

class levelDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }

  async createLevel(information) {
    return await this.query(levelQueries.createLevel, [information]);
  }

  async getLevelById(id) {
    return await this.query(levelQueries.getLevelById, [id]);
  }
}

module.exports = levelDAO;

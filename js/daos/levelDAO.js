"use strict";

const BaseDAO = require("./baseDAO");
const levelQueries = require("./queries/levelQueries");

class levelDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }

  async createLevel(level) {
    return await this.query(levelQueries.createLevel, [level.user, level.category, level.title, level.data]);
  } 

  async getLevelbyId(id){
    return await this.query(levelQueries.getLevelById, [id]);
  }

  async getLevelsByCategory(id) {
    return await this.query(levelQueries.getLevelsByCategory, [id]);
  }

  async getCommunityLevels() {
    return await this.query(levelQueries.getCommunityLevels);
  }
}

module.exports = levelDAO;

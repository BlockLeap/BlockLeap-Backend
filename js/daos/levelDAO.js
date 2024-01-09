"use strict";

class levelDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }

  async createLevel(level) {
    return await this.query(levelQueries.createLevel, [
      level.user,
      level.category,
      level.title,
      level.data,
    ]);
  }

  async getLevelbyId(id) {
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

"use strict";

class levelDAO {
  level;

  constructor(sequelize) {
    this.level = sequelize.models.level;
  }

  async getLevels() {
    await this.level.sync();
    return await this.level.findAll();
  }

  async getLevel(id){
    await this.level.sync();
    return await this.level.findByPk(id)
  }

  
}

module.exports = levelDAO;

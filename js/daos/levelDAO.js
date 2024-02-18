"use strict";

const category = require("../../database/model/category");
const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class levelDAO {
  level;

  constructor(sequelize) {
    this.level = sequelize.models.level;
  }

  async createLevel(level){
    await this.level.sync();
    const createdLevel = await this.level.create({
      user: level.user,
      category: level.category,
      self: level.self,
      title: level.title,
      data: level.data
    });

    if (!createdLevel) {
      throw new ErrorException(ErrorCode.CantCreate);
    }

    return createdLevel;
  }

  async getAllLevels() {
    await this.level.sync();
    return await this.level.findAll({
      attributes: ['id', 'user', 'category', 'self', 'title']
    });
  }

  async getLevel(id){
    await this.level.sync();
    const foundLevel= await this.level.findByPk(id)
   
    if (!foundLevel) {
      throw new ErrorException(ErrorCode.NotFound);
    }

    return foundLevel;
  }

  async getLevelsByCategory(id) {
    await this.level.sync();
    return await this.level.findAll({
      where: {
        category: id,
      },
    });
  }

  async countLevelsByCategory(id) {
    await this.level.sync();
    return await this.level.count({
      where: {
        category: id,
      },
    });
  }
}

module.exports = levelDAO;

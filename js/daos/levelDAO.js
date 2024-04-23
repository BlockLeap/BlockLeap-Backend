"use strict";

const { Op } = require("sequelize");
const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");
const { create } = require("domain");
const USER_ADMIN = 5;
class levelDAO {
  sequelize;
  level;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.level = sequelize.models.level;
  }

  async createLevel(level) {
    await this.level.sync();
    const createdLevel = await this.level.create({
      user: level.user,
      category: level.category,
      self: level.self,
      description: level.description,
      title: level.title,
      data: level.data,
      minBlocks: level.minBlocks,
      description: level.description,
    });
    if (!createdLevel) throw new ErrorException(ErrorCode.CantCreate);
    return createdLevel;
  }

  async deleteLevel(id) {
    await this.level.sync();
    await this.level.destroy({
      where: {
        id: id,
      },
    });
  }

  async getAllLevels() {
    await this.level.sync();
    return await this.level.findAll({
      attributes: ["id", "user", "category", "self", "title"],
    });
  }

  async getLevel(id) {
    await this.level.sync();
    const found = await this.level.findByPk(id);
    if (!found) throw new ErrorException(ErrorCode.NotFound);
    return found;
  }

  async getLevelsByCategory(id) {
    await this.level.sync();
    return await this.level.findAll({
      where: {
        category: id,
      },
    });
  }

  async getCommunityLevels() {
    await this.level.sync();
    return await this.level.findAll({
      where: {
        category: {
          [Op.eq]: null,
        },
      },
    });
  }

  async getTotalOfficialLevels(){
    await this.level.sync();
    return await this.level.count({
      where: {
        user: USER_ADMIN,
      },
    });
  }
}

module.exports = levelDAO;

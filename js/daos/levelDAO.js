"use strict";

const { Op } = require("sequelize");
const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class levelDAO {
  level;
  user;

  constructor(sequelize) {
    this.level = sequelize.models.level;
    this.user = sequelize.models.user;
  }

  async createLevel(level) {
    await this.level.sync();
    const createdLevel = await this.level.create({
      user: level.user,
      category: level.category,
      self: level.self,
      title: level.title,
      data: level.data,
    });
    if (!createdLevel) throw new ErrorException(ErrorCode.CantCreate);
    return createdLevel;
  }

  async deleteLevel(id) {
    await this.level.sync();
    this.level.destroy({
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
      include: [
        {
          model: this.user,
          as: "user_user",
          where: {
            role: {
              [Op.ne]: "Admin",
            },
          },
        },
      ],
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

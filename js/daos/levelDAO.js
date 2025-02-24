"use strict";

const { Op } = require("sequelize");
const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");
const { create } = require("domain");
const USER_ADMIN = 5;
class levelDAO {
  sequelize;
  level;
  classLevel;
  set;
  setlevels;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.level = sequelize.models.level;
    this.classLevel = sequelize.models.classLevel;
    this.userGroup=sequelize.models.usergroup;
    this.set=sequelize.models.set;
    this.setlevels=sequelize.models.setlevels;
    this.setGroup=sequelize.models.setgroups;
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
      minBlocks: level.minBlocks
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
  async getUserLevels(userID){
    await this.level.sync();
    return await this.level.findAll({
      where: {
        user: userID,
      }
    });
  }

  async getUserGroup(userId){
    await this.userGroup.sync();
    return await this.userGroup.findAll({
      raw:true,
      where: {
        user : userId,
      }
    });
  }

  async getclassLevels(classId){
    await this.classLevel.sync();
    return await this.classLevel.findAll({
      where: {
        idClase: classId,
      }
    });
  }

  async getsetLevelsIds(setId){
    await this.setlevels.sync();
    return await this.setlevels.findAll({
      where: {
        set_id: setId,
      }
    });
  }

  async getclassLevelsByIds(idArray){
    await this.classLevel.sync();
    return await this.classLevel.findAll({
      where: {
        id: idArray,
      }
    });
  }

  async getLevel(id) {
    await this.level.sync();
    const found = await this.level.findByPk(id);
    if (!found) throw new ErrorException(ErrorCode.NotFound);
    return found;
  }

  async getSetLevel(id) {
    await this.classLevel.sync();
    const found = await this.classLevel.findByPk(id);
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

  async getsSetsByGroup(id) {
    await this.setGroup.sync();
    return await this.setGroup.findAll({
      where: {
        group_id: id,
      },
    });
  }

  async getsSetsById(id) {
    await this.set.sync();
    return await this.set.findAll({
      where: {
        id: id,
      },
    });
  }

  async getCommunityLevels() {
    await this.level.sync();
    return await this.level.findAndCountAll({
      where: {
        category: {
          [Op.eq]: null,
        },
      },
      limit:5,
      offset:0
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

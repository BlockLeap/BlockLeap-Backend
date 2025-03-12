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
  levelTags;
  classLevels;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.level = sequelize.models.level;
    this.classLevel = sequelize.models.classLevel;
    this.userGroup=sequelize.models.usergroup;
    this.set=sequelize.models.set;
    this.setlevels=sequelize.models.setlevels;
    this.setGroup=sequelize.models.setgroups;
    this.levelTags=sequelize.models.leveltags;
    this.classLevels = sequelize.models.classlevels;
  }

  async createLevel(level) {
    await this.classLevel.sync();
    const createdLevel = await this.classLevel.create({
      user: level.user,
      category: level.category,
      self: level.self,
      description: level.description,
      title: level.title,
      data: level.data,
      minBlocks: level.minBlocks,
      published: level.published
    });
    if (!createdLevel) throw new ErrorException(ErrorCode.CantCreate);
    return createdLevel;
  }

  async updateLevel(level) {
    await this.classLevel.sync();
    const modifiedLevel = await this.classLevel.update({
      category: level.category,
      self: level.self,
      description: level.description,
      title: level.title,
      data: level.data,
      minBlocks: level.minBlocks,
      published: level.published
    },{where: {id:level.id,user:level.user}});
    if (!modifiedLevel) throw new ErrorException(ErrorCode.CantUpdate);
    return modifiedLevel;
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
    await this.classLevel.sync();
    return await this.classLevel.findAll({
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

  async getclassLevels(id_clase){

    await this.classLevels.sync();

    const foundLevels =  await this.classLevels.findAll({
      where: {
        id_clase: id_clase,
      }

    });

    return foundLevels;

  }

  async getclassLevelsPaginated(id_clase,page=1) {
    const perPage=6;const offset=(page-1)*perPage;  
    await this.classLevels.sync();
    return await this.classLevels.findAndCountAll({
      where: {
        id_clase: id_clase,
      },
      limit:perPage,
      offset:offset
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

  async getLevels(ids) {
    await this.classLevel.sync();  // Sincronizar la tabla
  
    if (!Array.isArray(ids) || ids.length === 0) {
      throw new Error("El parámetro debe ser un array de IDs válido.");
    }
  
    const foundLevels = await this.classLevel.findAll({
      where: {
        id: ids  // Buscar niveles cuyo ID esté en el array
      }
    });
  
    if (foundLevels.length === 0) {
      throw new ErrorException(ErrorCode.NotFound);  // Si no se encuentran niveles
    }
  
    return foundLevels;  // Devolver los niveles encontrados
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

  async getLevelsByTag(tag) {
    await this.levelTags.sync();
    return await this.levelTags.findAll({
      where: {
        tag: tag
      },
    });
  }


  async deleteLevelsTags(level_id) {
    await this.levelTags.sync();
    return await this.levelTags.destroy({
      where:{level_id:level_id}
    });
  }
  async createLevelsTag(data) {
    await this.levelTags.sync();
    return await this.levelTags.bulkCreate (data);
  }

  async getCommunityLevels(page=1) {
    const perPage=6;const offset=(page-1)*perPage;  
    await this.classLevel.sync();  
    return await this.classLevel.findAndCountAll({
      where: {
        category: {
          [Op.eq]: null,
        },
        published:true
      },
      limit:perPage,
      offset:offset
    });
  }
  async getCommunityLevelsByIds(page=1,idArray) {
    const perPage=6;const offset=(page-1)*perPage;  
    await this.classLevel.sync();  
    return await this.classLevel.findAndCountAll({
      where: {
        category: {
          [Op.eq]: null,
        },
        published:true,
        id:idArray
      },
      limit:perPage,
      offset:offset
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

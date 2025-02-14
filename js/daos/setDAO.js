"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class setDAO {
  sequelize;
  set;
  setLevels;
  setGroups;
  level;
  userGroup;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.set = sequelize.models.set;
    this.setLevels = sequelize.models.setLevels;
    this.setGroups = sequelize.models.setGroups;
    this.level = sequelize.models.level;
    this.userGroup = sequelize.models.usergroup;
  }

  async createSet(setData) {
    await this.set.sync();
    const createdSet = await this.set.create({
      name: setData.name,
      description: setData.description,
    });
    if (!createdSet) throw new ErrorException(ErrorCode.CantCreate);
    return createdSet;
  }

  async assignLevelsToSet(setId, levelIds) {
    await this.setLevels.sync();
    const assignments = levelIds.map(levelId => ({ set_id: setId, level_id: levelId }));
    return await this.setLevels.bulkCreate(assignments);
  }

  async assignSetToGroups(setId, groupIds) {
    await this.setGroups.sync();
    const assignments = groupIds.map(groupId => ({ set_id: setId, group_id: groupId }));
    return await this.setGroups.bulkCreate(assignments);
  }

  async getSetById(setId) {
    await this.set.sync();
    const foundSet = await this.set.findByPk(setId, {
      include: [
        {
          model: this.level,
          as: "levels",
        },
        {
          model: this.userGroup,
          as: "userGroups",
        },
      ],
    });
    if (!foundSet) throw new ErrorException(ErrorCode.NotFound);
    return foundSet;
  }

  async getAllSets() {
    await this.set.sync();
    return await this.set.findAll();
  }

  async deleteSet(setId) {
    await this.set.sync();
    await this.set.destroy({ where: { id: setId } });
  }
}

module.exports = setDAO;

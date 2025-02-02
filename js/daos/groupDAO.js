"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class groupDAO {
  sequelize;
  group;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.group = sequelize.models.group;
  }

  async createGroup(groupName) {
    await this.group.sync();
    const createdGroup = await this.group.create({
      name: groupName,
    });
    if (!createdGroup) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
    return createdGroup;
  }

  async getAllGroups() {
    await this.group.sync();
    return await this.group.findAll();
  }

  async getGroupById(id) {
    await this.group.sync();
    const foundGroup = await this.group.findByPk(id);
    if (!foundGroup) {
      throw new ErrorException(ErrorCode.NotFound);
    }
    return foundGroup;
  }

  async getGroupByCode(code) {
    await this.group.sync();
    const foundGroup = await this.group.findOne(
      {where:{code:code}}
    );
    if (!foundGroup) {
      throw new ErrorException(ErrorCode.NotFound);
    }
    return foundGroup;
  }
}

module.exports = groupDAO;

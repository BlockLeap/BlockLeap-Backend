"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class userGroupDAO {
  sequelize;
  userGroup;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.userGroup = sequelize.models.usergroup;
  }

  async createUserGroup(userGroupData) {
    await this.userGroup.sync();
    const createdUserGroup = await this.userGroup.create({
      group: userGroupData.groupId,
      user: userGroupData.userId,
      role: userGroupData.role,
    });
    if (!createdUserGroup) throw new ErrorException(ErrorCode.CantCreate);
    return createdUserGroup;
  }

  async getUserGroup() {
    await this.userGroup.sync();
    return await this.userGroup.findAll();
  }

  async findByGroupId(id) {
    await this.userGroup.sync();
    const foundMembers = await this.userGroup.findAll({
      where: {
        group: id,
      },
    });
    if (!foundMembers) throw new ErrorException(ErrorCode.NotFound);

    return foundMembers;
  }

  async findByUserId(id) {
    await this.userGroup.sync();
    const userGroups = await this.userGroup.findAll({
      where: {
        user: id,
      },
    });

    if (!userGroups) throw new ErrorException(ErrorCode.NotFound);
    
    return userGroups;
  }
}

module.exports = userGroupDAO;

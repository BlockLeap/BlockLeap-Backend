"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class setDAO {
  set;

  constructor(sequelize) {
    this.set = sequelize.models.set;
  }

  async createSet(setData) {
    await this.set.sync();
    const createdSet = await this.set.create({
      group: setData.groupId,
      user: setData.userId,
      role: setData.role,
    });

    if (!createdSet) throw new ErrorException(ErrorCode.CantCreate);
    return createdSet;
  }

  async getSets() {
    await this.set.sync();
    return await this.set.findAll();
  }

  async fingByGroupId(id) {
    await this.set.sync();
    const foundMembers = await this.set.findAll({
      where: {
        group: id,
      },
    });
    if (!foundMembers) throw new ErrorException(ErrorCode.NotFound);

    return foundMembers;
  }
}

module.exports = setDAO;

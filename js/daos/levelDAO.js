"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

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
    const foundLevel= await this.level.findByPk(id)
   
    if (!foundLevel) {
      throw new ErrorException(ErrorCode.NotFound);
    }

    return foundLevel;
  }

}

module.exports = levelDAO;

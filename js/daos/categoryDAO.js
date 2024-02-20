"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class categoryDAO {
  category;

  constructor(sequelize) {
    this.category = sequelize.models.category;
  }

  async getCategories() {
    await this.category.sync();
    return await this.category.findAll();
  }

  async getCategoryById(id) {
    await this.category.sync();
    const found = await this.category.findByPK(id);
    if (!found) throw new ErrorException(ErrorCode.NotFound);
    return found;
  }
}

module.exports = categoryDAO;

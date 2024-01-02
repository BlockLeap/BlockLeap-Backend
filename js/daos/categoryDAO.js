"use strict";

const Category = require("../../database/model/category");

class categoryDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }

  async getCategories() {
    await Category.sync();
    return await Category.findAll();
  }

  async getCategoryById(id) {
    await Category.sync();
    return await Category.findAll({
      where: {
        id: id,
      },
    });
  }
}

module.exports = categoryDAO;

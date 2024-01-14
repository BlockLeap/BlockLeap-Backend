"use strict";

const sequelize = require("../../database/configuration");

class categoryDAO {
  category;

  constructor() {
    this.category = sequelize.models.category;
  }

  async getCategories() {
    await this.category.sync();
    return await this.category.findAll();
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

"use strict";

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
    return await this.category.findAll({
      where: {
        id: id,
      },
    });
  }
}

module.exports = categoryDAO;

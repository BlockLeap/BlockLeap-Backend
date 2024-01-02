"use strict";

const categoryQueries = require("./queries/categoryQueries");

class categoryDAO {
  sequelize;

  constructor(sequelize) {
    this.sequelize = sequelize;
  }

  async getCategories() {
    return await this.query(categoryQueries.getCategories);
  }

  async getCategoryById(id) {
    return await this.query(categoryQueries.getCategoryById, [id]);
  }
}

module.exports = categoryDAO;

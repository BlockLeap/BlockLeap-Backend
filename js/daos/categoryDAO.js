"use strict";

const BaseDAO = require("./baseDAO");
const categoryQueries = require("./queries/categoryQueries");

class categoryDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }

  async getCategories() {
    return await this.query(categoryQueries.getCategories);
  }

  async getCategoryById(id) {
    return await this.query(categoryQueries.getCategoryById, [id]);
  }
}

module.exports = categoryDAO;

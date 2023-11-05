"use strict";

module.exports = {
  getCategories: `SELECT * FROM category`,

  getCategoriesById: `SELECT * FROM level WHERE id like ?`,
};

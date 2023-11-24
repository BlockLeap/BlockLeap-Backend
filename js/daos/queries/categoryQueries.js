"use strict";

module.exports = {
  getCategories: `SELECT * FROM category`,

  getCategoryById: `SELECT * FROM level WHERE id like ?`,
};

"use strict";

module.exports = {
  createLevel: `INSERT INTO level(data, category) VALUES(?, ?)`,

  getLevelsByCategory: `SELECT COUNT(*) FROM level WHERE category like ?`,
};

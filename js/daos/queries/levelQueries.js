"use strict";

module.exports = {
  createLevel: `INSERT INTO level(user, category, title, data) VALUES(?, ?, ?, ?)`,

  getLevelsByCategory: `SELECT*  FROM level WHERE category like ?`,

  getCommunityLevels: `SELECT * FROM level JOIN user ON level.user = user.id WHERE user.role <> "Admin"`,
};

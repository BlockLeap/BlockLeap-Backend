"use strict";

module.exports = {
  createLevel: `INSERT INTO level(data, category) VALUES(?, ?)`,

  getLevelsByCategory: `SELECT COUNT(*) FROM level WHERE category like ?`,

  getCommunityLevels: `SELECT * FROM level JOIN user ON level.user = user.id WHERE user.role <> "Admin"`,
};

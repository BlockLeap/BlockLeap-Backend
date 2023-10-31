"use strict";

module.exports = {
  createLevel: `INSERT INTO level(level) VALUES(?)`,

  getLevelById: `SELECT * FROM level WHERE id like ?`,
};

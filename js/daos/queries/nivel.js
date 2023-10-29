"use strict";

module.exports = {
  createLevel: `INSERT INTO nivel(nivel) VALUES(?)`,

  getLevelById: `SELECT * FROM nivel WHERE id = ?`,
};

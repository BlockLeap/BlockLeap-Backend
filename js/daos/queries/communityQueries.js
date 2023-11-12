"use strict";

module.exports = {
  createLevel: `INSERT INTO community(author, data, name) VALUES(?,?,?)`,

  getLevels: `SELECT C.data, C.name, U.name AS Author FROM community C JOIN user U 
  ON C.author = U.id`,
};

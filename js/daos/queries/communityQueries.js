"use strict";

module.exports = {
  createLevel: `INSERT INTO comunity(author, data, name) VALUES(?,?,?)`,

  getLevels: `SELECT C.data, C.name, U.name AS Author FROM comunity C JOIN user U 
  ON C.author = U.id`,
};

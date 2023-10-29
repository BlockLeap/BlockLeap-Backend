"use strict";

const level = require("./queries/nivel");

class daoNivel {
  pool;

  constructor(pool) {
    this.pool = pool;
  }

  createLevel(level) {
    this.pool.getConnection(function (error, connection) {
      if (error != null) {
        callback(new Error("Error de conexión a la base de datos"));
      } else {
        connection.query(`INSERT INTO nivel(nivel) VALUES(?)`, [level]);
      }
    });
  }

  async getLevelById(id) {
    return this.pool.getConnection(function (error, connection) {
      if (error != null) {
        callback(new Error("Error de conexión a la base de datos"));
      } else {
        connection.query(level.getLevelById, [id]);
      }
    });
  }
}

module.exports = daoNivel;

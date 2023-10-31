"use strict";

class BaseDAO {
  pool;

  constructor(pool) {
    this.pool = pool;
  }

  // Devuelve una promesa que se resuelve con una conexión a la base de datos o que se rechaza con un error
  async getConnection() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((error, connection) => {
        if (error) {
          console.error(
            `Error al obtener la conexión a la base de datos: ${error}`
          );
          reject(error);
        } else resolve(connection);
      });
    });
  }

  // Recibe todos los parámetros de la query
  async query(...params) {
    // Obtenemos la conexión y devolvemos una promesa que se resuelve con el resultado de la consulta
    const connection = await this.getConnection();

    return new Promise((resolve, reject) => {
      connection.query(...params, (error, result) => {
        connection.release(); // Liberamos la conexión una vez tenemos los resultados

        error ? reject(error) : resolve(result);
      });
    });
  }
}

module.exports = BaseDAO;

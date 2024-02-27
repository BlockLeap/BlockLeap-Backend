require("dotenv").config();

const { Sequelize } = require("sequelize");

const init = require("./model/init");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  }
);

init(sequelize);

// Decomentar para sincronizar todo el modelo
// sequelize.sync()
//   .then(() => {
//     console.log('¡Base de datos sincronizada correctamente!');
//   })
//   .catch(err => {
//     console.error('Error al sincronizar la base de datos:', err);
//   });

module.exports = sequelize;

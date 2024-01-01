const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("articoding", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

exports.sequelize = sequelize;

const { Sequelize } = require("sequelize");

const init = require("./model/init");

const sequelize = new Sequelize("articoding", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

init(sequelize);

module.exports = sequelize;

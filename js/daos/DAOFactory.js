const sequelize = require("../../database/configuration");

const levelDAO = require("./levelDAO");
const categoryDAO = require("./categoryDAO");
const accessDAO = require("./accessDAO");
const playDAO = require("./playDAO");
const assignedDAO = require("./assignedDAO");
const groupDAO = require("./groupDAO");
const userGroupDAO = require("./userGroupDAO");
const userDAO = require("./userDAO");
const setDAO = require("./setDAO")

class DAOFactory {
  getLevelDAO() {
    return new levelDAO(sequelize);
  }

  getCategoryDAO() {
    return new categoryDAO(sequelize);
  }

  getAccessDAO() {
    return new accessDAO(sequelize);
  }

  getPlayDAO() {
    return new playDAO(sequelize);
  }

  getAssignedDAO() {
    return new assignedDAO(sequelize);
  }

  getGroupDAO() {
    return new groupDAO(sequelize);
  }

  getUserGroupDAO() {
    return new userGroupDAO(sequelize);
  }

  getUserDAO() {
    return new userDAO(sequelize);
  }
  getSetDAO() {
    return new setDAO(sequelize);
  }
}

module.exports = DAOFactory;

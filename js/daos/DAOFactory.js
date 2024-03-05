const sequelize = require("../../database/configuration");

const levelDAO = require("./levelDAO");
const levelDAOStub = require("../../test/stubs/levelDAOStub");
const categoryDAO = require("./categoryDAO");
const accessDAO = require("./accessDAO");
const playDAO = require("./playDAO");
const assignedDAO = require("./assignedDAO");
const groupDAO = require("./groupDAO");
const setDAO = require("./setDAO");
const userDAO = require("./userDAO");

class DAOFactory {
  getLevelDAO() {
    if (process.env.NODE_ENV === "testing") return new levelDAOStub();
    else return new levelDAO(sequelize);
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

  getSetDAO() {
    return new setDAO(sequelize);
  }

  getUserDAO() {
    return new userDAO(sequelize);
  }
}

module.exports = DAOFactory;

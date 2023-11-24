const { getPool } = require("../../database/configuration");

const levelDAO = require("./levelDAO");
const categoryDAO = require("./categoryDAO");
const accessDAO = require("./accessDAO");
const playDAO = require("./playDAO");
const assignedDAO = require("./assignedDAO");
const groupDAO = require("./groupDAO");
const setDAO = require("./setDAO");
const userDAO = require("./userDAO");

class DAOFactory {
  getLevelDAO() {
    return new levelDAO(getPool());
  }

  getCategoryDAO() {
    return new categoryDAO(getPool());
  }

  getAccessDAO() {
    return new accessDAO(getPool());
  }

  getPlayDAO() {
    return new playDAO(getPool());
  }

  getAssignedDAO() {
    return new assignedDAO(getPool());
  }

  getGroupDAO() {
    return new groupDAO(getPool());
  }

  getSetDAO() {
    return new setDAO(getPool());
  }

  getUserDAO() {
    return new userDAO(getPool());
  }
}

module.exports = DAOFactory;

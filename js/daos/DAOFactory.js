const { getSequelize } = require("../../database/configuration");

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
    return new levelDAO(getSequelize());
  }

  getCategoryDAO() {
    return new categoryDAO(getSequelize());
  }

  getAccessDAO() {
    return new accessDAO(getSequelize());
  }

  getPlayDAO() {
    return new playDAO(getSequelize());
  }

  getAssignedDAO() {
    return new assignedDAO(getSequelize());
  }

  getGroupDAO() {
    return new groupDAO(getSequelize());
  }

  getSetDAO() {
    return new setDAO(getSequelize());
  }

  getUserDAO() {
    return new userDAO(getSequelize());
  }
}

module.exports = DAOFactory;

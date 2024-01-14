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
    return new levelDAO();
  }

  getCategoryDAO() {
    return new categoryDAO();
  }

  getAccessDAO() {
    return new accessDAO();
  }

  getPlayDAO() {
    return new playDAO();
  }

  getAssignedDAO() {
    return new assignedDAO();
  }

  getGroupDAO() {
    return new groupDAO();
  }

  getSetDAO() {
    return new setDAO();
  }

  getUserDAO() {
    return new userDAO();
  }
}

module.exports = DAOFactory;

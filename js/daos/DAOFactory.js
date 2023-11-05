const { getPool } = require("../../database/configuration");

const levelDAO = require("./levelDAO");
const categoryDAO = require("./categoryDAO");

class DAOFactory {
  getLevelDAO() {
    return new levelDAO(getPool());
  }

  getCategoryDAO() {
    return new categoryDAO(getPool());
  }
}

module.exports = DAOFactory;

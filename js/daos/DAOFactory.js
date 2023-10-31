const { getPool } = require("../../database/configuration");

const levelDAO = require("./levelDAO");

class DAOFactory {
  getLevelDAO() {
    return new levelDAO(getPool());
  }
}

module.exports = DAOFactory;

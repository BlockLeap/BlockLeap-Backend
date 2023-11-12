const { getPool } = require("../../database/configuration");

const levelDAO = require("./levelDAO");
const categoryDAO = require("./categoryDAO");
const communityDAO = require("./communityDAO");

class DAOFactory {
  getLevelDAO() {
    return new levelDAO(getPool());
  }

  getCategoryDAO() {
    return new categoryDAO(getPool());
  }
  getCommunityDAO() {
    return new communityDAO(getPool());
  }
}

module.exports = DAOFactory;

const { getPool } = require("../../database/configuration");

const levelDAO = require("./levelDAO");
const communityDAO = require("./communityDAO");

class DAOFactory {
  getLevelDAO() {
    return new levelDAO(getPool());
  }
  getCommunityDAO(){
    return new communityDAO(getPool());
  }
}

module.exports = DAOFactory;

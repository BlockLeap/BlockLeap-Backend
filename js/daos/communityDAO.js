"use strict";

const BaseDAO = require("./baseDAO");
const comtQueries = require("./queries/communityQueries");

class communityDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }

  async createData(author, data, name) {
    return await this.query(comtQueries.createLevel, [author], [data], [name]);
  }

  async getLevels() {
    return await this.query(comtQueries.getLevels);
  }
}

module.exports = communityDAO;

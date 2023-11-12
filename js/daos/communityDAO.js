"use strict";

const BaseDAO = require("./baseDAO");
const communityQueries = require("./queries/communityQueries");

class communityDAO extends BaseDAO {
  constructor(pool) {
    super(pool);
  }

  async createData(author, data, name) {
    return await this.query(
      communityQueries.createLevel,
      [author],
      [data],
      [name]
    );
  }

  async getLevels() {
    return await this.query(communityQueries.getLevels);
  }
}

module.exports = communityDAO;

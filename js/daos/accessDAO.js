"use strict";

class accessDAO {
  sequelize;
  access;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.access = sequelize.models.access;
  }

  async getAccess() {
    await this.access.sync();
    return await this.access.findAll();
  }
}

module.exports = accessDAO;

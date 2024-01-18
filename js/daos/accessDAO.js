"use strict";

class accessDAO {
  access;

  constructor(sequelize) {
    this.access = sequelize.models.access;
  }

  async getAccess() {
    await this.access.sync();
    return await this.access.findAll();
  }
}

module.exports = accessDAO;

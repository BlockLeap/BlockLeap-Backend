"use strict";

class groupDAO {
  group;

  constructor(sequelize) {
    this.group = sequelize.models.group;
  }

  async getGroups() {
    await this.group.sync();
    return await this.group.findAll();
  }
}

module.exports = groupDAO;

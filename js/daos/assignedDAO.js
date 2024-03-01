"use strict";

class assignedDAO {
  sequelize;
  assigned;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.assigned = sequelize.models.assigned;
  }

  async getAssigned() {
    await this.assigned.sync();
    return await this.assigned.findAll();
  }
}

module.exports = assignedDAO;

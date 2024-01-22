"use strict";

class assignedDAO {
  assigned;

  constructor(sequelize) {
    this.assigned = sequelize.models.assigned;
  }

  async getAssigned() {
    await this.assigned.sync();
    return await this.assigned.findAll();
  }
}

module.exports = assignedDAO;

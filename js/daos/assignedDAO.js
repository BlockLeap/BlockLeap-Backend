"use strict";

const sequelize = require("../../database/configuration");

class assignedDAO {
  assigned;

  constructor() {
    this.assigned = sequelize.models.assigned;
  }

  async getAssigned() {
    await this.assigned.sync();
    return await this.assigned.findAll();
  }
}

module.exports = assignedDAO;

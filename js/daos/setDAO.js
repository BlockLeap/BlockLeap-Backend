"use strict";

class setDAO {
  set;

  constructor(sequelize) {
    this.set = sequelize.models.set;
  }

  async getSets() {
    await this.set.sync();
    return await this.set.findAll();
  }
}

module.exports = setDAO;

"use strict";

class playDAO {
  sequelize;
  play;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.play = sequelize.models.play;
  }

  async getPlays() {
    await this.play.sync();
    return await this.play.findAll();
  }
}

module.exports = playDAO;

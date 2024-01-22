"use strict";

class playDAO {
  play;

  constructor(sequelize) {
    this.play = sequelize.models.play;
  }

  async getPlays() {
    await this.play.sync();
    return await this.play.findAll();
  }
}

module.exports = playDAO;

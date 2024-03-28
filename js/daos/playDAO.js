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

  async savePlayStatistics({ user, level, stars, attempts }) {
    await this.play.sync();
    const createdPlay = await this.play.create({
      user,
      level,
      stars,
      attempts,
    });
    if (!createdPlay) throw new ErrorException(ErrorCode.CantCreate);
  }
}

module.exports = playDAO;

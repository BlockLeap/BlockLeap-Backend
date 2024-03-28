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

  async getAllUserLevelStatistics(idUser) {
    await this.play.sync();
    const levelStatistics = await this.play.findAll({
      where: {
        user: idUser,
      },
    });
    if (!levelStatistics) throw new ErrorException(ErrorCode.NotFound);

    return levelStatistics;
  }
}

module.exports = playDAO;

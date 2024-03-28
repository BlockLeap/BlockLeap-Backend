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

  async updatePlayStatistics({ user, level, stars, attempts }) {
    await this.play.sync();
    const [updatedRowsCount, updatedRows] = await this.play.update(
      { stars, attempts },
      {
        where: {
          user: user, // Asegúrate de que user, level o ambos formen un criterio único para identificar un registro específico
          level: level,
        },
      }
    );
    if (updatedRowsCount === 0) {
      throw new ErrorException(ErrorCode.NotFound);
    }
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

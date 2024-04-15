"use strict";

const { Op } = require("sequelize");

class playDAO {
  sequelize;
  play;
  level;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.play = sequelize.models.play;
    this.level = sequelize.models.level;
  }

  async getPlays() {
    await this.play.sync();
    return await this.play.findAll();
  }

  async searchByUserAndLevel(user, level) {
    await this.play.sync();
    const statisticsLevel = await this.play.findOne({
      where: {
        user,
        level,
      },
    });
    return statisticsLevel;
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

  async getStatisticsByUserAndCategory(idUser, idCategory) {
    await this.play.sync();
    const statistics = await this.play.findAll({
      include: [
        {
          model: this.level,
          as: "level_level",
          where: { category: idCategory },
          attributes: [],
        },
      ],
      where: { user: idUser },
      attributes: ["level", "stars", "attempts"],
      order: [["level", "ASC"]], // Ensure levels are ordered by ID
    });
    
    return statistics;
  }

  async getStatisticsForCommunity(idUser) {
    await this.play.sync();
    const statistics = await this.play.findAll({
      include: [
        {
          model: this.level,
          as: "level_level",
          where: {
            category: {
              [Op.eq]: null,
            },
          },
        },
      ],
      where: { user: idUser },
      attributes: ["level", "stars", "attempts"],
    });
    return statistics;
  }
}

module.exports = playDAO;

"use strict";

const DAOFactory = require("../js/daos/DAOFactory");

class playController {
  constructor() {
    const factory = new DAOFactory();
    this.playDAO = factory.getPlayDAO();
    this.userDAO = factory.getUserDAO();
  }

  saveLevelStatistics = async (request, response, next) => {
    try {
      const playData = {};
      playData.user = request.body.user;
      playData.level = request.body.level;
      playData.stars = request.body.stars;
      playData.attempts = request.body.attempts;
      await this.playDAO.savePlayStatistics(playData);
      response.status(200).send("OK");
    } catch (error) {
      next(error);
    }
  };

  getLevelStatisticsByUserId = async (request, response, next) => {
    try {
      const idUser = request.params.idUser;
      const levelStatistics = await this.playDAO.getAllUserLevelStatistics(
        idUser
      );
      response.json(levelStatistics);
    } catch (error) {
      next(error);
    }
  };

  updateLevelStatistics = async (request, response, next) => {
    try {
      const playData = {};
      playData.user = request.body.user;
      playData.level = request.body.level;
      playData.stars = request.body.stars;
      playData.attempts = request.body.attempts;
      await this.playDAO.updatePlayStatistics(playData);
      response.status(200).send("OK");
    } catch (error) {
      next(error);
    }
  };
}

module.exports = playController;

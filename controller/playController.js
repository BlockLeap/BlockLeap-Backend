"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");

class playController {
  constructor() {
    const factory = new DAOFactory();
    this.playDAO = factory.getPlayDAO();
    this.userDAO = factory.getUserDAO();
    this.categoryDAO = factory.getCategoryDAO();
    this.levelDAO = factory.getLevelDAO();
  }

  saveLevelStatistics = async (request, response, next) => {
    try {
      const playData = {};
      playData.user = request.body.user;
      playData.level = request.body.level;
      playData.stars = request.body.stars;

      const foundStatistics = await this.playDAO.searchByUserAndLevel(playData.user,playData.level);
      if(!foundStatistics){
        playData.attempts = 1;
        await this.playDAO.savePlayStatistics(playData);
      } else{
        playData.attempts = foundStatistics.attempts + 1;
        if(playData.stars < foundStatistics.stars)        
          playData.stars = foundStatistics.stars;
        await this.playDAO.updatePlayStatistics(playData);
      }
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

  getLevelsStatisticsByCategory = async (request, response, next) => {
    try {
      const category = request.query.category;
      const user = request.query.user;
      if (!category || !user) {
        throw new ErrorException(ErrorCode.BadRequest);
      }
      
      const statistics = await this.playDAO.getStatisticsByUserAndCategory(user,category);
      response.json(statistics);
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

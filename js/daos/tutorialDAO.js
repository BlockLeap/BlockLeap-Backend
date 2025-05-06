"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");
const { Op } = require('sequelize');


class tutorialDAO {
  sequelize;
  tutorial;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.tutorial = sequelize.models.tutorial;
  }
  async searchByName(name){
    await this.tutorial.sync();
    const foundTutorial = await this.tutorial.findAll({
        where: {
          name: name,
        }
      });
      if (!foundTutorial) throw new ErrorException(ErrorCode.NotFound);
      return foundTutorial;
  }
  async getAll(){
    await this.tutorial.sync();
    const foundTutorial = await this.tutorial.findAll({
      order:[['prio','ASC']]
    });
      if (!foundTutorial) throw new ErrorException(ErrorCode.NotFound);
      return foundTutorial;
  }
  async updateTutorial(tutorialData){
    await this.tutorial.sync();
    const updatedTutorial = await this.tutorial.update({
        content:tutorialData.content
    }  
    ,{
        where: {
            name: tutorialData.name,
        }
    });
      if (!updatedTutorial) throw new ErrorException(ErrorCode.CantUpdate);
      return updatedTutorial;
  }
}

module.exports = tutorialDAO;

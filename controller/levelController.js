"use strict";

const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
  }



  getCategories = async (request, response) => {
    const categories = await this.categoryDAO.getCategories();
    console.log(categories);
    response.json(categories);
  };

  getLevel = async (request, response, next) => {
    const id = request.params.id;
    try{
      const level = await this.levelDAO.getLevel(id);
      response.json(level);
    } catch(err) {
      next(err);
    }
  }

  createLevel = async (request, response, next) => {
    try{
      const levelData = {};
      levelData.user = request.body.user;
      levelData.category = request.body.category;
      levelData.self = request.body.self;
      levelData.title = request.body.title;
      levelData.data = request.body.data;
      console.log(levelData.data );
      const createdLevel = await this.levelDAO.createLevel(levelData);
      response.json(createdLevel);
    } catch(err) {
      next(err);
    }
  }

}

module.exports = levelController;

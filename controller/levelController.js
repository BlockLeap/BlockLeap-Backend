"use strict";

const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
  }

  getAllLevels = async (request, response, next) => {
    try {
      const allLevels = await this.levelDAO.getAllLevels();
      response.json(allLevels);
    } catch (error) {
      next(error);
    }
  };

  getCategories = async (request, response, next) => {
    try {
      const categories = await this.categoryDAO.getCategories();
      response.json(categories);
    } catch (error) {
      next(error);
    }
  };

  getLevel = async (request, response, next) => {
    try {
      const level = await this.levelDAO.getLevel(request.params.id);
      response.json(level);
    } catch (error) {
      next(error);
    }
  };

  createLevel = async (request, response, next) => {
    try {
      const levelData = {};
      levelData.user = request.body.user;
      levelData.category = request.body.category;
      levelData.self = request.body.self;
      levelData.title = request.body.title;
      levelData.data = request.body.data;
      console.log(levelData.data);
      const createdLevel = await this.levelDAO.createLevel(levelData);
      response.json(createdLevel);
    } catch (error) {
      next(error);
    }
  };

  getLevelsByCategory = async (request, response, next) => {
    try {
      const levels = await this.levelDAO.getLevelsByCategory(request.params.id);
      response.json(levels);
    } catch (error) {
      next(error);
    }
  };

  getCommunityLevels = async (request, response) => {
    try {
      const levels = await this.levelDAO.getCommunityLevels();
      response.json(levels);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = levelController;

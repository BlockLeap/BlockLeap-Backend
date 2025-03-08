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
  getUserLevels = async (request, response, next) => {
    try {
      const allLevels = await this.levelDAO.getUserLevels(request.params.id);
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

  getSetLevel = async (request, response, next) => {
    try {
      const level = await this.levelDAO.getSetLevel(request.params.id);
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
      levelData.minBLocks = request.body.minBLocks;
      levelData.description = request.body.description;
      levelData.published = request.body.publish;
      const createdLevel = await this.levelDAO.createLevel(levelData);
      response.json(createdLevel);
    } catch (error) {
      next(error);
    }
  };

  updateLevel = async (request, response, next) => {
    try {
      const levelData = {};
      levelData.id = request.body.level_id;
      levelData.user = request.body.user;
      levelData.category = request.body.category;
      levelData.self = request.body.self;
      levelData.title = request.body.title;
      levelData.data = request.body.data;
      levelData.minBLocks = request.body.minBLocks;
      levelData.description = request.body.description;
      const createdLevel = await this.levelDAO.updateLevel(levelData);
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

  getCommunityLevels = async (request, response, next) => {
    try {
      const data=JSON.parse(request.params.data);
      let page=data.page;
      let tags=data.tags;
      const res = await this.levelDAO.getLevelsByTag(tags);
      let idArray= res.map(i=>i.level_id);
      if(page=='null')page=1; 
      let levels;
      if(idArray.length>0) levels= await this.levelDAO.getCommunityLevelsByIds(page,idArray);
      else levels= await this.levelDAO.getCommunityLevels(page);
      response.json(levels);
    } catch (error) {
      next(error);
    }
  };

  getclassLevels = async (request, response, next) => {
    try {
      const classId = request.params.id;
      const page=request.params.page;
      if(page===undefined)page=1;
      const levels = await this.levelDAO.getclassLevelsPaginated(classId,page);
      const ids= levels.rows.map(i=>i.id_nivel);
      let level= await this.levelDAO.getclassLevelsByIds(ids);
      response.json({count:levels.count,levels:level});
    
    } catch (error) {
      next(error);
    }
  };

  getLevelsBySet = async (request, response, next) => {
    try {
      const res = await this.levelDAO.getsetLevelsIds(request.params.id);
      if(res.length!=0){
        let idArray= res.map(i=>i.level_id);
        const levels = await this.levelDAO.getLevels(idArray);
        response.json(levels);
      }else response.json(null);
    } catch (error) {
      next(error);
    }
  };

  getGroupSets = async (request, response, next) => {
    try {
        const res = await this.levelDAO.getsSetsByGroup(request.params.id);
        
          const ids= res.map(i=>i.set_id);
          const sets= await this.levelDAO.getsSetsById(ids);
          response.json(sets);
        
    } catch (error) {
      next(error);
    }
  };
  
  getTotalOfficialLevels = async (req, res, next) => {
    try{
      const total = await this.levelDAO.getTotalOfficialLevels();
      res.json(total);
    } catch (error){
      next(error);
    }
  }
}

module.exports = levelController;

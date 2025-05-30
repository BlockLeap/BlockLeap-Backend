"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");
const user = require("../database/model/user");
const ShortUniqueId = require('short-unique-id');


class groupController {
  constructor() {
    const factory = new DAOFactory();
    this.groupDAO = factory.getGroupDAO();
    this.setDAO = factory.getUserGroupDAO();
    this.userDAO = factory.getUserDAO();
  }

  createGroup = async (request, response, next) => {
    try {
      const groupName = request.body.groupName;
      const description = request.body.description;
      const setData = {};
      setData.userId = request.body.userId;
      setData.role = "Anfitrión";
      const uid = new ShortUniqueId({ length: 6 });
      let code=uid.rnd();
      let groupCreated = await this.groupDAO.createGroup(groupName,description,code);
      setData.groupId = groupCreated.id;
      let setCreated = await this.setDAO.createUserGroup(setData);
      response.json({ group: groupCreated, set: setCreated });
    } catch (error) {
      next(error);
    }
  };
  
  addLevelClass = async (request, response, next) => {
    try {
      const levels = request.body.levels;
      const id = request.body.id;

      if (!Array.isArray(levels)) {
        return response.status(400).json({ error: "Levels must be an array" });
      }
  
      const levelIds = levels.map(level => level.id); // Extrae los IDs de los niveles

      let LevelAdded = await this.groupDAO.addLevelClass(levelIds,id[0].id);
      response.json({LevelAdded});
    } catch (error) {
      next(error);
    }
  };

  deleteLevelClass = async (request, response, next) => {
    try {
      const levels = request.body.levels; // Suponiendo que es un array de objetos con un id
      const classId = request.body.id; // ID de la clase
  
      if (!Array.isArray(levels)) {
        return response.status(400).json({ error: "Levels must be an array" });
      }
  
      const levelIds = levels.map(level => level.id); // Extrae los IDs de los niveles
  
      let LevelAdded = await this.groupDAO.deleteLevelClass(levelIds, classId[0].id);
      response.json({ LevelAdded });
    } catch (error) {
      next(error);
    }
  };


  addSetClass = async (request, response, next) => {
    try {
      const setid = request.body.sets;
      const id = request. body.id;
      let SetAdded = await this.groupDAO.addSetClass(setid,id);
      response.json({SetAdded});
    } catch (error) {
      next(error);
    }
  };

  deleteSetClass = async (request, response, next) => {
    try {
      const setid = request.body.sets;
      const id = request. body.id;
      let SetAdded = await this.groupDAO.deleteSetClass(setid,id);
      response.json({SetAdded});
    } catch (error) {
      next(error);
    }
  };


  
  getAllGroups = async (request, response, next) => {
    try {
      const allGroups = await this.groupDAO.getAllGroups();
      response.json(allGroups);
    } catch (error) {
      next(error);
    }
  };

    getGroupById = async (request, response, next) => {
    try {
      const groupId = request.params.Id;
      const array = groupId.split(",").map(num => parseInt(num.trim(), 10));
      const foundGroup = await this.groupDAO.getGroupById(Array.from(array));
      response.json(foundGroup);
    } catch (error) {
      next(error);
    }
  };

  getGroupByCode = async (request, response, next) => {
    try {
      const groupCode = request.params.groupCode;
      const foundGroup = await this.groupDAO.getGroupByCode(groupId);
      response.json(foundGroup);
    } catch (error) {
      next(error);
    }
  };


  getCodeById = async (request, response, next) => {
    try {
      const groupId = request.params.Id;
      const foundCode = await this.groupDAO.getCodeById(groupId);
      response.json(foundCode);
    } catch (error) {
      next(error);
    }
  };

  resgisterUserInAGroup = async (request, response, next) => {
    try {
      const setData = {};
      setData.groupCode = request.body.groupCode;
      setData.userId = request.body.userId;
      setData.role = "Miembro";

      // Check id exist in DB
      const group=await this.groupDAO.getGroupByCode(setData.groupCode);
      await this.userDAO.searchById(setData.userId);

      setData.groupId= group.id;

      let setCreated = await this.setDAO.createUserGroup(setData);
      response.json(setCreated);
    } catch (error) {
      next(error);
    }
  };

  getGroupMembers = async (request, response, next) => {
    try {
      const groupId = request.params.groupId;
      const foundMembers = await this.setDAO.findByGroupId(groupId);
      response.json(foundMembers);
    } catch (error) {
      next(error);
    }
  };

  getStudentsById = async (request, response, next) => {
    try {
      const groupId = request.params.id;
      const students = await this.setDAO.findAllStudents(groupId);
      response.json(students);
    } catch (error) {
      next(error);
    }
  };


  findByUser = async (request, response, next) => {
    try {
      const foundGroup = await this.setDAO.findByUserId(request.params.id);
      response.json(foundGroup);
    } catch (error) {
      next(error);
    }
  };  

}

module.exports = groupController;

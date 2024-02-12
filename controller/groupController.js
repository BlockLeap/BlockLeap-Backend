"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");

class groupController {
  constructor() {
    const factory = new DAOFactory();
    this.groupDAO = factory.getGroupDAO();
    this.setDAO = factory.getSetDAO();
  }

  createGroup = async (request, response, next) => {
    try{
      const groupName = request.body.name;
      const setData = {};
      setData.userId = request.body.userId;
      setData.role = "Anfitrión";
      let groupCreated = await this.groupDAO.createGroup(groupName);
      setData.groupId = groupCreated.id;
      let setCreated = await this.setDAO.createSet(setData);
      response.json({ group: groupCreated, set: setCreated });      
    } catch (error){
      next(error);
    }
  };

  getAllGroups = async (request, response, next) => {
    try{
      const allGroups = await this.groupDAO.getAllGroups();
      response.json(allGroups)
    } catch (error){
      next(error);
    }
  };

  getGroupById = async (request, response, next) => {
    try {
      const groupId = request.params.groupId;
      const foundGroup = await this.groupDAO.getGroupById(groupId);
      response.json(foundGroup);
    } catch (error){
      next(error);
    }
  };

  resgisterUserInAGroup = async (request, response, next) => {
    try {
      const setData = {};
      setData.groupId = request.params.groupId;
      setData.userId = request.params.userId;
      setData.role = "Miembro";
      let setCreated = await this.setDAO.createSet(setData);
      response.json(setCreated);      
    } catch (error){
      next(error);
    }
  };
  getGroupMembers = async (request, response, next) => {
    try {
      const groupId = request.params.groupId;
      const foundMembers = await this.setDAO.fingByGroupId(groupId);
      response.json({members:foundMembers})
    } catch (error){
      next(error);
    }
  };
}

module.exports = groupController;

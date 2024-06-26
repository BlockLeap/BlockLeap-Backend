"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");

class groupController {
  constructor() {
    const factory = new DAOFactory();
    this.groupDAO = factory.getGroupDAO();
    this.setDAO = factory.getSetDAO();
    this.userDAO = factory.getUserDAO();
  }

  createGroup = async (request, response, next) => {
    try {
      const groupName = request.body.name;
      const setData = {};
      setData.userId = request.body.userId;
      setData.role = "Anfitrión";
      let groupCreated = await this.groupDAO.createGroup(groupName);
      setData.groupId = groupCreated.id;
      let setCreated = await this.setDAO.createSet(setData);
      response.json({ group: groupCreated, set: setCreated });
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
      const groupId = request.params.groupId;
      const foundGroup = await this.groupDAO.getGroupById(groupId);
      response.json(foundGroup);
    } catch (error) {
      next(error);
    }
  };

  resgisterUserInAGroup = async (request, response, next) => {
    try {
      const setData = {};
      setData.groupId = request.body.groupId;
      setData.userId = request.body.userId;
      setData.role = "Miembro";

      // Check id exist in DB
      await this.groupDAO.getGroupById(setData.groupId);
      await this.userDAO.searchById(setData.userId);

      let setCreated = await this.setDAO.createSet(setData);
      response.json(setCreated);
    } catch (error) {
      next(error);
    }
  };

  getGroupMembers = async (request, response, next) => {
    try {
      const groupId = request.params.groupId;
      const foundMembers = await this.setDAO.fingByGroupId(groupId);
      response.json(foundMembers);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = groupController;

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

    response.status(200);
  };

  getGroupById = async (request, response, next) => {
    response.status(200);
  };

  resgisterUserInAGroup = async (request, response, next) => {
    response.status(200);
  };

}

module.exports = groupController;

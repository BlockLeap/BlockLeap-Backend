"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");

class groupController {
  constructor() {
    const factory = new DAOFactory();
    this.groupDAO = factory.getGroupDAO;
  }

  createGroup = async (request, response, next) => {
    response.status(200);
  };

  resgisterUserInAGroup = async (request, response, next) => {
    response.status(200);
  };

  getAllGroups = async (request, response, next) => {
    response.status(200);
  };

  getGroupById = async (request, response, next) => {
    response.status(200);
  };

}

module.exports = groupController;

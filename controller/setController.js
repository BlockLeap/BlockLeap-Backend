"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");

class setController {
  constructor() {
    const factory = new DAOFactory();
    this.setDAO = factory.getSetDAO();
  }

  createSet = async (request, response, next) => {
    try {
      const { name, description } = request.body;
      if (!name) {
        throw new ErrorException(ErrorCode.BadRequest, "El nombre del set es obligatorio");
      }
      const createdSet = await this.setDAO.createSet({ name, description });
      response.json(createdSet);
    } catch (error) {
      next(error);
    }
  };

  assignLevelsToSet = async (request, response, next) => {
    try {
      const { setId, levelIds } = request.body;
      if (!setId) {
        throw new ErrorException(ErrorCode.BadRequest, "El setId es obligatorio");
      }
      if (!Array.isArray(levelIds) || levelIds.length === 0) {
        throw new ErrorException(ErrorCode.BadRequest, "Debe proporcionar una lista válida de niveles");
      }
      const assignment = await this.setDAO.assignLevelsToSet(setId, levelIds);
      response.json({ message: "Niveles asignados correctamente", assignment });
    } catch (error) {
      next(error);
    }
  };

  assignSetToGroups = async (request, response, next) => {
    try {
      const { setId, groupIds } = request.body;
      if (!setId) {
        throw new ErrorException(ErrorCode.BadRequest, "El setId es obligatorio");
      }
      if (!Array.isArray(groupIds) || groupIds.length === 0) {
        throw new ErrorException(ErrorCode.BadRequest, "Debe proporcionar una lista válida de grupos");
      }
      const assignment = await this.setDAO.assignSetToGroups(setId, groupIds);
      response.json({ message: "Set asignado a grupos correctamente", assignment });
    } catch (error) {
      next(error);
    }
  };
/*
  getUserSets = async (request, response, next) => {
    try {
      const userId = request.params.userId;
      if (!userId) {
        throw new ErrorException(ErrorCode.BadRequest, "Error");
      }
      const foundSet = await this.setDAO.getSetById(userId);
      if (!foundSet) throw new ErrorException(ErrorCode.NotFound, "Set no encontrado");
      response.json(foundSet);
    } catch (error) {
      next(error);
    }
  };

  */

  getSetById = async (request, response, next) => {
    try {
      const setId = request.params.setId;
      if (!setId) {
        throw new ErrorException(ErrorCode.BadRequest, "El setId es obligatorio");
      }
      const foundSet = await this.setDAO.getSetById(setId);
      if (!foundSet) throw new ErrorException(ErrorCode.NotFound, "Set no encontrado");
      response.json(foundSet);
    } catch (error) {
      next(error);
    }
  };

  getAllSets = async (request, response, next) => {
    try {
      const allSets = await this.setDAO.getAllSets();
      response.json(allSets);
    } catch (error) {
      next(error);
    }
  };

  deleteSet = async (request, response, next) => {
    try {
      const setId = request.params.setId;
      if (!setId) {
        throw new ErrorException(ErrorCode.BadRequest, "El setId es obligatorio");
      }
      await this.setDAO.deleteSet(setId);
      response.json({ message: "Set eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = setController;

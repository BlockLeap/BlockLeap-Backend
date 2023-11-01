"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factoria = new DAOFactory();
    this.levelDAO = factoria.getLevelDAO();
  }

  start = async (request, response) => {
    response.render(views.index);
  };

  // TODO obtener el nivel de los parámetros del request
  getLevelById = async (request, response) => {
    let level = await this.levelDAO.getLevelById(1);
    let information = JSON.stringify(level);
    console.log(information);
    response.render(views.index);
  };
}

module.exports = levelController;

"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factoria = new DAOFactory();
    this.levelDAO = factoria.getLevelDAO();
  }

  // TODO obtener la categoría de los parámetros del request
  getLevelsByCategory = async (request, response) => {
    let levels = await this.levelDAO.getLevelByCategory(1);
    console.log(levels);
    response.render(views.index);
  };
}

module.exports = levelController;

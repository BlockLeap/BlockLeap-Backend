"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factoria = new DAOFactory();
    this.levelDAO = factoria.getLevelDAO();
  }

  getLevelsByCategory = async (request, response) => {
    let levels = await this.levelDAO.getLevelsByCategory(request.params.id);
    response.render(views.levels, { levels: levels });
  };
}

module.exports = levelController;

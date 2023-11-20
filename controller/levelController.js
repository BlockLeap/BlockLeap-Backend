"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
  }

  getLevelsByCategory = async (request, response) => {
    let levels = await this.levelDAO.getLevelsByCategory(request.params.id);
    console.log(levels);
    response.render(views.levels, { levels: levels });
  };
}

module.exports = levelController;

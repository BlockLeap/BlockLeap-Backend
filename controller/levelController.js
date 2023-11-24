"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
  }

  getCategories = async (request, response) => {
    let categories = await this.categoryDAO.getCategories();
    response.render(views.index, { categories: categories });
  };

  getCommunityLevels = async (request, response) => {
    let levels = await this.levelDAO.getCommunityLevels();
    response.render(views.community, { levels: levels });
  };

  getLevelsByCategory = async (request, response) => {
    let levels = await this.levelDAO.getLevelsByCategory(request.params.id);
    console.log(levels);
    response.render(views.levels, { levels: levels });
  };
}

module.exports = levelController;

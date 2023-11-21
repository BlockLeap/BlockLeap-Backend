"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class categoryController {
  constructor() {
    const factory = new DAOFactory();
    this.categoryDAO = factory.getCategoryDAO();
    this.levelDAO = factory.getLevelDAO();
  }

  getCategories = async (request, response) => {
    let categories = await this.categoryDAO.getCategories();
    response.render(views.index, { categories: categories });
  };

  getCategoryById = async (request, response) => {
    let category = await this.categoryDAO.getCategoryById(request.params.id);
    response.render(views.index, { categories: category });
  };
}

module.exports = categoryController;

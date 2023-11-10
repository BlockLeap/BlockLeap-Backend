"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class categoryController {
  constructor() {
    const factoria = new DAOFactory();
    this.categoryDAO = factoria.getCategoryDAO();
  }

  getCategories = async (request, response) => {
    let categories = await this.categoryDAO.getCategories();
    response.render(views.index, { categories: categories });
  };

  // TODO obtener la categoría de los parámetros del request
  getCategoryById = async (request, response) => {
    let category = await this.categoryDAO.getCategorylById(1);
    console.log(category);
    response.render(views.index, { categories: category });
  };
}

module.exports = categoryController;

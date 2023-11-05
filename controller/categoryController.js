"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class categoryController {
  constructor() {
    const factoria = new DAOFactory();
    this.categoryDAO = factoria.getCategoryDAO();
  }

  getCategories = async (request, response) => {
    let categories = new Array();
    categories = await this.categoryDAO.getCategories();
    console.log(categories);
    response.render(views.index);
  };

  // TODO obtener la categoría de los parámetros del request
  getCategoryById = async (request, response) => {
    let category = await this.categoryDAO.getCategorylById(1);
    let information = JSON.stringify(category);
    console.log(information);
    response.render(views.index);
  };
}

module.exports = categoryController;

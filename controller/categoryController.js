"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class categoryController {
  #categories;

  constructor() {
    const factoria = new DAOFactory();
    this.categoryDAO = factoria.getCategoryDAO();
  }

  getCategories = async (request, response) => {
    this.#categories = await this.categoryDAO.getCategories();
    console.log(this.#categories);
    response.render(views.index, { categories: this.#categories });
  };

  // TODO obtener la categoría de los parámetros del request
  getCategoryById = async (request, response) => {
    let category = await this.categoryDAO.getCategorylById(1);
    console.log(category);
    response.render(views.index, { categories: category });
  };
}

module.exports = categoryController;

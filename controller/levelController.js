"use strict";

const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
  }

  getCategories = async (request, response) => {
    const categories = await this.categoryDAO.getCategories();
    console.log(categories);
    response.json(categories);
  };
}

module.exports = levelController;

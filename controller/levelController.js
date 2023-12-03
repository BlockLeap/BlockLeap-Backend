"use strict";

const path = require("path");
const ejs = require("ejs");
const multer = require('multer');
const storage = multer.memoryStorage(); // Almacenar los datos en memoria en lugar de en archivos
const upload = multer({ storage: storage });

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");
const { response } = require("express");

const fragments = path.join(__dirname, "../views/fragments");

class levelController {
  #categories;

  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
  }

  sendEjs(response, name, data) {
    ejs.renderFile(
      path.join(fragments, `${name}.ejs`),
      data,
      {},
      function (error, template) {
        if (error) {
          console.log(error);
          next(error);
        }
        response.send(template);
      }
    );
  }

  categories = async (request, response) => {
    response.render(views.index);
  };

  getCategories = async (request, response) => {
    this.#categories = await this.categoryDAO.getCategories();
    this.sendEjs(response, "categories", { categories: this.#categories });
  };

  createLevel = async (request, response) => {
    let level = {};
    level.user = request.body.user;
    level.category = request.body.category;
    level.title = request.body.title;
    level.data = request.body.data;
    await this.levelDAO.createLevel();
  };

  getCommunityLevels = async (request, response) => {
    let levels = await this.levelDAO.getCommunityLevels();
    response.render(views.community, { levels });
  };

  getLevelsByCategory = async (request, response) => {
    let levels = await this.levelDAO.getLevelsByCategory(request.params.id);
    console.log(levels);
    response.render(views.levels, { levels });
  };
}

module.exports = levelController;

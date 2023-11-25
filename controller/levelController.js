"use strict";

const path = require("path");
const ejs = require("ejs");

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

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
    response.render(views.index, { categories: this.#categories });
  };

  // apiRouter.get("/destinations", function (req, res, next) {
  //   Dao.getDestinos(function (err, destinations) {
  //       if (err) {
  //           next(err);
  //       }
  //       else {
  //           sendEjs(res, "destination-grid", { destinations });
  //       }
  //   });
  // });

  getCategories = async (request, response) => {
    this.#categories = await this.categoryDAO.getCategories();
    this.sendEjs(response, "categories", { categories: this.#categories });
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

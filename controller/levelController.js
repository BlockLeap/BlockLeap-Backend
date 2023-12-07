"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  #categories;
  #levels;
  #all;

  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
    this.#levels = 3;
  }

  getCategories = async (request, response) => {
    this.#categories = await this.categoryDAO.getCategories();
    console.log(this.#categories);
    let view = "";
    this.#categories.forEach((category) => {
      view += this.categoryDiv(category);
    });
    response.send(view);
  };

  categoryDiv = (category) => {
    let view = `
      <div class="col">
        <div class="card border-dark d-flex flex-column h-100">
          <a href="/level/levelsByCategory/${category.id}">
            <h5 class="card-header card-title text-dark">
              ${category.name}
            </h5>
            <div class="card-body text-dark">
              <h6 class="card-subtitle mb-2 text-muted">
                <!-- TODO: Calcular el número de niveles de la categoría -->
                Niveles: ${this.#levels}
              </h6>
              ${category.description}
            </div>
          </a>
        </div>
      </div>
    `;
    return view;
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

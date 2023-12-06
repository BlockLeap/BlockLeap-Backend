"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  #categories;
  #all;

  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
  }

  getCategories = async () => {
    this.#all = document.getElementById("categories");
    this.principal();
  };

  principal = async () => {
    this.#all.innerHTML = categories();
  };

  categories = () => {
    this.#categories = this.categoryDAO.getCategories();
    let view = "";
    for (category of categories) view += category(category);
    return view;
  };

  category = (category) => {
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
                Niveles: ${levels}
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

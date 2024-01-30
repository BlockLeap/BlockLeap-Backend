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
    /*let view = "";
    categories.forEach((category) => {
      view += this.categoryDiv(category);
    });*/
  };

  getLevel = async (request, response, next) => {
    const id = request.params.id;
    try{
      const level = await this.levelDAO.getLevel(id);
      response.json(level);
    } catch(err) {
      next(err);
    }
  }

  // ESTO DE ABAJO HAY QUE PASARLO AL CLIENTE

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
}

module.exports = levelController;

"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class levelController {
  #levels;

  constructor() {
    const factory = new DAOFactory();
    this.levelDAO = factory.getLevelDAO();
    this.categoryDAO = factory.getCategoryDAO();
    this.#levels = 3;
  }

  getCategories = async (request, response) => {
    console.log("He llegado");
    const categories = await this.categoryDAO.getCategories();
    console.log(categories);
    response.json(categories);
    /*let view = "";
    categories.forEach((category) => {
      view += this.categoryDiv(category);
    });*/
  };

  getLevel = async (request, response) => {
    const id = request.params.id;
    const level = await this.levelDAO.getLevel(id);
    if(level == null){
      response.status(404).json({ error: 'Not Found' });
    }
    else{
      response.json(level);
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

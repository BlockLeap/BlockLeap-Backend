"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class communityController {
  #levels;

  constructor() {
    const factoria = new DAOFactory();
    this.communityDAO = factoria.getCommunityDAO();
  }

  getLevels = async (request, response) => {
    this.#levels = await this.communityDAO.getLevels();
    this.#levels = JSON.parse(JSON.stringify(this.#levels));
    response.render(views.community, { result: this.#levels });
  };

}

module.exports = communityController;
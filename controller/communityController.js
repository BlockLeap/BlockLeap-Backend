"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class communityController {
  #levels;

  constructor() {
    const factory = new DAOFactory();
    this.communityDAO = factory.getCommunityDAO();
  }

  getLevels = async (request, response) => {
    this.#levels = await this.communityDAO.getLevels();
    this.#levels = JSON.parse(JSON.stringify(this.#levels));
    response.render(views.community, { result: this.#levels });
  };
}

module.exports = communityController;

"use strict";

const tutorial = require("../database/model/tutorial");
const DAOFactory = require("../js/daos/DAOFactory");

class tutorialController {
  constructor() {
    const factory = new DAOFactory();
    this.tutorialDAO = factory.getTutorialDAO();
  }

  getTutorial = async (request, response) => {
    let tutorial = await this.tutorialDAO.searchByName(request.params.name);
    response.json(tutorial);
  };
  getAllTutorials = async (request, response) => {
    let tutorial = await this.tutorialDAO.getAll();
    response.json(tutorial);
  };
  updateTutorial = async (request, response) => {
    let tutorialData={};
    tutorialData.name= request.body.name;
    tutorialData.content= request.body.content;
    let tutorial= await this.tutorialDAO.updateTutorial(tutorialData);
    response.json(tutorial);
  };
}

module.exports = tutorialController;

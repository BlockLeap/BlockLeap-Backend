"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");

class userController {
  constructor() {
    const factory = new DAOFactory();
    this.userDAO = factory.getUserDAO();
  }

  getUserById = async (request, response) => {
    let user = await this.userDAO.getUserById(request.params.id);
    console.log(user);
    response.render(views.profile, { user });
  };

  registerUser = async (request, response) =>{
    console.log(request.body);
  }

}

module.exports = userController;

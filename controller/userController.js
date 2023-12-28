"use strict";

const views = require("../js/viewConfiguration");
const DAOFactory = require("../js/daos/DAOFactory");
const bcrypt = require("bcrypt");

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
    try{
      let user = {};
      user.name = request.body.userName;
      user.role = "Estudiante";
      user.password = bcrypt.hashSync(request.body.userPassword,11);
      let result = await this.userDAO.createUser(user);
      response.json(result.insertID);
    }catch(error) {
      console.error('Error al registrar usuario:', error);
      response.status(500).json({ error: 'Error interno al registrar usuario'});
    }
  };

}

module.exports = userController;

"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const util = require('util');
const bcrypt = require("bcrypt");
const bcryptCompareAsync = util.promisify(bcrypt.compare);
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");

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

  registerUser = async (request, response, next) => {
    try {
      let user = {};
      user.name = request.body.userName;
      user.role = "Estudiante";
      user.password = bcrypt.hashSync(request.body.userPassword, 11);
      let result = await this.userDAO.createUser(user);
      response.json(result);
    } catch (error) {
      next(error);
    }
  };

  loginUser = async (request, response, next) => {
    const {id, password} = request.body;
    try{
      const userFound = await this.userDAO.searchById(id);
      const user = userFound.dataValues
      console.log(password);
      console.log(user.password);
      const valid = await bcryptCompareAsync(password, user.password);
      if(!valid){
        throw new ErrorException(ErrorCode.Unauthorized);
      } else {
        const result = {};
        result.id = user.id;
        result.name = user.name;
        result.roles = user.role;
        response.json(result); 
      }
    }catch(error){
      next(error);
    }
  } 


}

module.exports = userController;

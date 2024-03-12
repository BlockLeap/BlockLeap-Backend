"use strict";

const DAOFactory = require("../js/daos/DAOFactory");
const util = require("util");
const bcrypt = require("bcrypt");
const bcryptCompareAsync = util.promisify(bcrypt.compare);
const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");
const jwt = require("jsonwebtoken");

class userController {
  constructor() {
    const factory = new DAOFactory();
    this.userDAO = factory.getUserDAO();
  }

  getUserById = async (request, response) => {
    let user = await this.userDAO.searchById(request.params.id);
    response.json(user);
  };

  registerUser = async (request, response, next) => {
    try {
      const user = {};
      user.name = request.body.userName;
      user.role = "Estudiante";
      user.password = bcrypt.hashSync(request.body.userPassword, 11);
      const createdUser = await this.userDAO.createUser(user);
      const result = {};
      result.id = createdUser.id;
      result.name = createdUser.name;
      result.role = createdUser.role;
      response.json(result);
    } catch (error) {
      next(error);
    }
  };

  loginUser = async (request, response, next) => {
    const { id, password } = request.body;
    try {
      const userFound = await this.userDAO.searchById(id);
      const user = userFound.dataValues;
      const valid = await bcryptCompareAsync(password, user.password);
      if (!valid) {
        throw new ErrorException(ErrorCode.Unauthorized);
      } else {
        const tokenPayload = {
          id: user.id,
          name: user.name,
          role: user.role,
        };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY);
        const twoHours = 2 * 60 * 60 * 1000;
        const expirationDate = new Date(Date.now() + twoHours);
        response.cookie("jwt", token, {
          httpOnly: true,
          expires: expirationDate,
        });
        response.cookie("session", tokenPayload, {
          expires: expirationDate,
        });
        response.json({
          message: "Login exitoso",
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = userController;

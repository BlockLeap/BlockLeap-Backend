"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class userDAO {
  sequelize;
  user;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.user = sequelize.models.user;
  }

  async getUsers() {
    await this.user.sync();
    return await this.user.findAll();
  }

  async createUser(user) {
    await this.user.sync();
    const createdUser = await this.user.create({
      name: user.name,
      role: user.role,
      password: user.password,
    });
    if (!createdUser) throw new ErrorException(ErrorCode.Conflict);
    return createdUser;
  }

  async searchById(id) {
    await this.user.sync();
    const foundUser = await this.user.findByPk(id);
    if (!foundUser) throw new ErrorException(ErrorCode.UserNotFound);
    return foundUser;
  }

  async searchByUsername(username){
    await this.user.sync();
    const foundUser = await this.user.findOne({ where: { name: username } });
    if (!foundUser) throw new ErrorException(ErrorCode.UserNotFound);
    return foundUser;
  }
}

module.exports = userDAO;

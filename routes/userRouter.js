"use strict";
const { validateToken } = require ('../middleware/validateToken');

const userRouter = require("express-promise-router")();

const UserController = require("../controller/userController");

const userController = new UserController();

userRouter
  .post("/create", userController.registerUser)
  .post("/login", userController.loginUser)
  .get("/officialLevelsCompleted", validateToken, userController.officialLevelsCompleted)
  .get("/totalStars/:id", userController.totalUserStars)
  .get("/:id", userController.getUserById)
  .get("/names/:userIds", userController.getNamesById)
  .delete("/logout", validateToken, userController.logout);
module.exports = userRouter;

"use strict";

const userRouter = require("express-promise-router")();

const UserController = require("../controller/userController");

const userController = new UserController();

userRouter.get("/userById/:id", userController.getUserById);

module.exports = userRouter;

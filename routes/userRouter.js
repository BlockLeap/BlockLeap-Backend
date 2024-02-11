"use strict";

const userRouter = require("express-promise-router")();

const UserController = require("../controller/userController");

const userController = new UserController();

userRouter.post("/registro", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/userById/:id", userController.getUserById);

module.exports = userRouter;

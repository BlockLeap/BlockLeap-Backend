"use strict";

const apiRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");
const UserController = require("../controller/userController");

const levelController = new LevelController();
const userController = new UserController();

apiRouter.get("/categories", levelController.getCategories);
apiRouter.post("/level", levelController.createLevel);
module.exports = apiRouter;

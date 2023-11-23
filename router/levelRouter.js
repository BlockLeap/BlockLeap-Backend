"use strict";

const levelRouter = require("express-promise-router")();
const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter.get("/all", levelController.getCategories);

levelRouter.get("/levelsByCategory/:id", levelController.getLevelsByCategory);

module.exports = levelRouter;

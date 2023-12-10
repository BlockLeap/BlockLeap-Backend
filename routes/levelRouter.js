"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter
  .get("/categories", levelController.getCategories)
  .get("/levelsByCategory/:id", levelController.getLevelsByCategory);

levelRouter.post("/create", levelController.createLevel);
levelRouter.get("/:id", levelController.getLevelByid);
module.exports = levelRouter;

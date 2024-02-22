"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter
  .get("/categories", levelController.getCategories)
  .get("/all", levelController.getAllLevels)
  .get("/:id", levelController.getLevel)
  .post("/create", levelController.createLevel)
  .get("/levelsByCategory/:id", levelController.getLevelsByCategory)
  .get("/community/levels", levelController.getCommunityLevels)
  .get("/countByCategory/:id", levelController.countLevelsByCategory);

//.get("/:id", levelController.getLevelById)

module.exports = levelRouter;

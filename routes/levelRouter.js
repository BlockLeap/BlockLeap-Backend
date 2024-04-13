"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter
  .get("/categories", levelController.getCategories)
  .get("/all", levelController.getAllLevels)
  .post("/create", levelController.createLevel)
  .get("/levelsByCategory/:id", levelController.getLevelsByCategory)
  .get("/community/levels", levelController.getCommunityLevels)
  .get("/totalOfficialLevels", levelController.getTotalOfficialLevels)
  .get("/:id", levelController.getLevel);
module.exports = levelRouter;

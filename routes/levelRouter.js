"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter
  .get("/categories", levelController.getCategories)
  .get("/all", levelController.getAllLevels)
  .get("/userLevels/:id", levelController.getUserLevels)
  .post("/create", levelController.createLevel)
  .get("/levelsByCategory/:id", levelController.getLevelsByCategory)
  .get("/community/levels", levelController.getCommunityLevels)
  .get("/class/:id", levelController.getclassLevels)
  .get("/class/:id/sets", levelController.getGroupSets)
  .get("/sets/:id", levelController.getLevelsBySet)
  .get("/sets/level/:id", levelController.getSetLevel)
  .get("/totalOfficialLevels", levelController.getTotalOfficialLevels)
  .get("/:id", levelController.getLevel);
module.exports = levelRouter;

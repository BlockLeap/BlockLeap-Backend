"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter
  .get("/categories", levelController.getCategories)
  .get("/all", levelController.getAllLevels)
  .get("/userLevels/:id", levelController.getUserLevels)
  .get("/paginatedUserLevels/:data", levelController.getPaginatedUserLevels)
  .post("/create", levelController.createLevel)
  .post("/update", levelController.updateLevel)
  .get("/levelsByCategory/:id", levelController.getLevelsByCategory)
  .get("/community/levels", levelController.getCommunityLevels)
  .get("/community/levels/:data", levelController.getCommunityLevels)
  .get("/class/:id", levelController.getAllclassLevels)
  .get("/class/:id/page/:page", levelController.getclassLevels)
  .get("/countSetLevels/:id/", levelController.countSetLevels)
  .get("/class/:id/sets", levelController.getGroupSets)
  .get("/sets/:id", levelController.getLevelsBySet)
  .get("/sets/level/:id", levelController.getSetLevel)
  .get("/totalOfficialLevels", levelController.getTotalOfficialLevels)
  .get("/:id", levelController.getLevel);
module.exports = levelRouter;

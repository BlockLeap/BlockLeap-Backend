"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter
  .get("/categories", levelController.getCategories)
  .get("/levelsByCategory/:id", levelController.getLevelsByCategory)
  .get("/:id", levelController.getLevelById)
  .post("/create", levelController.createLevel);

module.exports = levelRouter;

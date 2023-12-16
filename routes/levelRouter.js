"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter
  .get("/categories", levelController.getCategories)
  .get("/levelsByCategory/:id", levelController.getLevelsByCategory)
  .post("/create", levelController.createLevel)
  .get("/:id", levelController.getLevelById);

module.exports = levelRouter;

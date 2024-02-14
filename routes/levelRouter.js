"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter.get("/categories", levelController.getCategories);
levelRouter.get("/all", levelController.getAllLevels)
levelRouter.get("/:id", levelController.getLevel);
levelRouter.post("/create", levelController.createLevel);

//.get("/levelsByCategory/:id", levelController.getLevelsByCategory)
//.get("/:id", levelController.getLevelById)

module.exports = levelRouter;

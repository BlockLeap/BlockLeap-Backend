"use strict";

const levelRouter = require("express-promise-router")();

const LevelController = require("../controller/levelController");

const levelController = new LevelController();

levelRouter.get("/categories", levelController.categories);
// levelRouter.get("/community", levelController.communityLevels);
// levelRouter.get("/levelsByCategory/:id", levelController.levelsByCategory);

module.exports = levelRouter;

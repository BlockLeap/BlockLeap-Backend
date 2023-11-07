"use strict";

const levelRouter = require("express-promise-router")();
const LevelController = require("../controller/levelController");

const levelController = new LevelController();

// Página principal
levelRouter.get("/levelByCategory/:id", levelController.getLevelsByCategory);

// levelRouter.get("/levelById/:id", levelController.getLevelById);

module.exports = levelRouter;

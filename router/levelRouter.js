"use strict";

const levelRouter = require("express-promise-router")();
const LevelController = require("../controller/levelController");

const levelController = new LevelController();

// Operación de prueba para ver si funciona
levelRouter.get("/start", levelController.start);

// levelRouter.get("/levelById/:id", levelController.getLevelById);

module.exports = levelRouter;

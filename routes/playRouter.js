"use strict";

const playRouter = require("express-promise-router")();

const PlayController = require("../controller/playController");

const playController = new PlayController();

playRouter.post("/", playController.saveLevelStatistics);
playRouter.get("/:idUser", playController.getLevelStatisticsByUserId);
module.exports = playRouter;

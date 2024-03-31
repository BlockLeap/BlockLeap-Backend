"use strict";

const playRouter = require("express-promise-router")();

const PlayController = require("../controller/playController");

const playController = new PlayController();

playRouter.post("/", playController.saveLevelStatistics);
playRouter.get("/categoryStatistics", playController.getLevelsStatisticsByCategory);
playRouter.get("/:idUser", playController.getLevelStatisticsByUserId);
playRouter.put("/update", playController.updateLevelStatistics);
module.exports = playRouter;

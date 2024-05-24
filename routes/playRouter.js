"use strict";

const playRouter = require("express-promise-router")();

const PlayController = require("../controller/playController");

const playController = new PlayController();

playRouter
  .post("/", playController.saveLevelStatistics)
  .get("/categoryStatistics", playController.getLevelsStatisticsByCategory)
  .get("/communityStatistics", playController.getLevelsStatisticsForCommunity)
  .get("/:idUser", playController.getLevelStatisticsByUserId)
  .put("/update", playController.updateLevelStatistics);
module.exports = playRouter;

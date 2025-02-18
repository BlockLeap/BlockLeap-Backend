"use strict";

const setRouter = require("express-promise-router")();
const SetController = require("../controller/setController");

const setController = new SetController();

setRouter
  .post("/create", setController.createSet)
  .post("/assignLevels", setController.assignLevelsToSet)
  .post("/assignGroups", setController.assignSetToGroups)
  .get("/all", setController.getAllSets)
  .get("/:setId", setController.getSetById)
  .delete("/:setId", setController.deleteSet);

module.exports = setRouter;

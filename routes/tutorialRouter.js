"use strict";

const tutorialRouter = require("express-promise-router")();
const TutorialController = require("../controller/tutorialController");
const tutorialController = new TutorialController();

tutorialRouter
  .get("/getAll", tutorialController.getAllTutorials)
  .get("/get/:name", tutorialController.getTutorial)
  .post("/update/", tutorialController.updateTutorial)

module.exports = tutorialRouter;

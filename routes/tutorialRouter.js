"use strict";

const tutorialRouter = require("express-promise-router")();
const TutorialController = require("../controller/tutorialController");
const tutorialController = new TutorialController();

tutorialRouter
  .get("/:name", tutorialController.getTutorial)
  .post("/:name", tutorialController.updateTutorial)

module.exports = tutorialRouter;

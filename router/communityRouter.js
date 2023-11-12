"use strict";

const communityRouter = require("express-promise-router")();
const CommunityController = require("../controller/communityController");

const communityController = new CommunityController();

communityRouter.get("/", communityController.getLevels);

// categoryRouter.get("/categoryById/:id", categoryController.getCategoryById);

module.exports = communityRouter;
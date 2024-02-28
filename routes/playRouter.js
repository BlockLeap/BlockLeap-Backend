"use strict";

const playRouter = require("express-promise-router")();

const PlayController = require("../controller/levelController");

const playController = new PlayController();

module.exports = levelRouter;

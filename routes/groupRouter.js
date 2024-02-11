"use strict";

const groupRouter = require("express-promise-router")();

const GroupController = require("../controller/groupController");

const groupController = new GroupController();

groupRouter.post("/create", groupController.createGroup);
groupRouter.post(":idGroup/:idUser", groupController.resgisterUserInAGroup);
groupRouter.get("/all", groupController.getAllGroups);
groupRouter.get("/:idGruop", groupController.getGroupById);

module.exports = groupRouter;

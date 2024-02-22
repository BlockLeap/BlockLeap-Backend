"use strict";

const groupRouter = require("express-promise-router")();

const GroupController = require("../controller/groupController");

const groupController = new GroupController();

groupRouter.post("/create", groupController.createGroup);
groupRouter.post("/register", groupController.resgisterUserInAGroup);
groupRouter.get("/all", groupController.getAllGroups);
groupRouter.get("/:groupId", groupController.getGroupById);
groupRouter.get("/:groupId/members", groupController.getGroupMembers);

module.exports = groupRouter;

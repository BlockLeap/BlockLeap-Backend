"use strict";

const groupRouter = require("express-promise-router")();

const GroupController = require("../controller/groupController");

const groupController = new GroupController();

groupRouter
  .post("/create", groupController.createGroup)
  .post("/:groupId/:userId", groupController.resgisterUserInAGroup)
  .get("/all", groupController.getAllGroups)
  .get("/:groupId", groupController.getGroupById)
  .get("/:groupId/members", groupController.getGroupMembers);

module.exports = groupRouter;

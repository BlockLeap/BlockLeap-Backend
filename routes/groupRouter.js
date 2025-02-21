"use strict";

const groupRouter = require("express-promise-router")();

const GroupController = require("../controller/groupController");

const groupController = new GroupController();

groupRouter
  .post("/create", groupController.createGroup)
  .post("/register", groupController.resgisterUserInAGroup)
  .get("/all", groupController.getAllGroups)
  .get("/:Id", groupController.getGroupById)
  .get("/findByCode/:Id", groupController.getCodeById)
  .get("/:groupId/members", groupController.getGroupMembers)
  .get("/findByUser/:id", groupController.findByUser);

module.exports = groupRouter;
